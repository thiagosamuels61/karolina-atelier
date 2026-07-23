import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VirtualMenu } from './components/VirtualMenu';
import { PhotoGallery } from './components/PhotoGallery';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import type { Product } from './data/products';
import { generateQuickContactLink } from './utils/whatsapp';
import {
  logoImg,
  bentoHighlight,
  bentoCelebre,
  bentoFunny1,
  bentoLoving,
  boloCelebre1,
  boloCelebre2
} from './data/products';
import { trackEvent } from './utils/pixel';
import whatsappIcon from '@images/image copy 4.png';

const carouselImages = [
  bentoHighlight,
  bentoCelebre,
  bentoFunny1,
  bentoLoving,
  boloCelebre1,
  boloCelebre2
];

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialPhrase, setInitialPhrase] = useState('');

  const handleOpenModal = (product: Product, phrase?: string) => {
    setSelectedProduct(product);
    if (phrase) setInitialPhrase(phrase);
    setIsModalOpen(true);

    // Rastrear eventos no Meta Pixel
    trackEvent('ViewContent', {
      content_name: product.title,
      content_category: product.category,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price,
      currency: 'BRL',
    });
    trackEvent('InitiateCheckout', {
      content_name: product.title,
      content_category: product.category,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price,
      currency: 'BRL',
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3D2B1F] flex flex-col font-sans selection:bg-[#E18126]/20 selection:text-[#3D2B1F]">
      
      {/* Header Fixo com Logo e CTA */}
      <Navbar />

      {/* Seção Principal */}
      <main className="flex-1 pb-16">
        
        {/* Seção Hero */}
        <section className="py-12 sm:py-20 text-center mx-auto px-4 max-w-6xl animate-fade-in">
          <img
            src={logoImg}
            alt="Logo Karolina Atelier"
            className="h-28 w-auto mx-auto object-contain mb-8 animate-pulse-subtle animate-fade-in-up"
            style={{ animationDuration: '6s' }}
          />
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#3D2B1F] tracking-tight leading-tight max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
            Bolos e Doces artesanais sob <br /> encomenda
          </h1>
          <p className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#C0707D] mt-2 animate-fade-in-up animation-delay-200">
            direto no seu WhatsApp
          </p>
          <p className="text-[#3D2B1F]/70 mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans animate-fade-in-up animation-delay-300">
            Bentô Cakes divertidos a partir de <strong>R$ 38,00</strong>, Centos de Brigadeiro Gourmet, Bolos com recheios generosos de Ninho com Nutella e Kits Festa completos com entrega rápida.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 items-center animate-fade-in-up animation-delay-400">
            <a
              href="#bento"
              className="bg-[#C0707D] hover:bg-[#a65663] text-white py-3.5 px-8 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              Encomendar Bentô Cake (R$ 38,00)
            </a>
            <a
              href="#menu-secoes"
              className="bg-white border border-[#3D2B1F]/15 hover:bg-[#FAF6F0] text-[#3D2B1F] py-3.5 px-8 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 cursor-pointer shadow-sm"
            >
              Ver Kits Festa Promocionais
            </a>
          </div>

          {/* Carrossel de Produtos Infinito */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-0 mt-16 border-t border-b border-[#3D2B1F]/10 bg-white">
            <div className="animate-scroll-right flex">
              {/* Set de Imagens 1 */}
              {carouselImages.map((img, idx) => (
                <img
                  key={`c1-${idx}`}
                  src={img}
                  alt={`Inspiração ${idx}`}
                  className="w-[50vw] sm:w-[33.33vw] md:w-[25vw] h-64 sm:h-80 md:h-[350px] object-cover flex-shrink-0"
                />
              ))}
              {/* Set de Imagens 2 (Duplicado para rolagem infinita) */}
              {carouselImages.map((img, idx) => (
                <img
                  key={`c2-${idx}`}
                  src={img}
                  alt={`Inspiração Duplicada ${idx}`}
                  className="w-[50vw] sm:w-[33.33vw] md:w-[25vw] h-64 sm:h-80 md:h-[350px] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Cardápio Virtual */}
        <VirtualMenu onSelectProduct={handleOpenModal} />

        {/* Seções Temáticas (Frases e Inspirações) */}
        <section className="py-16 sm:py-24 bg-white border-t border-b border-[#3D2B1F]/10 font-sans">
          <div className="max-w-6xl mx-auto px-4 space-y-16">
            
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tight">
                Inspirações para Celebrar e Presentear
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Nossos bolos e bentôs fazem parte dos momentos mais importantes e divertidos da sua vida.
              </p>
            </div>

            {/* Tema 1: Celebre com quem você ama */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#FAF6F0]/40 p-6 sm:p-10 rounded-[2.5rem] border border-[#3D2B1F]/5">
              <div className="flex-1 space-y-4">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#3D2B1F]">
                  Celebre com quem você ama
                </h3>
                <p className="text-sm text-[#3D2B1F]/70 leading-relaxed font-sans">
                  Do chá revelação ao aniversário dos seus sonhos, nossos bolos confeitados e bentô cakes são pensados para encantar seus convidados e eternizar momentos especiais. Compartilhe afeto e sabor com quem você mais ama!
                </p>
                <div className="pt-2">
                  <a
                    href="#bolos"
                    className="inline-flex bg-[#3D2B1F] hover:bg-[#E18126] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors font-sans cursor-pointer shadow-sm"
                  >
                    Ver Bolos Confeitados
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full grid grid-cols-3 gap-2">
                <img
                  src={bentoCelebre}
                  alt="Chá Revelação Bentô"
                  className="w-full h-32 sm:h-44 object-cover rounded-2xl border border-[#3D2B1F]/10 shadow-sm"
                />
                <img
                  src={boloCelebre1}
                  alt="Chá Revelação Bolo"
                  className="w-full h-32 sm:h-44 object-cover rounded-2xl border border-[#3D2B1F]/10 shadow-sm"
                />
                <img
                  src={boloCelebre2}
                  alt="Chá Revelação Bolo Detalhe"
                  className="w-full h-32 sm:h-44 object-cover rounded-2xl border border-[#3D2B1F]/10 shadow-sm"
                />
              </div>
            </div>

            {/* Tema 2: Presenteie de forma engraçada */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-[#FAF6F0]/40 p-6 sm:p-10 rounded-[2.5rem] border border-[#3D2B1F]/5">
              <div className="flex-1 space-y-4">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#3D2B1F]">
                  Presenteie de forma engraçada
                </h3>
                <p className="text-sm text-[#3D2B1F]/70 leading-relaxed font-sans">
                  Quer arrancar risadas de um amigo ou familiar no aniversário? Nossos Bentô Cakes divertidos vêm com ilustrações do personagem Flork e frases engraçadas personalizadas por você. O presente perfeito e mais criativo!
                </p>
                <div className="pt-2">
                  <a
                    href="#bento"
                    className="inline-flex bg-[#3D2B1F] hover:bg-[#E18126] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors font-sans cursor-pointer shadow-sm"
                  >
                    Ver Bentô Cakes
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full grid grid-cols-2 gap-3">
                <img
                  src={bentoFunny1}
                  alt="Bentô Cake Engraçado"
                  className="w-full h-40 sm:h-52 object-cover rounded-2xl border border-[#3D2B1F]/10 shadow-sm"
                />
                <img
                  src={bentoHighlight}
                  alt="Bentô Cake Flork Divertido"
                  className="w-full h-40 sm:h-52 object-cover rounded-2xl border border-[#3D2B1F]/10 shadow-sm"
                />
              </div>
            </div>

            {/* Tema 3: Presenteie de forma amorosa */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#FAF6F0]/40 p-6 sm:p-10 rounded-[2.5rem] border border-[#3D2B1F]/5">
              <div className="flex-1 space-y-4">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#3D2B1F]">
                  Presenteie de forma amorosa
                </h3>
                <p className="text-sm text-[#3D2B1F]/70 leading-relaxed font-sans">
                  Demonstre todo o seu carinho com decorações românticas e delicadas. Personalize o Bentô com corações, flores e frases carinhosas feitas sob medida para surpreender quem você ama em datas românticas, casamentos ou comemorações.
                </p>
                <div className="pt-2">
                  <a
                    href="#bento"
                    className="inline-flex bg-[#3D2B1F] hover:bg-[#E18126] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors font-sans cursor-pointer shadow-sm"
                  >
                    Personalizar bentô de amor
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full max-w-md">
                <img
                  src={bentoLoving}
                  alt="Bentô Romântico"
                  className="w-full h-64 object-cover rounded-2xl border border-[#3D2B1F]/10 shadow-sm mx-auto"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Galeria de Fotos Reais */}
        <PhotoGallery />

      </main>

      {/* Rodapé */}
      <Footer />

      {/* Modal de Pedido */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPhrase={initialPhrase}
      />

      {/* Botão Flutuante do WhatsApp Minimalista (Conforme image copy 4.png) */}
      <a
        href={generateQuickContactLink('Pedido no Cardápio')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('Contact', { content_name: 'WhatsApp Flutuante' })}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-2 border-white cursor-pointer group"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-10 h-10 object-contain"
        />
      </a>

    </div>
  );
}

export default App;
