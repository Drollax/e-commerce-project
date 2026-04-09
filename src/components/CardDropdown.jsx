
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const CartDropdown = () => {
  const cart = useSelector((state) => state.shop.cart);
  const history = useHistory();

  return (
    <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-full mt-2 w-80 bg-white shadow-2xl rounded-md border border-stone-200 z-50 overflow-hidden">
      <div className="p-4">
        <h3 className="text-stone-800 font-bold text-sm mb-4">
          Sepetim ({cart.reduce((acc, item) => acc + item.count, 0)} Ürün)
        </h3>
        
        <div className="max-h-80 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-stone-500 text-center py-4">Sepetiniz boş</p>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex gap-3 items-start border-b border-stone-100 pb-3 last:border-0">
                <img 
                  src={item.product.images[0]?.url} 
                  alt={item.product.name} 
                  className="w-16 h-20 object-cover rounded shadow-sm border border-stone-100"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-stone-900 truncate uppercase">
                    {item.product.name}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Adet: {item.count}
                  </p>
                  <p className="text-sm font-bold text-orange-500 mt-1">
                    {item.product.price} TL
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {cart.length > 0 && (
        <div className="p-4 bg-stone-50 grid grid-cols-2 gap-3 border-t border-stone-200">
          <button onClick={() => history.push("/cart")} className="py-2.5 text-xs font-bold border border-stone-300 rounded text-stone-700 hover:bg-white transition-colors">
            Sepete Git
          </button>
          <button onClick={() => history.push("/checkout")} className="py-2.5 text-xs font-bold bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors shadow-sm">
            Siparişi Tamamla
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;