import { useEffect, useState, useMemo } from "react";

function TopBar() {
    
    const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

    const endDate = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date;
    }, []);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const diff = endDate - now;
            if (diff <= 0) {
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
                return;
            }

            const format = (num) => String(num).padStart(2, "0");
            setTimeLeft({
                days: format(Math.floor(diff / (1000 * 60 * 60 * 24))),
                hours: format(Math.floor((diff / (1000 * 60 * 60)) % 24)),
                minutes: format(Math.floor((diff / (1000 * 60)) % 60)),
                seconds: format(Math.floor((diff / 1000) % 60)),
            });
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <div className="bg-[#634C9F] w-full h-14 md:h-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between px-4 md:px-48  text-white text-xs">

            <span className="text-[10px] md:text-xs font-semibold font-inter text-center md:text-left mb-1 md:mb-0">
                FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
            </span>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-1 justify-center md:justify-end">
                <span className="opacity-80 text-xs font-normal font-inter">Until the end of the sale:</span>
                {["days", "hours", "minutes", "seconds"].map((key) => (
                    <span key={key} className="flex items-center gap-2">
                        <span className="font-bold text-xs font-inter">{timeLeft[key]}</span>
                        <span className="opacity-80 text-xs font-normal font-inter">{key}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TopBar;
