import { 
  SiLyft, 
} from 'react-icons/si';

import { FaPiedPiperHat, FaAws, FaHooli, FaStripe, FaRedditAlien } from 'react-icons/fa';

const BrandLogos = () => {
  const logos = [
    { name: 'Hooli', icon: <FaHooli size={150} /> },
    { name: 'Lyft', icon: <SiLyft size={150} /> },
    { name: 'Pied Piper', icon: <FaPiedPiperHat size={150} /> },
    { name: 'Stripe', icon: <FaStripe size={150} /> },
    { name: 'AWS', icon: <FaAws size={150} /> },
    { name: 'Reddit', icon: <FaRedditAlien size={150} /> },
  ];

  return (
    <section className="bg-[#FAFAFA] py-12 lg:py-20 font-montserrat">
      <div className="max-w-300 mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-16 lg:gap- items-center justify-items-center">
          {logos.map((brand, index) => (
            <div 
              key={index} 
              className="text-[#737373] hover:text-[#252B42] transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              {brand.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;