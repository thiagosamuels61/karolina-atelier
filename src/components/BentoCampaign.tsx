import { useState } from 'react';
import { Gift, Sparkles, MessageCircle, ArrowRight, Heart } from 'lucide-react';
import { PRODUCTS, BENTO_SUGGESTED_PHRASES, type Product } from '../data/products';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface BentoCampaignProps {
  onSelectProduct?: (product: Product, defaultPhrase?: string) => void;
}

export const BentoCampaign: React.FC<BentoCampaignProps> = () => {
  const bentoProduct = PRODUCTS.find((p) => p.id === 'bento-classico') || PRODUCTS[0];
  const [selectedPhrase, setSelectedPhrase] = useState(BENTO_SUGGESTED_PHRASES[0]);
  const [customPhraseInput, setCustomPhraseInput] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState(bentoProduct.flavors?.[0] || '');

  const activePhrase = customPhraseInput.trim() !== '' ? customPhraseInput : selectedPhrase;

  const handleDirectWhatsAppOrder = () => {
    const link = generateWhatsAppLink({
      productTitle: bentoProduct.title,
      categoryName: 'Bentô Cake Divertido',
      priceText: bentoProduct.priceText,
      selectedFlavor: selectedFlavor,
      bentoPhrase: activePhrase,
      sizeOption: 'Padrão (~350g - Serve até 3 pessoas)',
    });
    window.open(link, '_blank');
  };

  return (
    <section id="bento" className="py-16 bg-[#FFF5F6] border-y border-[#E5D5CB]/60 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D48C95]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção de Anúncios */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-[#D48C95] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <Gift className="w-4 h-4" /> Destaque de Tráfego Pago • Ceilândia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F]">
            Crie seu Bentô Cake Personalizado
          </h2>
          <p className="text-[#5C3A21] mt-3 text-base sm:text-lg">
            Escolha a frase perfeita, o sabor recheado e surpreenda quem você ama com o doce mais viral da internet por apenas <strong>R$ 38,00</strong>!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna 1: Simulador do Bentô Cake com Preview */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-[#E5D5CB] shadow-xl relative">
            <div className="absolute top-4 right-4 bg-[#D48C95]/15 text-[#8B4513] text-xs font-bold px-3 py-1 rounded-full border border-[#D48C95]/30">
              Personalização Instantânea
            </div>

            <h3 className="font-serif font-bold text-2xl text-[#3D2B1F] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D48C95]" /> 1. Clique ou digite a Frase:
            </h3>

            {/* Selector de Frases Sugeridas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 max-h-56 overflow-y-auto pr-1">
              {BENTO_SUGGESTED_PHRASES.map((phrase, idx) => {
                const isSelected = selectedPhrase === phrase && !customPhraseInput;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedPhrase(phrase);
                      setCustomPhraseInput('');
                    }}
                    className={`text-left p-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#D48C95] text-white border-[#D48C95] shadow-md scale-[1.01]'
                        : 'bg-white text-[#5C3A21] border-[#E5D5CB] hover:border-[#D48C95] hover:bg-[#FAF6F0]'
                    }`}
                  >
                    "{phrase}"
                  </button>
                );
              })}
            </div>

            {/* Input para frase própria */}
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                Ou escreva sua frase personalizada (até 45 caracteres):
              </label>
              <input
                type="text"
                maxLength={50}
                placeholder="Ex: Há 25 anos sendo o terror da família! 😜"
                value={customPhraseInput}
                onChange={(e) => setCustomPhraseInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5D5CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D48C95] text-[#3D2B1F]"
              />
            </div>

            {/* Seleção do Sabor */}
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                2. Escolha o Recheio do Bolo:
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5D5CB] bg-white text-sm font-semibold text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#D48C95]"
              >
                {bentoProduct.flavors?.map((flv, idx) => (
                  <option key={idx} value={flv}>
                    🍰 {flv}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão de Envio WhatsApp com a Frase Selecionada */}
            <button
              onClick={handleDirectWhatsAppOrder}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e7569] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Pedir no WhatsApp por R$ 38,00</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-[11px] text-center text-[#8B4513]/80 mt-2 font-medium">
              * O pedido será enviado pré-formatado diretamente para o WhatsApp do Karolina Atelier.
            </p>

          </div>

          {/* Coluna 2: Preview Interativo da Frase no Bolo */}
          <div className="lg:col-span-6 text-center">
            <div className="relative inline-block max-w-sm sm:max-w-md w-full mx-auto">
              
              {/* Card Ilustrativo com Foto Real e Overlay da Frase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={bentoProduct.image}
                  alt="Bentô Cake Personalizado"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Visualizador da Frase no Bento */}
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-[#FAF6F0]/95 p-6 rounded-2xl border-2 border-dashed border-[#D48C95] shadow-2xl max-w-xs transform -rotate-1">
                    <span className="text-2xl mb-1 block">🎂</span>
                    <span className="text-xs uppercase font-bold text-[#D48C95] tracking-widest block mb-2">
                      Sua Frase Escolhida:
                    </span>
                    <p className="font-script text-2xl sm:text-3xl text-[#3D2B1F] leading-tight font-bold">
                      "{activePhrase}"
                    </p>
                    <span className="text-[10px] text-[#8B4513] font-semibold mt-3 block pt-2 border-t border-[#E5D5CB]">
                      Recheio: {selectedFlavor.split('com')[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tag de Garante de Entrega em Ceilândia */}
              <div className="mt-4 bg-white p-3.5 rounded-2xl border border-[#E5D5CB] shadow-md flex items-center justify-between text-xs font-semibold text-[#5C3A21]">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#D48C95] fill-current" />
                  <span>Embalagem Lancheira inclusa com velinha!</span>
                </div>
                <span className="text-[#D48C95] font-bold">R$ 38,00</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
