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
      <div className="bg-light-grey py-10 md:py-16">
        <div className="max-w-300 mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="font-bold text-h3 text-dark-blue">Bandage</h2>
          <div className="flex items-center gap-5">
            {/* Using primary-blue from your theme */}
            <Facebook className="text-primary-blue cursor-pointer" size={24} fill="currentColor" strokeWidth={0} />
            <Instagram className="text-primary-blue cursor-pointer" size={24} />
            <Twitter className="text-primary-blue cursor-pointer" size={24} fill="currentColor" strokeWidth={0} />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-300 mx-auto px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10 md:gap-4">
          {/* Link Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-5 md:col-span-1 lg:col-span-2">
              <h5 className="font-bold text-h5 text-dark-blue">{section.title}</h5>
                <div className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => (
                    <button 
                      key={linkIdx} 
                      className="font-bold text-h6 text-grey-text hover:text-primary-blue transition-colors bg-transparent border-none p-0 text-left w-full"
                    >
                      {link}
                    </button>
                ))}
                </div>
            </div>
          ))}

          {/* Subscribe Column */}
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-4">
            <h5 className="font-bold text-h5 text-dark-blue">Get In Touch</h5>
            <div className="flex flex-col gap-2">
              {/* Unified Border Container - using your muted-grey for the border */}
              <div className="flex w-full items-stretch border border-muted-grey rounded-[5px] overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow min-w-0 px-5 py-4 text-h6 bg-light-grey focus:outline-none"
                />
                <button className="px-6 bg-primary-blue text-white text-h6 hover:opacity-90 transition-all border-none">
                  Subscribe
                </button>
              </div>
              <p className="text-h6 text-grey-text mt-1">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-light-grey py-6">
        <div className="max-w-300 mx-auto px-8 text-center lg:!text-left">
          <p className="font-bold text-h6 text-grey-text max-w-[200px] md:max-w-none mx-auto lg:mx-0">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      <hr/>
      </div>
    </footer>
  );
};

export default Footer;