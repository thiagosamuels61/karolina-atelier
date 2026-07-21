import { Package, Check, ShoppingBag, Star } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/products';

interface KitSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const KitSection: React.FC<KitSectionProps> = ({ onSelectProduct }) => {
  const kitProducts = PRODUCTS.filter((p) => p.category === 'kits');

  return (
    <section id="kits" className="py-16 sm:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-[#FFF0F3] text-[#D48C95] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D48C95]/30">
            <Package className="w-4 h-4" /> Economia & Praticidade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F]">
            Kits Festa Completos & Promocionais
          </h2>
          <p className="text-[#5C3A21] text-base sm:text-lg">
            Sua festa pronta sem estresse! Bolo fofinho + brigadeiros nobres + pipoca gourmet com preços especiais em combo.
          </p>
        </div>

        {/* Grade dos Kits */}
        <div className="grid md:grid-cols-3 gap-8">
          {kitProducts.map((kit) => {
            const isVip = kit.id === 'kit-m-vip';
            return (
              <div
                key={kit.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isVip
                    ? 'glass-card border-2 border-[#D48C95] shadow-2xl scale-[1.03] lg:scale-[1.05] z-10 bg-white'
                    : 'glass-card border border-[#E5D5CB] shadow-lg hover:shadow-xl bg-white/90'
                }`}
              >
                {/* Badge Destaque VIP */}
                {isVip && (
                  <div className="bg-[#D48C95] text-white text-xs font-bold text-center py-1.5 uppercase tracking-widest flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" /> MAIS PROCURADO PARA FESTAS
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Foto do Kit */}
                  <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-inner group">
                    <img
                      src={kit.image}
                      alt={kit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#3D2B1F]/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {kit.badge || 'Kit Completo'}
                    </div>
                  </div>

                  {/* Título & Preço */}
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-[#3D2B1F] leading-tight">
                      {kit.title}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-serif font-bold text-[#D48C95]">
                        {kit.priceText}
                      </span>
                      <span className="text-xs text-[#8B4513] font-medium">/ {kit.unitText}</span>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-xs sm:text-sm text-[#5C3A21] leading-relaxed">
                    {kit.description}
                  </p>

                  {/* Sabores Inclusos */}
                  {kit.flavors && kit.flavors.length > 0 && (
                    <div className="bg-[#FFF5F6] p-3.5 rounded-xl border border-[#E5D5CB]/50 space-y-1.5">
                      <span className="text-[11px] font-bold text-[#8B4513] uppercase tracking-wider block">
                        Opções Populares de Recheio:
                      </span>
                      {kit.flavors.map((flv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#3D2B1F] font-medium">
                          <Check className="w-3.5 h-3.5 text-[#D48C95] flex-shrink-0 mt-0.5" />
                          <span>{flv}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Botão de Encomenda do Kit */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectProduct(kit)}
                    className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isVip
                        ? 'bg-gradient-to-r from-[#D48C95] to-[#C57B85] hover:from-[#c27982] hover:to-[#b56b75] text-white'
                        : 'bg-[#5C3A21] hover:bg-[#4a2e1a] text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Personalizar & Encomendar Kit</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
