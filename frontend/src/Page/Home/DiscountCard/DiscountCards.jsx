import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";

function DiscountCards({ item }) {
    const { _id, thumbnail, name, rating, price, reviewsCount, discount, quantity, details } = item;
    const { specialOfferCountdown } = details || {};

    const [isFavorite, setIsFavorite] = useState(false);

    const getTotalSeconds = (countdown) => {
        if (countdown && countdown.length === 4) {
            const [days, hours, minutes, seconds] = countdown.map(Number);
            return days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
        }
        return 0;
    };

    const [timeLeft, setTimeLeft] = useState(getTotalSeconds(specialOfferCountdown));

    useEffect(() => {
        setTimeLeft(getTotalSeconds(specialOfferCountdown));
    }, [specialOfferCountdown]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const days = Math.floor(time / (3600 * 24));
        const hours = Math.floor((time % (3600 * 24)) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return [days, hours, minutes, seconds].map(v => String(v).padStart(2, "0"));
    };

    const [days, hours, minutes, seconds] = formatTime(timeLeft);

    const discountPercent = parseFloat(discount) || 0;
    const discountedPrice = +(price - (price * discountPercent) / 100).toFixed(2);

    const stockStatus = quantity > 0 ? "In Stock" : "Out of Stock";
    const stockColor = quantity > 0 ? "text-green-600" : "text-red-600";

    return (
        <div className="w-full h-[266px] border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">

            <div className="flex gap-2">
                <div>
                    {/* Product Image */}
                    <Link to={`/detail/${_id}`} className="block p-4">
                        <img
                            src={thumbnail}
                            alt={name}
                            className="w-[180px] h-[180px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>

                <div className="pt-6">

                    {/* Discount Badge */}
                    {
                        discountPercent > 0 && timeLeft > 0 && (
                            <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-red-600 text-white text-xs font-bold animate-pulse">
                                {discountPercent}% OFF
                            </div>
                        )}

                    {/* Favorite Button */}
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-transform transform hover:scale-110 z-10"
                    >
                        {isFavorite ? <IoHeart size={24} className="text-red-500" /> : <IoHeartOutline size={24} />}
                    </button>



                    {/* Product Info */}
                    <div className="px-4 pb-4">
                        <h2 className="mt-3 text-sm font-medium truncate">{name}</h2>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-2">
                            <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
                            <span className="text-gray-400 text-xs">({reviewsCount})</span>
                        </div>

                        {/* Prices */}
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[#DC2626] font-bold text-lg">${discountedPrice}</span>
                            {discountPercent > 0 && (
                                <span className="text-gray-400 line-through text-sm">${price}</span>
                            )}
                        </div>

                        {/* Stock */}
                        <div className="mt-2 mb-2">
                            <span className={`text-sm font-semibold ${stockColor}`}>{stockStatus}</span>
                        </div>

                        {/* Add to Cart */}
                        <Link to={`/detail/${_id}`} >
                            <button class="flex items-center justify-between w-48 px-4 py-2  border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition">
                                <span>Add to cart</span>
                                <span class="text-xl">+</span>
                            </button>

                        </Link>
                    </div>
                </div>

            </div>
            {/* Countdown */}
            {
                timeLeft > 0 && (
                    <div className=" pl-5 flex items-center gap-1 text-xs text-gray-600 flex-wrap">
                        {
                            [days, hours, minutes, seconds].map((t, i) => (
                                <span key={i} className="bg-gray-100 px-2 py-1 rounded-md font-semibold">
                                    {t}
                                </span>
                            ))
                        }
                        <p className="text-xs font-normal text-[#9CA3AF]">Remains until the end of the offer</p>
                    </div>
                )
            }
        </div>
    );
}
export default DiscountCards;