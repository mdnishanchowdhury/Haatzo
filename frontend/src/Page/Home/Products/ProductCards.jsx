import ProductCard from "./ProductCard";

function ProductCards({ items }) {
  return (
    <div className="flex justify-center items-center px-2 sm:px-4 md:px-6 lg:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
        {
          items && items.length > 0 ? (
            items.map((item) => (
              <ProductCard key={item._id || item.id} product={item} />
            ))
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

export default ProductCards;
