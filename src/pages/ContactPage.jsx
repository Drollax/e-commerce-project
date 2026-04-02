import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: '#' },
    { name: 'Facebook', icon: FaFacebookSquare, url: '#' },
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      {/* Main container with vertical spacing */}
      <div className="text-center  mx-auto flex flex-col items-center space-y-10">
        
        {/* Main Headline */}
        <h1 className="!text-5xl max-w-300  !font-bold text-[#252B42]">
          Get answers to all your questions.
        </h1>

        {/* Subtitle/Body Text */}
        <p className="text-[#737373] text-3xl max-w-300 !mt-20 !font-medium leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
        </p>

        {/* Primary Call to Action Button */}
        <button className="bg-[#23A6F0] text-white !font-bold py-4 px-30 !mt-20 !rounded-lg !text-2xl uppercase tracking-wide shadow-md hover:bg-[#1a8cd3] transition-colors duration-200">
          Contact Our Company
        </button>

        {/* Social Media Links Section */}
        <div className="!pt-6 !mt-10 w-full flex justify-center space-x-20">
          {socialLinks.map((link) => {
            const Icon = link.icon; // Component assignment for icons
            return (
              <a 
                key={link.name} 
                href={link.url} 
                title={link.name}
                className="!text-[#BDBDBD] text-5xl hover:text-[#23A6F0] transition-colors duration-200"
              >
                <Icon />
                <span className="sr-only">{link.name}</span>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;