import { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);
    // dark mode toggle
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "light" : "synthwave"
        );
    };
    return (
        <label className="swap swap-rotate cursor-pointer">
            {/* dark mode */}
            <input type="checkbox" onChange={toggleTheme} checked={darkMode} />

            {/* Sun icon */}
            <MdLightMode className="swap-off h-7 w-7 text-yellow-500" />

            {/* Moon icon */}
            <MdNightlight className="swap-on h-7 w-7 text-blue-500" />
        </label>
    )
}

export default DarkMode;