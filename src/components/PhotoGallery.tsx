import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/products';
import { Camera, ZoomIn } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tudo');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = ['Tudo', 'Bento Cakes', 'Bolos Confeitados', 'Docinhos & Brigadeiros'];

  const filteredImages = activeCategory === 'Tudo'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-[#FAF6F0] border-t border-[#3D2B1F]/10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Título da Seção (Sem Emojis, Sem Tracinhos, Premium) */}
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-[#E18126]/10 text-[#E18126] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" /> Nosso Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tight">
            Veja as Delícias que Produzimos
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fotos reais dos nossos produtos entregues em Ceilândia-DF. Qualidade e carinho em cada detalhe.
          </p>
        </div>

        {/* Abas de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#3D2B1F] text-[#FAF6F0] shadow-md'
                  : 'bg-white text-[#3D2B1F] hover:bg-[#E18126]/10 border border-[#3D2B1F]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img.src)}
              className="group relative h-48 sm:h-64 md:h-72 overflow-hidden bg-white border border-[#3D2B1F]/10 rounded-[1.5rem] shadow-sm cursor-zoom-in transition-all duration-300 hover:shadow-lg"
            >
              {/* Imagem */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay de Hover */}
              <div className="absolute inset-0 bg-[#3D2B1F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#3D2B1F] shadow-md scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Tag da Categoria */}
              <div className="absolute bottom-3 left-3 bg-[#FAF6F0]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#3D2B1F]/10 shadow-sm">
                <span className="text-[9px] font-extrabold uppercase text-[#3D2B1F] tracking-wide">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Zoom Simplificado */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-3xl max-h-[85vh] overflow-hidden rounded-[2rem] bg-white border border-white/10 shadow-2xl">
              <img
                src={selectedImg}
                alt="Zoom do Produto"
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

// Componente X de fechar
const X: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
