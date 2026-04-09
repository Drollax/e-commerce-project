import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChevronRight } from 'lucide-react';

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('Description');
  const { selectedProduct } = useSelector((state) => state.product);

  const tabs = ['Description', 'Additional Information', 'Reviews (0)'];

  // Guard clause if product hasn't loaded yet
  if (!selectedProduct) return null;

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
            {tab === 'Reviews (0)' ? `Reviews (0)` : tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Product Image Card */}
        <div className="bg-stone-50 rounded-xl overflow-hidden shadow-sm aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
          <img 
            src={selectedProduct.images?.[0]?.url || "https://via.placeholder.com/400"} 
            alt={selectedProduct.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Column: Dynamic Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-stone-900">
            {activeTab === 'Description' ? 'Product Specification' : activeTab}
          </h3>
          <div className="space-y-4 text-stone-500 text-sm leading-relaxed">
            {activeTab === 'Description' ? (
              <>
                <p className="font-semibold text-stone-700 text-base">{selectedProduct.name}</p>
                <p>{selectedProduct.description}</p>
                <p>
                  Experience the perfect blend of style and functionality. This product has been 
                  crafted with premium materials to ensure durability and comfort for everyday use.
                </p>
              </>
            ) : (
              <p>Details for {activeTab} will appear here. Currently viewing specifications for our {selectedProduct.name}.</p>
            )}
          </div>
        </div>

        {/* Right Column: Key Features / Specs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-stone-900">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                <ChevronRight size={18} className="text-sky-500" />
                <span>Rating: {selectedProduct.rating} / 5.0</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                <ChevronRight size={18} className="text-sky-500" />
                <span>Stock: {selectedProduct.stock} units available</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                <ChevronRight size={18} className="text-sky-500" />
                <span>Category ID: {selectedProduct.category_id}</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                <ChevronRight size={18} className="text-sky-500" />
                <span>Verified Quality Materials</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-stone-900">Shipping Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                <ChevronRight size={18} className="text-stone-400" />
                <span>Free standard shipping on orders over $50</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-500 text-sm font-semibold">
                <ChevronRight size={18} className="text-stone-400" />
                <span>Estimated delivery: 3-5 business days</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDescription;