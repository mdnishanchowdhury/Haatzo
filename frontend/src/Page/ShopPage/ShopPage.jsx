import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import ShopSidebar from "./ShopSidebar";

// const product = [
//     {
//         id: 1,
//         name: "Yellow Potatoes Whole Fresh, 5lb Bag",
//         price: 0.5,
//         oldPrice: 1.89,
//         discount: 75,
//         image: "https://i.ibb.co/hMMTkhF/potato.png",
//     },
//     {
//         id: 2,
//         name: "Large Bagged Oranges",
//         price: 0.89,
//         oldPrice: 1.78,
//         discount: 50,
//         image: "https://i.ibb.co/x6CGm6v/orange.png",
//     },
//     {
//         id: 3,
//         name: "Strawberries – 1lb",
//         price: 1.5,
//         oldPrice: 2.15,
//         discount: 31,
//         image: "https://i.ibb.co/FxvGvRz/strawberry.png",
//     },
//     {
//         id: 4,
//         name: "Peach – each",
//         price: 0.75,
//         oldPrice: 1.75,
//         discount: 58,
//         image: "https://i.ibb.co/4djkHqC/peach.png",
//     },
// ];

export default function ShopPage({products}) {
console.log("product",products)
    return (
        <div className="w-full">
            {/* Sidebar */}
            {/* <ShopSidebar></ShopSidebar> */}

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Banner */}
                <div
                    className="rounded-2xl p-8 h-[276px] flex justify-between items-center bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/Hp2Xt99T/banner1.jpg")`,
                    }}
                >
                    <div>
                        <p className="text-sm text-orange-600 font-semibold">
                            Only This Week
                        </p>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Grocery store with different treasures
                        </h1>
                        <p className="text-gray-600 mt-2">
                            We have prepared special discounts for you on grocery products.
                        </p>
                        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-full">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white rounded-xl shadow hover:shadow-md transition p-4 relative"
                        >
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                {item.discount}%
                            </span>
                            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
                                <FaHeart />
                            </button>

                            <img
                                src={item.thumbnail}
                                alt={item.thumbnail}
                                className="w-full h-36 object-contain mb-3"
                            />
                            <h3 className="text-sm font-medium text-gray-700 h-10">
                                {item.name}
                            </h3>

                            {/* <div className="mt-2 flex items-center gap-2">
                                <span className="text-lg font-semibold text-green-600">
                                    ${item.price.toFixed(2)}
                                </span>
                                <span className="text-sm line-through text-gray-400">
                                    ${item.oldPrice.toFixed(2)}
                                </span>
                            </div> */}

                            <p className="text-xs text-green-600 font-medium mt-1">
                                IN STOCK
                            </p>

                            <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                <FaShoppingCart /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
