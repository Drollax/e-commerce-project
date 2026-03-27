 import { ChevronLeft, ChevronRight} from 'lucide-react';
 import { Carousel } from 'react-bootstrap';

 const CarouselTop =() =>{
     const slides = [
         {
    id: 1,
    image: "/HomePageImages/Carousel1.jpg",
},
{
    id: 2,
    image: "/HomePageImages/Carousel1.jpg",
},
];


return(
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
      <div className="relative z-10 pointer-events-none w-full max-w-[1050px] mx-auto flex flex-col items-center text-center lg:items-start lg:!text-left text-white px-8 gap-6">
        
        <h5 className="font-montserrat !font-bold !text-[16px] !leading-[24px] !tracking-[0.1px] !uppercase">
          Summer 2020
        </h5>

        <h2 className="font-montserrat font-bold !text-[50px] md:!text-[58px] !leading-[50px] md:!leading-[80px] !tracking-[0.2px] !uppercase">
          NEW COLLECTION
        </h2>

        <h4 className="font-montserrat font-normal !text-[20px] !leading-[30px] !tracking-[0.2px] !text-[#FAFAFA] !max-w-[380px]">
          We know how large objects will act, but things on a small scale.
        </h4>

        <button className="pointer-events-auto bg-[#2DC071] hover:bg-[#25a05e] px-10 py-4 text-xl font-bold !rounded-md transition-all active:scale-95 uppercase">
          SHOP NOW
        </button>
      </div>
    </div>
  </Carousel.Item>
))}
  </Carousel>
</div>

)
}

export default CarouselTop