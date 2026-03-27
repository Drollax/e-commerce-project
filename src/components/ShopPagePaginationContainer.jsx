import React, { useState, useEffect } from 'react';
import Pagination from "./Pagination"
import ProductCard from "./ProductCard"

const ShopPagePaginationContainer = () => {
  // Your 36 images (12 images x 3 pages)
  const allImages = [
    '/HomePageImages/GraphicDesing1.jpg', '/HomePageImages/GraphicDesing2.jpg',
    '/HomePageImages/GraphicDesing3.jpg', '/HomePageImages/GraphicDesing4.jpg',
    '/HomePageImages/GraphicDesing5.jpg', '/HomePageImages/GraphicDesing6.jpg',
    '/HomePageImages/GraphicDesing7.jpg', '/HomePageImages/GraphicDesing8.jpg',
    '/HomePageImages/GraphicDesing9.jpg', '/HomePageImages/GraphicDesing10.jpg',
    '/HomePageImages/GraphicDesing11.jpg', '/HomePageImages/GraphicDesing12.jpg',
  ];
  
  // Triple the array to simulate 3 pages of content
  const products = [...allImages, ...allImages, ...allImages];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Responsive items per page logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) { // Mobile & Tablet
        setItemsPerPage(4);
      } else { // Desktop (lg)
        setItemsPerPage(12);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pagination Calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white">
      <div className="max-w-[1050px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-20">
          {currentItems.map((product, index) => (
            <ProductCard key={index} image={product} />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          totalPages={totalPages} 
        />
      </div>
    </div>
  );
}

export default ShopPagePaginationContainer;