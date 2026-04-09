import { LayoutGrid, List } from 'lucide-react';

const FilterBar = ({ filter, setFilter, sort, setSort, onFilterClick, total }) => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-[1050px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-sm font-bold text-[#737373]">
          Showing all {total} results
        </p>

        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-[#737373]">Views:</span>
          <button className="p-4 border border-[#ECECEC] rounded-[5px] text-[#252B42] hover:bg-[#FAFAFA]"><LayoutGrid size={16} /></button>
          <button className="p-4 border border-[#ECECEC] rounded-[5px] text-[#737373] hover:bg-[#FAFAFA]"><List size={16} /></button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Filter Input */}
          <input 
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search products..."
            className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm px-4 py-3 rounded-[5px] outline-none w-full md:w-40"
          />

          {/* Sort Dropdown */}
          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm text-[#737373] px-4 py-3 rounded-[5px] outline-none cursor-pointer"
          >
            <option value="">Sort By</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>

          <button 
            onClick={onFilterClick}
            className="bg-[#23A6F0] hover:opacity-90 text-white font-bold px-6 py-3 rounded-[5px] text-sm transition-all"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;