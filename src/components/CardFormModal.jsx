import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../api/axiosInstance';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../store/actions/clientActions';
import { toast } from 'react-toastify';

const CardFormModal = ({ onClose, editData }) => {
  const dispatch = useDispatch();
  
  const { register, handleSubmit } = useForm({
    // CCV is never stored, so we don't pull it from editData
    defaultValues: editData || { expire_month: 1, expire_year: 2026 }
  });

  const onSubmit = (data) => {
    // 1. Format the payload for the /user/card endpoint
    const cardPayload = {
      card_no: data.card_no.replace(/\s/g, ''), 
      expire_month: Number(data.expire_month),
      expire_year: Number(data.expire_year),
      name_on_card: data.name_on_card
      // CCV is NOT sent to /user/card per API specs
    };

    const request = editData 
      ? API.put('/user/card', { ...cardPayload, id: editData.id })
      : API.post('/user/card', cardPayload);

    request
      .then(() => {
        toast.success(editData ? "Kart güncellendi" : "Kart eklendi");
        
        /* Note: If you want to use the CCV immediately for an order without 
          asking the user again, you could save data.card_ccv to a 
          local state in OrderPage here.
        */
        
        dispatch(fetchCards());
        onClose();
      })
      .catch(() => toast.error("İşlem başarısız"));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[600] p-4 backdrop-blur-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl w-full max-w-sm shadow-2xl space-y-4">
        <h3 className="text-lg font-bold border-b pb-2 text-[#252B42]">
          {editData ? 'Kartı Düzenle' : 'Yeni Kart Ekle'}
        </h3>
        
        <div className="space-y-4">
          {/* Name on Card */}
          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase">Kart Üzerindeki İsim</label>
            <input 
              {...register("name_on_card")} 
              className="w-full border p-2 rounded text-sm outline-sky-500" 
              placeholder="Ad Soyad"
              required 
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase">Kart Numarası</label>
            <input 
              {...register("card_no")} 
              placeholder="1234 1234 1234 1234" 
              className="w-full border p-2 rounded text-sm outline-sky-500 font-mono" 
              required 
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* Expiry Month */}
            <div>
              <label className="text-[10px] font-bold text-stone-500 uppercase">Ay</label>
              <select {...register("expire_month")} className="w-full border p-2 rounded text-sm bg-white outline-sky-500">
                {Array.from({length: 12}, (_, i) => i + 1).map(m => (
                  <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                ))}
              </select>
            </div>

            {/* Expiry Year */}
            <div>
              <label className="text-[10px] font-bold text-stone-500 uppercase">Yıl</label>
              <select {...register("expire_year")} className="w-full border p-2 rounded text-sm bg-white outline-sky-500">
                {Array.from({length: 10}, (_, i) => 2026 + i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* CCV Field */}
            <div>
              <label className="text-[10px] font-bold text-stone-500 uppercase">CCV</label>
              <input 
                {...register("card_ccv")} 
                type="password"
                maxLength="3"
                placeholder="***"
                className="w-full border p-2 rounded text-sm outline-sky-500 font-mono" 
                required 
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button type="button" onClick={onClose} className="flex-1 py-2 text-sm font-bold border rounded hover:bg-stone-50 transition-colors">İptal</button>
          <button type="submit" className="flex-1 py-2 text-sm font-bold bg-sky-500 text-white rounded hover:bg-sky-600 shadow-md transition-all">Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default CardFormModal;