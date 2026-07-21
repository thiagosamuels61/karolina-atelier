// Imports das fotos organizadas por categoria
import logoImg from '@logo/logo transparente.png';
import logoWhiteBg from '@logo/logo fundo branco.png';

// Fotos Bentô Cakes
import bentoImg1 from '@bento/Captura de tela 2026-07-21 134358.png';
import bentoImg2 from '@bento/Captura de tela 2026-07-21 134402.png';
import bentoImg3 from '@bento/Captura de tela 2026-07-21 134406.png';
import bentoImg4 from '@bento/Captura de tela 2026-07-21 134411.png';
import bentoImg5 from '@bento/Captura de tela 2026-07-21 134416.png';
import bentoImg6 from '@bento/Captura de tela 2026-07-21 134421.png';

// Fotos Bolos Confeitados
import boloImg1 from '@bolos/Captura de tela 2026-07-21 140417.png';
import boloImg2 from '@bolos/Captura de tela 2026-07-21 140422.png';
import boloImg3 from '@bolos/Captura de tela 2026-07-21 140428.png';
import boloImg4 from '@bolos/Captura de tela 2026-07-21 140431.png';
import boloImg5 from '@bolos/Captura de tela 2026-07-21 140437.png';

// Fotos Kit Festa
import kitImg1 from '@kits/Captura de tela 2026-07-21 140552.png';
import kitImg2 from '@kits/Captura de tela 2026-07-21 140600.png';

// Fotos Brigadeiros Gourmet
import brigImg1 from '@brigadeiros/Captura de tela 2026-07-21 141434.png';
import brigImg2 from '@brigadeiros/Captura de tela 2026-07-21 141446.png';
import brigImg3 from '@brigadeiros/Captura de tela 2026-07-21 141450.png';
import brigImg4 from '@brigadeiros/Captura de tela 2026-07-21 141455.png';

export { logoImg, logoWhiteBg };

export interface ProductOption {
  label: string;
  priceModifier?: number;
}

export interface UpsellOption {
  id: string;
  title: string;
  originalPrice: number;
  discountPrice: number;
  savingsText: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'bento' | 'bolos' | 'brigadeiros' | 'kits';
  price: number;
  priceText: string;
  unitText: string;
  description: string;
  minLeadTimeDays: number;
  minLeadTimeText: string;
  image: string;
  gallery?: string[];
  badge?: string;
  isPopular?: boolean;
  flavors?: string[];
  sizes?: ProductOption[];
  hasCustomPhrase?: boolean;
  maxPhraseLength?: number;
}

export const UPSELL_OPTIONS: UpsellOption[] = [
  {
    id: 'upsell-cento-brigadeiro',
    title: '🍬 1 Cento de Brigadeiros Gourmet (100un)',
    originalPrice: 120.00,
    discountPrice: 105.00,
    savingsText: 'Economize R$ 15,00 no combo',
  },
  {
    id: 'upsell-bento-extra',
    title: '🎁 1 Bentô Cake Extra com Frase Flork',
    originalPrice: 38.00,
    discountPrice: 30.00,
    savingsText: 'Economize R$ 8,00 no combo',
  },
  {
    id: 'upsell-pipoca-gourmet',
    title: '🍿 1 Pacote de Pipoca Gourmet Ninho (150g)',
    originalPrice: 18.00,
    discountPrice: 15.00,
    savingsText: 'Preço Especial +R$ 15,00',
  },
  {
    id: 'upsell-dindin-kit',
    title: '🍦 Kit 6 Dindins Gourmet Cremosos',
    originalPrice: 36.00,
    discountPrice: 30.00,
    savingsText: 'Economize R$ 6,00 no combo',
  },
];

export const BENTO_SUGGESTED_PHRASES = [
  "Há 30 anos fingindo costume! 🥳",
  "Mais um ano sem criar vergonha! 😂",
  "Rir para não chorar da idade! 🙈",
  "Jovem há mais tempo! 👑",
  "Há 25 anos sendo o terror! 😜",
  "Te amo mais do que amo doces! ❤️",
  "Parabéns, você merece o mundo! 🌟",
  "Menos um ano de paciência! 🎂",
];

export const BENTO_CAKES_LIST: Product[] = [
  {
    id: 'bento-flork-divertido',
    title: 'Bentô Cake Flork Divertido',
    category: 'bento',
    price: 38.00,
    priceText: 'R$ 38,00',
    unitText: 'unidade (~350g - serve até 3 pessoas)',
    description: 'O bolo individual mais famoso da internet! Decorado com o personagem Flork e a sua frase personalizada. Acompanha lancheira biodegradável e velinha.',
    minLeadTimeDays: 1,
    minLeadTimeText: '🗓️ Encomenda com 1 dia de antecedência',
    image: bentoImg1,
    gallery: [bentoImg1, bentoImg2, bentoImg3, bentoImg4],
    badge: '🔥 Destaque em Ceilândia',
    isPopular: true,
    hasCustomPhrase: true,
    maxPhraseLength: 35,
    flavors: [
      'Massa Baunilha + Ninho com Nutella',
      'Massa Cacau + Brigadeiro 50% Gourmet',
      'Massa Red Velvet + Cream Cheese & Morango',
      'Massa Baunilha + Doce de Leite com Nozes',
    ],
  },
  {
    id: 'bento-duplo-especial',
    title: 'Bentô Cake Duplo (Edição Grande)',
    category: 'bento',
    price: 58.00,
    priceText: 'R$ 58,00',
    unitText: 'unidade (~600g - serve até 6 pessoas)',
    description: 'Versão ampliada do Bentô Cake tradicional com mais camadas de recheio e espaço para desenhos e frases mais detalhadas.',
    minLeadTimeDays: 1,
    minLeadTimeText: '🗓️ Encomenda com 1 dia de antecedência',
    image: bentoImg5,
    gallery: [bentoImg5, bentoImg6],
    badge: '⭐ Para Compartilhar',
    hasCustomPhrase: true,
    maxPhraseLength: 45,
    flavors: [
      'Ninho com Nutella Supremo',
      'Brigadeiro Belga Meio Amargo',
      'Doce de Leite com Coco Queimado',
    ],
  },
];

export const BOLOS_CONFEITADOS_LIST: Product[] = [
  {
    id: 'bolo-ninho-nutella',
    title: 'Bolo Confeitado Ninho com Nutella',
    category: 'bolos',
    price: 85.00,
    priceText: 'R$ 85,00 / kg',
    unitText: 'a partir de 1kg',
    description: 'Massa fofinha umedecida com calda especial, camadas generosas de creme Leite Ninho e Nutella pura. Confeitado artesanalmente.',
    minLeadTimeDays: 2,
    minLeadTimeText: '⏳ Encomenda com 2 dias de antecedência (Massa & Confeite)',
    image: boloImg1,
    gallery: [boloImg1, boloImg2, boloImg3],
    badge: '🏆 Mais Vendido',
    isPopular: true,
    flavors: [
      'Ninho com Nutella Tradicional',
      'Ninho com Geleia de Morango Fresh',
      'Ninho com Abacaxi Caramelizado',
    ],
    sizes: [
      { label: '1.0 kg (8 a 10 fatias)', priceModifier: 0 },
      { label: '1.5 kg (12 a 15 fatias)', priceModifier: 42.5 },
      { label: '2.0 kg (18 a 20 fatias)', priceModifier: 85.0 },
      { label: '3.0 kg (25 a 30 fatias)', priceModifier: 170.0 },
    ],
  },
  {
    id: 'bolo-brigadeiro-belga',
    title: 'Bolo Confeitado Brigadeiro Belga 50%',
    category: 'bolos',
    price: 85.00,
    priceText: 'R$ 85,00 / kg',
    unitText: 'a partir de 1kg',
    description: 'Massa de chococacau 50%, recheio aveludado de brigadeiro gourmet tradicional e granulado nobre trançado.',
    minLeadTimeDays: 2,
    minLeadTimeText: '⏳ Encomenda com 2 dias de antecedência',
    image: boloImg4,
    gallery: [boloImg4, boloImg5],
    flavors: [
      'Brigadeiro Ao Leite 50%',
      'Brigadeiro Meio Amargo 70%',
      'Dois Amores (Ninho + Brigadeiro)',
    ],
    sizes: [
      { label: '1.0 kg (8 a 10 fatias)', priceModifier: 0 },
      { label: '1.5 kg (12 a 15 fatias)', priceModifier: 42.5 },
      { label: '2.0 kg (18 a 20 fatias)', priceModifier: 85.0 },
      { label: '3.0 kg (25 a 30 fatias)', priceModifier: 170.0 },
    ],
  },
];

export const BRIGADEIROS_LIST: Product[] = [
  {
    id: 'cento-brigadeiro-gourmet',
    title: 'Cento de Brigadeiros Gourmet (100 Unidades)',
    category: 'brigadeiros',
    price: 120.00,
    priceText: 'R$ 120,00',
    unitText: 'caixa com 100 docinhos',
    description: 'Docinhos finos enrolados artesanalmente com confeitos selecionados e chocolate nobre. Escolha até 4 sabores por cento.',
    minLeadTimeDays: 2,
    minLeadTimeText: '⏳ Encomenda com 2 dias de antecedência',
    image: brigImg1,
    gallery: [brigImg1, brigImg2, brigImg3, brigImg4],
    badge: '🍫 Chocolate Nobre',
    isPopular: true,
    flavors: [
      'Ao Leite Tradicional + Ninho c/ Nutella',
      'Churros + Beijinho de Coco',
      'Meio Amargo 70% + Pistache Cremoso',
      'Mix Especial da Casa (4 Sabores)',
    ],
    sizes: [
      { label: 'Cento Completo (100 unidades)', priceModifier: 0 },
      { label: 'Meio Cento (50 unidades)', priceModifier: -55 },
    ],
  },
];

export const KITS_FESTA_LIST: Product[] = [
  {
    id: 'kit-festa-petit',
    title: 'Kit Festa Petit (5 a 8 Pessoas)',
    category: 'kits',
    price: 139.00,
    priceText: 'R$ 139,00',
    unitText: 'combo completo',
    description: '1 Bentô Cake (ou Bolo 1kg) + 50 Brigadeiros Gourmet + 1 Pct Pipoca Gourmet. Economia máxima para festas em família.',
    minLeadTimeDays: 2,
    minLeadTimeText: '⏳ Encomenda com 2 dias de antecedência',
    image: kitImg1,
    gallery: [kitImg1, kitImg2],
    badge: '⭐ Melhor Custo-Benefício',
    isPopular: true,
    flavors: [
      'Bolo Ninho c/ Nutella + 50 Brigadeiros Sortidos',
      'Bolo Brigadeiro Belga + 50 Brigadeiros Sortidos',
    ],
  },
  {
    id: 'kit-festa-vip',
    title: 'Kit Festa VIP (10 a 15 Pessoas)',
    category: 'kits',
    price: 229.00,
    priceText: 'R$ 229,00',
    unitText: 'combo completo',
    description: 'Bolo Confeitado 1.5kg + 100 Brigadeiros Gourmet + 2 Pcts Pipoca Gourmet + 6 Dindins Gourmet.',
    minLeadTimeDays: 2,
    minLeadTimeText: '⏳ Encomenda com 2 dias de antecedência',
    image: kitImg2,
    badge: '🎉 Completo para Festas',
    flavors: [
      'Bolo Ninho c/ Nutella 1.5kg + 100 Brigadeiros',
      'Bolo Doce de Leite c/ Nozes 1.5kg + 100 Brigadeiros',
    ],
  },
];
