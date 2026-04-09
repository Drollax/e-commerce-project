import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../store/actions/productActions';
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import FilterBar from './FilterBar';

const ShopPagePaginationContainer = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams(); // URL: /shop/:gender/:name/:categoryId
  
  const { productList, fetchState, total } = useSelector((state) => state.product);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Triggered when Filter Button is clicked or Category/Sort changes
  const loadProducts = () => {
    dispatch(fetchProducts(categoryId, filter, sort));
  };

  // Effect for Category and Sort changes (Automatic reload)
  useEffect(() => {
    loadProducts();
  }, [dispatch, categoryId, sort]);

  // Handle Resize for items per page
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 4 : 12);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const currentItems = productList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-white min-h-[400px]">
      <FilterBar 
        filter={filter} 
        setFilter={setFilter} 
        sort={sort} 
        setSort={setSort} 
        onFilterClick={loadProducts}
        total={total}
      />

      <div className="max-w-[1050px] mx-auto px-8 py-12">
        {fetchState === "FETCHING" ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
            <p className="mt-4 text-[#737373] font-bold">Loading Products...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
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