import { Link } from "react-router-dom";
import useProducts from "../../../Hook/useProducts";
import ProductCards from "./ProductCards";

function Products() {
  const [products] = useProducts();

  const displayedProducts = products.slice(0, 12);

  return (
    <div className="mt-2 w-full px-2 md:px-0">
      {/* Header */}
      <div className="flex items-center justify-between my-5">
        <div>
          <h2 className="text-[18px] font-bold">Category Products</h2>
          <p className="text-[8px] md:text-sm text-[#9CA3AF] font-normal">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <Link to="shopPage">
          <button
            className="text-sm text-gray-700 border px-4 py-1 rounded-full hover:bg-gray-100 transition"
          >
            View All →
          </button>
        </Link>
      </div>

      <ProductCards items={displayedProducts} />
    </div>
  );
}

export default Products;
