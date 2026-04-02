import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const tabs = ['Description', 'Additional Information', 'Reviews (0)'];

  return (
    <div className="w-full bg-white mt-12 pb-10 px-4 md:px-8">
      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-8 mb-10 border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-semibold mx-4 transition-colors duration-200 ${
              activeTab === tab 
              ? 'text-stone-900 border-b-2 border-sky-500' 
              : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Image Card */}
        <div className="bg-stone-50 rounded-xl overflow-hidden shadow-sm h-full min-h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop" 
            alt="Interior design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Column: Main Description */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-stone-900">the quick fox jumps over</h3>
          <div className="space-y-4 text-stone-500 text-sm leading-relaxed">
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
              consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
              consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
              consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* Right Column: List Highlights */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-stone-900">the quick fox jumps over</h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                  <ChevronRight size={18} className="text-stone-400" />
                  <span>the quick fox jumps over the lazy dog</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-stone-900">the quick fox jumps over</h3>
            <ul className="space-y-3">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                  <ChevronRight size={18} className="text-stone-400" />
                  <span>the quick fox jumps over the lazy dog</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDescription;