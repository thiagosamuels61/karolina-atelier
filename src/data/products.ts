// Imports das fotos organizadas por categoria
import logoImg from '@logo/logo transparente.png';
import logoWhiteBg from '@logo/logo fundo branco.png';

// Fotos Bentô Cakes
import bentoImg1 from '@bento/Captura_de_tela_2026-07-21_134416.png_202607230715.jpeg';
import bentoImg2 from '@bento/Captura_de_tela_2026-07-21_134421.png_202607230715.jpeg';
import bentoImg3 from '@bento/Captura_de_tela_2026-07-21_134442.png_202607230715.jpeg';
import bentoImg4 from '@bento/Captura_de_tela_2026-07-21_134447.png_202607230715.jpeg';
// bentoImg5 e bentoImg6 removidos

// Imagens extras de Bento Cakes para Galeria
import bentoGal1 from '@bento/Captura_de_tela_2026-07-21_134538.png_202607230715.jpeg';
import bentoGal2 from '@bento/Captura_de_tela_2026-07-21_134551.png_202607230715.jpeg';
import bentoGal3 from '@bento/Captura_de_tela_2026-07-21_134555.png_202607230715.jpeg';
import bentoGal4 from '@bento/Captura_de_tela_2026-07-21_134620.png_202607230715.jpeg';
import bentoGal5 from '@bento/Captura_de_tela_2026-07-21_134644.png_202607230715.jpeg';

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

// kitImg1 e kitImg2 removidos

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

// Imagens extras para as frases temáticas e destaques
import bentoHighlight from '@bento/Captura_de_tela_2026-07-23_071056.png_202607230715.jpeg';
import bentoCelebre from '@bento/Captura_de_tela_2026-07-23_070538.png_202607230715.jpeg';
import bentoFunny1 from '@bento/Captura_de_tela_2026-07-23_071151.png_202607230715.jpeg';
import bentoLoving from '@bento/Captura_de_tela_2026-07-23_071042.png_202607230715.jpeg';

import boloCelebre1 from '@bolos/Captura de tela 2026-07-21 140447.png';
import boloCelebre2 from '@bolos/Captura de tela 2026-07-21 140451.png';

// Fotos do Carrossel de 1 a 14
import carImg1 from '@images/Fotos para o carrossel/1.png';
import carImg2 from '@images/Fotos para o carrossel/2.png';
import carImg3 from '@images/Fotos para o carrossel/3.png';
import carImg4 from '@images/Fotos para o carrossel/4.png';
import carImg5 from '@images/Fotos para o carrossel/5.png';
import carImg6 from '@images/Fotos para o carrossel/6.png';
import carImg7 from '@images/Fotos para o carrossel/7.png';
import carImg8 from '@images/Fotos para o carrossel/8.png';
import carImg9 from '@images/Fotos para o carrossel/9.png';
import carImg10 from '@images/Fotos para o carrossel/10.png';
import carImg11 from '@images/Fotos para o carrossel/11.png';
import carImg12 from '@images/Fotos para o carrossel/12.png';
import carImg13 from '@images/Fotos para o carrossel/13.png';
import carImg14 from '@images/Fotos para o carrossel/14.png';

export const carouselImages = [
  carImg1, carImg2, carImg3, carImg4, carImg5,
  carImg6, carImg7, carImg8, carImg9, carImg10,
  carImg11, carImg12, carImg13, carImg14
];

export {
  logoImg,
  logoWhiteBg,
  layoutRefImg,
  bentoHighlight,
  bentoCelebre,
  bentoFunny1,
  bentoLoving,
  boloCelebre1,
  boloCelebre2
};

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
    minLeadTimeDays: 1,
    minLeadTimeText: 'Encomenda com 1 dia de antecedência',
    image: bentoHighlight,
    gallery: [bentoHighlight, bentoImg1, bentoImg2, bentoImg3, bentoImg4],
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
];

export const BOLOS_CONFEITADOS_LIST: Product[] = [
  {
    id: 'bolos-confeitados-premium',
    title: 'Bolos Festivos & Confeitados',
    category: 'bolos',
    price: 85.00, // Preço por kg
    priceText: 'A partir de R$ 85,00 / kg',
    unitText: 'escolha de 1 a 4kg (+ R$ 8,00 embalagem)',
    description: 'Bolos festivos com cobertura premium em Chantininho e decorações artesanais sofisticadas. Massa umedecida e fofinha com camadas caprichadas de recheio. Obs: Sabores especiais possuem acréscimo de R$ 10,00/kg.',
    minLeadTimeDays: 2,
    minLeadTimeText: 'Encomenda com 2 dias de antecedência',
    image: boloImg3,
    gallery: [boloImg3, boloImg1, boloImg2, boloImg4, boloImg5],
    isPopular: true,
    flavors: [
      'Brigadeiro ao Leite',
      'Beijinho (Coco)',
      'Brigadeiro de Leite Ninho',
      'Casadinho (brigadeiro e brigadeiro de ninho)',
      'Prestígio (brigadeiro e beijinho)',
      '4 leites com Abacaxi',
      'Leite Ninho com Abacaxi',
      'Leite Ninho com Geleia de Morango (+R$ 10,00 / kg)',
      'Doce de leite suave com Ameixa',
      'Leite Ninho com Oreo',
      'Coco (beijinho) com Abacaxi',
      'Leite Ninho com Nutella (+R$ 10,00 / kg)',
      'Doce de Leite com Nozes (+R$ 10,00 / kg)'
    ],
    sizes: [
      { label: '1 kg (serve até 10 pessoas)', priceModifier: 0 },
      { label: '2 kg (serve até 20 pessoas)', priceModifier: 85.00 },
      { label: '3 kg (serve até 30 pessoas)', priceModifier: 170.00 },
      { label: '4 kg (serve até 40 pessoas)', priceModifier: 255.00 },
    ],
  },
];

export const BRIGADEIROS_LIST: Product[] = [
  {
    id: 'cento-brigadeiro-gourmet',
    title: 'Brigadeiros Gourmet Artesanais',
    category: 'brigadeiros',
    price: 180.00,
    priceText: 'A partir de R$ 90,00',
    unitText: 'Escolha a quantidade desejada',
    description: 'Docinhos finos enrolados individualmente com confeitos selecionados e chocolate nobre. Escolha até 3 sabores por cento. Favor nos enviar a cor desejada das forminhas no WhatsApp.',
    minLeadTimeDays: 2,
    minLeadTimeText: 'Encomenda com 2 dias de antecedência',
    image: brigImg1,
    gallery: [brigImg1, brigImg2, brigImg3, brigImg4],
    isPopular: true,
    flavors: [
      'Brigadeiro Gourmet Ao Leite',
      'Brigadeiro de Ninho',
      'Beijinho de Coco',
      'Brigadeiro de Churros',
      'Casadinho (Dois Amores)',
      'Bicho de Pé (Moranguinho)',
    ],
    sizes: [
      { label: 'Meio Cento (50 unidades)', priceModifier: -90.00 },
      { label: 'Cento Completo (100 unidades)', priceModifier: 0 },
    ],
  },
];

export const KITS_FESTA_LIST: Product[] = [];

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
