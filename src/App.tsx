import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoCampaign } from './components/BentoCampaign';
import { KitSection } from './components/KitSection';
import { ProductGrid } from './components/ProductGrid';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { PRODUCTS, type Product } from './data/products';
import { generateQuickContactLink } from './utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialPhrase, setInitialPhrase] = useState('');

  const handleOpenModal = (product: Product, phrase?: string) => {
    setSelectedProduct(product);
    if (phrase) setInitialPhrase(phrase);
    setIsModalOpen(true);
  };

  const handleQuickOrder = () => {
    // Abre o modal com o Bentô Cake por padrão se nenhum estiver selecionado
    const defaultProduct = PRODUCTS.find((p) => p.id === 'bento-classico') || PRODUCTS[0];
    handleOpenModal(defaultProduct);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3D2B1F] flex flex-col font-sans selection:bg-[#F4C2C2] selection:text-[#3D2B1F]">
      
      {/* Barra de Navegação */}
      <Navbar onOpenQuickOrder={handleQuickOrder} />

      {/* Seção Principal Hero */}
      <main className="flex-1">
        <Hero onSelectProduct={handleOpenModal} />
        
        {/* Seção de Campanha Especial Bentô Cake (Foco em Anúncios Pago) */}
        <BentoCampaign onSelectProduct={handleOpenModal} />
        
        {/* Combos & Kits Festa Completo */}
        <KitSection onSelectProduct={handleOpenModal} />
        
        {/* Cardápio Detalhado por Categorias */}
        <ProductGrid onSelectProduct={handleOpenModal} />
        
        {/* Depoimentos de Clientes */}
        <Testimonials />
        
        {/* Dúvidas Frequentes */}
        <FAQ />
      </main>

      {/* Rodapé da Página */}
      <Footer onOpenQuickOrder={handleQuickOrder} />

      {/* Modal Interativo de Pedido Qualificado */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPhrase={initialPhrase}
      />

      {/* Botão Flutuante Fixo do WhatsApp no Canto Inferior Direito */}
      <a
        href={generateQuickContactLink('Atendimento Direto')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group cursor-pointer border-2 border-white"
        title="Falar no WhatsApp com a Ana Karolina"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-1">
          Atendimento WhatsApp
        </span>
      </a>

    </div>
  );
}

export default App;
