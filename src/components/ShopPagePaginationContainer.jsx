import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts, setLimit } from '../store/actions/productActions';
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import FilterBar from './FilterBar';

const ShopPagePaginationContainer = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const { productList, fetchState, total, limit } = useSelector((state) => state.product);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const loadProducts = () => {
    const offset = (currentPage - 1) * limit;
    dispatch(fetchProducts(categoryId, filter, sort, limit, offset));
  };

  useEffect(() => {
    loadProducts();
  }, [dispatch, categoryId, sort, currentPage, limit]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, sort, filter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(total / limit);

  const handleLimitChange = (newLimit) => {
  dispatch(setLimit(newLimit));
  setCurrentPage(1); // reset page when limit changes
};

  return (
    <div className="bg-white min-h-[400px]">
      <FilterBar 
        filter={filter} 
        setFilter={setFilter} 
        sort={sort} 
        setSort={setSort} 
        onFilterClick={loadProducts}
        total={total}
        limit={limit}
        setLimit={handleLimitChange}
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
              {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
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
};

export default ShopPagePaginationContainer;