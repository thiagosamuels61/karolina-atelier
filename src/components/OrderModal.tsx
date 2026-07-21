import { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Sparkles, User } from 'lucide-react';
import { type Product, BENTO_SUGGESTED_PHRASES } from '../data/products';
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

  useEffect(() => {
    if (product) {
      setSelectedFlavor(product.flavors?.[0] || '');
      setSelectedSize(product.sizes?.[0]?.label || '');
      if (product.hasCustomPhrase) {
        setBentoPhrase(initialPhrase || BENTO_SUGGESTED_PHRASES[0]);
      }
    }
  }, [product, initialPhrase]);

  // Calcula preço total aproximado
  let calculatedPrice = product.price;
  if (product.sizes) {
    const foundSize = product.sizes.find((s) => s.label === selectedSize);
    if (foundSize && foundSize.priceModifier) {
      calculatedPrice += foundSize.priceModifier;
    }
  }

  const formattedCalculatedPrice = `R$ ${calculatedPrice.toFixed(2).replace('.', ',')}`;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D48C95', '#F4C2C2', '#25D366', '#D4AF37'],
    });

    const link = generateWhatsAppLink({
      productTitle: product.title,
      categoryName: product.category.toUpperCase(),
      priceText: formattedCalculatedPrice,
      selectedFlavor: selectedFlavor || 'A combinar',
      bentoPhrase: product.hasCustomPhrase ? bentoPhrase : undefined,
      sizeOption: selectedSize || undefined,
      eventDate: eventDate || 'A combinar',
      customerName: customerName || undefined,
      additionalNotes: additionalNotes || undefined,
    });

    setTimeout(() => {
      window.open(link, '_blank');
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-3xl shadow-2xl border border-[#E5D5CB] max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header do Modal */}
        <div className="bg-[#5C3A21] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D48C95] flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#F4C2C2] font-bold block">
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
        <form onSubmit={handleSubmitOrder} className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Card Resumo com Foto */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E5D5CB] shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <span className="text-xs font-bold text-[#D48C95] uppercase tracking-wider block">
                {product.unitText}
              </span>
              <h4 className="font-serif font-bold text-base text-[#3D2B1F]">
                {product.title}
              </h4>
              <p className="text-lg font-serif font-bold text-[#8B4513] mt-0.5">
                {formattedCalculatedPrice}
              </p>
            </div>
          </div>

          {/* Seleção de Tamanho se houver */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                1. Escolha a Opção / Tamanho:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.sizes.map((sz, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSize(sz.label)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                      selectedSize === sz.label
                        ? 'bg-[#D48C95] text-white border-[#D48C95] shadow-sm'
                        : 'bg-white text-[#5C3A21] border-[#E5D5CB] hover:border-[#D48C95]'
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
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                2. Escolha o Recheio de sua Preferência:
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-[#E5D5CB] bg-white text-sm font-semibold text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#D48C95]"
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
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                3. Frase ou Desenho no Bentô Cake:
              </label>
              <input
                type="text"
                maxLength={60}
                placeholder="Escreva a frase desejada (ex: Parabéns pelo seu dia!)"
                value={bentoPhrase}
                onChange={(e) => setBentoPhrase(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5D5CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D48C95] text-[#3D2B1F]"
              />

              {/* Sugestões rápidas */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BENTO_SUGGESTED_PHRASES.slice(0, 4).map((ph, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBentoPhrase(ph)}
                    className="text-[11px] bg-white hover:bg-[#FFF5F6] text-[#8B4513] border border-[#E5D5CB] px-2.5 py-1 rounded-lg transition-colors"
                  >
                    "{ph.slice(0, 25)}..."
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Data do Evento & Nome */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D48C95]" /> Data Desejada:
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-3 rounded-xl border border-[#E5D5CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D48C95]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#D48C95]" /> Seu Nome:
              </label>
              <input
                type="text"
                placeholder="Seu nome para a encomenda"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-3 rounded-xl border border-[#E5D5CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D48C95]"
              />
            </div>
          </div>

          {/* Observações */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
              Observações ou Bairro em Ceilândia:
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Entregar em Ceilândia Sul, gostaria de acrescentar velas com a idade 30..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#E5D5CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D48C95]"
            />
          </div>

          {/* Rodapé e Envio WhatsApp */}
          <div className="pt-4 border-t border-[#E5D5CB] space-y-3">
            <div className="flex items-center justify-between text-sm font-bold text-[#3D2B1F]">
              <span>Valor Total Estimado:</span>
              <span className="text-xl font-serif text-[#D48C95]">{formattedCalculatedPrice}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e7569] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Enviar Pedido Qualificado no WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-gray-500 font-medium">
              📍 Retirada ou Entrega rápida em {LOCATION_TEXT}. Mensagem formatada automaticamente!
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
