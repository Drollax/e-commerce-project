import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API } from '../api/axiosInstance';

const Signup = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: { role_id: "3" } // Customer selected by default
  });

  const selectedRoleId = watch("role_id");
  const password = watch("password");

  // Fetch roles from API
  useEffect(() => {
    API.get('/roles')
      .then((res) => setRoles(res.data))
      .catch((err) => console.error("Error fetching roles", err));
  }, []);

const onSubmit = async (data) => {
  setIsLoading(true);

  // 1. Extract the 'store' data from the flat form data
  const { confirmPassword, store, ...restOfData } = data;

  // 2. Build the payload
  const payload = {
    ...restOfData,
    role_id: Number(data.role_id),
  };

  // 3. CRITICAL: Only add 'store' if role is Store (ID 2)
  // and make sure it's an object with the required keys
  if (payload.role_id === 2) {
    payload.store = {
      name: store.name,
      phone: store.phone,
      tax_no: store.tax_no,
      bank_account: store.bank_account
    };
  }

  console.log("SENDING THIS TO SERVER:", payload);

  try {
    const res = await API.post('/signup', payload);
    alert("Success! Check your email.");
    history.goBack();
  } catch (error) {
    console.error("Full Error Object:", error.response);
    alert("Error 500: Check the console/network tab for details.");
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="max-w-md mx-auto my-10 p-8 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-[#252B42]">Sign Up</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-bold mb-1">Name *</label>
          <input
            {...register("name", { required: "Required", minLength: { value: 3, message: "Min 3 chars" } })}
            className={`border p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-bold mb-1">Email *</label>
          <input
            {...register("email", { 
              required: "Required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
            })}
            className={`border p-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-bold mb-1">Password *</label>
          <input
            type="password"
            {...register("password", {
              required: "Required",
              minLength: { value: 8, message: "Min 8 characters" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Must have: Upper, Lower, Number, Special Char"
              }
            })}
            className="border p-2 rounded"
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>

        {/* Confirm Password (Frontend Only) */}
        <div className="flex flex-col">
          <label className="text-sm font-bold mb-1">Confirm Password *</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Required",
              validate: (val) => val === password || "Passwords do not match"
            })}
            className="border p-2 rounded"
          />
          {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
        </div>

        {/* Role Select */}
        <div className="flex flex-col">
          <label className="text-sm font-bold mb-1">Role</label>
          <select {...register("role_id")} className="border p-2 rounded bg-white">
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>

        {/* Store Specific Fields */}
        {selectedRoleId === "2" && (
          <div className="p-4 bg-sky-50 rounded space-y-3 border-l-4 border-sky-400">
            <input {...register("store.name", { required: true, minLength: 3 })} placeholder="Store Name" className="w-full p-2 border rounded" />
            <input {...register("store.phone", { required: true, pattern: /^(\+90|0)?\s*5\d{2}\s*\d{3}\s*\d{2}\s*\d{2}$/ })} placeholder="Store Phone (05xx...)" className="w-full p-2 border rounded" />
            <input {...register("store.tax_no", { required: true, pattern: /^T\d{4}V\d{6}$/ })} placeholder="Tax ID (TXXXXVXXXXXX)" className="w-full p-2 border rounded" />
            <input {...register("store.bank_account", { required: true })} placeholder="IBAN" className="w-full p-2 border rounded" />
          </div>
        )}

        {/* Submit Button with Spinner */}
        <button
          type="submit"
          disabled={isLoading || !isValid}
          className="w-full bg-sky-500 text-white p-3 rounded font-bold hover:bg-sky-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex justify-center items-center"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </div>
          ) : (
            "SIGN UP"
          )}
        </button>
      </form>
    </div>
  );
};

export default Signup;