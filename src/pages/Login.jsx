import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../store/actions/clientActions";

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const  onSubmit = async (data) => {
    const { email, password, rememberMe } = data;
   await dispatch(loginUser({ email, password }, history, rememberMe));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md min-h-screen justify-center justify-content mx-auto my-20 p-8 border rounded-lg shadow-lg bg-white flex flex-col gap-4">
    
      <h2 className="text-2xl !font-bold">Login</h2>
      
      <input 
        {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
        placeholder="Email"
        className="border m-6 p-2 rounded"
        />
      {errors.email && <span className="text-red-500 text-xs">Valid email is required</span>}

      <input 
        type="password"
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
        className="border p-2 rounded"
      />

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...register("rememberMe")} />
        Remember Me
      </label>

      <button disabled={isSubmitting} type="submit" className={`p-2 rounded text-white transition-colors ${
          isSubmitting 
            ? "!bg-gray-400 !cursor-not-allowed" 
            : "bg-sky-500 hover:bg-sky-600"
        }`}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;