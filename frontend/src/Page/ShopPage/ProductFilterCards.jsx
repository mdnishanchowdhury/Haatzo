import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function ProductFilterCards({ products }) {
    const [visibleCount, setVisibleCount] = useState(20);
    const [loading, setLoading] = useState(false);
  

    const handleLoadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleCount((prev) => prev + 20);
            setLoading(false);
        }, 1000);

    }

    return (
        <div className="w-full">

            {/* filter bar */}
            <div className="flex-1 ">
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
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        products.slice(0, visibleCount).map((item) => (
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

                                <p className="text-xs text-green-600 font-medium mt-1">
                                    IN STOCK
                                </p>

                                <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                    <FaShoppingCart /> Add to Cart
                                </button>
                            </div>
                        ))}
                </div>
            </div>

            {
                visibleCount < products.length && (
                    <div className="w-full mx-auto text-center py-5">
                        <button
                            onClick={handleLoadMore}
                            disabled={loading}
                            className="btn btn-wide bg-blue-500 text-white">
                            {loading ? "loading.." : "Load More"}
                        </button>
                    </div>
                )
            }
        </div>
    );
}
export default ProductFilterCards;