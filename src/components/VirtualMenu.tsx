import React from 'react';
import { type Product, BENTO_CAKES_LIST, BOLOS_CONFEITADOS_LIST, BRIGADEIROS_LIST } from '../data/products';
import { ShoppingBag, Clock, Check } from 'lucide-react';

interface VirtualMenuProps {
  onSelectProduct: (product: Product) => void;
}

export const VirtualMenu: React.FC<VirtualMenuProps> = ({ onSelectProduct }) => {
  
  // Renderiza card de produto unificado em 2 colunas (Layout conforme image copy 21.png)
  const renderProductSection = (product: Product) => {
    const isBento = product.category === 'bento';
    const isBolo = product.category === 'bolos';
    const isBrigadeiro = product.category === 'brigadeiros';

    return (
      <div
        key={product.id}
        className="premium-card flex flex-col md:grid md:grid-cols-2 overflow-hidden w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#3D2B1F]/10 rounded-[2.5rem]"
      >
        {/* Coluna da Imagem (Foto Centralizada) */}
        <div className="relative h-72 sm:h-96 md:h-full min-h-[350px] bg-[#FAF6F0] overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Coluna de Informações (Informações relevantes ao lado) */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 font-sans">
          <div className="space-y-4">
            
            {/* Tag de Antecedência */}
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#3D2B1F]/60 bg-[#3D2B1F]/5 w-fit px-2.5 py-1 rounded-lg uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#E18126]" />
              <span>{product.minLeadTimeText}</span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#3D2B1F] leading-tight">
              {product.title}
            </h3>

            {/* Bloco de Preço */}
            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#3D2B1F]/5 w-fit min-w-[200px]">
              <span className="text-[10px] font-bold text-[#3D2B1F]/50 uppercase tracking-widest block">
                Valor
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#E18126] block mt-0.5">
                {product.priceText}
              </span>
              <span className="text-xs text-gray-500 font-bold block mt-1">
                {product.unitText}
              </span>
            </div>

            <p className="text-sm text-[#3D2B1F]/70 leading-relaxed">
              {product.description}
            </p>

            {/* Detalhes Específicos por Categoria */}
            {isBento && (
              <div className="bg-[#FAF6F0]/50 p-4 rounded-2xl border border-[#3D2B1F]/5 space-y-2">
                <span className="text-[10px] font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Sabores de Recheio:
                </span>
                <ul className="text-xs text-[#3D2B1F] grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  <li className="flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5 text-[#E18126]" />
                    <span>Massa Chocolate ou Baunilha</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5 text-[#E18126]" />
                    <span>Brigadeiro / Beijinho</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5 text-[#E18126]" />
                    <span>Leite Ninho / Castanha</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-bold text-[#E18126]">
                    <Check className="w-3.5 h-3.5 text-[#E18126]" />
                    <span>Ninho c/ Nutella ou Morango (+R$ 5,00)</span>
                  </li>
                </ul>
              </div>
            )}

            {isBolo && (
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Opções de Recheios em Chantininho:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3D2B1F]">
                  {product.flavors?.map((flv, idx) => {
                    const isSpecial = flv.includes('+R$');
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 font-bold bg-white p-2.5 rounded-xl border ${
                          isSpecial ? 'border-[#E18126]/30 bg-[#E18126]/5' : 'border-[#3D2B1F]/5'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#E18126] flex-shrink-0" />
                        <span className={isSpecial ? 'text-[#E18126]' : ''}>
                          {flv}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-2 text-[11px] text-gray-500 font-bold bg-white p-3.5 rounded-2xl border border-[#3D2B1F]/5 space-y-1">
                  <span className="text-xs text-[#3D2B1F] font-bold block mb-1">Informações Importantes:</span>
                  <p>• Peso mínimo para confecção: 1 kg.</p>
                  <p>• Cobertura com Glitter/Brilho/Aveludado: acréscimo de R$ 10,00 por kg.</p>
                  <p>• Embalagem protetora especial inclusa no pedido por apenas R$ 8,00.</p>
                </div>
              </div>
            )}

            {isBrigadeiro && (
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#3D2B1F] uppercase tracking-wider block">
                  Sabores inclusos no cento (Escolha até 3 por cento):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3D2B1F]">
                  {product.flavors?.map((flv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 font-bold bg-white p-2.5 rounded-xl border border-[#3D2B1F]/5"
                    >
                      <Check className="w-3.5 h-3.5 text-[#E18126] flex-shrink-0" />
                      <span>{flv}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-[11px] text-gray-500 font-bold bg-white p-3.5 rounded-2xl border border-[#3D2B1F]/5 space-y-1">
                  <span className="text-xs text-[#3D2B1F] font-bold block mb-1">Informações de Forminhas:</span>
                  <p>• Forminhas inclusas no cento (cor a combinar via WhatsApp).</p>
                  <p>• Ideal para festas infantis, casamentos e reuniões.</p>
                </div>
              </div>
            )}

          </div>

          <div>
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full premium-button-primary py-4 px-6 text-sm sm:text-base flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105"
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
      <div className="bg-white p-6 rounded-[2rem] border border-[#3D2B1F]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm animate-fade-in-up">
        <div className="space-y-1.5">
          <h4 className="font-serif font-bold text-[#3D2B1F] text-lg sm:text-xl">
            Informações sobre Encomendas
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-bold">
            Pedidos de Bentô Cakes devem ser feitos com no mínimo <strong>2 dias de antecedência</strong>. Bolos confeitados e Brigadeiros Gourmet exigem pelo menos <strong>3 dias de antecedência</strong>.
          </p>
        </div>
        <a
          href="#bolos"
          className="bg-[#3D2B1F] hover:bg-[#E18126] text-[#FAF6F0] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-sm font-sans"
        >
          Ver Bolos Confeitados
        </a>
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
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit font-sans">
            2 dias de antecedência
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
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit font-sans">
            3 dias de antecedência
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
          <span className="text-xs font-bold text-[#E18126] bg-[#E18126]/10 px-4 py-1.5 rounded-full uppercase tracking-wider w-fit font-sans">
            3 dias de antecedência
          </span>
        </div>
        <div className="space-y-8">
          {BRIGADEIROS_LIST.map(renderProductSection)}
        </div>
      </section>

    </div>
  );
};
