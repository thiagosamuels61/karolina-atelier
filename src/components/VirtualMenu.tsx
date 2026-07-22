import React from 'react';
import { type Product, BENTO_CAKES_LIST, BOLOS_CONFEITADOS_LIST, BRIGADEIROS_LIST, KITS_FESTA_LIST } from '../data/products';
import { ShoppingBag, Clock, Check } from 'lucide-react';

interface VirtualMenuProps {
  onSelectProduct: (product: Product) => void;
}

export const VirtualMenu: React.FC<VirtualMenuProps> = ({ onSelectProduct }) => {
  
  // Renderiza card genérico de produto (usado para Bento e Brigadeiros)
  const renderStandardCard = (product: Product) => {
    return (
      <div
        key={product.id}
        className="premium-card flex flex-col justify-between overflow-hidden"
      >
        {/* Imagem do Produto com Zoom */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FAF6F0]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          
          {/* Badge de Destaque / Popularidade */}
          {product.badge && (
            <div className="absolute top-4 left-4 bg-[#E18126] text-[#FAF6F0] text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              {product.badge}
            </div>
          )}

          {/* Tarjeta de Preço */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#3D2B1F]/10">
            <span className="font-serif font-extrabold text-[#3D2B1F] text-base">
              {product.priceText}
            </span>
          </div>
        </div>

        {/* Conteúdo Informativo */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            
            {/* Tag de Tempo Mínimo de Antecedência */}
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#3D2B1F]/60 bg-[#3D2B1F]/5 w-fit px-2.5 py-1 rounded-lg">
              <Clock className="w-3 h-3 text-[#E18126]" />
              <span>{product.minLeadTimeText}</span>
            </div>

            <h3 className="font-serif font-bold text-xl text-[#3D2B1F] leading-tight">
              {product.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#3D2B1F]/70 leading-relaxed pt-1">
              {product.description}
            </p>

            {/* Lista de Sabores / Recheios */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="bg-[#FAF6F0]/50 p-3 rounded-xl border border-[#3D2B1F]/5 space-y-1.5 pt-3">
                <span className="text-[9px] font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Sabores Disponíveis:
                </span>
                <ul className="text-xs text-[#3D2B1F] space-y-1">
                  {product.flavors.slice(0, 5).map((flv, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3 h-3 text-[#E18126] flex-shrink-0" />
                      <span>{flv.replace(' (+R$ 5,00)', '')}</span>
                    </li>
                  ))}
                  {product.flavors.length > 5 && (
                    <li className="text-[10px] text-[#E18126] font-bold pl-4">
                      + {product.flavors.length - 5} sabores no modal
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Botão de Encomenda */}
          <div className="pt-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full premium-button-primary py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Personalizar e Pedir</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Renderiza card de Bolo com Imagem em Destaque (Super Visível)
  const renderBoloCard = (product: Product) => {
    return (
      <div
        key={product.id}
        className="premium-card flex flex-col md:grid md:grid-cols-2 overflow-hidden w-full"
      >
        {/* Imagem Ampliada (Extremamente Visível) */}
        <div className="relative h-72 sm:h-96 md:h-full min-h-[320px] bg-[#FAF6F0] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-[#3D2B1F] text-[#FAF6F0] text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              {product.badge}
            </div>
          )}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-[#3D2B1F]/10">
            <span className="font-serif font-extrabold text-[#3D2B1F] text-lg">
              {product.priceText}
            </span>
          </div>
        </div>

        {/* Informações detalhadas */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#3D2B1F]/60 bg-[#3D2B1F]/5 w-fit px-2.5 py-1 rounded-lg">
              <Clock className="w-3 h-3 text-[#E18126]" />
              <span>{product.minLeadTimeText}</span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#3D2B1F] leading-tight">
              {product.title}
            </h3>

            <p className="text-sm text-[#3D2B1F]/70 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#3D2B1F] uppercase tracking-wider block">
                Sabores de Recheios em Chantininho (Flyer):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3D2B1F]">
                {product.flavors?.map((flv, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-medium bg-white p-2.5 rounded-xl border border-[#3D2B1F]/5">
                    <Check className="w-3.5 h-3.5 text-[#E18126] flex-shrink-0" />
                    <span>{flv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-gray-500 font-semibold bg-white p-3.5 rounded-2xl border border-[#3D2B1F]/5 space-y-1">
              <span className="text-xs text-[#3D2B1F] font-bold block mb-1">Informações Adicionais:</span>
              <p>• Peso mínimo para confecção: 1,5 kg (Chantininho artesanal).</p>
              <p>• Cobertura com Glitter/Brilho/Aveludado: acréscimo de R$ 10,00 por kg.</p>
              <p>• Embalagem protetora especial inclusa por apenas R$ 8,00 no pedido.</p>
            </div>
          </div>

          <div>
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full premium-button-primary py-4 px-6 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Personalizar e Encomendar Bolo</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Renderiza Kit Festa fiel ao layout do image 9.jpg (3 colunas com cores e destaques)
  const renderKitCard = (product: Product) => {
    // Cores específicas para cada Kit baseadas no image 9.jpg
    const isVIP = product.id === 'kit-festa-vip';
    
    // Tag e Cores
    const tagText = isVIP ? 'MAIS PROCURADO PARA FESTAS' : product.badge;
    const tagBgColor = isVIP ? 'bg-[#D48C95]' : 'bg-[#3D2B1F]'; // VIP é rosa/rose, outros marrom
    const borderStyle = isVIP ? 'border-2 border-[#D48C95] scale-[1.02] shadow-xl md:z-10' : 'border border-[#3D2B1F]/10';
    const buttonBgColor = isVIP ? 'bg-[#D48C95] hover:bg-[#b0727a]' : 'bg-[#3D2B1F] hover:bg-[#E18126]';

    // Opções Populares de recheio exibidas no card
    const popularFlavors = isVIP 
      ? ['Bolo Doce de Leite c/ Nozes + 100 Brigadeiros Tradicionais & Ninho', 'Bolo Ninho c/ Morango + 100 Brigadeiros Sortidos Gourmet']
      : product.id === 'kit-festa-petit'
      ? ['Bolo Ninho c/ Nutella + Brigadeiros Ao Leite e Ninho', 'Bolo Brigadeiro Belga + Brigadeiros Ao Leite e Beijinho', 'Bolo Red Velvet + Brigadeiros Sortidos Gourmet']
      : ['Bolo Especial de Andar (2.5kg) + 150 Brigadeiros Gourmet'];

    return (
      <div
        key={product.id}
        className={`bg-white rounded-[2rem] overflow-hidden flex flex-col justify-between transition-all duration-300 ${borderStyle}`}
      >
        {/* Tag Superior (Exatamente como o flyer 9.jpg) */}
        <div className={`${tagBgColor} text-[#FAF6F0] py-2.5 text-center text-[10px] font-bold uppercase tracking-widest`}>
          ★ {tagText}
        </div>

        {/* Imagem do Kit */}
        <div className="relative h-56 bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <h4 className="font-serif font-extrabold text-xl sm:text-2xl text-[#3D2B1F] leading-snug">
              {product.title}
            </h4>
            
            {/* Preço em Destaque Grande */}
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl sm:text-3xl font-serif font-extrabold ${isVIP ? 'text-[#D48C95]' : 'text-[#3D2B1F]'}`}>
                {product.priceText}
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">/ combo completo</span>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              {product.description}
            </p>

            {/* Box de Opções Populares de Recheio (Exatamente igual ao 9.jpg) */}
            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#3D2B1F]/5 space-y-2 text-left">
              <span className="text-[9px] font-extrabold uppercase text-[#3D2B1F]/70 tracking-wider block">
                Opções Populares de Recheio:
              </span>
              <ul className="text-xs text-[#3D2B1F] space-y-1.5">
                {popularFlavors.map((opt, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#E18126] flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Botão de Pedido */}
          <div>
            <button
              onClick={() => onSelectProduct(product)}
              className={`w-full ${buttonBgColor} text-white py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:scale-[1.01]`}
            >
              <span>Personalizar e Encomendar Kit</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="menu-secoes" className="bg-[#FAF6F0] py-12 sm:py-20 space-y-24 max-w-6xl mx-auto px-4">
      
      {/* Aviso de Prazo e Atendimento (Sem Emojis, Direto ao Ponto) */}
      <div className="bg-white p-6 rounded-[2rem] border border-[#3D2B1F]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1.5">
          <h4 className="font-serif font-bold text-[#3D2B1F] text-lg sm:text-xl">
            Informações sobre Encomendas
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Pedidos de Bentô Cakes devem ser feitos com no mínimo <strong>2 dias de antecedência</strong>. Bolos confeitados, Brigadeiros e Kits Festa exigem pelo menos <strong>3 dias de antecedência</strong>.
          </p>
        </div>
        <a
          href="#bolos"
          className="bg-[#3D2B1F] hover:bg-[#E18126] text-[#FAF6F0] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-sm"
        >
          Ver Bolos Confeitados
        </a>
      </div>

      {/* SEÇÃO 1: BENTÔ CAKES */}
      <section id="bento" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Bentô Cakes Personalizados
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Serve de 1 a 4 pessoas. Mini bolos individuais no buttercream com desenhos de Flork e frases divertidas.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit">
            2 dias de antecedência
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {BENTO_CAKES_LIST.map(renderStandardCard)}
        </div>
      </section>

      {/* SEÇÃO 2: BOLOS CONFEITADOS (Imagem Destaque) */}
      <section id="bolos" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Bolos Festivos e Confeitados
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Feitos por kg (mínimo de 1,5kg). Cobertura em Chantininho cremoso estruturado.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit">
            3 dias de antecedência
          </span>
        </div>
        <div className="space-y-8">
          {BOLOS_CONFEITADOS_LIST.map(renderBoloCard)}
        </div>
      </section>

      {/* SEÇÃO 3: BRIGADEIROS GOURMET */}
      <section id="brigadeiros" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Docinhos e Brigadeiros Gourmet
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Enrolados artesanalmente com chocolate nobre e confeitos especiais.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit">
            3 dias de antecedência
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {BRIGADEIROS_LIST.map(renderStandardCard)}
        </div>
      </section>

      {/* SEÇÃO 4: KITS FESTA COMBO (Fiel ao image 9.jpg) */}
      <section id="kits" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Kits Festa Completos e Promocionais
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Combos completos e planejados para a sua festa em família ou escritório, garantindo praticidade e economia.
            </p>
          </div>
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit">
            3 dias de antecedência
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
          {KITS_FESTA_LIST.map(renderKitCard)}
        </div>
      </section>

    </div>
  );
};
