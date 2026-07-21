import { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Sparkles, User, Percent } from 'lucide-react';
import { type Product, type UpsellOption, BENTO_SUGGESTED_PHRASES, UPSELL_OPTIONS } from '../data/products';
import { generateWhatsAppLink, LOCATION_TEXT } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

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
      if (product.minLeadTimeDays === 1) {
        setDateError('⚠️ Encomendas de Bentô Cake devem ser feitas com pelo menos 1 dia de antecedência.');
      } else {
        setDateError('⚠️ Bolos, Brigadeiros e Kits exigem pelo menos 2 dias de antecedência para preparo e confeitaria.');
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
      if (product.hasCustomPhrase) {
        setBentoPhrase(initialPhrase || BENTO_SUGGESTED_PHRASES[0]);
      }
    }
  }, [product, initialPhrase]);

  // Calcula preço total incluindo upsells com desconto
  let basePrice = product.price;
  if (product.sizes) {
    const foundSize = product.sizes.find((s) => s.label === selectedSize);
    if (foundSize && foundSize.priceModifier) {
      basePrice += foundSize.priceModifier;
    }
  }

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

  const finalTotal = basePrice + upsellTotal;
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
      alert('Por favor, selecione uma data válida que respeite o tempo mínimo de antecedência.');
      return;
    }

    // Trigger celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E18126', '#111111', '#25D366'],
    });

    const upsellsText = activeUpsellsList.length > 0
      ? activeUpsellsList.map((o) => `➕ ${o.title} (Promoção)`).join('\n')
      : undefined;

    const link = generateWhatsAppLink({
      productTitle: product.title,
      categoryName: product.category.toUpperCase(),
      priceText: formattedCalculatedPrice,
      selectedFlavor: selectedFlavor || 'A combinar',
      bentoPhrase: product.hasCustomPhrase ? bentoPhrase : undefined,
      sizeOption: selectedSize || undefined,
      eventDate: eventDate,
      customerName: customerName || undefined,
      additionalNotes: additionalNotes 
        ? `${additionalNotes}${upsellsText ? `\n\n🛍️ *Adicionais do Combo:*\n${upsellsText}` : ''}`
        : upsellsText ? `🛍️ *Adicionais do Combo:*\n${upsellsText}` : undefined,
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
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-black/5 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header do Modal */}
        <div className="bg-[#111111] text-white p-5 sm:p-6 flex items-center justify-between">
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
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Formulário Interativo de Personalização */}
        <form onSubmit={handleSubmitOrder} className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          
          {/* Card Resumo com Foto */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <span className="text-[10px] font-bold text-[#E18126] uppercase tracking-wider block">
                {product.minLeadTimeText}
              </span>
              <h4 className="font-serif font-bold text-base text-[#111111]">
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
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider">
                1. Escolha a Opção / Tamanho:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.sizes.map((sz, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSize(sz.label)}
                    className={`p-3.5 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                      selectedSize === sz.label
                        ? 'bg-[#E18126] text-white border-[#E18126] shadow-sm'
                        : 'bg-white text-[#111111] border-gray-200 hover:border-[#E18126]'
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Seleção do Sabor / Recheio */}
          {product.flavors && product.flavors.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider">
                2. Escolha o Recheio de sua Preferência:
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#E18126]"
              >
                {product.flavors.map((flv, idx) => (
                  <option key={idx} value={flv}>
                    🍰 {flv}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Frase Personalizada se for Bentô Cake */}
          {product.hasCustomPhrase && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider">
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
                className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126] text-[#111111] ${
                  isPhraseOverLimit ? 'border-red-500' : 'border-gray-200'
                }`}
              />

              {isPhraseOverLimit ? (
                <p className="text-[11px] text-red-500 font-medium">
                  ⚠️ A frase ultrapassou o limite recomendado. Frases muito longas podem não caber no Bentô Cake de 10cm!
                </p>
              ) : (
                <p className="text-[11px] text-gray-500 font-medium">
                  💡 Padrão de Bentô Cake: frases curtas e diretas de até {maxPhraseLimit} caracteres garantem a melhor legibilidade.
                </p>
              )}

              {/* Sugestões rápidas */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BENTO_SUGGESTED_PHRASES.map((ph, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBentoPhrase(ph)}
                    className="text-[11px] bg-gray-50 hover:bg-[#E18126]/10 text-[#111111] border border-gray-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    "{ph}"
                  </button>
                ))}
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
                        onChange={() => {}} // Handle click on container
                        className="rounded text-[#E18126] focus:ring-[#E18126] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-[#111111] block">
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
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E18126]" /> Data de Entrega/Retirada:
              </label>
              <input
                type="date"
                required
                min={getMinDateString()}
                value={eventDate}
                onChange={handleDateChange}
                className="w-full p-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126]"
              />
              {dateError && (
                <p className="text-[10px] text-red-500 font-semibold leading-tight pt-1">
                  {dateError}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#E18126]" /> Seu Nome:
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126]"
              />
            </div>
          </div>

          {/* Observações */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider">
              Observações Adicionais ou Bairro em Ceilândia:
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de acrescentar velinhas extras, retirar pela tarde..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E18126]"
            />
          </div>

          {/* Rodapé e Envio WhatsApp */}
          <div className="pt-4 border-t border-gray-100 space-y-4">
            
            {/* Savings Badge */}
            {totalSavings > 0 && (
              <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-4 py-2 rounded-xl flex items-center justify-between border border-emerald-100 animate-pulse">
                <span>🎉 Combo Ativo: Você economizou nesta compra!</span>
                <span className="font-bold">-{`R$ ${totalSavings.toFixed(2).replace('.', ',')}`}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-sm font-bold text-[#111111]">
              <span>Valor Total da Encomenda:</span>
              <span className="text-xl font-serif text-[#E18126]">{formattedCalculatedPrice}</span>
            </div>

            <button
              type="submit"
              disabled={!!dateError || !eventDate}
              className={`w-full text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer ${
                dateError || !eventDate
                  ? 'bg-gray-300 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e7569] hover:shadow-2xl hover:scale-[1.01]'
              }`}
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Enviar Encomenda Qualificada via WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-gray-400 font-medium">
              📍 Retirada ou Entrega rápida em {LOCATION_TEXT}. Mensagem pré-formatada sem complicações!
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
