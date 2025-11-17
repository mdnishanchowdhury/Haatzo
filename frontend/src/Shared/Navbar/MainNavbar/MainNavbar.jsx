import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineMenu, MdFavorite, MdShoppingCart } from "react-icons/md";
import SearchBar from "./SearchBar";
import useCategory from "../../../Hook/useCategory";

function MainNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [category] = useCategory();
    const [activeCategory, setActiveCategory] = useState("");
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);
    const navigate = useNavigate();


    const cartCount = 8;


    // category handler
    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        setCategoryOpen(false);
        navigate(`/filterPage?category=${cat}`);
    }

    // navbar button css
    const linkClass =
        "text-[15px] font-semibold transition-all duration-300 hover:text-blue-600 hover:-translate-y-0.5";
    const activeClass = "text-blue-600 font-bold";

    const links = (
        <>
            <li> <NavLink to="/"
                className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
                Home
            </NavLink></li>

            {/* Categories Dropdown */}
            <li className="relative group">
                <span
                    className={linkClass + " cursor-pointer"} onClick={() => setCategoryOpen(!categoryOpen)}>
                    Categories
                </span>
                <ul className={`absolute left-0 top-full bg-white p-2 rounded shadow-lg min-w-[200px] z-50 ${categoryOpen ? "block" : "hidden"} lg:group-hover:block`}>
                    {
                        category.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleCategoryClick(item.name)}
                                    className={`block px-2 py-1 w-full text-left hover:bg-gray-100 ${activeCategory === item.name ? "text-blue-600 font-bold" : ""
                                        }`}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </li>

            <li><NavLink to="/auth"
                className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
                Dashboard
            </NavLink></li>

            <li> <NavLink to="/blog"
                className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)} >
                Blog
            </NavLink> </li>

            <li> <NavLink to="/contact"
                className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}  >
                Contact
            </NavLink></li>

            <li> <NavLink to="/trending"
                className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
                Trending Products
            </NavLink></li>
        </>
    );

    useEffect(() => {
        const handleScroll = () => setFixed(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full border-y border-gray-200 transition-all duration-300 bg-white font-inter ${isFixed ? "fixed top-0 left-0 z-50 mt-0" : "relative"}`}>
            <div className="h-16 flex items-center justify-between px-4 md:px-20">

                {/* Left: Logo + Mobile Menu */}
                <div className="flex items-center gap-1 md:gap-4">
                    <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <MdOutlineMenu className="w-6 h-6" />
                    </button>
                    <img src="https://i.ibb.co.com/5X0NF1qH/banner-Logo.png" className="w-30 h-28 object-cover" alt="Logo" />
                </div>

                {/* Center: Desktop Links */}
                <ul className="hidden lg:flex space-x-6 font-medium text-gray-700">
                    {links}
                </ul>

                {/* Right: Actions */}
                <div className="flex items-center gap-1 md:gap-4">
                    <SearchBar />

                    <button className="btn btn-ghost btn-circle relative">
                        <MdFavorite className="w-6 h-6 text-red-500" />
                    </button>

                    {/* Cart */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <MdShoppingCart className="w-5 h-5" />
                                <span className="badge badge-sm indicator-item">{cartCount}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-50 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{cartCount} Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li><a className="justify-between text-[15px] font-normal">Profile</a></li>
                            <li><a className=" text-[15px] font-normal">Settings</a></li>
                            <li><a className=" text-[15px] font-normal">Logout</a></li>
                        </ul>
                    </div>

                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
                        <Link to="/signUp" className="btn btn-sm btn-primary">SignUp</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <div className="lg:hidden border-t border-gray-200 bg-white">
                        <ul className="p-4 space-y-2">
                            {links}
                        </ul>
                    </div>
                )
            }
        </nav>
    );
}

export default MainNavbar;
