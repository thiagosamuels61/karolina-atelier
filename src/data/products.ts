// Importação direta das fotos reais do Karolina Atelier
import img01 from '@photos/Captura de tela 2026-07-21 095850.png';
import img02 from '@photos/Captura de tela 2026-07-21 095901.png';
import img03 from '@photos/Captura de tela 2026-07-21 095905.png';
import img04 from '@photos/Captura de tela 2026-07-21 095915.png';
import img05 from '@photos/Captura de tela 2026-07-21 095921.png';
import img06 from '@photos/Captura de tela 2026-07-21 095929.png';
import img07 from '@photos/Captura de tela 2026-07-21 095944.png';
import img08 from '@photos/Captura de tela 2026-07-21 095951.png';
import img09 from '@photos/Captura de tela 2026-07-21 095958.png';
import img10 from '@photos/Captura de tela 2026-07-21 100006.png';
import img11 from '@photos/Captura de tela 2026-07-21 100012.png';
import img12 from '@photos/Captura de tela 2026-07-21 100019.png';
import img13 from '@photos/Captura de tela 2026-07-21 100023.png';
import img14 from '@photos/Captura de tela 2026-07-21 100029.png';
import img15 from '@photos/Captura de tela 2026-07-21 100034.png';
import img16 from '@photos/Captura de tela 2026-07-21 100038.png';
import img17 from '@photos/Captura de tela 2026-07-21 100046.png';
import img18 from '@photos/Captura de tela 2026-07-21 100052.png';
import img19 from '@photos/Captura de tela 2026-07-21 100057.png';
import img20 from '@photos/Captura de tela 2026-07-21 100102.png';
import img21 from '@photos/Captura de tela 2026-07-21 100131.png';
import img22 from '@photos/Captura de tela 2026-07-21 100135.png';
import img23 from '@photos/Captura de tela 2026-07-21 100139.png';
import img24 from '@photos/Captura de tela 2026-07-21 100146.png';
import img25 from '@photos/Captura de tela 2026-07-21 100151.png';

export interface Category {
  id: string;
  name: string;
  badge?: string;
  iconName: string;
}

export interface ProductOption {
  label: string;
  priceModifier?: number;
}

export interface Product {
  id: string;
  title: string;
  category: 'bento' | 'kits' | 'bolos' | 'brigadeiros' | 'pipoca' | 'dindin';
  price: number;
  priceText: string;
  unitText: string;
  description: string;
  image: string;
  gallery?: string[];
  badge?: string;
  isPopular?: boolean;
  flavors?: string[];
  sizes?: ProductOption[];
  hasCustomPhrase?: boolean;
}

export const CATEGORIES: Category[] = [
  { id: 'bento', name: 'Bentô Cakes 🎁', badge: 'Campanha Anúncios', iconName: 'Gift' },
  { id: 'kits', name: 'Kits Festa ✨', badge: 'Economize até 20%', iconName: 'Package' },
  { id: 'bolos', name: 'Bolos de Festa 🎂', iconName: 'Cake' },
  { id: 'brigadeiros', name: 'Brigadeiros Gourmet 🍬', iconName: 'Sparkles' },
  { id: 'pipoca', name: 'Pipoca Gourmet 🍿', iconName: 'Popcorn' },
  { id: 'dindin', name: 'Dindin Gourmet 🍦', iconName: 'IceCream' },
];

export const BENTO_SUGGESTED_PHRASES = [
  "Há 30 anos fingindo costume! 🥳",
  "Mais um ano sem criar vergonha na cara! 😂",
  "Há [idade] anos a luz da minha vida (e da conta de luz)! 💡",
  "Falta pouco para os 40, aproveita! 😜",
  "Você não está ficando velho, está virando um clássico! 👑",
  "Te amo mais do que amo doces! ❤️",
  "Idade é só um número (mas esse número é grande)! 🎂",
  "Rir para não chorar da idade! 🙈",
  "Parabéns pelo seu dia, você merece o mundo! 🌟",
];

export const PRODUCTS: Product[] = [
  // --- BENTÔ CAKES ---
  {
    id: 'bento-classico',
    title: 'Bentô Cake Divertido Personalizado',
    category: 'bento',
    price: 38.00,
    priceText: 'R$ 38,00',
    unitText: 'unidade (~350g)',
    description: 'O presente mais amado da internet! Mini bolo fofinho (serve 2 a 3 pessoas) decorado com o famoso desenho Flork e a frase bem-humorada que você escolher.',
    image: img01,
    gallery: [img01, img02, img03],
    badge: '🔥 Mais Vendido nos Anúncios',
    isPopular: true,
    hasCustomPhrase: true,
    flavors: [
      'Massa de Baunilha com Ninho e Nutella',
      'Massa de Cacau com Brigadeiro Gourmet 50%',
      'Massa de Red Velvet com Cream Cheese & Morango',
      'Massa de Baunilha com Doce de Leite e Nozes',
    ],
    sizes: [
      { label: 'Padrão (350g - Serve até 3 pessoas)', priceModifier: 0 },
      { label: 'Duplo (600g - Serve até 5 pessoas)', priceModifier: 20 },
    ],
  },
  {
    id: 'bento-romantico',
    title: 'Bentô Cake Apaixonado & Aniversário',
    category: 'bento',
    price: 42.00,
    priceText: 'R$ 42,00',
    unitText: 'unidade (~380g)',
    description: 'Design delicado com veludo de cacau ou corações tridimensionais. Ideal para datas comemorativas, namoro, casamento e homenagens especiais.',
    image: img04,
    gallery: [img04, img05, img06],
    badge: '❤️ Romântico',
    hasCustomPhrase: true,
    flavors: [
      'Ninho com Geleia Artesanal de Morango',
      'Brigadeiro Belga Meio Amargo',
      'Doce de Leite com Coco Queimado',
    ],
  },

  // --- KITS FESTA (HIGHEST CONVERSION) ---
  {
    id: 'kit-p-solo',
    title: 'Kit Festa Petit (5 a 8 Pessoas)',
    category: 'kits',
    price: 139.00,
    priceText: 'R$ 139,00',
    unitText: 'combo completo',
    description: 'Perfeito para pequenas comemorações e aniversários em família! Acompanha 1 Bentô Cake (ou Bolo 1kg) + 50 Brigadeiros Gourmet + 1 Pct Pipoca Gourmet (150g).',
    image: img07,
    gallery: [img07, img08, img09],
    badge: '🏆 Campeão de Vendas',
    isPopular: true,
    flavors: [
      'Bolo Ninho c/ Nutella + Brigadeiros Ao Leite e Ninho',
      'Bolo Brigadeiro Belga + Brigadeiros Ao Leite e Beijinho',
      'Bolo Red Velvet + Brigadeiros Sortidos Gourmet',
    ],
  },
  {
    id: 'kit-m-vip',
    title: 'Kit Festa VIP (10 a 15 Pessoas)',
    category: 'kits',
    price: 229.00,
    priceText: 'R$ 229,00',
    unitText: 'combo completo',
    description: 'O combo preferido para festas em casa e escritório! Acompanha Bolo Confeitado 1.5kg + 100 Brigadeiros Gourmet Sortidos + 2 Pcts Pipoca Gourmet + 6 Dindins Gourmet.',
    image: img10,
    gallery: [img10, img11, img12],
    badge: '⭐ Melhor Custo-Benefício',
    isPopular: true,
    flavors: [
      'Bolo Doce de Leite c/ Nozes + 100 Brigadeiros Tradicionais & Ninho',
      'Bolo Ninho c/ Morango + 100 Brigadeiros Sortidos Gourmet',
    ],
  },
  {
    id: 'kit-g-celebracao',
    title: 'Kit Festa Celebração (20 a 25 Pessoas)',
    category: 'kits',
    price: 349.00,
    priceText: 'R$ 349,00',
    unitText: 'combo completo',
    description: 'A estrutura completa para a sua festa sem preocupações! Bolo artesanal 2.5kg + 150 Brigadeiros Gourmet Finos + 3 Pcts Pipoca Gourmet Grande + 10 Dindins Gourmet.',
    image: img13,
    gallery: [img13, img14, img15],
    badge: '🎉 Combo Família',
    flavors: [
      'Bolo Especial de Andar (2.5kg) + 150 Brigadeiros Gourmet',
    ],
  },

  // --- BOLOS PERSONALIZADOS ---
  {
    id: 'bolo-ninho-nutella',
    title: 'Bolo Festivo Ninho com Nutella Supreme',
    category: 'bolos',
    price: 85.00,
    priceText: 'R$ 85,00 / kg',
    unitText: 'vendido por peso (a partir de 1kg)',
    description: 'Massa super fofinha umedecida com calda especial, camadas generosas de creme de Leite Ninho e Nutella pura. Decoração impecável com brigadeiros no topo.',
    image: img16,
    gallery: [img16, img17, img18],
    badge: '✨ Favorito do Atelier',
    isPopular: true,
    flavors: [
      'Recheio Duplo Ninho & Nutella',
      'Recheio Ninho com Geleia de Morango Fresh',
    ],
    sizes: [
      { label: '1kg (Serve 8 a 10 fatias)', priceModifier: 0 },
      { label: '1.5kg (Serve 12 a 15 fatias)', priceModifier: 42.5 },
      { label: '2kg (Serve 18 a 20 fatias)', priceModifier: 85 },
      { label: '3kg (Serve 25 a 30 fatias)', priceModifier: 170 },
    ],
  },
  {
    id: 'bolo-red-velvet',
    title: 'Bolo Red Velvet Tradicional com Cream Cheese',
    category: 'bolos',
    price: 90.00,
    priceText: 'R$ 90,00 / kg',
    unitText: 'vendido por peso (a partir de 1kg)',
    description: 'Clássico americano elegante com massa aveludada vermelha, recheio suave de cream cheese e toque sutil de baunilha de Madagascar.',
    image: img19,
    gallery: [img19, img20],
    flavors: ['Cream Cheese Tradicional & Frutas Vermelhas'],
    sizes: [
      { label: '1.5kg (Serve 12 a 15 fatias)', priceModifier: 45 },
      { label: '2kg (Serve 18 a 20 fatias)', priceModifier: 90 },
    ],
  },

  // --- BRIGADEIROS GOURMET ---
  {
    id: 'cento-brigadeiro',
    title: 'Cento de Brigadeiro Gourmet (100 Unidades)',
    category: 'brigadeiros',
    price: 120.00,
    priceText: 'R$ 120,00',
    unitText: 'caixa com 100 docinhos',
    description: 'Docinhos enrolados um a um com confeitos selecionados e chocolate nobre. Pode escolher até 4 sabores por cento.',
    image: img21,
    gallery: [img21, img22],
    badge: '🍫 Chocolate Nobre 50%',
    isPopular: true,
    flavors: [
      'Ao Leite Tradicional + Ninho com Nutella',
      'Churros com Doce de Leite + Beijinho de Coco',
      'Meio Amargo 70% + Pistache Cremoso',
      'Mix Especial da Casa (4 Sabores Sortidos)',
    ],
    sizes: [
      { label: 'Cento Completo (100 unidades)', priceModifier: 0 },
      { label: 'Meio Cento (50 unidades)', priceModifier: -55 },
    ],
  },

  // --- PIPOCA GOURMET ---
  {
    id: 'pipoca-ninho',
    title: 'Pipoca Gourmet Ninho & Caramelizada (Milho Mushroom)',
    category: 'pipoca',
    price: 18.00,
    priceText: 'R$ 18,00',
    unitText: 'pacote hermético 150g',
    description: 'Pipocas redondinhas gigantes (milho mushroom), estouradas sem óleo, caramelizadas e envolvidas em Leite Ninho puro. Crocância inigualável!',
    image: img23,
    gallery: [img23, img24],
    flavors: [
      'Leite Ninho Supremo',
      'Ovomaltine Crocantes',
      'Churros com Doce de Leite',
      'Chocolate Belga Amargo',
    ],
  },

  // --- DINDIN GOURMET ---
  {
    id: 'dindin-kit',
    title: 'Combo 6 Dindins Gourmet Cremosos',
    category: 'dindin',
    price: 36.00,
    priceText: 'R$ 36,00',
    unitText: 'kit com 6 unidades',
    description: 'O famoso geladinho gourmet ultra cremoso, feito com base de leite condensado premium e recheios generosos de Nutella e frutas naturais.',
    image: img25,
    flavors: [
      'Ninho com Nutella (2x) + Morango c/ Nutella (2x) + Oreo (2x)',
      'Maracujá Cremoso (2x) + Kinder Bueno (2x) + Ninho (2x)',
    ],
  },
];
