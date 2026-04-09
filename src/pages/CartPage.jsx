import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, ChevronRight, Truck } from 'lucide-react';
import { updateCartItemPiece, toggleCartItem, removeFromCartCompletely } from '../store/actions/shopActions';

const CartPage = () => {
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

  // --- Shipping Constants ---
  const SHIPPING_FEE = 29.99;
  const FREE_SHIPPING_THRESHOLD = 150;

  // 1. Calculate Subtotal (only for checked items)
  const subtotal = cart
    .filter(item => item.checked)
    .reduce((acc, item) => acc + (item.product.price * item.count), 0);

  // 2. Determine Shipping Cost
  // If subtotal is 0, shipping is 0. If above threshold, shipping is 0.
  const shippingCost = subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;

  // 3. Final Total
  const totalPayment = subtotal + shippingCost;

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat min-h-screen">
      <h2 className="text-2xl font-bold text-[#252B42] mb-8 uppercase tracking-wider">Shopping Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Product List */}
        <div className="lg:col-span-2 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20 bg-stone-50 rounded-lg border-2 border-dashed border-stone-200">
               <p className="text-stone-500 font-medium">Your cart is currently empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex flex-col md:flex-row items-center gap-6 p-4 border border-stone-200 rounded-lg bg-white shadow-sm hover:border-sky-200 transition-colors">
                <input 
                  type="checkbox" 
                  checked={item.checked}
                  onChange={() => dispatch(toggleCartItem(item.product.id))}
                  className="w-5 h-5 accent-sky-500 cursor-pointer"
                />
                
                <img src={item.product.images[0]?.url} alt={item.product.name} className="w-24 h-32 object-cover rounded shadow-inner" />
                
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-[#252B42] uppercase text-sm">{item.product.name}</h3>
                  <p className="text-xs text-stone-500 line-clamp-2 max-w-md">{item.product.description}</p>
                  <p className="font-extrabold text-[#23856D] text-lg">${item.product.price}</p>
                </div>

                <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                  <button 
                    onClick={() => dispatch(updateCartItemPiece(item.product.id, -1))}
                    className="p-2 hover:text-sky-500 disabled:opacity-30 transition-colors"
                    disabled={item.count <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 font-bold min-w-[40px] text-center text-sm">{item.count}</span>
                  <button 
                    onClick={() => dispatch(updateCartItemPiece(item.product.id, 1))}
                    className="p-2 hover:text-sky-500 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => dispatch(removeFromCartCompletely(item.product.id))}
                  className="p-2 text-stone-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Side: Updated Order Summary */}
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
                    Add <strong>${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}</strong> more to qualify for <strong>FREE SHIPPING!</strong>
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-stone-100 flex justify-between items-center">
                <span className="text-lg font-bold text-[#252B42]">Grand Total</span>
                <span className="text-2xl font-black text-[#23A6F0]">${totalPayment.toFixed(2)}</span>
              </div>
            </div>

            <button 
              disabled={subtotal === 0}
              className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold mt-8 hover:bg-[#1a85c2] transition-all disabled:bg-stone-200 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2 uppercase text-sm tracking-widest"
            >
              Checkout <ChevronRight size={18} />
            </button>
          </div>
          
          <p className="text-[10px] text-stone-400 text-center px-4">
            Shipping costs are calculated based on your location and selection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;