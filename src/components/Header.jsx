import { 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, 
  Search, ShoppingCart, Heart, User, ChevronDown, Menu 
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch
import { useHistory } from 'react-router-dom';
import Gravatar from 'react-gravatar'; 
import { useState } from 'react';
import CartDropdown from './CardDropdown';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shop.cart);
  const categories = useSelector((state) => state.product.categories);
  
  const history = useHistory();
  const dispatch = useDispatch();

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
    window.location.reload();
  };

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
        <div className="hidden lg:flex items-center gap-6 text-[#737373] font-bold">
          <button onClick={() => history.push("/")} className="hover:text-[#252B42]">Home</button>
          
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#252B42]">
              Shop <ChevronDown size={14} />
            </button>
            {/* Shop Dropdown Menu */}
            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-xl p-8 min-w-[420px] z-50 rounded-md border border-gray-100">
              <div className="flex gap-16">
                <div className="flex flex-col gap-4">
                  <h3 className="!font-bold text-[#252B42] text-lg mb-2">Kadın</h3>
                  {categories?.filter((cat) => cat.gender === "k").map((cat) => (
                    <button key={cat.id} onClick={() => history.push(`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`)} className="text-left text-[#737373] hover:text-[#23A6F0] font-medium transition-colors">
                      {cat.title}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="!font-bold text-[#252B42] text-lg mb-2">Erkek</h3>
                  {categories?.filter((cat) => cat.gender === "e").map((cat) => (
                    <button key={cat.id} onClick={() => history.push(`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`)} className="text-left text-[#737373] hover:text-[#23A6F0] font-medium transition-colors">
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => history.push("/about")} className="hover:text-[#252B42]">About</button>
          <button onClick={() => history.push("/blog")} className="hover:text-[#252B42]">Blog</button>
          <button onClick={() => history.push("/contact")} className="hover:text-[#252B42]">Contact</button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 lg:gap-8 text-[#23A6F0]">
          
          {/* --- USER SECTION (Desktop with Dropdown) --- */}
          <div className="hidden lg:block">
            {user && user.name ? (
              <div className="group relative flex items-center gap-2 py-2 cursor-pointer">
                <Gravatar email={user.email} size={25} className="rounded-full" default="identicon" />
                <span className="font-bold">{user.name}</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />

                {/* Account Dropdown */}
                <div className="hidden group-hover:block absolute top-full right-0 bg-white shadow-xl p-4 min-w-[180px] z-50 rounded-md border border-gray-100">
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => history.push("/previous-orders")}
                      className="text-left text-sm text-[#737373] hover:text-[#23A6F0] font-bold transition-colors"
                    >
                      Siparişlerim
                    </button>
                    <hr className="border-gray-50" />
                    <button 
                      onClick={handleLogout}
                      className="text-left text-sm text-red-500 hover:text-red-700 font-bold transition-colors"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 font-bold">
                <User size={18} />
                <button onClick={() => history.push("/login")} className="hover:underline">Login</button>
                <span> / </span>
                <button onClick={() => history.push("/signup")} className="hover:underline">Register</button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Search size={24} className="cursor-pointer" />
            <div 
              className="relative flex items-center gap-1 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsCartOpen(!isCartOpen);
              }}
            >
              <ShoppingCart size={22} />
              <span className="text-xs font-bold">{totalCount}</span>
              {isCartOpen && <CartDropdown/>}
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
        <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#252B42]">
              Shop <ChevronDown size={14} />
            </button>
            {/* Shop Dropdown Menu */}
            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-xl p-8 min-w-[420px] z-50 rounded-md border border-gray-100">
              <div className="flex gap-16">
                <div className="flex flex-col gap-4">
                  <h3 className="!font-bold text-[#252B42] text-lg mb-2">Kadın</h3>
                  {categories?.filter((cat) => cat.gender === "k").map((cat) => (
                    <button key={cat.id} onClick={() => history.push(`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`)} className="text-left text-[#737373] hover:text-[#23A6F0] font-medium transition-colors">
                      {cat.title}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="!font-bold text-[#252B42] text-lg mb-2">Erkek</h3>
                  {categories?.filter((cat) => cat.gender === "e").map((cat) => (
                    <button key={cat.id} onClick={() => history.push(`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`)} className="text-left text-[#737373] hover:text-[#23A6F0] font-medium transition-colors">
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        <button onClick={() => history.push("/about")}>About</button>
        <button onClick={() => history.push("/contact")}>Contact</button>
        
        <div className="text-2xl pt-4 border-t w-full flex flex-col items-center gap-6">
          {user && user.name ? (
            <>
              <div className="flex items-center gap-4">
                <Gravatar email={user.email} size={50} className="rounded-full" />
                <span className="text-[#23A6F0] font-bold">{user.name}</span>
              </div>
              <button onClick={() => history.push("/previous-orders")} className="text-[#23A6F0] font-bold">Siparişlerim</button>
              <button onClick={handleLogout} className="text-red-500 font-bold">Çıkış Yap</button>
            </>
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