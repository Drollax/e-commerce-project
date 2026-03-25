import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
  return (
    <section className="bg-[#23856D] overflow-hidden font-montserrat">
      <Carousel 
        indicators={false} 
        interval={null} 
        className="vita-carousel"
      >
        <Carousel.Item>
          {/* Replaced Container/Row with a simple Tailwind Grid */}
          <div className="relative min-h-[80vh] lg:min-h-[710px] grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1500px] mx-auto px-8 lg:px-0">
            
            {/* Text Content */}
            <div className="flex flex-col text-center lg:text-left text-white z-10 pt-[400px] lg:py-0 order-1">
              <h5 className="uppercase font-bold tracking-[0.15em] text-base mb-6">
                Summer 2020
              </h5>
              <h1 className="text-4xl md:text-6xl lg:text-[58px] font-bold mb-8 leading-tight">
                Vita Classic <br className="hidden lg:block" /> Product
              </h1>
              <p className="text-sm md:text-base opacity-85 mb-8 max-w-[340px] mx-auto lg:mx-0">
                We know how large objects will act, but things on a small scale.
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-4">
                <span className="text-2xl font-bold tracking-tight text-white">
                  $16.48
                </span>
                <button className="bg-[#2DC071] hover:bg-[#28a761] text-white font-bold px-10 py-4 uppercase text-sm !rounded-[5px] transition-all active:scale-95 border-0 w-full sm:w-auto">
                   Add to Cart
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex items-end justify-center lg:justify-end order-2 self-end h-full">
              <img
                src="/HomePageImages/CarouselSecond1.png"
                alt="Vita Classic Product"
                className="w-full max-w-[600px] lg:max-w-none lg:w-[510px] object-contain object-bottom"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;