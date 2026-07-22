import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VirtualMenu } from './components/VirtualMenu';
import { PhotoGallery } from './components/PhotoGallery';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import type { Product } from './data/products';
import { generateQuickContactLink } from './utils/whatsapp';
import { logoImg } from './data/products';
import { trackEvent } from './utils/pixel';
import whatsappIcon from '@images/image copy 4.png';

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
        
        {/* Seção Hero (Conforme flyer image copy 10.png, sem emojis/tracinhos) */}
        <section className="bg-white py-16 border-b border-[#3D2B1F]/10 text-center max-w-4xl mx-auto px-4 my-8 rounded-[2.5rem] shadow-sm">
          <img
            src={logoImg}
            alt="Logo Karolina Atelier"
            className="h-28 w-auto mx-auto object-contain mb-8 animate-pulse-subtle"
            style={{ animationDuration: '6s' }}
          />
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#3D2B1F] tracking-tight leading-tight">
            Bolos e Doces <span className="text-[#E18126]">Artesanais</span> sob Encomenda
          </h1>
          <p className="text-[#3D2B1F]/60 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Seja bem-vindo ao nosso cardápio virtual. Todos os nossos produtos são preparados no dia do seu evento com ingredientes selecionados de alta qualidade.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 text-xs font-bold text-[#3D2B1F]/80">
            <span className="bg-[#FAF6F0] px-4 py-2 rounded-full border border-[#3D2B1F]/10">
              Retirada ou Entrega em Ceilândia - DF
            </span>
            <span className="bg-[#FAF6F0] px-4 py-2 rounded-full border border-[#3D2B1F]/10">
              Pix, Crédito ou Débito
            </span>
          </div>
        </section>

        {/* Cardápio Virtual */}
        <VirtualMenu onSelectProduct={handleOpenModal} />

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
