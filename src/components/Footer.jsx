import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company Info',
      links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      title: 'Legal',
      links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      title: 'Features',
      links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
    },
    {
      title: 'Resources',
      links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
    },
  ];

  return (
    <footer className="w-full bg-white font-montserrat">
      {/* Top Header Section */}
      <div className="bg-[#FAFAFA] py-10 md:py-16">
        <div className="max-w-[1050px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="font-bold text-[24px] text-[#252B42]">Bandage</h2>
          <div className="flex items-center gap-5">
            <Facebook className="text-[#23A6F0] cursor-pointer" size={24} fill="#23A6F0" strokeWidth={0} />
            <Instagram className="text-[#23A6F0] cursor-pointer" size={24} />
            <Twitter className="text-[#23A6F0] cursor-pointer" size={24} fill="#23A6F0" strokeWidth={0} />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1050px] mx-auto px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10 md:gap-4">
          {/* Link Columns: Each taking 2 units on Desktop (Total 8/12) */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-5 md:col-span-1 lg:col-span-2">
              <h5 className="font-bold text-[16px] text-[#252B42]">{section.title}</h5>
              <div className="flex flex-col gap-3 items-start">
                {section.links.map((link, linkIdx) => (
                  <button 
                    key={linkIdx} 
                    className="font-bold text-[14px] text-[#737373] hover:text-[#23A6F0] transition-colors bg-transparent border-none p-0"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Subscribe Column: Taking 4 units on Desktop (Wider) */}
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-4">
            <h5 className="font-bold text-[16px] text-[#252B42]">Get In Touch</h5>
            <div className="flex flex-col gap-2">
              {/* Unified Border Container */}
              <div className="flex w-full items-stretch border border-[#E6E6E6] rounded-[5px] overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow min-w-0 px-5 py-4 text-[14px] bg-[#F9F9F9] focus:outline-none"
                />
                <button className="px-6 bg-[#23A6F0] text-white text-[14px] hover:bg-[#1a8cd0] transition-all border-none">
                  Subscribe
                </button>
              </div>
              <p className="text-[12px] text-[#737373] mt-1">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="max-w-[1050px] mx-auto px-8 text-center lg:!text-left">
          <p className="font-bold text-[14px] text-[#737373] max-w-[200px] md:max-w-none mx-auto">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;