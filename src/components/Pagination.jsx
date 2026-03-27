const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-12 mb-20 font-montserrat px-4">
      <div className="flex border border-[#E8E8E8] rounded-md overflow-hidden shadow-sm max-w-full">
        
        {/* Prev Button */}
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 lg:px-6 py-4 lg:py-6 bg-[#F3F3F3] text-muted-grey font-bold border-r border-[#E8E8E8] hover:bg-gray-200 disabled:opacity-50 transition-colors text-xs lg:text-base"
        >
          Prev
        </button>

        {/* Dynamic Page Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 lg:px-5 py-4 lg:py-6 font-bold border-r border-[#E8E8E8] transition-colors text-xs lg:text-base ${
              currentPage === i + 1 
              ? "bg-primary-blue text-white" 
              : "bg-white text-primary-blue hover:bg-light-grey"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 lg:px-6 py-4 lg:py-6 bg-white text-primary-blue font-bold hover:bg-light-grey disabled:opacity-50 transition-colors text-xs lg:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination