import { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../Hook/useCategory";
import useProducts from "../../Hook/useProducts";
import ShopPage from "./ShopPage";

export default function ShopSidebar() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(30);
    const [category] = useCategory();
    const [products] = useProducts();
    const [filterCategory, setFilterCategory] = useState([]);

    // console.log(products);

    const handleCategory = (selectedCategory) => {

        const ProductFilter = products.filter((product) => product.category === selectedCategory)
        setFilterCategory(ProductFilter);
    }

    return (

        <div className=" flex max-w-[1360px] mx-auto ">

            <aside className="w-64 bg-white border-r border-gray-200 p-5 space-y-6">
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
                        {
                            category.map((cat, idx) => (
                                <li key={idx} className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                      
                                        <button onClick={() => handleCategory(cat.name)}>{cat.name}</button>
                                    </label>
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
            </aside>

            <ShopPage products={filterCategory}></ShopPage>
        </div>
    );

}
