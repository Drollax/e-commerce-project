import { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { ChevronLeft, ChevronRight, Layout, Zap, Shield } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  const [index, setIndex] = useState(0);

  const slides = [
  {
    id: 1,
    image: "/public/HomePageImages/Carousel1.jpg",
  },
  {
    id: 2,
    image: "/public/HomePageImages/Carousel1.jpg",
  },
];

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
     <Header/>
      <div className="w-full">
  <Carousel 
    prevIcon={<ChevronLeft size={32} className="text-white ml-2" />}
    nextIcon={<ChevronRight size={32} className="text-white mr-2" />}
    indicators={true}
    interval={5000}
    className="overflow-hidden"
  >
 {slides.map((slide) => (
  <Carousel.Item key={slide.id}>
    <div
      className="relative w-full h-[120vh] flex items-center"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "55% center",
      }}
    >
      {/* Content Container */}
      {/* Default: items-center & text-center (Mobile) */}
      {/* lg: items-start & text-left (Desktop) */}
      <div className="relative z-10 pointer-events-none w-full max-w-[1050px] mx-auto flex flex-col items-center text-center lg:items-start lg:text-left text-white px-8 gap-6">
        
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] uppercase">
          Summer 2020
        </h5>

        <h2 className="font-montserrat font-bold text-[40px] md:text-[58px] leading-[50px] md:leading-[80px] tracking-[0.2px] uppercase">
          NEW COLLECTION
        </h2>

        <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#FAFAFA] max-w-[380px]">
          We know how large objects will act, but things on a small scale.
        </h4>

        <button className="pointer-events-auto bg-[#2DC071] hover:bg-[#25a05e] px-10 py-4 text-xl font-bold rounded-md transition-all active:scale-95 uppercase">
          SHOP NOW
        </button>
      </div>
    </div>
  </Carousel.Item>
))}
  </Carousel>
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
    <Footer/>
    </div>
  );
}

export default HomePage;