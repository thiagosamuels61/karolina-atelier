import { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Sparkles, User, Percent, Info } from 'lucide-react';
import { type Product, type UpsellOption, BENTO_SUGGESTED_PHRASES, UPSELL_OPTIONS } from '../data/products';
import { generateWhatsAppLink, LOCATION_TEXT } from '../utils/whatsapp';
import confetti from 'canvas-confetti';
import { trackEvent } from '../utils/pixel';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  initialPhrase?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  product,
  isOpen,
  onClose,
  initialPhrase = '',
}) => {
  if (!isOpen || !product) return null;

  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.label || '');
  const [bentoPhrase, setBentoPhrase] = useState(initialPhrase || BENTO_SUGGESTED_PHRASES[0]);
  const [eventDate, setEventDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const [dateError, setDateError] = useState('');

  // Bento Cakes Adicionais (conforme flyer)
  const [bentoLaco, setBentoLaco] = useState(false);
  const [bentoColher, setBentoColher] = useState(false);
  const [bentoVela, setBentoVela] = useState(false);

  // Bolos Confeitados Adicionais (conforme flyer)
  const [boloGlitter, setBoloGlitter] = useState(false);
  const [boloCoracao, setBoloCoracao] = useState(false);

  // Brigadeiros Gourmet Adicionais (conforme flyer)
  const [brigadeiroForminhaColor, setBrigadeiroForminhaColor] = useState('');
  const [brigadeiroFlavorsText, setBrigadeiroFlavorsText] = useState('');

  // Define a data mínima permitida com base nas regras do Atelier
  const getMinDateString = () => {
    const today = new Date();
    today.setDate(today.getDate() + product.minLeadTimeDays);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenVal = e.target.value;
    setEventDate(chosenVal);

    if (!chosenVal) {
      setDateError('');
      return;
    }

    const chosenDate = new Date(chosenVal + 'T00:00:00');
    const minAllowedDate = new Date();
    minAllowedDate.setHours(0, 0, 0, 0);
    minAllowedDate.setDate(minAllowedDate.getDate() + product.minLeadTimeDays);

    if (chosenDate < minAllowedDate) {
      if (product.minLeadTimeDays === 2) {
        setDateError('Aviso: Encomendas deste produto exigem pelo menos 2 dias de antecedência.');
      } else {
        setDateError('Aviso: Encomendas deste produto exigem pelo menos 3 dias de antecedência para preparo.');
      }
    } else {
      setDateError('');
    }
  };

  useEffect(() => {
    if (product) {
      setSelectedFlavor(product.flavors?.[0] || '');
      setSelectedSize(product.sizes?.[0]?.label || '');
      setEventDate('');
      setAdditionalNotes('');
      setSelectedUpsells([]);
      setDateError('');
      setBentoLaco(false);
      setBentoColher(false);
      setBentoVela(false);
      setBoloGlitter(false);
      setBoloCoracao(false);
      setBrigadeiroForminhaColor('');
      setBrigadeiroFlavorsText('');
      if (product.hasCustomPhrase) {
        setBentoPhrase(initialPhrase || BENTO_SUGGESTED_PHRASES[0]);
      }
    }
  }, [product, initialPhrase]);

  // Calcula preço base do produto e tamanho
  let basePrice = product.price;
  if (product.sizes) {
    const foundSize = product.sizes.find((s) => s.label === selectedSize);
    if (foundSize && foundSize.priceModifier) {
      basePrice += foundSize.priceModifier;
    }
  }

  // Custo de embalagem de bolos (R$ 8,00 fixo no folheto)
  const packagingCost = product.category === 'bolos' ? 8.00 : 0;

  // Adicionais do Bentô Cake
  let bentoExtras = 0;
  if (product.category === 'bento') {
    if (bentoLaco) bentoExtras += 2.00;
    if (bentoColher) bentoExtras += 1.00;
    if (bentoVela) bentoExtras += 1.00;
    if (selectedFlavor.includes('(+R$ 5,00)')) {
      bentoExtras += 5.00;
    }
  }

  // Adicionais do Bolo Confeitado
  let boloExtras = 0;
  if (product.category === 'bolos') {
    const weightMultiplier = parseFloat(selectedSize) || 1.5;
    if (boloGlitter) {
      boloExtras += 10.00 * weightMultiplier; // R$ 10,00 por kg
    }
  }

  // Calcula combos adicionados (upsell)
  let upsellTotal = 0;
  let totalSavings = 0;
  const activeUpsellsList: UpsellOption[] = [];

  selectedUpsells.forEach((id) => {
    const option = UPSELL_OPTIONS.find((o) => o.id === id);
    if (option) {
      upsellTotal += option.discountPrice;
      totalSavings += (option.originalPrice - option.discountPrice);
      activeUpsellsList.push(option);
    }
  });

  const finalTotal = basePrice + packagingCost + bentoExtras + boloExtras + upsellTotal;
  const formattedCalculatedPrice = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

  const toggleUpsell = (id: string) => {
    if (selectedUpsells.includes(id)) {
      setSelectedUpsells(selectedUpsells.filter((item) => item !== id));
    } else {
      setSelectedUpsells([...selectedUpsells, id]);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (dateError || !eventDate) {
      alert('Por favor, selecione uma data válida que respeite o tempo de antecedência necessário.');
      return;
    }

    // Confetes de celebração
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E18126', '#3D2B1F', '#25D366'],
    });

    // Rastrear conversão de compra no Meta Pixel
    trackEvent('Purchase', {
      content_name: product.title,
      content_category: product.category,
      content_ids: [product.id],
      content_type: 'product',
      value: finalTotal,
      currency: 'BRL',
      flavor: selectedFlavor,
      size: selectedSize || 'Único',
      upsells: selectedUpsells,
    });

    const upsellsText = activeUpsellsList.length > 0
      ? activeUpsellsList.map((o) => `+ ${o.title} (Promoção)`).join('\n')
      : undefined;

    // Compilação dos detalhes adicionais no texto para ir direto ao ponto
    let combinedNotes = additionalNotes || '';

    if (product.category === 'bento') {
      const extras: string[] = [];
      if (bentoLaco) extras.push('Laço de Fita (+R$ 2,00)');
      if (bentoColher) extras.push('Colher de Plástico (+R$ 1,00)');
      if (bentoVela) extras.push('Mini Vela (+R$ 1,00)');
      if (extras.length > 0) {
        combinedNotes += `\nAdicionais de Bento: ${extras.join(', ')}`;
      }
    }

    if (product.category === 'bolos') {
      combinedNotes += `\nEmbalagem de Bolo inclusa (+R$ 8,00)`;
      const extras: string[] = [];
      if (boloGlitter) extras.push('Cobertura Aveludada/Glitter (+R$ 10,00 por kg)');
      if (boloCoracao) extras.push('Desejo formato Coração / Vintage (a consultar)');
      if (extras.length > 0) {
        combinedNotes += `\nAdicionais de Bolo: ${extras.join(', ')}`;
      }
    }

    if (product.category === 'brigadeiros') {
      if (brigadeiroForminhaColor) {
        combinedNotes += `\nCor desejada da forminha: ${brigadeiroForminhaColor}`;
      }
      if (brigadeiroFlavorsText) {
        combinedNotes += `\nSabores do Cento: ${brigadeiroFlavorsText}`;
      }
    }

    if (upsellsText) {
      combinedNotes += `\n\nAdicionais do Combo:\n${upsellsText}`;
    }

    const link = generateWhatsAppLink({
      productTitle: product.title,
      categoryName: product.category.toUpperCase(),
      priceText: formattedCalculatedPrice,
      selectedFlavor: product.category === 'brigadeiros' ? undefined : selectedFlavor,
      bentoPhrase: product.hasCustomPhrase ? bentoPhrase : undefined,
      sizeOption: selectedSize || undefined,
      eventDate: eventDate,
      customerName: customerName || undefined,
      additionalNotes: combinedNotes.trim() !== '' ? combinedNotes.trim() : undefined,
    });

    setTimeout(() => {
      window.open(link, '_blank');
      onClose();
    }, 450);
  };

  const phraseLength = bentoPhrase.length;
  const maxPhraseLimit = product.maxPhraseLength || 35;
  const isPhraseOverLimit = phraseLength > maxPhraseLimit;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border border-black/5 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header do Modal */}
        <div className="bg-[#3D2B1F] text-[#FAF6F0] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E18126] flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-200 font-bold block">
                Monte seu Pedido • Karolina Atelier
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                {product.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Formulário Interativo de Personalização */}
        <form onSubmit={handleSubmitOrder} className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#FAF6F0]/20">
          
          {/* Card Resumo com Foto */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#3D2B1F]/10 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <span className="text-[10px] font-bold text-[#E18126] uppercase tracking-wider block">
                {product.minLeadTimeText}
              </span>
              <h4 className="font-serif font-bold text-base text-[#3D2B1F]">
                {product.title}
              </h4>
              <p className="text-lg font-serif font-bold text-[#E18126] mt-0.5">
                {product.priceText}
              </p>
            </div>
          </div>

          {/* Seleção de Tamanho se houver */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                1. Escolha o Peso / Quantidade:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.sizes.map((sz, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSize(sz.label)}
                    className={`p-3.5 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                      selectedSize === sz.label
                        ? 'bg-[#E18126] text-[#FAF6F0] border-[#E18126] shadow-sm'
                        : 'bg-white text-[#3D2B1F] border-[#3D2B1F]/15 hover:border-[#E18126]'
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Seleção do Sabor / Recheio para Bento e Bolos */}
          {product.flavors && product.flavors.length > 0 && product.category !== 'brigadeiros' && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                2. Escolha o Recheio de sua Preferência:
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-[#3D2B1F]/15 bg-white text-sm font-semibold text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#E18126]"
              >
                {product.flavors.map((flv, idx) => (
                  <option key={idx} value={flv}>
                    {flv}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Customização específica de Brigadeiros (Forminha + Sabores) */}
          {product.category === 'brigadeiros' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                  2. Sabores para compor o Cento (Escolha até 3):
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Brigadeiro ao leite, Ninho com nutella, Casadinho"
                  value={brigadeiroFlavorsText}
                  onChange={(e) => setBrigadeiroFlavorsText(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-[#3D2B1F]/15 bg-white text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#E18126]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                  3. Cor da Forminha Desejada (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Forminhas brancas, vermelhas, azuis..."
                  value={brigadeiroForminhaColor}
                  onChange={(e) => setOriginalForminhaColor(e)}
                  className="w-full p-3.5 rounded-xl border border-[#3D2B1F]/15 bg-white text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#E18126]"
                />
              </div>
            </div>
          )}

          {/* Frase Personalizada se for Bentô Cake */}
          {product.hasCustomPhrase && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                  3. Escreva a Frase do Bentô Cake:
                </label>
                <span className={`text-xs font-semibold ${isPhraseOverLimit ? 'text-red-500' : 'text-gray-500'}`}>
                  {phraseLength} / {maxPhraseLimit}
                </span>
              </div>
              <input
                type="text"
                maxLength={50}
                placeholder="Escreva a frase desejada"
                value={bentoPhrase}
                onChange={(e) => setBentoPhrase(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126] text-[#3D2B1F] ${
                  isPhraseOverLimit ? 'border-red-500' : 'border-[#3D2B1F]/15'
                }`}
              />

              {isPhraseOverLimit ? (
                <p className="text-[11px] text-red-500 font-medium">
                  A frase ultrapassou o limite recomendado. Frases muito longas podem não caber no Bentô Cake de 10cm!
                </p>
              ) : (
                <p className="text-[11px] text-gray-500 font-medium">
                  Padrão do Bentô Cake: frases curtas de até {maxPhraseLimit} caracteres garantem a melhor legibilidade na confeitaria.
                </p>
              )}

              {/* Sugestões rápidas */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BENTO_SUGGESTED_PHRASES.map((ph, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBentoPhrase(ph)}
                    className="text-[11px] bg-white hover:bg-[#E18126]/10 text-[#3D2B1F] border border-[#3D2B1F]/15 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    "{ph}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Opcionais do Bentô Cake (Ribbon, Spoon, Candle) */}
          {product.category === 'bento' && (
            <div className="space-y-2.5 pt-2">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                Adicionais Extras do Bentô (Folheto):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setBentoLaco(!bentoLaco)}
                  className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between border transition-all cursor-pointer ${
                    bentoLaco
                      ? 'bg-[#3D2B1F] text-[#FAF6F0] border-[#3D2B1F]'
                      : 'bg-white text-[#3D2B1F] border-[#3D2B1F]/15'
                  }`}
                >
                  <span>Laço de Fita</span>
                  <span className="text-[10px] text-[#E18126] font-extrabold">+R$ 2,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBentoColher(!bentoColher)}
                  className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between border transition-all cursor-pointer ${
                    bentoColher
                      ? 'bg-[#3D2B1F] text-[#FAF6F0] border-[#3D2B1F]'
                      : 'bg-white text-[#3D2B1F] border-[#3D2B1F]/15'
                  }`}
                >
                  <span>Colher de plástico</span>
                  <span className="text-[10px] text-[#E18126] font-extrabold">+R$ 1,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBentoVela(!bentoVela)}
                  className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between border transition-all cursor-pointer ${
                    bentoVela
                      ? 'bg-[#3D2B1F] text-[#FAF6F0] border-[#3D2B1F]'
                      : 'bg-white text-[#3D2B1F] border-[#3D2B1F]/15'
                  }`}
                >
                  <span>Mini Vela</span>
                  <span className="text-[10px] text-[#E18126] font-extrabold">+R$ 1,00</span>
                </button>
              </div>
            </div>
          )}

          {/* Opcionais do Bolo Confeitado */}
          {product.category === 'bolos' && (
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                Adicionais Extras do Bolo (Folheto):
              </label>
              
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setBoloGlitter(!boloGlitter)}
                  className={`p-3.5 rounded-xl text-xs font-bold flex items-center justify-between border transition-all cursor-pointer text-left ${
                    boloGlitter
                      ? 'bg-[#3D2B1F] text-[#FAF6F0] border-[#3D2B1F]'
                      : 'bg-white text-[#3D2B1F] border-[#3D2B1F]/15'
                  }`}
                >
                  <div>
                    <span className="block">Cobertura com Brilho / Glitter / Aveludado</span>
                    <span className="text-[10px] font-medium text-gray-400 block mt-0.5">Adiciona textura sofisticada para eventos</span>
                  </div>
                  <span className="text-xs text-[#E18126] font-extrabold whitespace-nowrap ml-4">+R$ 10,00 / kg</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBoloCoracao(!boloCoracao)}
                  className={`p-3.5 rounded-xl text-xs font-bold flex items-center justify-between border transition-all cursor-pointer text-left ${
                    boloCoracao
                      ? 'bg-[#3D2B1F] text-[#FAF6F0] border-[#3D2B1F]'
                      : 'bg-white text-[#3D2B1F] border-[#3D2B1F]/15'
                  }`}
                >
                  <div>
                    <span className="block">Desejo em formato de Coração ou Vintage Cake</span>
                    <span className="text-[10px] font-medium text-gray-400 block mt-0.5">Lindo design diferenciado retro-vintage</span>
                  </div>
                  <span className="text-xs text-[#E18126] font-extrabold whitespace-nowrap ml-4">A consultar</span>
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200/50 text-[11px] text-amber-800 font-semibold leading-relaxed">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Nota: Conforme o folheto do atelier, o topper de bolo não está incluso e a taxa de embalagem de R$ 8,00 já foi adicionada ao total.</span>
              </div>
            </div>
          )}

          {/* Checklist de Combo com Desconto (Interactive Upsell) */}
          <div className="bg-amber-50/40 p-5 rounded-2xl border border-[#E18126]/20 space-y-3">
            <h5 className="text-xs font-bold text-[#E18126] uppercase tracking-widest flex items-center gap-1">
              <Percent className="w-4 h-4" /> Combo Premiado: Adicione e Ganhe Desconto!
            </h5>
            <p className="text-[11px] text-gray-500 font-medium">
              Aproveite nossas ofertas exclusivas adicionando doces extras diretamente à sua encomenda:
            </p>

            <div className="space-y-2 pt-1">
              {UPSELL_OPTIONS.map((opt) => {
                const isSelected = selectedUpsells.includes(opt.id);
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleUpsell(opt.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#E18126] shadow-sm'
                        : 'bg-white/60 border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}} // Tratado no clique do container
                        className="rounded text-[#E18126] focus:ring-[#E18126] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-[#3D2B1F] block">
                          {opt.title}
                        </span>
                        <span className="text-[10px] text-emerald-600 font-semibold block">
                          {opt.savingsText}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400 line-through block">
                        R$ {opt.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs font-bold text-[#E18126] block">
                        R$ {opt.discountPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data do Evento & Nome */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E18126]" /> Data de Entrega/Retirada:
              </label>
              <input
                type="date"
                required
                min={getMinDateString()}
                value={eventDate}
                onChange={handleDateChange}
                className="w-full p-3.5 rounded-xl border border-[#3D2B1F]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126]"
              />
              {dateError && (
                <p className="text-[10px] text-red-500 font-semibold leading-tight pt-1">
                  {dateError}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#E18126]" /> Seu Nome:
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-[#3D2B1F]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126]"
              />
            </div>
          </div>

          {/* Observações */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
              Bairro em Ceilândia ou Observações:
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de retirar pela tarde, etc..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-[#3D2B1F]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126]"
            />
          </div>

          {/* Rodapé e Envio WhatsApp */}
          <div className="pt-4 border-t border-[#3D2B1F]/10 space-y-4">
            
            {/* Economias obtidas */}
            {totalSavings > 0 && (
              <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-4 py-2 rounded-xl flex items-center justify-between border border-emerald-100">
                <span>Combo Ativo: Você economizou nesta compra!</span>
                <span className="font-bold">-{`R$ ${totalSavings.toFixed(2).replace('.', ',')}`}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-sm font-bold text-[#3D2B1F]">
              <span>Valor Total da Encomenda:</span>
              <span className="text-xl font-serif text-[#E18126]">{formattedCalculatedPrice}</span>
            </div>

            <button
              type="submit"
              disabled={!!dateError || !eventDate}
              className={`w-full text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer ${
                dateError || !eventDate
                  ? 'bg-gray-300 cursor-not-allowed shadow-none'
                  : 'bg-[#3D2B1F] hover:bg-[#E18126] hover:shadow-2xl hover:scale-[1.01]'
              }`}
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Enviar Encomenda via WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-gray-400 font-medium">
              Retirada ou Entrega por carro de aplicativo em {LOCATION_TEXT}.
            </p>
          </div>

        </form>
      </div>
    </div>
  );

  // Helper setter para o Brigadeiro Forminha Color
  function setOriginalForminhaColor(e: React.ChangeEvent<HTMLInputElement>) {
    setBrigadeiroForminhaColor(e.target.value);
  }
};
