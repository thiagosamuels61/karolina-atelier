import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, MapPin, PhoneCall, Menu as MenuIcon, X } from 'lucide-react';
import { generateQuickContactLink, FORMATTED_PHONE, LOCATION_TEXT } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuickOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Informativo */}
      <div className="bg-[#5C3A21] text-[#FAF6F0] py-2 px-4 text-xs sm:text-sm text-center font-medium flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center gap-1 bg-[#D48C95]/30 text-[#FFF0F3] px-2 py-0.5 rounded-full text-[11px] font-semibold border border-[#D48C95]/40">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
          AGENDA ABERTA
        </span>
        <span className="hidden sm:inline">✨ Encomendas para esta semana em</span>
        <span className="inline-flex items-center gap-1 text-[#F4C2C2] font-semibold">
          <MapPin className="w-3.5 h-3.5" /> {LOCATION_TEXT}
        </span>
        <span className="hidden md:inline">• Atendimento personalizado via WhatsApp</span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5D5CB]'
            : 'bg-[#FAF6F0]/80 backdrop-blur-sm py-4 border-b border-[#E5D5CB]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Marca */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#D48C95] to-[#E5D5CB] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#5C3A21] font-serif font-bold text-lg">
                K
              </div>
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-[#3D2B1F] tracking-wide block leading-tight">
                Karolina Atelier
              </span>
              <span className="text-[10px] sm:text-xs text-[#8B4513] tracking-widest uppercase font-semibold block">
                Confeitaria Artesanal • Ana Karolina
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#5C3A21]">
            <a href="#bento" className="hover:text-[#D48C95] transition-colors flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#D48C95]" /> Bentô Cakes
            </a>
            <a href="#kits" className="hover:text-[#D48C95] transition-colors">
              Kits Festa
            </a>
            <a href="#cardapio" className="hover:text-[#D48C95] transition-colors">
              Cardápio Completo
            </a>
            <a href="#sobre" className="hover:text-[#D48C95] transition-colors">
              Sobre Nós
            </a>
            <a href="#faq" className="hover:text-[#D48C95] transition-colors">
              Dúvidas
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuickOrder}
              className="glass-card hover:bg-white text-[#5C3A21] px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 border border-[#E5D5CB] hover:border-[#D48C95] transition-all cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#D48C95]" /> Monte seu Pedido
            </button>

            <a
              href={generateQuickContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e7569] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuickOrder}
              className="bg-[#D48C95] text-white p-2 rounded-full shadow-sm"
              title="Monte seu pedido"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5C3A21] hover:bg-[#E5D5CB]/40 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#FAF6F0] border-b border-[#E5D5CB] px-4 pt-3 pb-5 space-y-3 mt-2 shadow-lg animate-in fade-in slide-in-from-top-2">
            <a
              href="#bento"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#5C3A21] hover:text-[#D48C95]"
            >
              🎁 Bentô Cakes (Anúncio Especial)
            </a>
            <a
              href="#kits"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#5C3A21] hover:text-[#D48C95]"
            >
              ✨ Kits Festa Prontos
            </a>
            <a
              href="#cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#5C3A21] hover:text-[#D48C95]"
            >
              🎂 Cardápio & Preços
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#5C3A21] hover:text-[#D48C95]"
            >
              👩‍🍳 Conheça a Ana Karolina
            </a>
            <a
              href={generateQuickContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <PhoneCall className="w-5 h-5" /> Falar com a Ana no WhatsApp ({FORMATTED_PHONE})
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
