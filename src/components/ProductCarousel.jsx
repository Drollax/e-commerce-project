import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
  return (
    <section className="bg-primary-green overflow-hidden font-montserrat">
      <Carousel 
        indicators={false} 
        interval={null} 
        className="vita-carousel"
      >
        <Carousel.Item>
          {/* Grid stays exactly the same as your original structure */}
          <div className="relative min-h-[80vh] lg:min-h-[710px] grid grid-cols-1 lg:grid-cols-2 items-center max-w-275 mx-auto px-8 pt-50 lg:!pt-0">
            
            <div className="flex flex-col !text-center !items-center text-white z-10 pt-20 lg:!pt-0 lg:!justify-center lg:!text-start lg:!items-start h-full order-1 max-w-[400px] md:max-w-[600px] -translate-y-4 mx-auto lg:mx-0" >
              <h5 className="uppercase !font-bold !text-30 !mb-6">
                Summer 2020
              </h5>
              <h1 className="!text-h1 lg:!text-6xl !font-extrabold !mb-8 leading-tight">
                Vita Classic <br className="hidden lg:block" /> Product
              </h1>
              <p className="!text-h4 font-normal opacity-85 !mb-8">
                We know how large objects will act, but things on a small scale.
              </p>
              
              <div className="!flex !flex-col lg:!flex-row !items-start lg:!items-center !justify-start !gap-8 !mt-4 !w-full">
                <span className="text-h3 font-bold tracking-tight text-white translate-x-40 lg:translate-x-0">
                  $16.48
                </span>
                <button className="bg-secondary-green hover:opacity-90 text-white font-bold px-10 py-4 uppercase text-h6 !rounded-[5px] transition-all active:scale-95 border-0 w-full lg:w-auto">
                   Add to Cart
                </button>
              </div>
            </div>

            {/* Image Content Block stays exactly where it was */}
            <div className="flex items-end justify-center lg:!justify-end order-2 self-end h-full">
              <img
                src="/HomePageImages/CarouselSecond1.png"
                alt="Vita Classic Product"
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[510px] object-contain object-bottom lg:translate-x-40 sm:translate-y-10"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;