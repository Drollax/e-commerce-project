import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();

  // Guard clause: in case data is still propogating
  if (!product) return null;

  const productCardClickHandle = () => {
    // You can also use product.id here if you have a detail page: /product/:id
    history.push(`/product/${product.id}`);
  };

  const colors = [
    { name: 'Light Blue', bg: 'bg-[#23A6F0]' },
    { name: 'Teal', bg: 'bg-[#23856D]' },
    { name: 'Orange', bg: 'bg-[#E77C40]' },
    { name: 'Dark Navy', bg: 'bg-[#252B42]' },
  ];

  return (
    <div onClick={productCardClickHandle} className="text-center bg-white group pb-4 transition-colors duration-300 cursor-pointer">
      
      {/* Product Image - Mapping to API structure */}
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-sm aspect-[3/4]">
        <img 
          src={product.images[0]?.url} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="mt-6 space-y-2 px-2">
        <h5 className="font-bold text-[#252B42] dark:text-white uppercase text-sm tracking-wider line-clamp-1">
          {product.name}
        </h5>
        <p className="text-sm font-medium text-[#737373] dark:text-slate-400 line-clamp-1">
          {product.description}
        </p>
      </div>

      {/* Pricing - Using API price */}
      <div className="mt-4 flex gap-2.5 justify-center items-center">
        <span className="text-sm font-bold text-[#BDBDBD] line-through">
          ${product.price}
        </span>
        <span className="text-sm font-bold text-[#23856D] dark:text-[#2dc071]">
          {/* Example: simple calculation for a display discount */}
          ${(product.price * 0.75).toFixed(2)}
        </span>
      </div>

      {/* Color Dots */}
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