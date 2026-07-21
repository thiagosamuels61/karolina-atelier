import { useState } from 'react';
import { CATEGORIES, PRODUCTS, type Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { UtensilsCrossed } from 'lucide-react';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do Cardápio */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-[#FFF0F3] text-[#D48C95] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D48C95]/30">
            <UtensilsCrossed className="w-4 h-4" /> Cardápio Completo & Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F]">
            Nossos Produtos & Valores
          </h2>
          <p className="text-[#5C3A21] text-base sm:text-lg">
            Confira todas as nossas delícias com preços abertos e detalhes claros para você montar sua encomenda sem complicações.
          </p>
        </div>

        {/* Abas de Navegação por Categoria */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeCategory === 'todos'
                ? 'bg-[#5C3A21] text-white border-[#5C3A21] shadow-md'
                : 'bg-white text-[#5C3A21] border-[#E5D5CB] hover:border-[#D48C95] hover:bg-[#FFF5F6]'
            }`}
          >
            🌟 Todos os Produtos ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#D48C95] text-white border-[#D48C95] shadow-md'
                    : 'bg-white text-[#5C3A21] border-[#E5D5CB] hover:border-[#D48C95] hover:bg-[#FFF5F6]'
                }`}
              >
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#D48C95]/15 text-[#8B4513]'}`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grade de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-card rounded-3xl">
            <p className="text-[#8B4513] font-semibold">Nenhum produto encontrado nesta categoria no momento.</p>
          </div>
        )}

      </div>
    </section>
  );
};
