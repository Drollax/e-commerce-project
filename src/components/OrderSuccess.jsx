import React from 'react';
import { useHistory } from 'react-router-dom';

const OrderSuccess = () => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Centered Text */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#252B42] text-center tracking-tight">
        THANK YOU FOR YOUR PURCHASE
      </h1>
      
      {/* Optional: A button to take them back home */}
      <button 
        onClick={() => history.push('/')}
        className="mt-8 bg-[#23A6F0] text-white font-bold px-8 py-3 rounded-md hover:bg-[#1a8cd1] transition-all"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;