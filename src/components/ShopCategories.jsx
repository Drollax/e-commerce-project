
import { ChevronRight } from 'lucide-react';

const ShopCategories = () => {
  const categories = [
    { title: 'CLOTHS', items: '5 Items', image: '/ShopPageImages/ShopCategory1.jpg' },
    { title: 'CLOTHS', items: '5 Items', image: '/ShopPageImages/ShopCategory2.jpg' },
    { title: 'CLOTHS', items: '5 Items', image: '/ShopPageImages/ShopCategory3.jpg' },
    { title: 'CLOTHS', items: '5 Items', image: '/ShopPageImages/ShopCategory4.jpg' },
    { title: 'CLOTHS', items: '5 Items', image: '/ShopPageImages/ShopCategory5.jpg' },
  ];

  return (
    <div className="bg-light-grey w-full font-montserrat pb-12">
      {/* Header Section */}
      <div className="max-w-[1050px] mx-auto px-8 py-10 flex flex-col items-center lg:flex-row lg:justify-between gap-6">
        <h3 className="text-h3 font-bold text-dark-blue">Shop</h3>
        
        {/* Breadcrumb - Centered on mobile, Right-aligned on desktop */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-h6 text-dark-blue">Home</span>
          <ChevronRight size={16} className="text-muted-grey" />
          <span className="font-bold text-h6 text-muted-grey">Shop</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-[1050px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[15px]">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden aspect-[1/1.1] md:aspect-[3/4] flex items-center justify-center text-white"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

              {/* Text Content */}
              <div className="relative z-10 text-center px-4">
                <h5 className="font-bold text-h5 tracking-[0.1px] mb-2 uppercase drop-shadow-md">
                  {cat.title}
                </h5>
                <p className="text-h6 font-normal drop-shadow-md">
                  {cat.items}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;