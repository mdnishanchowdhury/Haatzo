import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        image: "https://i.ibb.co.com/Q3SBVV6D/banner1.jpg",
        title: 'Fresh Groceries Delivered to Your Door',
        description: "Explore amazing discounts on fresh fruits, vegetables, and daily essentials. Grab them before they’re gone!",
        price: '$59.99',
        discountPrice: '$49.99'
    },
    {
        image: "https://i.ibb.co.com/d0RZSnD2/banner2.jpg",
        title: 'Start Your Day with Organic Goodness',
        description: "Special offers on organic breakfast items to kickstart your mornings healthily and deliciously.",
        price: '$29.99',
        discountPrice: '$24.99'
    },
    {
        image: "https://i.ibb.co.com/R4jDnZ9y/banner3.jpg",
        title: 'Quality Products at Unbeatable Prices',
        description: "Shop the best deals on grocery essentials and enjoy top quality without breaking the bank.",
        price: '$65.00',
        discountPrice: '$39.99'
    },
];


function Banner() {
    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="h-[560px] bg-cover bg-center relative flex items-center px-6"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="relative w-[580px] text-black justify-evenly px-6 md:px-13">
                            <h2 className="mb-5 text-5xl font-bold">{slide.title}</h2>
                            <p className="mb-5">{slide.description}</p>

                            <div className='flex gap-5 items-center'>
                                <button className="bg-[#634C9F] hover:bg-blue-700 px-6 py-2 rounded text-white font-bold text-[14px]">
                                    Shop Now
                                </button>
                                <div>
                                    <h2 className=' text-red-500 text-[28px] font-bold'>{slide.discountPrice} <span className="line-through text-black text-xl font-medium ml-2">{slide.price}</span></h2>
                                    <p className='text-xs font-normal text-[#030712]'>Don't miss this limited time offer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Banner;
