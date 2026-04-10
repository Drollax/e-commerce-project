import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API } from '../api/axiosInstance';
import { Plus, CheckCircle, CreditCard, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import OrderSummary from '../components/OrderSummary';
import { setAddress, setPayment } from '../store/actions/shopActions'; // Ensure setPayment exists
import { fetchCards } from '../store/actions/clientActions';
import PaymentSection from '../components/PaymentSection'; // The component we discussed earlier

const OrderPage = () => {
  const dispatch = useDispatch();
  
  // 1. Redux State
  const selectedAddress = useSelector((state) => state.shop.address);
  const selectedPayment = useSelector((state) => state.shop.payment);
  
  
  // 2. Local State
  const [activeStep, setActiveStep] = useState(1); // 1: Address, 2: Payment
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [billingAddressId, setBillingAddressId] = useState(null);
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const { register, handleSubmit, reset, setValue } = useForm();

  // 3. Selection Validation
  const isAddressSelected = sameAsShipping 
    ? Boolean(selectedAddress?.id) 
    : Boolean(selectedAddress?.id && billingAddressId);

  const isPaymentSelected = Boolean(selectedPayment?.id);

  const fetchAddresses = () => {
    API.get('/user/address')
      .then(res => setAddresses(res.data))
      .catch(err => console.error("Error fetching addresses:", err));
  };

  useEffect(() => { 
    fetchAddresses(); 
    dispatch(fetchCards()); // Load cards from clientActions
  }, [dispatch]);

  const handleSelectShipping = (addr) => {
    dispatch(setAddress(addr));
  };

  const onAddressSubmit = (data) => {
    const request = editingAddress 
      ? API.put('/user/address', { ...data, id: editingAddress.id })
      : API.post('/user/address', data);

    request
      .then(() => { 
        fetchAddresses(); 
        setShowForm(false); 
        toast.success("Adres başarıyla kaydedildi");
      })
      .catch(err => console.error(err));
  };

  const handleEdit = (addr) => {
    setEditingAddress(addr);
    Object.keys(addr).forEach(key => setValue(key, addr[key]));
    setShowForm(true);
  };

  const deleteAddress = (id) => {
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      API.delete(`/user/address/${id}`)
        .then(() => {
          fetchAddresses();
          if (selectedAddress?.id === id) dispatch(setAddress({}));
          toast.info("Adres silindi");
        });
    }
  };

  // 4. Step Transition Logic
  const handleContinue = () => {
    if (activeStep === 1) {
      setActiveStep(2);
      window.scrollTo(0, 0);
    } else {
      toast.success("Siparişiniz başarıyla alındı!");
      // Here you would typically POST to /order
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat">
      {/* Steps Progress Indicator */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center w-full max-w-md">
          {/* Step 1 */}
          <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => setActiveStep(1)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-all ${activeStep >= 1 ? 'bg-sky-500 text-white' : 'bg-stone-200 text-stone-500'}`}>1</div>
            <span className={`text-xs mt-2 font-bold ${activeStep >= 1 ? 'text-sky-500' : 'text-stone-400'}`}>Adres Bilgileri</span>
          </div>
          <div className={`h-1 flex-1 mx-2 transition-colors ${activeStep === 2 ? 'bg-sky-500' : 'bg-stone-200'}`}></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-all ${activeStep === 2 ? 'bg-sky-500 text-white' : 'bg-stone-200 text-stone-500'}`}>2</div>
            <span className={`text-xs mt-2 font-bold ${activeStep === 2 ? 'text-sky-500' : 'text-stone-400'}`}>Ödeme Seçenekleri</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {activeStep === 1 ? (
            /* --- ADDRESS SELECTION SECTION --- */
            <div className="space-y-8">
              <div className="bg-white border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-[#252B42]">Teslimat Adresi</h2>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="billingMatch"
                      className="w-4 h-4 accent-sky-500"
                      checked={sameAsShipping} 
                      onChange={() => setSameAsShipping(!sameAsShipping)}
                    />
                    <label htmlFor="billingMatch" className="text-xs text-stone-600 cursor-pointer font-medium">Fatura adresim aynı olsun</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => { setEditingAddress(null); reset(); setShowForm(true); }}
                    className="border-2 border-dashed border-stone-200 rounded-lg p-6 flex flex-col items-center justify-center hover:border-sky-300 hover:bg-sky-50 transition-all group min-h-[160px]"
                  >
                    <Plus className="text-stone-300 group-hover:text-sky-500 mb-2" size={32} />
                    <span className="text-sm font-bold text-stone-500">Yeni Adres Ekle</span>
                  </button>

                  {addresses.map((addr) => (
                    <div 
                      key={addr.id} 
                      onClick={() => handleSelectShipping(addr)}
                      className={`relative p-5 border-2 rounded-lg cursor-pointer transition-all min-h-[160px] flex flex-col justify-between ${selectedAddress?.id === addr.id ? 'border-sky-500 bg-white ring-1 ring-sky-500/20' : 'border-stone-100 bg-stone-50 hover:border-stone-200'}`}
                    >
                      {selectedAddress?.id === addr.id && (
                        <CheckCircle className="absolute top-3 right-3 text-sky-500 fill-white" size={20} />
                      )}
                      <div>
                        <h4 className="font-bold text-sm uppercase text-stone-900 mb-2">{addr.title}</h4>
                        <div className="text-xs space-y-1 text-stone-600">
                          <p className="font-bold text-stone-900">{addr.name} {addr.surname}</p>
                          <p>{addr.phone}</p>
                          <p className="truncate">{addr.neighborhood}</p>
                          <p>{addr.district} / {addr.city}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-4 border-t pt-3">
                        <button onClick={(e) => { e.stopPropagation(); handleEdit(addr); }} className="text-[10px] font-bold text-sky-600 hover:text-sky-700">Düzenle</button>
                        <button onClick={(e) => { e.stopPropagation(); deleteAddress(addr.id); }} className="text-[10px] font-bold text-red-400 hover:text-red-600">Sil</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!sameAsShipping && (
                <div className="bg-white border rounded-lg p-6 shadow-sm animate-in fade-in slide-in-from-top-2">
                  <h2 className="text-lg font-bold text-[#252B42] mb-6">Fatura Adresi</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((addr) => (
                      <div 
                        key={`billing-${addr.id}`} 
                        onClick={() => setBillingAddressId(addr.id)}
                        className={`relative p-5 border-2 rounded-lg cursor-pointer transition-all ${billingAddressId === addr.id ? 'border-orange-400 bg-white ring-1 ring-orange-400/20' : 'border-stone-100 bg-stone-50'}`}
                      >
                        {billingAddressId === addr.id && (
                          <CheckCircle className="absolute top-3 right-3 text-orange-400 fill-white" size={20} />
                        )}
                        <h4 className="font-bold text-sm uppercase text-stone-900 mb-2">{addr.title}</h4>
                        <p className="text-xs text-stone-600 font-bold">{addr.name} {addr.surname}</p>
                        <p className="text-xs text-stone-500">{addr.district} / {addr.city}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* --- STEP 2: PAYMENT SECTION --- */
            <PaymentSection />
          )}
        </div>

        {/* Dynamic Order Summary */}
        <OrderSummary 
          buttonText={activeStep === 1 ? "Kaydet ve Devam Et" : "Siparişi Tamamla"} 
          onButtonClick={handleContinue}
          disabled={activeStep === 1 ? !isAddressSelected : !isPaymentSelected} 
        />
      </div>

      {/* ADDRESS MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[500] p-4 backdrop-blur-sm">
          <form onSubmit={handleSubmit(onAddressSubmit)} className="bg-white p-8 rounded-xl w-full max-w-md shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold border-b pb-2">{editingAddress ? 'Adresi Güncelle' : 'Yeni Adres Ekle'}</h3>
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Adres Başlığı</label>
                <input {...register("title")} placeholder="Örn: Ev, İş" className="w-full border p-2 rounded text-sm outline-sky-500" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase">Ad</label>
                  <input {...register("name")} className="w-full border p-2 rounded text-sm outline-sky-500" required />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase">Soyad</label>
                  <input {...register("surname")} className="w-full border p-2 rounded text-sm outline-sky-500" required />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Telefon</label>
                <input {...register("phone")} placeholder="05xxxxxxxxx" className="w-full border p-2 rounded text-sm outline-sky-500" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase">Şehir</label>
                  <select {...register("city")} className="w-full border p-2 rounded text-sm outline-sky-500 bg-white" required>
                    <option value="">Seçiniz</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase">İlçe</label>
                  <input {...register("district")} className="w-full border p-2 rounded text-sm outline-sky-500" required />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Mahalle / Detay</label>
                <textarea {...register("neighborhood")} rows="3" className="w-full border p-2 rounded text-sm outline-sky-500 resize-none" required></textarea>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2.5 text-sm font-bold border rounded hover:bg-stone-50">İptal</button>
              <button type="submit" className="flex-1 py-2.5 text-sm font-bold bg-sky-500 text-white rounded hover:bg-sky-600 shadow-lg shadow-sky-200">Kaydet</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderPage;