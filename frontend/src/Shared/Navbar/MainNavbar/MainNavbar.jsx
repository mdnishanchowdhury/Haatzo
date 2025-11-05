import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu, MdFavorite, MdShoppingCart } from "react-icons/md";
import SearchBar from "./SearchBar";

function MainNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);
    const cartCount = 8;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/auth" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        { name: "Trending Products", path: "/trending" },
    ];

    useEffect(() => {
        const handleScroll = () => setFixed(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = "text-[15px] font-semibold transition-all duration-300 hover:text-blue-600 hover:-translate-y-0.5";
    const baseClass = "text-[15px] font-semibold transition-all duration-300 hover:text-blue-600 hover:-translate-y-0.5";
    const activeClass = "text-blue-600 font-bold";

    return (
        <nav className={`w-full border-y border-gray-200 transition-all duration-300 bg-white font-inter ${isFixed ? "fixed top-0 left-0 z-50 mt-0" : "relative"
            }`}>
            <div className="h-16 flex items-center justify-between px-4 md:px-20">

                {/* Left: Logo + Mobile Menu */}
                <div className="flex items-center gap-1 md:gap-4">
                    <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <MdOutlineMenu className="w-6 h-6" />
                    </button>
                    {/* <Link to="/" className="text-xl font-bold">HaatZo</Link> */}
                    <img src="https://i.ibb.co.com/5X0NF1qH/banner-Logo.png" className="w-30 h-28 object-cover" alt="" />
                </div>

                {/* Center: Desktop Links */}
                <ul className="hidden lg:flex space-x-6 font-medium text-gray-700">
                    {
                        navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* Right: Actions */}
                <div className="flex items-center gap-1 md:gap-4">

                    {/* Search */}
                    <SearchBar />

                    {/* Wishlist / Love */}
                    <button className="btn btn-ghost btn-circle relative">
                        <MdFavorite className="w-6 h-6 text-red-500" />
                    </button>

                    {/* Cart dropdown */}
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

                    {/* Avatar dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">Profile <span className="badge">New</span></a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                    {/* Login / SignUp */}
                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
                        <Link to="/signUp" className="btn btn-sm btn-primary">SignUp</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <ul className="p-4 space-y-2">
                        {
                            navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default MainNavbar;
