import { LayoutGrid, List } from 'lucide-react';

const FilterBar = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-[1050px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Results Count */}
        <p className="text-sm font-bold text-muted-grey">
          Showing all 12 results
        </p>

        {/* View Toggles */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-muted-grey">Views:</span>
          <button className="p-4 border border-[#ECECEC] rounded-[5px] text-dark-blue hover:bg-light-grey transition-colors">
            <LayoutGrid size={16} />
          </button>
          <button className="p-4 border border-[#ECECEC] rounded-[5px] text-muted-grey hover:bg-light-grey transition-colors">
            <List size={16} />
          </button>
        </div>

        {/* Controls: Dropdown + Button */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <select className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm text-muted-grey px-4 py-3 rounded-[5px] outline-none cursor-pointer flex-grow md:flex-grow-0">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <button className="bg-primary-blue hover:opacity-90 text-white font-bold px-6 py-3 rounded-[5px] text-sm transition-all whitespace-nowrap">
            Filter
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;