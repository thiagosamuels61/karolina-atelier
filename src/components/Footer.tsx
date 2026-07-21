import { Heart, MapPin, Phone, Camera, Sparkles, ShoppingBag } from 'lucide-react';
import { generateQuickContactLink, FORMATTED_PHONE } from '../utils/whatsapp';

interface FooterProps {
  onOpenQuickOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuickOrder }) => {
  return (
    <footer className="bg-[#3D2B1F] text-[#FAF6F0] pt-16 pb-12 border-t-4 border-[#D48C95]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Marca */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D48C95] flex items-center justify-center text-white font-serif font-bold text-xl shadow-md">
                K
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white block leading-tight">
                  Karolina Atelier
                </span>
                <span className="text-xs text-[#F4C2C2] tracking-widest uppercase font-semibold block">
                  Confeitaria Artesanal • Ana Karolina
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E5D5CB]/80 leading-relaxed max-w-sm">
              Transformando momentos especiais em memórias inesquecíveis com Bentô Cakes divertidos, 
              Kits Festa completos e brigadeiros gourmet com ingredientes selecionados.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D48C95] text-white flex items-center justify-center transition-colors"
                title="Instagram @karolinaatelier"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href={generateQuickContactLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors shadow-md"
                title="WhatsApp Direct"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider">
              Nossos Produtos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E5D5CB]">
              <li>
                <a href="#bento" className="hover:text-[#D48C95] transition-colors flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D48C95]" /> Bentô Cakes (R$ 38,00)
                </a>
              </li>
              <li>
                <a href="#kits" className="hover:text-[#D48C95] transition-colors">
                  Kits Festa Completos
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#D48C95] transition-colors">
                  Bolos de Festa por kg
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#D48C95] transition-colors">
                  Centos de Brigadeiro Gourmet
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#D48C95] transition-colors">
                  Pipoca Gourmet & Dindin
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Localização */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider">
              Atendimento em Ceilândia
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-[#E5D5CB]">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D48C95] flex-shrink-0" />
                <span>Ceilândia - Distrito Federal (DF)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>WhatsApp: {FORMATTED_PHONE}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuickOrder}
                className="w-full bg-[#D48C95] hover:bg-[#c27982] text-white py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Abrir Simulador de Pedido</span>
              </button>
            </div>
          </div>

        </div>

        {/* Direitos e Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E5D5CB]/60 gap-4">
          <p>© {new Date().getFullYear()} Karolina Atelier • Confeitaria Artesanal Ana Karolina. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart className="w-3.5 h-3.5 text-[#D48C95] fill-current" /> para conversão de anúncios em Ceilândia-DF.
          </p>
        </div>

      </div>
    </footer>
  );
};
