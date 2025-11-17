import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useCategory from "../../Hook/useCategory";
import useProducts from "../../Hook/useProducts";
import ProductFilterCards from "./ProductFilterCards";
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function FilterProductPage() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(30);
    const [category] = useCategory();
    const [products] = useProducts();
    const [filterCategory, setFilterCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openFilter, setOpenFilter] = useState(false);

    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("category");

    // Products filter
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
        if (products?.length > 0) {
            let filtered = [...products];

            if (categoryName) {
                filtered = filtered.filter(p => p.category === categoryName);
                setSelectedCategory(categoryName);
            }
            else {
                setSelectedCategory("All");
            }
            setFilterCategory(filtered);
        }
    }, [products, categoryName]);

    // category
    const handleCategory = (selectedCategory) => {
        if (selectedCategory === "All") {
            setFilterCategory(products);
        } else {
            const filtered = products.filter(
                (product) => product.category === selectedCategory
            );
            setFilterCategory(filtered);
        }
        setSelectedCategory(selectedCategory);
    };

    // Reusable FilterContent
    const FilterContent = () => (
        <div className=" w-64 bg-white border-r border-gray-200 p-5 space-y-6">
            {/* Back button */}
            <p className="text-sm text-gray-500 mb-2">
                <Link to="/"><button className="text-gray-400">Home</button > </Link>&gt;{" "}
                <button className="font-medium text-gray-700">Shop</button >
            </p>

            {/* Price Filter */}
            <div>
                <h2 className="text-base font-semibold mb-3">Widget price filter</h2>

                <div className="flex items-center gap-2 text-sm">
                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500">Min price</label>
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm"
                        />
                    </div>
                    <span className="text-gray-500 mt-4">-</span>
                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500">Max price</label>
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm"
                        />
                    </div>
                </div>

                {/* Range slider */}
                <div className="mt-4">
                    <input
                        type="range"
                        min="0"
                        max="30"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full accent-gray-700"
                    />
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    Price: ${minPrice} — ${maxPrice}
                </p>

                <button className="mt-3 w-full bg-gray-900 hover:bg-gray-800 text-white py-1.5 rounded-md text-sm font-medium">
                    Filter
                </button>
            </div>

            <hr className="border-gray-200" />

            {/* Product Categories */}
            <div>
                <h2 className="text-base font-semibold mb-3">Product Categories</h2>
                <ul className="space-y-2 text-sm text-gray-700">

                    <li className="flex items-center justify-between">
                        <button
                            onClick={() => handleCategory("All")}
                            className={`px-2 py-1 rounded-md transition-all duration-200 ${selectedCategory === "All"
                                ? "bg-gray-900 text-white"
                                : "text-gray-700 hover:text-gray-900"
                                }`}
                        >
                            All
                        </button>
                        <span className="text-gray-400 text-xs font-bold">+</span>
                    </li>
                    {
                        category.map((cat, idx) => (
                            <li key={idx} className="flex items-center justify-between">
                                <button
                                    onClick={() => handleCategory(cat.name)}
                                    className={`px-2 py-1 rounded-md transition-all duration-200 ${selectedCategory === cat.name
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-700 hover:text-gray-900"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                                <span className="text-gray-400 text-xs font-bold">+</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <hr className="border-gray-200" />

            {/* Filter by Color */}
            <div>
                <h2 className="text-base font-semibold mb-3">Filter by Color</h2>
                <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-gray-700">Green</span>
                    </div>
                    <span className="text-sm text-gray-500">(1)</span>
                </label>
            </div>

            <hr className="border-gray-200" />

            {/* Filter by Brands */}
            <div>
                <h2 className="text-base font-semibold mb-3">Filter by Brands</h2>
                <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="accent-gray-800" />
                        <span className="text-sm text-gray-700">Fresh</span>
                    </div>
                    <span className="text-sm text-gray-500">(1)</span>
                </label>
            </div>

            <hr className="border-gray-200" />

            {/* Product Status */}
            <div>
                <h2 className="text-base font-semibold mb-3">Product Status</h2>
                <div className="space-y-2 text-sm text-gray-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="accent-gray-800" />
                        <span>In Stock</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="accent-gray-800" />
                        <span>On Sale</span>
                    </label>
                </div>
            </div>
        </div>
    );


    return (

        <div className="flex flex-col md:flex-row max-w-[1360px] mx-auto  md:gap-10 p-3">

            {/* dropdown mobile */}
            <div className="block md:hidden  pb-3">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 flex justify-between items-center ">

                    {/* Breadcrumb */}
                    <p className="text-[13px] text-gray-500 flex items-center gap-1">
                        <Link to="/" className="text-gray-400 hover:text-gray-600 transition">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="font-medium text-gray-700">Shop</span>
                    </p>

                    {/* Filter Button */}
                    <button
                        onClick={() => setOpenFilter(true)}
                        className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1 rounded-full shadow-md text-sm active:scale-95  transition duration-200">
                        <FiFilter className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>



            {/*mobile bar*/}
            {
                openFilter && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/40 z-40 md:hidden "
                            onClick={() => setOpenFilter(false)}
                        ></div>

                        <div
                            className={`fixed top-0 right-0  h-full bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${openFilter ? "translate-x-0" : "translate-x-full"}`}
                        >
                            <div className="p-4 border-b flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button onClick={() => setOpenFilter(false)} className="text-gray-500 text-xl"><IoMdClose /></button>
                            </div>

                            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
                                <FilterContent />
                            </div>
                        </div>
                    </>
                )
            }

            {/* distop bar */}
            <div className="hidden md:block w-64 bg-white border-r border-gray-200 p-5 space-y-6">
                <p className="text-sm text-gray-500 mb-2">
                    <Link to="/"><button className="text-gray-400">Home</button></Link> &gt;{" "}
                    <button className="font-medium text-gray-700">Shop</button>
                </p>
                <FilterContent />
            </div>


            <ProductFilterCards products={filterCategory}></ProductFilterCards>
        </div>
    );

}
export default FilterProductPage;