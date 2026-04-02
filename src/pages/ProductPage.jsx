import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import ProductDescription from '../components/ProductDescription';
import ProductCard from '../components/ProductCard';
import BrandLogos from '../components/BrandLogos';

const images = [
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop', // Replace with your image URLs
  'https://images.unsplash.com/photo-1567538090231-a13656d128c8?q=80&w=1000&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop', 
];

const productImages = [
  '/HomePageImages/GraphicDesing1.jpg',
  '/HomePageImages/GraphicDesing2.jpg',
  '/HomePageImages/GraphicDesing3.jpg',
  '/HomePageImages/GraphicDesing4.jpg',
  '/HomePageImages/GraphicDesing5.jpg',
  '/HomePageImages/GraphicDesing6.jpg',
  '/HomePageImages/GraphicDesing7.jpg',
  '/HomePageImages/GraphicDesing8.jpg',
];

const colors = [
  { name: 'blue', bgColor: 'bg-sky-500' },
  { name: 'green', bgColor: 'bg-emerald-500' },
  { name: 'orange', bgColor: 'bg-orange-500' },
  { name: 'dark', bgColor: 'bg-slate-800' },
];

function ProductPage() {
  const [currentImageIndex, setCurrentImageIndexIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndexIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndexIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <section className="bg-stone-100 p-4 !pb-20 md:p-8 text-stone-700">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-stone-500 mb-8">
          <a href="#" className="font-bold text-stone-900">Home</a>
          <ChevronRight size={16} />
          <a href="#">Shop</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square md:aspect-[5/4] bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
              <img 
                src={images[currentImageIndex]} 
                alt="Product" 
                className="w-full h-full object-cover"
              />
              
              {/* Carousel Buttons */}
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
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4 mt-6">
              {images.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentImageIndexIndex(index)}
                  className={`relative w-24 mx-2 h-24 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-sky-500' : 'border-stone-200'} transition duration-150`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 bg-sky-500 opacity-20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-stone-900">Floating Phone</h1>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex space-x-0.5 text-yellow-400">
                {[...Array(4)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                <Star size={18} />
              </div>
              <span className="text-stone-500">10 Reviews</span>
            </div>

            <p className="text-3xl font-bold text-stone-950">$1,139.33</p>
            
            <p className="text-sm">
              <span className="font-semibold text-stone-900">Availability :</span>
              <span className="text-sky-500 font-medium ml-1">In Stock</span>
            </p>

            <p className="text-sm text-stone-500 leading-relaxed max-w-xl">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
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
              <button className="px-6 py-2.5 bg-sky-500 text-white mr-4 !font-semibold !rounded-md shadow-sm hover:bg-sky-600 text-sm">
                Select Options
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

    <ProductDescription/>

<section className="bg-light-grey py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section of Cards */}
        <div className="text-start mb-8 space-y-3">
          <h2 className="!text-4xl !font-extrabold text-[#252B42] uppercase tracking-tight">
            BESTSELLER PRODUCTS
          </h2>
        </div>

        <hr className='text-light-grey'></hr>

        {/* Responsive Grid Layout*/}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 !mt-20">
          
          {productImages.map((imagePath, index) => (
            <ProductCard key={index} id={index} image={imagePath} />
          ))}

        </div>

      </div>
    </section>

    <BrandLogos/>
    </>
  );
}

export default ProductPage;