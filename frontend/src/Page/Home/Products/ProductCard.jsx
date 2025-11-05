import { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const discountPrice = (
    product.price - (product.price * product.discount) / 100
  ).toFixed(1);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={`${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
        }`}
    />
  ));

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-3 relative bg-white ">
      {/* Discount badge */}
      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-red-600 text-white text-xs font-bold animate-pulse">
        {product.discount}% OFF
      </div>

      {/* Wishlist icon */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-transform transform hover:scale-110 z-10"
      >
        {isFavorite ? <IoHeart size={24} className="text-red-500" /> : <IoHeartOutline size={24} />}
      </button>

      {/* Product Image */}
      <div className="flex justify-center mb-3">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-28 w-auto object-contain"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-medium text-gray-700 mb-1">{product.name}</h3>

      {/* Rating */}
      <div className="flex items-center text-yellow-400 mb-1">
        {stars}
        <span className="text-gray-500 text-sm ml-1">
          ({product.reviewsCount})
        </span>
      </div>

      {/* Price */}
      <div className="mb-2">
        <span className="text-xl font-semibold text-red-600 mr-2">
          ${discountPrice}
        </span>
        <span className="text-gray-400 line-through text-sm">
          ${product.price}
        </span>
      </div>

      {/* Add to Cart or Stock Out */}
      {product.quantity === "0" ? (
        <button className="flex items-center justify-center w-full bg-green-600 text-white text-sm font-medium py-2 rounded-md cursor-not-allowed opacity-70">
          Stock Out
        </button>
      ) : (
        <button className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-md transition-all">
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
