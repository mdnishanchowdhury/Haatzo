function Language() {
    return (

        < div className="mt-2 md:mt-0" >
            {/* Language selection */}
            <select
                className="opacity-80 font-medium text-xs text-[#6B7280] font-inter border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
            </select>
        </div >
    )
}

export default Language;