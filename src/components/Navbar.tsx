import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';
import { generateQuickContactLink, FORMATTED_PHONE, LOCATION_TEXT } from '../utils/whatsapp';
import { logoImg } from '../data/products';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Bar Informativo */}
      <div className="bg-[#111111] text-[#FAF6F0] py-2.5 px-4 text-xs sm:text-sm text-center font-medium flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center gap-1 bg-[#E18126]/20 text-amber-200 px-2 py-0.5 rounded-full text-[10px] font-bold border border-[#E18126]/30">
          🟢 AGENDA ABERTA
        </span>
        <span>• Peça com antecedência mínima de 1 a 2 dias em</span>
        <span className="inline-flex items-center gap-1 text-[#E18126] font-bold">
          <MapPin className="w-3.5 h-3.5" /> {LOCATION_TEXT}
        </span>
      </div>

      {/* Main Navbar Clean (Sem Menus de Navegação complexos) */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Centralizado/Esquerda */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Karolina Atelier Logo"
            className="h-12 w-auto sm:h-14 object-contain"
          />
          <div>
            <span className="font-serif font-extrabold text-lg sm:text-xl text-[#111111] tracking-wide block leading-tight">
              Karolina Atelier
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase font-bold block">
              Cardápio Virtual • Ceilândia-DF
            </span>
          </div>
        </div>

        {/* WhatsApp Rápido */}
        <a
          href={generateQuickContactLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E18126] hover:text-[#111111] transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-[#25D366]" />
          <span>Falar com Ana: {FORMATTED_PHONE}</span>
        </a>
      </div>
    </header>
  );
};
