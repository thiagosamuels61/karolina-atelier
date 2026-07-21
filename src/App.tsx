import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VirtualMenu } from './components/VirtualMenu';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import type { Product } from './data/products';
import { generateQuickContactLink } from './utils/whatsapp';
import { logoImg } from './data/products';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialPhrase, setInitialPhrase] = useState('');

  const handleOpenModal = (product: Product, phrase?: string) => {
    setSelectedProduct(product);
    if (phrase) setInitialPhrase(phrase);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#E18126]/20 selection:text-[#111111]">
      
      {/* Navbar Minimalista (Sem Menus Distrativos) */}
      <Navbar />

      {/* Seção de Intro e Apresentação do Atelier */}
      <main className="flex-1 pb-16">
        
        {/* Banner Principal com a Logo e Informações de Encomenda */}
        <section className="bg-white py-12 border-b border-gray-50 text-center max-w-4xl mx-auto px-4">
          <img
            src={logoImg}
            alt="Logo Karolina Atelier"
            className="h-28 w-auto mx-auto object-contain mb-6 animate-pulse-subtle"
            style={{ animationDuration: '4s' }}
          />
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight">
            Bolos & Doces Artesanais sob Encomenda
          </h1>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Seja bem-vindo ao nosso cardápio virtual! Todos os nossos produtos são preparados no dia do seu evento com ingredientes selecionados de alta qualidade.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
              📍 Retirada ou Entrega em Ceilândia - DF
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
              💳 Pix, Crédito ou Débito
            </span>
          </div>
        </section>

        {/* Cardápio Virtual Segmentado por Seções de Produtos */}
        <VirtualMenu onSelectProduct={handleOpenModal} />

      </main>

      {/* Rodapé Clean */}
      <Footer />

      {/* Modal de Detalhes, Customização & Combo de Desconto */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPhrase={initialPhrase}
      />

      {/* Botão Flutuante do WhatsApp Customizado (conforme image copy 4.png) */}
      <a
        href={generateQuickContactLink('Pedido no Cardápio')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-2 border-white cursor-pointer group"
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-xl">💬</span>
        </div>
        <div className="text-left">
          <span className="text-[9px] uppercase tracking-wider text-amber-200 font-bold block leading-none">Ana Karolina</span>
          <span className="text-xs sm:text-sm font-bold block leading-none mt-0.5">Pedir no WhatsApp</span>
        </div>
      </a>

    </div>
  );
}

export default App;
