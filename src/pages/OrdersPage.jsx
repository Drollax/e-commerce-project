import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Or your custom axios instance with interceptors

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API instance/URL
    const token = localStorage.getItem("token");
    axios.get('https://workintech-fe-ecommerce.onrender.com/order', {
      headers: { Authorization: token }
    })
    .then(res => {
      setOrders(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Order fetch error:", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-20 text-center">Loading orders...</div>;

  return (
    <div className="container mx-auto p-6 font-montserrat min-h-screen">
      <h2 className="text-2xl font-bold text-[#252B42] mb-8">Siparişlerim</h2>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left bg-white">
          <thead className="bg-[#252B42] text-white">
            <tr>
              <th className="p-4">Sipariş ID</th>
              <th className="p-4">Tarih</th>
              <th className="p-4">Toplam Tutar</th>
              <th className="p-4">Durum</th>
              <th className="p-4">Detay</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Collapsible Row Component
function OrderRow({ order }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className="border-b hover:bg-gray-50 transition-colors">
        <td className="p-4 font-bold">#{order.id}</td>
        <td className="p-4">{new Date(order.order_date).toLocaleDateString()}</td>
        <td className="p-4 text-[#23A6F0] font-bold">${order.price.toFixed(2)}</td>
        <td className="p-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Tamamlandı</span>
        </td>
        <td className="p-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#23A6F0] underline font-bold"
          >
            {isOpen ? 'Kapat' : 'Görüntüle'}
          </button>
        </td>
      </tr>
      
      {/* Collapsible Panel */}
      {isOpen && (
        <tr>
          <td colSpan="5" className="bg-gray-50 p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#252B42] border-b pb-2">Ürün Detayları</h4>
              {order.products.map((product, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-200 py-2">
                  <div className="flex items-center gap-4">
                    <img src={product.images[0].url} alt="" className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-bold">{product.name}</p>
                      <p className="text-gray-500">Adet: {product.count}</p>
                    </div>
                  </div>
                  <p className="font-bold text-[#23A6F0]">${(product.price * product.count).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}