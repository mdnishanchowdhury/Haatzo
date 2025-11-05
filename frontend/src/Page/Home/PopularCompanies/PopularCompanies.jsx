import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const companies = [
    {
        name: "Machic",
        rating: 4.1,
        description: "Good quality product can only be found in good stores",
    },
    {
        name: "Blonwe",
        rating: 3.7,
        description: "All kinds of grocery products are available in our store.",
    },
    {
        name: "Bacola",
        rating: 3.5,
        description: "Our work can definitely support the local economy.",
    },
    {
        name: "Bacola",
        rating: 3.5,
        description: "Our work can definitely support the local economy.",
    },
    {
        name: "Bacola",
        rating: 3.5,
        description: "Our work can definitely support the local economy.",
    },
    {
        name: "Bacola",
        rating: 3.5,
        description: "Our work can definitely support the local economy.",
    },
    {
        name: "Medibazar",
        rating: 3.0,
        description: "Save your time – save your money – shop from our grocery store.",
    },
];

export default function PopularCompanies() {
    return (
        <div className="w-full mx-auto py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-[18px] font-bold">Popular Companies</h2>
                    <p className="text-[8px] md:text-sm text-[#9CA3AF] font-normal">
                        Some of the new products arriving this weeks
                    </p>
                </div>
                <button className="text-sm text-gray-700 border px-4 py-1 rounded-full hover:bg-gray-100 transition">
                    View All →
                </button>
            </div>

            {/* Swiper */}
            <Swiper
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="mySwiper"
            >
                {
                    companies.map((company, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
                                {/* Profile */}
                                <div className="flex items-center mb-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                        <img
                                            src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-[15px] font-bold text-gray-800">
                                            {company.name}
                                        </h3>
                                        <p className="text-xs font-normal text-[#6B7280]">Featured</p>
                                        <div className="flex items-center">
                                            <Rating style={{ maxWidth: 80 }} value={company.rating} readOnly />
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600">{company.description}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
