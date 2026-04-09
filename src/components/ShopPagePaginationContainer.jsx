import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import FilterBar from './FilterBar';

const ShopPagePaginationContainer = () => {
  const dispatch = useDispatch();
  
  // Get live data and fetch state from Redux
  const { productList, fetchState } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    // Fetch products from the API on mount
    dispatch(fetchProducts());

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else { 
        setItemsPerPage(12);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  // Logic now uses productList from Redux instead of static array
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white min-h-[400px]">
      <FilterBar />

      <div className="max-w-[1050px] mx-auto px-8 py-12">
        {/* --- Spinner Implementation --- */}
        {fetchState === "FETCHING" ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
            <p className="mt-4 text-[#737373] font-bold">Loading Products...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-20">
              {currentItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {productList.length > 0 && (
              <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                totalPages={totalPages} 
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ShopPagePaginationContainer;