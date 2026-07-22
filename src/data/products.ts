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

// Imagens extras de Bento Cakes para Galeria
import bentoGal1 from '@bento/Captura de tela 2026-07-21 134425.png';
import bentoGal2 from '@bento/Captura de tela 2026-07-21 134431.png';
import bentoGal3 from '@bento/Captura de tela 2026-07-21 134442.png';
import bentoGal4 from '@bento/Captura de tela 2026-07-21 134447.png';
import bentoGal5 from '@bento/Captura de tela 2026-07-21 134451.png';

// Fotos Bolos Confeitados (as 5 selecionadas pelo usuário)
import boloImg1 from '@bolos/Captura de tela 2026-07-21 140552.png';
import boloImg2 from '@bolos/Captura de tela 2026-07-21 140533.png';
import boloImg3 from '@bolos/Captura de tela 2026-07-21 140510.png';
import boloImg4 from '@bolos/Captura de tela 2026-07-21 140505.png';
import boloImg5 from '@bolos/Captura de tela 2026-07-21 140447.png';

// Imagens extras de Bolos para Galeria
import boloGal1 from '@bolos/Captura de tela 2026-07-21 140422.png';
import boloGal2 from '@bolos/Captura de tela 2026-07-21 140428.png';
import boloGal3 from '@bolos/Captura de tela 2026-07-21 140431.png';
import boloGal4 from '@bolos/Captura de tela 2026-07-21 140437.png';
import boloGal5 from '@bolos/Captura de tela 2026-07-21 140440.png';

// Fotos Kit Festa
import kitImg1 from '@kits/Captura de tela 2026-07-21 140552.png';
import kitImg2 from '@kits/Captura de tela 2026-07-21 140600.png';

// Fotos Brigadeiros Gourmet
import brigImg1 from '@brigadeiros/Captura de tela 2026-07-21 141434.png';
import brigImg2 from '@brigadeiros/Captura de tela 2026-07-21 141446.png';
import brigImg3 from '@brigadeiros/Captura de tela 2026-07-21 141450.png';
import brigImg4 from '@brigadeiros/Captura de tela 2026-07-21 141455.png';

// Imagens extras de Brigadeiros para Galeria
import brigGal1 from '@brigadeiros/Captura de tela 2026-07-21 141503.png';
import brigGal2 from '@brigadeiros/Captura de tela 2026-07-21 141522.png';
import brigGal3 from '@brigadeiros/Captura de tela 2026-07-21 141526.png';
import brigGal4 from '@brigadeiros/Captura de tela 2026-07-21 141534.png';
import brigGal5 from '@brigadeiros/Captura de tela 2026-07-21 141540.png';

// Imagem 9.jpg (Layout do site que o usuário quer que seja usado de referência)
import layoutRefImg from '@images/image 9.jpg';

export { logoImg, logoWhiteBg, layoutRefImg };

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
    title: '1 Cento de Brigadeiros Gourmet (100un)',
    originalPrice: 180.00,
    discountPrice: 165.00,
    savingsText: 'Economize R$ 15,00 no combo',
  },
  {
    id: 'upsell-bento-extra',
    title: '1 Bentô Cake Extra com Frase Flork',
    originalPrice: 60.00,
    discountPrice: 50.00,
    savingsText: 'Economize R$ 10,00 no combo',
  },
  {
    id: 'upsell-pipoca-gourmet',
    title: '1 Pacote de Pipoca Gourmet Ninho (150g)',
    originalPrice: 18.00,
    discountPrice: 15.00,
    savingsText: 'Preço Especial +R$ 15,00',
  },
  {
    id: 'upsell-dindin-kit',
    title: 'Kit 6 Dindins Gourmet Cremosos',
    originalPrice: 36.00,
    discountPrice: 30.00,
    savingsText: 'Economize R$ 6,00 no combo',
  },
];

export const BENTO_SUGGESTED_PHRASES = [
  "Há 30 anos fingindo costume!",
  "Mais um ano sem criar vergonha!",
  "Rir para não chorar da idade!",
  "Jovem há mais tempo!",
  "Há 25 anos sendo o terror!",
  "Te amo mais do que amo doces!",
  "Parabéns, você merece o mundo!",
  "Menos um ano de paciência!",
];

export const BENTO_CAKES_LIST: Product[] = [
  {
    id: 'bento-flork-divertido',
    title: 'Bentô Cake Flork Divertido',
    category: 'bento',
    price: 60.00,
    priceText: 'R$ 60,00',
    unitText: 'unidade (~350g - serve de 1 a 2 pessoas)',
    description: 'Mini bolo na marmita de 10cm com cobertura em buttercream e decoração simples de até três cores com o personagem Flork e a sua frase personalizada. Acompanha lancheira biodegradável.',
    minLeadTimeDays: 2,
    minLeadTimeText: 'Encomenda com 2 dias de antecedência',
    image: bentoImg1,
    gallery: [bentoImg1, bentoImg2, bentoImg3, bentoImg4],
    badge: 'Mais Vendido em Ceilândia',
    isPopular: true,
    hasCustomPhrase: true,
    maxPhraseLength: 35,
    flavors: [
      'Massa Baunilha + Recheio Brigadeiro',
      'Massa Baunilha + Recheio Beijinho',
      'Massa Baunilha + Recheio Leite Ninho',
      'Massa Baunilha + Recheio Brigadeiro com Castanha',
      'Massa Chocolate + Recheio Brigadeiro',
      'Massa Chocolate + Recheio Beijinho',
      'Massa Chocolate + Recheio Leite Ninho',
      'Massa Chocolate + Recheio Brigadeiro com Castanha',
      'Massa Baunilha + Recheio Especial Ninho com Nutella (+R$ 5,00)',
      'Massa Baunilha + Recheio Especial Ninho com Geleia de Morango (+R$ 5,00)',
      'Massa Chocolate + Recheio Especial Ninho com Nutella (+R$ 5,00)',
      'Massa Chocolate + Recheio Especial Ninho com Geleia de Morango (+R$ 5,00)',
    ],
  },
  {
    id: 'bento-duplo-especial',
    title: 'Bentô Cake Duplo (Edição Compartilhar)',
    category: 'bento',
    price: 85.00,
    priceText: 'R$ 85,00',
    unitText: 'unidade (~600g - serve de 3 a 4 pessoas)',
    description: 'Versão ampliada do Bentô Cake tradicional, com mais recheio e espaço ideal para decorações especiais ou frases mais longas. Cobertura em buttercream.',
    minLeadTimeDays: 2,
    minLeadTimeText: 'Encomenda com 2 dias de antecedência',
    image: bentoImg5,
    gallery: [bentoImg5, bentoImg6],
    badge: 'Para Compartilhar',
    hasCustomPhrase: true,
    maxPhraseLength: 45,
    flavors: [
      'Massa Baunilha + Recheio Brigadeiro',
      'Massa Baunilha + Recheio Beijinho',
      'Massa Baunilha + Recheio Leite Ninho',
      'Massa Baunilha + Recheio Brigadeiro com Castanha',
      'Massa Chocolate + Recheio Brigadeiro',
      'Massa Chocolate + Recheio Beijinho',
      'Massa Chocolate + Recheio Leite Ninho',
      'Massa Chocolate + Recheio Brigadeiro com Castanha',
      'Massa Baunilha + Recheio Especial Ninho com Nutella (+R$ 5,00)',
      'Massa Baunilha + Recheio Especial Ninho com Geleia de Morango (+R$ 5,00)',
      'Massa Chocolate + Recheio Especial Ninho com Nutella (+R$ 5,00)',
      'Massa Chocolate + Recheio Especial Ninho com Geleia de Morango (+R$ 5,00)',
    ],
  },
];

export const BOLOS_CONFEITADOS_LIST: Product[] = [
  {
    id: 'bolos-confeitados-premium',
    title: 'Bolos Festivos & Confeitados',
    category: 'bolos',
    price: 85.00, // Preço por kg
    priceText: 'R$ 85,00 / kg',
    unitText: 'a partir de 1.5kg (+ R$ 8,00 embalagem)',
    description: 'Bolos festivos com cobertura premium em Chantininho e decorações artesanais sofisticadas. Massa umedecida e fofinha com camadas caprichadas de recheio.',
    minLeadTimeDays: 3,
    minLeadTimeText: 'Encomenda com 3 dias de antecedência',
    image: boloImg1,
    gallery: [boloImg1, boloImg2, boloImg3, boloImg4, boloImg5],
    badge: 'Destaque do Atelier',
    isPopular: true,
    flavors: [
      'Brigadeiro ao Leite',
      'Beijinho (Coco)',
      'Brigadeiro de Leite Ninho',
      'Casadinho (brigadeiro e brigadeiro de ninho)',
      'Prestígio (brigadeiro e beijinho)',
      '4 leites com Abacaxi',
      'Leite Ninho com Abacaxi',
      'Leite Ninho com Geleia de Morango',
      'Doce de leite suave com Ameixa',
      'Leite Ninho com Oreo',
      'Coco (beijinho) com Abacaxi',
    ],
    sizes: [
      { label: '1.5 kg (serve 12 a 15 pessoas)', priceModifier: 0 },
      { label: '2.0 kg (serve 18 a 20 pessoas)', priceModifier: 42.50 }, // +0.5kg
      { label: '2.5 kg (serve 22 a 25 pessoas)', priceModifier: 85.00 }, // +1kg
      { label: '3.0 kg (serve 28 a 30 pessoas)', priceModifier: 127.50 }, // +1.5kg
    ],
  },
];

export const BRIGADEIROS_LIST: Product[] = [
  {
    id: 'cento-brigadeiro-gourmet',
    title: 'Cento de Brigadeiros Gourmet (100 unidades)',
    category: 'brigadeiros',
    price: 180.00,
    priceText: 'R$ 180,00',
    unitText: 'cento completo',
    description: 'Docinhos finos enrolados individualmente com confeitos selecionados e chocolate nobre. Escolha até 3 sabores por cento. Favor nos enviar a cor desejada das forminhas no WhatsApp.',
    minLeadTimeDays: 3,
    minLeadTimeText: 'Encomenda com 3 dias de antecedência',
    image: brigImg1,
    gallery: [brigImg1, brigImg2, brigImg3, brigImg4],
    badge: 'Chocolate Nobre',
    isPopular: true,
    flavors: [
      'Brigadeiro ao Leite',
      'Beijinho (Coco)',
      'Casadinho',
      'Leite Ninho com Nutella',
      'Brigadeiro com Castanha e Nutella',
      'Mix Especial (Escolha até 3 sabores)',
    ],
    sizes: [
      { label: 'Cento Completo (100 unidades)', priceModifier: 0 },
      { label: 'Meio Cento (50 unidades)', priceModifier: -90.00 },
    ],
  },
];

export const KITS_FESTA_LIST: Product[] = [
  {
    id: 'kit-festa-petit',
    title: 'Kit Festa Petit',
    category: 'kits',
    price: 139.00,
    priceText: 'R$ 139,00',
    unitText: 'combo ideal para 5 a 8 pessoas',
    description: 'Perfeito para pequenas comemorações e aniversários em família! Acompanha 1 Bentô Cake (ou Bolo 1kg) + 50 Brigadeiros Gourmet + 1 Pct Pipoca Gourmet (150g).',
    minLeadTimeDays: 3,
    minLeadTimeText: 'Encomenda com 3 dias de antecedência',
    image: kitImg1,
    badge: 'Campeão de Vendas',
    isPopular: true,
    flavors: [
      'Bolo Ninho com Nutella + 50 Brigadeiros Sortidos',
      'Bolo Brigadeiro Belga + 50 Brigadeiros Sortidos',
    ],
  },
  {
    id: 'kit-festa-vip',
    title: 'Kit Festa VIP',
    category: 'kits',
    price: 229.00,
    priceText: 'R$ 229,00',
    unitText: 'combo ideal para 10 a 15 pessoas',
    description: 'O combo preferido para festas em casa e escritório! Acompanha Bolo Confeitado 1.5kg + 100 Brigadeiros Gourmet Sortidos + 2 Pcts Pipoca Gourmet + 6 Dindins Gourmet.',
    minLeadTimeDays: 3,
    minLeadTimeText: 'Encomenda com 3 dias de antecedência',
    image: kitImg2,
    badge: 'Melhor Custo-Benefício',
    isPopular: true,
    flavors: [
      'Bolo Doce de Leite c/ Nozes 1.5kg + 100 Brigadeiros',
      'Bolo Ninho c/ Morango 1.5kg + 100 Brigadeiros',
    ],
  },
  {
    id: 'kit-festa-celebracao',
    title: 'Kit Festa Celebração',
    category: 'kits',
    price: 349.00,
    priceText: 'R$ 349,00',
    unitText: 'combo ideal para 20 a 25 pessoas',
    description: 'A estrutura completa para a sua festa sem preocupações! Bolo artesanal 2.5kg + 150 Brigadeiros Gourmet Finos + 3 Pcts Pipoca Gourmet Grande + 10 Dindins Gourmet.',
    minLeadTimeDays: 3,
    minLeadTimeText: 'Encomenda com 3 dias de antecedência',
    image: layoutRefImg, // Usa layoutRefImg ou kitImg2
    badge: 'Combo Família',
    isPopular: false,
    flavors: [
      'Bolo Especial de Andar (2.5kg) + 150 Brigadeiros Gourmet',
    ],
  },
];

// Estrutura agrupada para Galeria de Inspiração
export interface GalleryImage {
  src: string;
  category: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: bentoImg1, category: 'Bento Cakes', alt: 'Bentô Cake Flork' },
  { src: bentoImg2, category: 'Bento Cakes', alt: 'Bentô Cake Aniversário' },
  { src: bentoImg3, category: 'Bento Cakes', alt: 'Bentô Cake Romântico' },
  { src: bentoImg4, category: 'Bento Cakes', alt: 'Bentô Cake Divertido' },
  { src: bentoGal1, category: 'Bento Cakes', alt: 'Bentô Cake Flork Customizado' },
  { src: bentoGal2, category: 'Bento Cakes', alt: 'Bentô Cake Flork Amizade' },
  { src: bentoGal3, category: 'Bento Cakes', alt: 'Bentô Cake Flork Idade' },
  { src: bentoGal4, category: 'Bento Cakes', alt: 'Bentô Cake Flork Love' },
  { src: bentoGal5, category: 'Bento Cakes', alt: 'Bentô Cake Flork Congrats' },

  { src: boloImg1, category: 'Bolos Confeitados', alt: 'Bolo Confeitado Rosa Manuela' },
  { src: boloImg2, category: 'Bolos Confeitados', alt: 'Bolo Confeitado Branco Vintage' },
  { src: boloImg3, category: 'Bolos Confeitados', alt: 'Bolo Dourado De Repente 30' },
  { src: boloImg4, category: 'Bolos Confeitados', alt: 'Bolo Confeitado Blue Bow' },
  { src: boloImg5, category: 'Bolos Confeitados', alt: 'Bolo Chocolate Morangos' },
  { src: boloGal1, category: 'Bolos Confeitados', alt: 'Bolo Confeitado Detalhes Rosas' },
  { src: boloGal2, category: 'Bolos Confeitados', alt: 'Bolo Confeitado Elegante Dourado' },
  { src: boloGal3, category: 'Bolos Confeitados', alt: 'Bolo Chantininho Degradê' },
  { src: boloGal4, category: 'Bolos Confeitados', alt: 'Bolo Confeitado Infantil' },
  { src: boloGal5, category: 'Bolos Confeitados', alt: 'Bolo Chocolatudo Brigadeiros' },

  { src: brigImg1, category: 'Docinhos & Brigadeiros', alt: 'Brigadeiros Gourmet Rosas de Chocolate' },
  { src: brigImg2, category: 'Docinhos & Brigadeiros', alt: 'Brigadeiros Sortidos Caixa' },
  { src: brigImg3, category: 'Docinhos & Brigadeiros', alt: 'Brigadeiros Gourmet Festivos' },
  { src: brigImg4, category: 'Docinhos & Brigadeiros', alt: 'Docinhos Gourmet Enrolados' },
  { src: brigGal1, category: 'Docinhos & Brigadeiros', alt: 'Docinho Ninho com Nutella' },
  { src: brigGal2, category: 'Docinhos & Brigadeiros', alt: 'Docinho Beijinho de Coco' },
  { src: brigGal3, category: 'Docinhos & Brigadeiros', alt: 'Docinho Churros Canela' },
  { src: brigGal4, category: 'Docinhos & Brigadeiros', alt: 'Brigadeiros Gourmet Calda' },
  { src: brigGal5, category: 'Docinhos & Brigadeiros', alt: 'Brigadeiros Variedade' },
];
