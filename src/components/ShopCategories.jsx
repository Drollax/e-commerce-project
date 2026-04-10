import { ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ShopCategories = () => {
  const history = useHistory();
  // Fetch categories from the global reducer
  const categories = useSelector((state) => state.product.categories);

  // Filter and sort the top 5 categories by rating value
  const topCategories = Array.isArray(categories) 
    ? [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5)
    : [];

  return (
    <div className="bg-[#FAFAFA] w-full font-montserrat pb-12">
      {/* Header Section */}
      <div className="max-w-[1050px] mx-auto px-8 py-10 flex flex-col items-center lg:flex-row lg:justify-between gap-6">
        <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
        
        <div className="flex items-center gap-4">
          <span className="font-bold text-sm text-[#252B42] cursor-pointer" onClick={() => history.push("/")}>Home</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="font-bold text-sm text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-[1050px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[15px]">
          {topCategories?.map((cat) => (
            <div
              key={cat.id} 
              onClick={() => history.push(`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.title.toLowerCase()}/${cat.id}`)}
              className="relative group cursor-pointer overflow-hidden aspect-[1/1.1] md:aspect-[3/4] flex items-center justify-center text-white"
            >
              {/* Background Image from API */}
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

              {/* Text Content */}
              <div className="relative z-10 text-center px-4">
                <h5 className="!font-medium text-base tracking-[0.1px] mb-2 uppercase drop-shadow-md">
                  {cat.gender === 'k' ? 'Kadın' : 'Erkek'}
                </h5>
                <h5 className="!font-medium text-base tracking-[0.1px] mb-2 uppercase drop-shadow-md">
                  {cat.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;