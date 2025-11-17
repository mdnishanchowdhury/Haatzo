import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import useCategory from "../../../Hook/useCategory";

function Category() {
    const [categories] = useCategory();
    const navigate = useNavigate();

    const handleCategoryClick = (catName) => {
        navigate(`/filterPage?category=${catName}`);
    };

    return (
        <div className="mt-12 w-full px-2 md:px-0">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                className="catagorySwiper"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    0: { slidesPerView: 4, spaceBetween: 8 },
                    480: { slidesPerView: 5, spaceBetween: 10 },
                    768: { slidesPerView: 6, spaceBetween: 12 },
                    1024: { slidesPerView: 7, spaceBetween: 15 },
                    1280: { slidesPerView: 9, spaceBetween: 10 },
                }}
            >
                {
                    categories.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => handleCategoryClick(item.name)}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
                                <img
                                    src={item.image} alt={item.name} className=" sm:w-[100px] md:w-[122px] sm:h-[100px] md:h-[122px] object-cover bg-[#F3F4F6] rounded-full shadow-sm transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
                                />
                                <h2 className="text-xs sm:text-sm md:text-sm font-semibold text-gray-800 text-center transition-all duration-300 ease-in-out group-hover:text-blue-600 group-hover:-translate-y-1">
                                    {item.name}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <style jsx>
                {`
        .catagorySwiper .swiper-pagination {
          position: relative !important;
          margin-top: 10px;
          bottom: auto !important;
        }`}
            </style>
        </div>
    );
}
export default Category;