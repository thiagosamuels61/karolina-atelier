import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { logoImg } from '../data/products';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-[#FAF6F0] border-b border-[#3D2B1F]/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo e Nome da Marca */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Karolina Atelier Logo"
            className="h-12 w-auto sm:h-14 object-contain"
          />
        </div>

        {/* CTA Button Direto ao Ponto */}
        <a
          href="#menu-secoes"
          className="inline-flex items-center gap-2 bg-[#3D2B1F] hover:bg-[#E18126] text-[#FAF6F0] px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-[1.03] cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Fazer Encomenda</span>
        </a>

      </div>
    </header>
  );
};
