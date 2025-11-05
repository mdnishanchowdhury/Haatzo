import { useEffect, useState } from "react";
import useProducts from "../../../Hook/useProducts";
import DiscountCards from "./DiscountCards";

function DiscountOffers() {
    const [items, setItems] = useState([]);
    const [products] = useProducts();

    useEffect(() => {
        if (products.length > 0) {
            const fiftyPercentProducts = products.filter(
                (item) => Number(item.discount) === 50
            );
            setItems(fiftyPercentProducts.slice(0, 6));
        }
    }, [products]);

    return (
        <div className="w-full px-2 md:px-0 mt-7">
            {/* Banner Section */}
            <section className="relative bg-[#FFF4E5] h-[85px] rounded-lg flex flex-col md:flex-row items-center justify-between px-4 md:px-6 overflow-hidden">
                <h2 className="absolute font-extrabold text-indigo-500 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[clamp(80px,15vw,180px)]">
                    %50
                </h2>

                <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <h2 className="text-orange-600 font-semibold text-base md:text-lg">
                        Big Discount on Fresh Groceries
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Save up to 50% on your daily essentials today!
                    </p>
                </div>

                <div className="relative z-10 flex-1 flex justify-center md:justify-end">
                    <img
                        src="https://i.ibb.co/4ZzZFHZ8/b3fa2d58b8ad747c3d918d872ba67a3c99d76295.png"
                        alt="Discount banner"
                        className="w-full sm:max-w-[300px] md:max-w-[400px] h-auto object-contain"
                    />
                </div>
            </section>

            {/* Header */}
            <div className="flex items-center justify-between my-5">
                <div>
                    <h2 className="text-[18px] font-bold">Best Sellers</h2>
                    <p className="text-[8px] md:text-sm text-[#9CA3AF] font-normal">
                        Don’t miss this opportunity — special discount for this week only!
                    </p>
                </div>
                <button className="text-sm text-gray-700 border px-4 py-1 rounded-full hover:bg-gray-100 transition">
                    View All →
                </button>
            </div>

            {/* Product Cards */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    items.length > 0 ? (
                        items.map((item) => <DiscountCards key={item._id} item={item} />)
                    ) : (
                        <p className="col-span-full text-center mt-3">
                            <span className="loading loading-spinner loading-xl"></span>
                        </p>
                    )
                }
            </div>
        </div>
    );
}

export default DiscountOffers;
