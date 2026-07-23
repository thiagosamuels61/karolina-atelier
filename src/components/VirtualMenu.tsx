import React from 'react';
import { type Product, BENTO_CAKES_LIST, BOLOS_CONFEITADOS_LIST, BRIGADEIROS_LIST } from '../data/products';
import { ShoppingBag, Clock, Check } from 'lucide-react';

interface VirtualMenuProps {
  onSelectProduct: (product: Product) => void;
}

export const VirtualMenu: React.FC<VirtualMenuProps> = ({ onSelectProduct }) => {
  
  // Renderiza card de produto unificado em 2 colunas (Layout conforme figma/referências)
  const renderProductSection = (product: Product) => {
    const isBento = product.category === 'bento';
    const isBolo = product.category === 'bolos';
    const isBrigadeiro = product.category === 'brigadeiros';

    return (
      <div
        key={product.id}
        className="flex flex-col md:flex-row gap-8 md:gap-12 py-12 border-b border-[#3D2B1F]/10 last:border-b-0 font-sans"
      >
        {/* Coluna da Imagem (Dimensões exatas: 704x766px em desktop) */}
        <div className="w-full h-80 sm:h-[450px] md:w-[704px] md:h-[766px] overflow-hidden rounded-[2rem] shadow-sm bg-white flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Coluna de Informações (Toma o espaço restante flex-1) */}
        <div className="flex-1 flex flex-col justify-between py-2 space-y-6">
          <div className="space-y-4">
            
            {/* Tag de Antecedência */}
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#3D2B1F]/60 bg-[#3D2B1F]/5 w-fit px-2.5 py-1 rounded-lg uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#C0707D]" />
              <span>{product.minLeadTimeText}</span>
            </div>

            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#3D2B1F] leading-tight">
              {product.title}
            </h3>

            {/* Preço em destaque diretamente */}
            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-sm font-bold text-[#3D2B1F]/60">A partir de</span>
              <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#C0707D]">
                {product.priceText}
              </span>
              <span className="text-xs text-gray-500 font-bold">
                {product.unitText}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#3D2B1F]/70 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Detalhes Específicos por Categoria */}
            {isBento && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Recheios e Massas:
                </span>
                <ul className="text-xs sm:text-sm text-[#3D2B1F]/80 grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C0707D] flex-shrink-0" />
                    <span>Massa Chocolate ou Baunilha</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C0707D] flex-shrink-0" />
                    <span>Recheio Brigadeiro ou Beijinho</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C0707D] flex-shrink-0" />
                    <span>Recheio Ninho ou Doce de Leite</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#C0707D] font-semibold">
                    <Check className="w-4 h-4 text-[#C0707D] flex-shrink-0" />
                    <span>Ninho c/ Nutella ou Morango (+R$ 5,00)</span>
                  </li>
                </ul>
                <p className="text-[11px] text-[#C0707D] font-bold block pt-1 bg-[#C0707D]/5 p-2 rounded-lg border border-[#C0707D]/10 w-fit">
                  🎁 Acompanha de brinde: 1 vela, 1 colher e laço para presente.
                </p>
              </div>
            )}

            {isBolo && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Opções de Recheios em Chantininho:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#3D2B1F]/80 font-medium">
                  {product.flavors?.map((flv, idx) => {
                    const isSpecial = flv.includes('+R$');
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C0707D] flex-shrink-0" />
                        <span className={isSpecial ? 'text-[#C0707D] font-semibold' : ''}>
                          {flv}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-2 text-xs text-gray-500 font-medium space-y-1">
                  <p>• Peso mínimo para confecção: 1 kg.</p>
                  <p>• Cobertura com Glitter/Brilho/Aveludado: acréscimo de R$ 10,00 por kg.</p>
                  <p>• Embalagem protetora especial inclusa por apenas R$ 8,00.</p>
                </div>
              </div>
            )}

            {isBrigadeiro && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Sabores inclusos no cento (Escolha até 3 por cento):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#3D2B1F]/80 font-medium">
                  {product.flavors?.map((flv, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#C0707D] flex-shrink-0" />
                      <span>{flv}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-xs text-gray-500 font-medium space-y-1">
                  <p>• Forminhas decorativas inclusas (cores combinadas após o pedido).</p>
                  <p>• Perfeitos para comemorações e eventos corporativos.</p>
                </div>
              </div>
            )}

          </div>

          <div className="pt-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full md:w-auto bg-[#C0707D] hover:bg-[#a65663] text-white py-4 px-8 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Personalizar e Encomendar</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="menu-secoes" className="bg-[#FAF6F0] py-12 sm:py-20 space-y-24 max-w-6xl mx-auto px-4">
      
      {/* Aviso de Prazo e Atendimento */}
      <div className="bg-white p-6 rounded-[2rem] border border-[#3D2B1F]/10 flex flex-col items-center justify-center gap-4 shadow-sm animate-fade-in-up text-center">
        <div className="space-y-1.5">
          <h4 className="font-serif font-bold text-[#3D2B1F] text-lg sm:text-xl">
            Informações sobre Encomendas
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-bold">
            Bento cakes com <strong>1 dia de antecedência</strong> e bolos com <strong>2 dias de antecedência</strong>.
          </p>
        </div>
      </div>

      {/* SEÇÃO 1: BENTÔ CAKES */}
      <section id="bento" className="space-y-8 scroll-mt-24 animate-fade-in-up">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Bentô Cakes Personalizados
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans">
              Mini bolos individuais no buttercream com desenhos de Flork e frases divertidas.
            </p>
          </div>
          <span className="text-xs font-bold text-[#C0707D] bg-[#C0707D]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit font-sans">
            {BENTO_CAKES_LIST[0].minLeadTimeText}
          </span>
        </div>
        <div className="space-y-8">
          {BENTO_CAKES_LIST.map(renderProductSection)}
        </div>
      </section>

      {/* SEÇÃO 2: BOLOS CONFEITADOS */}
      <section id="bolos" className="space-y-8 scroll-mt-24 animate-fade-in-up">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Bolos Festivos e Confeitados
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans">
              Feitos por kg (mínimo de 1kg). Cobertura em Chantininho cremoso estruturado.
            </p>
          </div>
          <span className="text-xs font-bold text-[#C0707D] bg-[#C0707D]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit font-sans">
            {BOLOS_CONFEITADOS_LIST[0].minLeadTimeText}
          </span>
        </div>
        <div className="space-y-8">
          {BOLOS_CONFEITADOS_LIST.map(renderProductSection)}
        </div>
      </section>

      {/* SEÇÃO 3: BRIGADEIROS GOURMET */}
      <section id="brigadeiros" className="space-y-8 scroll-mt-24 animate-fade-in-up">
        <div className="border-b border-[#3D2B1F]/15 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#3D2B1F] tracking-tight">
              Docinhos e Brigadeiros Gourmet
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans">
              Enrolados artesanalmente com chocolate nobre e confeitos especiais.
            </p>
          </div>
          <span className="text-xs font-bold text-[#C0707D] bg-[#C0707D]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit font-sans">
            {BRIGADEIROS_LIST[0].minLeadTimeText}
          </span>
        </div>
        <div className="space-y-8">
          {BRIGADEIROS_LIST.map(renderProductSection)}
        </div>
      </section>

    </div>
  );
};
