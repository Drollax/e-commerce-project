import { useState } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts';
import CarouselTop from '../components/CarouselTop';


function HomePage() {
 
const productImages = [
  '/public/HomePageImages/GraphicDesing1.jpg',
  '/public/HomePageImages/GraphicDesing2.jpg',
  '/public/HomePageImages/GraphicDesing3.jpg',
  '/public/HomePageImages/GraphicDesing4.jpg',
  '/public/HomePageImages/GraphicDesing5.jpg',
  '/public/HomePageImages/GraphicDesing6.jpg',
  '/public/HomePageImages/GraphicDesing7.jpg',
  '/public/HomePageImages/GraphicDesing8.jpg',
];



  return (
    <div className="min-h-screen bg-white font-montserrat ">
      <div className="w-full">
        <CarouselTop/>
</div>

<section className="bg-[#FAFAFA] dark:bg-slate-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">EDITOR'S PICK</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Problems trying to resolve the conflict between</p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
  {/* Men */}
  <CategoryCard 
    name="MEN" 
    image="public/HomePageImages/MenSegment.jpg" 
    className="md:col-span-2 md:row-span-2 h-[500px] md:h-full"
  />

  {/* Women */}
  <CategoryCard 
    name="WOMEN" 
    image="public/HomePageImages/WomenSegment.jpg" 
    className="md:col-span-1 md:row-span-2 h-[500px] md:h-full"
  />

  {/* Nested Container for Accessories & Kids */}
  <div className="md:col-span-1 md:row-span-2 grid grid-rows-2 gap-2 h-[500px] md:h-full">
    
    {/* Accessories */}
    <CategoryCard 
      name="ACCESSORIES" 
      image="public/HomePageImages/AccessoriesSegment.jpg" 
      className="h-full" 
    />

    {/* Kids */}
    <CategoryCard 
      name="KIDS" 
      image="public/HomePageImages/KidsSegment.jpg" 
      className="h-full"
    />
    
    </div>

  </div>
</div>
    </section>
<section className="bg-white dark:bg-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section of Cards */}
        <div className="text-center mb-16 space-y-3">
          <h4 className="text-xl font-medium text-[#737373] dark:text-slate-400">
            Featured Products
          </h4>
          <h2 className="text-3xl font-extrabold text-[#252B42] dark:text-white uppercase tracking-tight">
            BESTSELLER PRODUCTS
          </h2>
          <p className="max-w-md mx-auto text-sm font-medium text-[#737373] dark:text-slate-400">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Responsive Grid Layout*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {productImages.map((imagePath, index) => (
            <ProductCard key={index} image={imagePath} />
          ))}

        </div>

      </div>
    </section>

    <ProductCarousel/>
    <NeuralUniverse/>
    <FeaturedPosts/>
    </div>
  );
}

export default HomePage;