const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-12 mb-20 font-montserrat px-4">
      <div className="flex border border-[#E8E8E8] rounded-md overflow-hidden shadow-sm max-w-full">

        {/* Prev */}
        <button 
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 lg:px-6 py-4 lg:py-6 bg-[#F3F3F3] font-bold border-r border-[#E8E8E8] disabled:opacity-50"
        >
          Prev
        </button>

        {/* Pages */}
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 lg:px-5 py-4 lg:py-6 font-bold border-r ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button 
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 lg:px-6 py-4 lg:py-6 bg-white font-bold disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;