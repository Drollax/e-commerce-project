import { useSelector } from 'react-redux';
import { Truck, ChevronRight } from 'lucide-react';

const OrderSummary = ({ buttonText, onButtonClick, disabled }) => {
  const cart = useSelector((state) => state.shop.cart);

  const SHIPPING_FEE = 29.99;
  const FREE_SHIPPING_THRESHOLD = 150;

  const subtotal = cart
    .filter(item => item.checked)
    .reduce((acc, item) => acc + (item.product.price * item.count), 0);

  const shippingCost = subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;
  const totalPayment = subtotal + shippingCost;

  return (
    <div className="space-y-4">
      <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
        <h3 className="text-xl font-bold text-[#252B42] mb-6">Order Summary</h3>
        
        <div className="space-y-4 text-sm">
          <div className="flex justify-between text-stone-600">
            <span>Subtotal</span>
            <span className="font-bold text-stone-900">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-stone-600">
            <span>Shipping</span>
            <span className="font-bold text-stone-900">
              {subtotal > 0 && shippingCost === 0 ? (
                <span className="text-[#23856D]">FREE</span>
              ) : (
                `$${shippingCost.toFixed(2)}`
              )}
            </span>
          </div>

          {subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD && (
            <div className="bg-sky-50 p-3 rounded-md flex items-start gap-2 text-[11px] text-sky-700">
              <Truck size={14} className="mt-0.5" />
              <p>
                Add <strong>${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}</strong> more for <strong>FREE SHIPPING!</strong>
              </p>
            </div>
          )}

          <div className="pt-6 border-t border-stone-100 flex justify-between items-center">
            <span className="text-lg font-bold text-[#252B42]">Grand Total</span>
            <span className="text-2xl font-black text-[#23A6F0]">${totalPayment.toFixed(2)}</span>
          </div>
        </div>

        <button 
          onClick={onButtonClick}
          disabled={disabled || subtotal === 0}
          className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold mt-8 hover:bg-[#1a85c2] transition-all disabled:bg-stone-200 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2 uppercase text-sm tracking-widest"
        >
          {buttonText} <ChevronRight size={18} />
        </button>
      </div>
      
      <p className="text-[10px] text-stone-400 text-center px-4">
        Shipping costs are calculated based on your location and selection.
      </p>
    </div>
  );
};

export default OrderSummary;