import { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { ChevronLeft, ChevronRight, Layout, Zap, Shield } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CategoryCard from '../components/CategoryCard';

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

  return (
    <div className="min-h-screen bg-white font-montserrat ">
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-[36px] py-[36px]">
        <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
        
        <div className="flex items-center gap-6 text-[#252B42]">
          <Search size={24} className="cursor-pointer" />
          <ShoppingCart size={24} className="cursor-pointer" />
          <Menu size={24} className="cursor-pointer" />
        </div>
      </nav>

      {/* --- Mobile Menu Links --- */}
      <div className="flex flex-col font-bold items-center gap-8 py-12 text-3xl font-normal mb-[80px] text-[#737373]">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">Product</button>
        <button className="cursor-pointer">Pricing</button>
        <button className="cursor-pointer">Contact</button>
      </div>
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
          className="relative w-full h-[80vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "30% center",
          }}
        >
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content Container */}
          <div className="relative z-10 pointer-events-none w-full flex flex-col items-center justify-center text-center text-white px-8 gap-4">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] uppercase">
              Summer 2020
            </h5>

            <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center max-w-[350px]">
              NEW COLLECTION
            </h2>

            <h4 className="font-[Montserrat] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center text-[#FAFAFA] max-w-[350px] md:max-w-md">
              We know how large objects will act, but things on a small scale.
            </h4>

            <button className="pointer-events-auto bg-[#2DC071] hover:bg-[#25a05e] px-10 py-3 text-xl font-bold rounded transition-all active:scale-95">
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
          
  {/* Men - Takes up 2 columns and 2 rows */}
  <CategoryCard 
    name="MEN" 
    image="public/HomePageImages/MenSegment.jpg" 
    className="md:col-span-2 md:row-span-2 h-[500px] md:h-full"
  />

  {/* Women - Takes up 1 column and 2 rows */}
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

    </div>
  );
}

export default HomePage;