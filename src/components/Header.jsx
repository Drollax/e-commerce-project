import { 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, 
  Search, ShoppingCart, Heart, User, ChevronDown, Menu 
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Added import
import Gravatar from 'react-gravatar'; 

export default function Header() {
  const user = useSelector((state) => state.client.user);
  const history = useHistory(); // Initialized history

  return (
    <header className="w-full font-montserrat">
      {/* --- Top Bar --- */}
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-6 justify-between items-center text-sm font-bold">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        
        <div>Follow Us and get a chance to win 80% off</div>

        <div className="flex items-center gap-4">
          <span>Follow Us :</span>
          <div className="flex gap-3">
            <Instagram size={18} className="cursor-pointer" />
            <Youtube size={18} className="cursor-pointer" />
            <Facebook size={18} className="cursor-pointer" />
            <Twitter size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
        <h1 onClick={() => history.push("/")} className="text-2xl !font-bold text-[#252B42] cursor-pointer">Bandage</h1>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[#737373] mr-100 font-bold">
          <button onClick={() => history.push("/")} className="hover:text-[#252B42]">Home</button>
          <button onClick={() => history.push("/shop")} className="flex items-center gap-1 hover:text-[#252B42]">
            Shop <ChevronDown size={14} />
          </button>
          <button onClick={() => history.push("/about")} className="hover:text-[#252B42]">About</button>
          <button onClick={() => history.push("/blog")} className="hover:text-[#252B42]">Blog</button>
          <button onClick={() => history.push("/contact")} className="hover:text-[#252B42]">Contact</button>
          <button onClick={() => history.push("/pages")} className="hover:text-[#252B42]">Pages</button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 lg:gap-8 text-[#23A6F0]">
          
          {/* --- CONDITIONAL USER SECTION (Desktop) --- */}
          <div className="hidden lg:flex items-center gap-2 font-bold cursor-pointer">
            {user && user.name ? (
              // Logged In State
              <div className="flex items-center gap-2">
                <Gravatar 
                  email={user.email} 
                  size={25} 
                  className="rounded-full" 
                  default="identicon" 
                />
                <span className="text-[#23A6F0]">{user.name}</span>
              </div>
            ) : (
              // Logged Out State
              <>
                <User size={18} />
                <button onClick={() => history.push("/login")} className="hover:underline">Login</button>
                <span> / </span>
                <button onClick={() => history.push("/signup")} className="hover:underline">Register</button>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Search size={24} className="cursor-pointer" />
            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart size={24} />
              <span className="text-xs hidden lg:inline">1</span>
            </div>
            <div className="hidden lg:flex items-center gap-1 cursor-pointer">
              <Heart size={24} />
              <span className="text-xs">1</span>
            </div>
            <Menu size={24} className="lg:hidden cursor-pointer text-[#252B42]" />
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <div className="lg:hidden flex flex-col items-center gap-8 py-12 text-3xl text-[#737373]">
        <button onClick={() => history.push("/")}>Home</button>
        <button onClick={() => history.push("/product")}>Product</button>
        <button onClick={() => history.push("/pricing")}>Pricing</button>
        <button onClick={() => history.push("/contact")}>Contact</button>
        <button onClick={() => history.push("/pages")}>Pages</button>
        
        {/* --- CONDITIONAL USER SECTION (Mobile) --- */}
        <div className="text-2xl">
          {user && user.name ? (
            <div className="flex flex-col items-center gap-4">
               <Gravatar email={user.email} size={50} className="rounded-full" />
               <span className="text-[#23A6F0] font-bold">{user.name}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
               <button onClick={() => history.push("/login")} className="text-[#23A6F0] hover:underline">Login</button>
               <span className="text-[#23A6F0]"> / </span>
               <button onClick={() => history.push("/signup")} className="text-[#23A6F0] hover:underline">Register</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}