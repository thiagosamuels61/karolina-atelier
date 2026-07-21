import React from 'react';
import { type Product, BENTO_CAKES_LIST, BOLOS_CONFEITADOS_LIST, BRIGADEIROS_LIST, KITS_FESTA_LIST } from '../data/products';
import { ShoppingBag, Star, Clock, AlertTriangle, Check } from 'lucide-react';

interface VirtualMenuProps {
  onSelectProduct: (product: Product) => void;
}

export const VirtualMenu: React.FC<VirtualMenuProps> = ({ onSelectProduct }) => {
  
  const renderProductCard = (product: Product) => {
    return (
      <div
        key={product.id}
        className="bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#E18126]/30 group"
      >
        {/* Imagem do Produto com Zoom */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Badge de Destaque / Popularidade */}
          {product.badge && (
            <div className="absolute top-4 left-4 bg-[#E18126] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </div>
          )}

          {product.isPopular && !product.badge && (
            <div className="absolute top-4 left-4 bg-[#111111] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" /> Destaque
            </div>
          )}

          {/* Tarjeta de Preço */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-gray-100">
            <span className="font-serif font-bold text-[#E18126] text-base">
              {product.priceText}
            </span>
          </div>
        </div>

        {/* Conteúdo Informativo */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            
            {/* Tag de Tempo Mínimo de Antecedência */}
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 bg-gray-50 w-fit px-2.5 py-1 rounded-lg border border-gray-100">
              <Clock className="w-3.5 h-3.5 text-[#E18126]" />
              <span>{product.minLeadTimeText.replace('⏳ ', '').replace('🗓️ ', '')}</span>
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] leading-tight">
              {product.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1">
              {product.description}
            </p>

            {/* Lista de Sabores / Recheios */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100 space-y-1.5 pt-3">
                <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wider block">
                  Sabores / Recheios Inclusos:
                </span>
                <ul className="text-xs text-[#111111] space-y-1">
                  {product.flavors.map((flv, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#E18126] flex-shrink-0" />
                      <span>{flv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Botão de Encomenda */}
          <div className="pt-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full bg-[#111111] hover:bg-[#E18126] text-white py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:scale-[1.01]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Personalizar & Pedir no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-10 sm:py-16 space-y-20 max-w-6xl mx-auto px-4">
      
      {/* Banner de Antecedência & Alerta Importante */}
      <div className="bg-amber-50/60 p-5 sm:p-6 rounded-3xl border border-[#E18126]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start gap-3.5">
          <div className="p-3 bg-[#E18126]/10 text-[#E18126] rounded-full mt-0.5 sm:mt-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-[#111111] text-lg">
              Regras Importantes de Antecedência
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
              ⚠️ <strong>Bentô Cakes:</strong> Pedidos com no mínimo <strong>1 dia de antecedência</strong>.<br />
              ⏳ <strong>Bolos de Festa, Brigadeiros & Kits:</strong> Pedidos com no mínimo <strong>2 dias de antecedência</strong> para garantir a estruturação e confeito perfeitos.
            </p>
          </div>
        </div>
        <a
          href="#bento"
          className="text-xs sm:text-sm font-bold text-[#E18126] hover:text-[#111111] transition-colors whitespace-nowrap"
        >
          Montar Bentô Cake Agora →
        </a>
      </div>

      {/* --- SEÇÃO 1: BENTÔ CAKES --- */}
      <section id="bento" className="space-y-6 scroll-mt-24">
        <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] tracking-tight">
              🎁 Bentô Cakes Personalizados
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Serve de 3 a 6 pessoas • Mini bolo fofinho e divertido com frases.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            1 Dia de Antecedência
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {BENTO_CAKES_LIST.map(renderProductCard)}
        </div>
      </section>

      {/* --- SEÇÃO 2: BOLOS CONFEITADOS --- */}
      <section id="bolos" className="space-y-6 scroll-mt-24">
        <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] tracking-tight">
              🎂 Bolos Festivos & Confeitados
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Vendidos por kg • Recheios nobres e confeitados com carinho.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            2 Dias de Antecedência
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {BOLOS_CONFEITADOS_LIST.map(renderProductCard)}
        </div>
      </section>

      {/* --- SEÇÃO 3: BRIGADEIROS GOURMET --- */}
      <section id="brigadeiros" className="space-y-6 scroll-mt-24">
        <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] tracking-tight">
              🍬 Docinhos & Brigadeiros Gourmet
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Chocolate nobre e enrolados individualmente com carinho.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            2 Dias de Antecedência
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {BRIGADEIROS_LIST.map(renderProductCard)}
        </div>
      </section>

      {/* --- SEÇÃO 4: KITS FESTA COMBO --- */}
      <section id="kits" className="space-y-6 scroll-mt-24">
        <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] tracking-tight">
              ✨ Combos & Kits Festa
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Sua comemoração pronta e com até 20% de economia.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            2 Dias de Antecedência
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {KITS_FESTA_LIST.map(renderProductCard)}
        </div>
      </section>

    </div>
  );
};
