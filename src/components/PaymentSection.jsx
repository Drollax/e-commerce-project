import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API } from '../api/axiosInstance';
import { Plus, CreditCard, CheckCircle, Trash2, Edit2 } from 'lucide-react';
import { fetchCards } from '../store/actions/clientActions';
import { setPayment } from '../store/actions/shopActions';
import { toast } from 'react-toastify';
import CardFormModal from './CardFormModal';

const PaymentSection = () => {
  const dispatch = useDispatch();
  
  // All cards owned by user
  const savedCards = useSelector((state) => state.client.creditCard);
  // The specific card selected for this order
  const selectedPayment = useSelector((state) => state.shop.payment);
  
  const [showModal, setShowModal] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      API.delete(`/user/card/${id}`)
        .then(() => {
          dispatch(fetchCards());
          if (selectedPayment?.id === id) dispatch(setPayment({}));
          toast.info("Kart silindi");
        })
        .catch(() => toast.error("Kart silinemedi"));
    }
  };

  const handleEdit = (e, card) => {
    e.stopPropagation();
    setEditingCard(card);
    setShowModal(true);
  };

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#252B42]">Kart Bilgileri</h2>
        <button 
          onClick={() => { setEditingCard(null); setShowModal(true); }}
          className="text-sky-500 text-xs font-bold flex items-center gap-1 hover:underline"
        >
          <Plus size={14} /> Yeni Kart Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedCards.map((card) => (
          <div 
            key={card.id}
            onClick={() => dispatch(setPayment(card))}
            className={`relative p-5 border-2 rounded-lg cursor-pointer transition-all min-h-[140px] flex flex-col justify-between ${
              selectedPayment?.id === card.id ? 'border-sky-500 bg-white ring-1 ring-sky-500/10' : 'border-stone-100 bg-stone-50'
            }`}
          >
            {selectedPayment?.id === card.id && (
              <CheckCircle className="absolute top-3 right-3 text-sky-500 fill-white" size={20} />
            )}
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="text-stone-400" size={18} />
                <span className="font-bold text-xs uppercase text-stone-700">{card.name_on_card}</span>
              </div>
              <p className="text-sm tracking-[0.15em] font-medium text-stone-600">
                **** **** **** {card.card_no.slice(-4)}
              </p>
            </div>

            <div className="flex justify-between items-end mt-4">
              <span className="text-[10px] text-stone-400 font-bold">
                {String(card.expire_month).padStart(2, '0')} / {card.expire_year}
              </span>
              <div className="flex gap-3">
                <button onClick={(e) => handleEdit(e, card)} className="text-stone-400 hover:text-sky-500"><Edit2 size={14}/></button>
                <button onClick={(e) => handleDelete(e, card.id)} className="text-stone-400 hover:text-red-500"><Trash2 size={14}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <CardFormModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
          editData={editingCard}
        />
      )}
    </div>
  );
};

export default PaymentSection;