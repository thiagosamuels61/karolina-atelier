import React from 'react';
import { Heart, MapPin, Phone, Camera, Sparkles } from 'lucide-react';
import { generateQuickContactLink, FORMATTED_PHONE } from '../utils/whatsapp';
import { logoImg } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#111111] pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          {/* Coluna 1: Marca */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Karolina Atelier Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="font-serif font-bold text-lg text-[#111111] block leading-tight">
                  Karolina Atelier
                </span>
                <span className="text-[10px] text-gray-400 tracking-wider uppercase font-bold block">
                  Confeitaria Artesanal • Ana Karolina
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              Transformando momentos especiais em memórias inesquecíveis com Bentô Cakes divertidos, 
              Kits Festa completos e brigadeiros gourmet com ingredientes nobres em Ceilândia - DF.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#E18126] text-[#111111] hover:text-white flex items-center justify-center border border-gray-100 transition-colors cursor-pointer"
                title="Instagram @karolinaatelier"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href={generateQuickContactLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                title="WhatsApp Direct"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Seções */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#111111] uppercase tracking-wider">
              Nossos Doces
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <a href="#bento" className="hover:text-[#E18126] transition-colors flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#E18126]" /> Bentô Cakes
                </a>
              </li>
              <li>
                <a href="#bolos" className="hover:text-[#E18126] transition-colors">
                  Bolos Confeitados
                </a>
              </li>
              <li>
                <a href="#brigadeiros" className="hover:text-[#E18126] transition-colors">
                  Brigadeiros Gourmet
                </a>
              </li>
              <li>
                <a href="#kits" className="hover:text-[#E18126] transition-colors">
                  Kits Festa Prontos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Localização */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#111111] uppercase tracking-wider">
              Contato & Local
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E18126] flex-shrink-0" />
                <span>Ceilândia - Distrito Federal (DF)</span>
              </p>
              <p className="flex items-center gap-2 font-semibold text-[#111111]">
                <Phone className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>WhatsApp: {FORMATTED_PHONE}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Direitos e Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Karolina Atelier • Ana Karolina. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-[#E18126] fill-current" /> para tráfego pago em Ceilândia-DF.
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
