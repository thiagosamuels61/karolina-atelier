import { ShoppingBag, Star, Check, ChevronRight } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-[#E5D5CB] group bg-white/95">
      
      {/* Imagem do Produto */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-[#FAF6F0]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
        />
        
        {/* Badge promocional se existir */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#D48C95] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
            {product.badge}
          </div>
        )}

        {/* Tag de Destaque Popular */}
        {product.isPopular && !product.badge && (
          <div className="absolute top-3 left-3 bg-[#3D2B1F] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-current" /> Favorito dos Clientes
          </div>
        )}

        {/* Tag de Preço no Canto */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-[#E5D5CB]">
          <span className="font-serif font-bold text-sm text-[#3D2B1F]">
            {product.priceText}
          </span>
        </div>
      </div>

      {/* Conteúdo Informativo */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif font-bold text-xl text-[#3D2B1F] group-hover:text-[#D48C95] transition-colors leading-tight">
            {product.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5C3A21]/90 mt-2 leading-relaxed">
            {product.description}
          </p>

          {/* Lista de Sabores / Destaques */}
          {product.flavors && product.flavors.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[#E5D5CB]/40 space-y-1">
              <span className="text-[10px] font-bold text-[#8B4513] uppercase tracking-wider block">
                Sabores / Recheios Disponíveis:
              </span>
              <ul className="text-xs text-[#3D2B1F] space-y-1">
                {product.flavors.slice(0, 3).map((flv, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3 h-3 text-[#D48C95] flex-shrink-0" />
                    <span className="truncate">{flv}</span>
                  </li>
                ))}
                {product.flavors.length > 3 && (
                  <li className="text-[11px] text-[#D48C95] font-semibold italic pl-4">
                    + {product.flavors.length - 3} outras opções no pedido
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Ação de Conversão */}
        <div className="pt-2">
          <button
            onClick={() => onSelect(product)}
            className="w-full bg-[#FAF6F0] hover:bg-[#D48C95] text-[#5C3A21] hover:text-white border border-[#E5D5CB] hover:border-[#D48C95] py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
          >
            <ShoppingBag className="w-4 h-4 text-[#D48C95] group-hover/btn:text-white transition-colors" />
            <span>Ver Detalhes & Encomendar</span>
            <ChevronRight className="w-4 h-4 ml-auto opacity-70 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
