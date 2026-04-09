import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import ProductDescription from '../components/ProductDescription';
import ProductCard from '../components/ProductCard';
import BrandLogos from '../components/BrandLogos';
import { fetchProductDetail } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shopActions';

const colors = [
  { name: 'blue', bgColor: 'bg-sky-500' },
  { name: 'green', bgColor: 'bg-emerald-500' },
  { name: 'orange', bgColor: 'bg-orange-500' },
  { name: 'dark', bgColor: 'bg-slate-800' },
];

function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  
  // Get data from your Redux store
  const { selectedProduct, fetchState, productList } = useSelector((state) => state.product);
  const [currentImageIndex, setCurrentImageIndexIndex] = useState(0);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  }

  // Fetch product on mount
  useEffect(() => {
    dispatch(fetchProductDetail(productId));
    window.scrollTo(0, 0); // Scroll to top when entering detail page
  }, [dispatch, productId]);

  const prevImage = () => {
    const images = selectedProduct?.images || [];
    setCurrentImageIndexIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    const images = selectedProduct?.images || [];
    setCurrentImageIndexIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Loading Spinner as requested
  if (fetchState === "FETCHING") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
        <p className="mt-4 font-bold text-stone-500">Loading Product Details...</p>
      </div>
    );
  }

  // Fallback if no product is found
  if (!selectedProduct) return null;

  return (
    <>
    <section className="bg-stone-100 p-4 !pb-20 md:p-8 text-stone-700">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        
        {/* Breadcrumb with Back Button Logic */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2 text-sm text-stone-500">
            <button onClick={() => history.push('/')} className="font-bold text-stone-900">Home</button>
            <ChevronRight size={16} />
            <button onClick={() => history.goBack()} className="hover:text-sky-500">Shop</button>
          </div>
          <button 
            onClick={() => history.goBack()} 
            className="text-sky-500 font-bold text-sm flex items-center gap-1 hover:underline"
          >
            <ChevronLeft size={14} /> Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square md:aspect-[5/4] bg-white rounded-lg overflow-hidden border border-stone-200">
              <img 
                src={selectedProduct.images[currentImageIndex]?.url} 
                alt={selectedProduct.name} 
                className="w-full h-full object-contain"
              />
              
              {/* Carousel Buttons */}
              {selectedProduct.images?.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md text-stone-700 hover:bg-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md text-stone-700 hover:bg-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4 mt-6">
              {selectedProduct.images?.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentImageIndexIndex(index)}
                  className={`relative w-24 mx-2 h-24 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-sky-500' : 'border-stone-200'} transition duration-150`}
                >
                  <img src={img.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 bg-sky-500 opacity-20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details - Filled with Real Data */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-stone-900">{selectedProduct.name}</h1>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex space-x-0.5 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <span className="text-stone-900 font-bold ml-1">{selectedProduct.rating}</span>
              </div>
              <span className="text-stone-500">{selectedProduct.sell_count} Sold</span>
            </div>

            <p className="text-3xl font-bold text-stone-950">${selectedProduct.price}</p>
            
            <p className="text-sm">
              <span className="font-semibold text-stone-900">Availability :</span>
              <span className="text-sky-500 font-medium ml-1">
                {selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
              <span className="ml-2 text-stone-400">({selectedProduct.stock} units)</span>
            </p>

            <p className="text-sm text-stone-500 leading-relaxed max-w-xl">
              {selectedProduct.description}
            </p>
            
            <div className="border-t border-stone-200 pt-6"></div>

            {/* Color Swatches */}
            <div className="flex items-center space-x-3">
              {colors.map((color) => (
                <button key={color.name} className={`w-8 h-8 mx-1 !rounded-full ${color.bgColor} border-2 border-white ring-1 ring-stone-200`}>
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center !space-x-4 pt-6">
              <button onClick={handleAddToCart} className="px-6 py-2.5 bg-sky-500 text-white mr-4 !font-semibold !rounded-md shadow-sm hover:bg-sky-600 text-sm">
                Add to Cart
              </button>
              
              <div className="flex">
                <button className="p-2.5 border border-stone-200 mx-1 !rounded-full text-stone-500 hover:bg-stone-50 hover:border-stone-300">
                  <Heart size={18} />
                </button>
                <button className="p-2.5 border border-stone-200 mx-1 !rounded-full text-stone-500 hover:bg-stone-50 hover:border-stone-300">
                  <ShoppingCart size={18} />
                </button>
                <button className="p-2.5 border border-stone-200 mx-1 !rounded-full text-stone-500 hover:bg-stone-50 hover:border-stone-300">
                  <Eye size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <ProductDescription />

    <section className="bg-light-grey py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-8 space-y-3">
          <h2 className="!text-4xl !font-extrabold text-[#252B42] uppercase tracking-tight">
            BESTSELLER PRODUCTS
          </h2>
        </div>
        <hr className='text-light-grey'></hr>

        {/* Using productList from store for Bestsellers */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 !mt-20">
          {productList.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>

    <BrandLogos/>
    </>
  );
}

export default ProductPage;