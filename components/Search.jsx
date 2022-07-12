import React from "react";
import { MdOutlineShortText } from "react-icons/md";

const Search = ({ input, setInput }) => {
  return (
    <div className="bg-[#1a1a1a] max-w-[1150px] flex items-center py-1.5 px-5 pr-8 border-2 border-[#333333] rounded-full overflow-hidden">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />

      <input
        className="bg-transparent text-sm text-white lg:w-full border-none outline-none placeholder:text-[#fafafa] focus:ring-0"
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-1 pr-5 border-r-2 border-[#333]">
          <button className="searchBtn">Minimal</button>

          <button className="searchBtn">House</button>

          <button className="searchBtn">Minimal</button>
        </div>

        <div className="flex items-center space-x-1.5 text-[#CECECE]">
          <MdOutlineShortText className="text-2xl" />

          <p className="text-sm font-medium">Filters</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
