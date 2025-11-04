import { useState } from "react";
import { MdSearch } from "react-icons/md";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
    const filtered = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative">
            {/* Search Icon */}
            <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all shadow-sm"
            >
                <MdSearch className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pop-up Search Bar */}
            {
                showSearch && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 transition-all duration-300">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        />

                        {
                            query && filtered.length > 0 && (
                                <ul className="mt-2 max-h-56 overflow-y-auto rounded-xl">
                                    {filtered.map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-yellow-50 cursor-pointer transition-colors"
                                            onClick={() => setQuery(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default SearchBar;
