import { Star, Heart, CheckCircle } from 'lucide-react';
import imgRev1 from '@photos/Captura de tela 2026-07-21 095944.png';
import imgRev2 from '@photos/Captura de tela 2026-07-21 100006.png';
import imgRev3 from '@photos/Captura de tela 2026-07-21 100034.png';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Mariana S. (Ceilândia Sul)',
      text: 'O Bentô Cake superou todas as expectativas! A frase ficou hilária e a massa de Ninho com Nutella estava molhadinha e muito recheada. Recomendo demais!',
      rating: 5,
      image: imgRev1,
      tag: 'Bentô Cake Flork',
    },
    {
      name: 'Camila & Lucas (Taguatinga)',
      text: 'Encomendei o Kit Festa VIP para o aniversário da minha filha. O bolo de 1.5kg e os brigadeiros estavam sensacionais. Chegou super pontual!',
      rating: 5,
      image: imgRev2,
      tag: 'Kit Festa VIP',
    },
    {
      name: 'Rodrigo M. (Ceilândia Norte)',
      text: 'Melhor brigadeiro gourmet da região! O de churros e o de Ninho são viciantes. O atendimento pelo WhatsApp foi muito rápido e direto.',
      rating: 5,
      image: imgRev3,
      tag: 'Cento de Brigadeiro',
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#FFF5F6] border-y border-[#E5D5CB]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-[#D48C95] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Heart className="w-4 h-4 fill-current" /> Depoimentos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F]">
            Quem prova, ama e vicia!
          </h2>
          <p className="text-[#5C3A21] text-base sm:text-lg">
            Veja o carinho de quem escolheu o Karolina Atelier para deixar os momentos especiais ainda mais doces.
          </p>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-[#E5D5CB] shadow-lg flex flex-col justify-between space-y-6 bg-white"
            >
              <div className="space-y-4">
                {/* Estrelas */}
                <div className="flex items-center text-amber-400 gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comentário */}
                <p className="text-sm text-[#3D2B1F] italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Autor & Foto */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E5D5CB]/50">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D48C95]"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#3D2B1F] flex items-center gap-1">
                    {rev.name} <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                  </h4>
                  <span className="text-[11px] text-[#8B4513] font-medium block">
                    {rev.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
