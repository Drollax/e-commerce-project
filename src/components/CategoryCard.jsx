
const CategoryCard = ({ name, image, className = "" }) => {
  return (
    <div className={`relative group overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl ${className}`}>
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay Button */}
      <div className="absolute bottom-6 left-6">
        <button className="bg-white font-montserrat px-8 py-3 font-bold text-slate-900 uppercase tracking-tighter hover:bg-slate-900 transition-colors duration-300">
          {name}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;