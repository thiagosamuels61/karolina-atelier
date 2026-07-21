import { Sparkles, ArrowRight, CheckCircle2, Star, Award } from 'lucide-react';
import imgBentoHero from '@photos/Captura de tela 2026-07-21 095850.png';
import imgKitHero from '@photos/Captura de tela 2026-07-21 095901.png';
import type { Product } from '../data/products';

interface HeroProps {
  onSelectProduct?: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FAF6F0] via-[#FFF5F6] to-[#FAF6F0]">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-[#F4C2C2]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-5 w-96 h-96 bg-[#E5D5CB]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Textos & CTAs de Conversão */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag de Campanha Pago */}
            <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-1.5 rounded-full border border-[#D48C95]/40 shadow-sm text-xs sm:text-sm font-semibold text-[#8B4513]">
              <Sparkles className="w-4 h-4 text-[#D48C95] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Confeitaria Afetiva em Ceilândia - DF</span>
              <span className="bg-[#D48C95] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                Alta Qualidade
              </span>
            </div>

            {/* Título Principal Impactante */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#3D2B1F] leading-[1.15] tracking-tight">
              Os doces mais amados de Ceilândia,{' '}
              <span className="relative inline-block text-[#D48C95] italic font-script font-normal text-5xl sm:text-6xl lg:text-7xl">
                direto no seu WhatsApp
              </span>
            </h1>

            {/* Subtítulo Clara sobre Preço e Produtos */}
            <p className="text-base sm:text-lg text-[#5C3A21]/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Bentô Cakes divertidos a partir de <strong>R$ 38,00</strong>, Centos de Brigadeiro Gourmet, 
              Bolos com recheios generosos de Ninho com Nutella e Kits Festa completos com entrega rápida.
            </p>

            {/* Destaques de Qualificação */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#3D2B1F]">
                <CheckCircle2 className="w-4 h-4 text-[#D48C95] flex-shrink-0" />
                <span>Preços 100% visíveis</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#3D2B1F]">
                <CheckCircle2 className="w-4 h-4 text-[#D48C95] flex-shrink-0" />
                <span>Ingredientes Nobres</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#3D2B1F] col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D48C95] flex-shrink-0" />
                <span>Ceilândia & Região</span>
              </div>
            </div>

            {/* Botões de Ação Imediata */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#bento"
                className="w-full sm:w-auto bg-gradient-to-r from-[#D48C95] to-[#C57B85] hover:from-[#c27982] hover:to-[#b56b75] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Encomendar Bentô Cake (R$ 38,00)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#kits"
                className="w-full sm:w-auto glass-card hover:bg-white text-[#5C3A21] px-7 py-4 rounded-full font-semibold text-base border border-[#E5D5CB] hover:border-[#D48C95] shadow-sm hover:shadow-md transition-all text-center"
              >
                Ver Kits Festa Promocionais
              </a>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-6 border-t border-[#E5D5CB]/60 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#8B4513]">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F4C2C2] border-2 border-white flex items-center justify-center font-bold text-[10px] text-[#5C3A21]">★</div>
                <div className="w-8 h-8 rounded-full bg-[#E5D5CB] border-2 border-white flex items-center justify-center font-bold text-[10px] text-[#5C3A21]">AK</div>
                <div className="w-8 h-8 rounded-full bg-[#D48C95] border-2 border-white flex items-center justify-center font-bold text-[10px] text-white">❤️</div>
              </div>
              <div>
                <div className="flex items-center text-amber-500 gap-0.5 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[#3D2B1F] ml-1">5.0 / 5.0</span>
                </div>
                <p className="text-[#5C3A21]/80 font-medium">Mais de 500 festas adoçadas em Ceilândia!</p>
              </div>
            </div>

          </div>

          {/* Lado Direito: Composição Visual com Fotos Reais do Atelier */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura Principal com Foto de Bentô Cake */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={imgBentoHero}
                  alt="Bentô Cake Karolina Atelier"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="bg-[#D48C95] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2 shadow-md">
                    Destaque da Semana
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Bentô Cake Flork</h3>
                  <p className="text-xs text-amber-200 font-medium">A partir de R$ 38,00 • Vários sabores deliciosos</p>
                </div>
              </div>

              {/* Card Flutuante 1: Kit Festa Promo */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 glass-card p-3.5 rounded-2xl shadow-xl border border-white/80 max-w-[210px] animate-float">
                <div className="flex items-center gap-3">
                  <img src={imgKitHero} alt="Kit Festa" className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D48C95] tracking-wider block">Combo Promo</span>
                    <h4 className="text-xs font-bold text-[#3D2B1F]">Kit Festa Petit</h4>
                    <p className="text-xs font-semibold text-[#8B4513]">R$ 139,00</p>
                  </div>
                </div>
              </div>

              {/* Card Flutuante 2: Selo de Qualidade */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3 rounded-2xl shadow-lg border border-[#E5D5CB] flex items-center gap-2.5 animate-pulse-subtle">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F3] flex items-center justify-center text-[#D48C95]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#3D2B1F] block">100% Fresquinho</span>
                  <span className="text-[10px] text-gray-500 font-medium">Feito no dia do evento</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
