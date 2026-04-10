import { LayoutGrid, List } from 'lucide-react';

const FilterBar = ({ 
  filter, setFilter, 
  sort, setSort, 
  onFilterClick, 
  total, 
  limit, setLimit,
  view, setView // New props
}) => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-[1050px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        <div className="flex justify-between items-center w-full">
          <p className="text-sm font-bold text-[#737373]">
            Showing all {total} results
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm font-bold text-[#737373]">Views:</span>
            
            {/* Grid Button */}
            <button 
              onClick={() => setView('grid')}
              className={`p-3 md:p-4 border rounded-[5px] transition-colors ${
                view === 'grid' 
                ? 'bg-[#23A6F0] text-white border-[#23A6F0]' 
                : 'text-[#252B42] border-[#ECECEC] hover:bg-[#FAFAFA]'
              }`}
            >
              <LayoutGrid size={16} />
            </button>

            {/* List Button */}
            <button 
              onClick={() => setView('list')}
              className={`p-3 md:p-4 border rounded-[5px] transition-colors ${
                view === 'list' 
                ? 'bg-[#23A6F0] text-white border-[#23A6F0]' 
                : 'text-[#737373] border-[#ECECEC] hover:bg-[#FAFAFA]'
              }`}
            >
              <List size={16} />
            </button>
            
          </div>
        </div>

        {/* ... (rest of your search/sort/filter code) ... */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-4">
          <input 
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search products..."
            className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm px-4 py-3 rounded-[5px] outline-none w-full md:w-48 lg:w-64"
          />

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto">
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#F9F9F9] border border-[#DDDDDD] text-sm text-[#737373] px-3 py-3 rounded-[5px] outline-none cursor-pointer flex-grow sm:flex-grow-0"
            >
              <option value="">Sort By</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>

            <div className="flex items-center gap-2 bg-[#F9F9F9] border border-[#DDDDDD] px-3 py-[10px] rounded-[5px]">
              <span className="text-xs font-bold text-[#737373]">Show:</span>
              <select
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                className="bg-transparent text-sm text-[#737373] outline-none cursor-pointer"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
              </select>
            </div>

            <button 
              onClick={onFilterClick}
              className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white font-bold px-6 py-3 rounded-[5px] text-sm transition-all flex-grow sm:flex-grow-0"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;