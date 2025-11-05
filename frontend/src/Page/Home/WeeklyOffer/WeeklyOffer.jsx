function WeeklyOffer() {
    const offers = [
        {
            id: 1,
            img: "https://i.ibb.co/SDMnVw5j/weekly1.jpg",
            title: "Grocery store with different treasures",
            desc: "We have prepared special discounts for you on grocery products...",
            label: "Only This Week",
        },
        {
            id: 2,
            img: "https://i.ibb.co.com/fz5tTzJM/weekly2.jpg",
            title: "Fresh and organic fruits for your health",
            desc: "Don’t miss our limited-time offers on organic and seasonal fruits!",
            label: "Special Offer",
        },
    ];

    return (
        <div className="mt-12 w-full px-2 md:px-0">
            <h2 className="text-xl font-bold pb-6">Weekly Offers</h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="h-[200px] md:h-[276px] w-full bg-cover bg-center relative flex items-center px-4 md:px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                            style={{ backgroundImage: `url(${offer.img})` }}
                        >
                            <div className="relative max-w-sm text-black space-y-2 sm:space-y-3 p-3 rounded-md">
                                <div className="bg-[#FFEDD5] rounded-full px-3 py-1 w-fit">
                                    <h2 className="text-[10px] sm:text-xs font-semibold text-[#7C2D12]">
                                        {offer.label}
                                    </h2>
                                </div>

                                <h2 className="text-lg sm:text-xl md:text-3xl font-bold leading-snug">
                                    {offer.title}
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base">
                                    {offer.desc}
                                </p>

                                <button className="bg-[#634C9F] hover:bg-blue-700 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded text-white font-bold text-xs sm:text-sm md:text-[14px] transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default WeeklyOffer;
