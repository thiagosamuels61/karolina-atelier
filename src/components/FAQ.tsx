import { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';
import { generateQuickContactLink } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Com quanta antecedência devo fazer meu pedido?',
      answer: 'Para Bentô Cakes simples e docinhos, aceitamos encomendas com até 24h a 48h de antecedência! Para Kits Festa grandes e Bolos Personalizados de andar, recomendamos encomendar com 3 a 5 dias de antecedência para garantir a vaga na agenda.',
    },
    {
      question: 'Como funciona a entrega em Ceilândia e regiões do DF?',
      answer: 'Realizamos entregas via motoboy parceiro / transporte de doces em Ceilândia Norte, Ceilândia Sul, P-Norte, P-Sul, Sol Nascente, Taguatinga, Samambaia e regiões vizinhas. Você também pode optar por retirar diretamente conosco!',
    },
    {
      question: 'Posso escolher a frase e a cor do Bentô Cake?',
      answer: 'Sim! Você escolhe 100% da frase (pode ser engraçada, fofa ou romântica) e a combinação de cores do bolo e do desenho do Flork.',
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix (com confirmação imediata), Cartões de Crédito e Débito. O pedido é confirmado mediante sinal de 50% ou pagamento integral.',
    },
    {
      question: 'O bolo já vem com velas e embalagem para presente?',
      answer: 'Todos os nossos Bentô Cakes acompanham a embalagem lancheira biodegradável e 1 velinha mágica de presente!',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-[#FFF0F3] text-[#D48C95] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D48C95]/30">
            <HelpCircle className="w-4 h-4" /> Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3D2B1F]">
            Tudo o que você precisa saber
          </h2>
          <p className="text-[#5C3A21] text-base">
            Tire suas dúvidas sobre prazos, entregas em Ceilândia e formas de pagamento.
          </p>
        </div>

        {/* Acordeão FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#E5D5CB] overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left font-serif font-bold text-base sm:text-lg text-[#3D2B1F] flex items-center justify-between gap-4 hover:text-[#D48C95] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D48C95] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#5C3A21] leading-relaxed border-t border-[#E5D5CB]/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chamada para tirar dúvida customizada */}
        <div className="mt-12 text-center bg-[#FFF0F3] p-8 rounded-3xl border border-[#D48C95]/40 shadow-sm space-y-4">
          <h3 className="font-serif font-bold text-xl text-[#3D2B1F]">
            Ainda tem alguma dúvida específica para o seu evento?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C3A21]">
            A Ana Karolina responde diretamente no WhatsApp para ajustar todos os detalhes com você!
          </p>
          <a
            href={generateQuickContactLink('Dúvida sobre Entregas ou Prazos')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Falar com a Ana Karolina no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
