import { 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, 
  Search, ShoppingCart, Heart, User, ChevronDown, Menu 
} from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full font-montserrat">
      {/* --- Top Bar (Hidden on Mobile, Visible on Desktop) --- */}
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
        
        <div>
          Follow Us and get a chance to win 80% off
        </div>

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
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-6 text-[#737373] mr-100 font-bold">
          <button className="hover:text-[#252B42]">Home</button>
          <button className="flex items-center gap-1 hover:text-[#252B42]">
            Shop <ChevronDown size={14} />
          </button>
          <button className="hover:text-[#252B42]">About</button>
          <button className="hover:text-[#252B42]">Blog</button>
          <button className="hover:text-[#252B42]">Contact</button>
          <button className="hover:text-[#252B42]">Pages</button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 lg:gap-8 text-[#23A6F0]">
          {/* Login/Register (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 font-bold cursor-pointer">
            <User size={18} />
            <span>Login / Register</span>
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

            {/* Mobile Menu Icon (Hidden on Desktop) */}
            <Menu size={24} className="lg:hidden cursor-pointer text-[#252B42]" />
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Links (Visible only on Mobile) --- */}
      <div className="lg:hidden flex flex-col items-center gap-8 py-12 text-3xl text-[#737373]">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">Product</button>
        <button className="cursor-pointer">Pricing</button>
        <button className="cursor-pointer">Contact</button>
      </div>
    </header>
  );
}