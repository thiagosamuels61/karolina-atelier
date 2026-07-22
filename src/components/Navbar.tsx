import React from 'react';
import { logoImg } from '../data/products';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-[#FAF6F0] border-b border-[#3D2B1F]/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
        
        {/* Logo e Nome da Marca */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Karolina Atelier Logo"
            className="h-12 w-auto sm:h-14 object-contain"
          />
        </div>

      </div>
    </header>
  );
};
