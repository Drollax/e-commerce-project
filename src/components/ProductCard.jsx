import { useHistory } from "react-router-dom";

const ProductCard = ({ product, view = 'grid' }) => {
  const history = useHistory();

  if (!product) return null;

  const nameSlug = product.name.toLowerCase().replaceAll(" ", "-");
  const path = `/shop/gender/category/${product.category_id}/${nameSlug}/${product.id}`;

  const colors = [
    { name: 'Light Blue', bg: 'bg-[#23A6F0]' },
    { name: 'Teal', bg: 'bg-[#23856D]' },
    { name: 'Orange', bg: 'bg-[#E77C40]' },
    { name: 'Dark Navy', bg: 'bg-[#252B42]' },
  ];

  // --- LIST VIEW LAYOUT ---
  if (view === 'list') {
    return (
      <div 
        onClick={() => history.push(path)} 
        className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 border border-transparent hover:border-slate-200 hover:shadow-md transition-all duration-300 cursor-pointer rounded-lg group"
      >
        {/* Left Side: Image */}
        <div className="w-full sm:w-48 h-64 sm:h-48 flex-shrink-0 overflow-hidden rounded-md bg-slate-100">
          <img 
            src={product.images[0]?.url} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col flex-grow text-center sm:text-left space-y-3">
          <div>
            <h5 className="font-bold text-[#252B42] uppercase text-base tracking-wider">
              {product.name}
            </h5>
            <p className="text-sm font-medium text-[#737373] mt-1">
              {product.description}
            </p>
          </div>

          <div className="flex gap-2.5 items-center justify-center sm:justify-start">
            <span className="text-sm font-bold text-[#BDBDBD] line-through">
              ${product.price}
            </span>
            <span className="text-sm font-bold text-[#23856D]">
              ${(product.price * 0.75).toFixed(2)}
            </span>
          </div>

          <div className="flex gap-2.5 justify-center sm:justify-start">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className={`w-4 h-4 rounded-full ${color.bg} shadow-inner`}
              />
            ))}
          </div>
          
          <button className="hidden sm:block w-fit px-6 py-2 border border-[#23A6F0] text-[#23A6F0] rounded-md font-bold text-xs hover:bg-[#23A6F0] hover:text-white transition-all">
            View Details
          </button>
        </div>
      </div>
    );
  }

  // --- DEFAULT GRID VIEW LAYOUT (Original) ---
  return (
    <div onClick={() => history.push(path)} className="text-center bg-white group pb-4 transition-colors duration-300 cursor-pointer">
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-sm aspect-[3/4]">
        <img 
          src={product.images[0]?.url} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-6 space-y-2 px-2">
        <h5 className="font-bold text-[#252B42] dark:text-white uppercase text-sm tracking-wider line-clamp-1">
          {product.name}
        </h5>
        <p className="text-sm font-medium text-[#737373] dark:text-slate-400 line-clamp-1">
          {product.description}
        </p>
      </div>

      <div className="mt-4 flex gap-2.5 justify-center items-center">
        <span className="text-sm font-bold text-[#BDBDBD] line-through">
          ${product.price}
        </span>
        <span className="text-sm font-bold text-[#23856D] dark:text-[#2dc071]">
          ${(product.price * 0.75).toFixed(2)}
        </span>
      </div>

      <div className="mt-4 flex gap-2.5 justify-center">
        {colors.map((color, index) => (
          <div 
            key={index} 
            title={color.name}
            className={`w-4 h-4 rounded-full ${color.bg} shadow-inner hover:scale-125 transition-transform`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;