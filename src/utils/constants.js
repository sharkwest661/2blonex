// src/utils/constants.js
import {
  generateVehicleProducts,
  generateRealEstateProducts,
  generateElectronicsProducts,
  generateJobProducts,
  generateClothingProducts,
  generateServicesProducts,
  generateFreeProducts,
  generateMixedProducts,
} from "./mockData";

// Pre-generate all product lists for consistent data across components
export const MOCK_PRODUCTS = {
  // Main categories with 15 products each
  vehicles: generateVehicleProducts(),
  realEstate: generateRealEstateProducts(),
  electronics: generateElectronicsProducts(),
  jobs: generateJobProducts(),
  clothing: generateClothingProducts(),
  services: generateServicesProducts(),
  free: generateFreeProducts(),

  // Mixed products for homepage sections
  vipListings: generateMixedProducts(15).map((product) => ({
    ...product,
    isVip: true,
  })),
  newListings: generateMixedProducts(15),
  premiumListings: generateMixedProducts(15).map((product) => ({
    ...product,
    isPremium: true,
  })),

  // Category-specific featured products
  featuredVehicles: generateVehicleProducts().slice(0, 8),
  featuredRealEstate: generateRealEstateProducts().slice(0, 8),
  featuredElectronics: generateElectronicsProducts().slice(0, 8),
};

// Categories data for navigation and filtering
export const CATEGORIES = [
  {
    id: "vehicles",
    name: "Nəqliyyat",
    slug: "neqliyyat",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638.svg",
    href: "/neqliyyat",
    count: 15420,
    products: MOCK_PRODUCTS.vehicles,
    subcategories: [
      "Avtomobillər",
      "Motosikletlər",
      "Yük maşınları",
      "Avtobuslar",
      "Traktorlar",
      "Ehtiyat hissələri",
    ],
  },
  {
    id: "realestate",
    name: "Daşınmaz Əmlak",
    slug: "emlak",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9640.svg",
    href: "/emlak",
    count: 8934,
    products: MOCK_PRODUCTS.realEstate,
    subcategories: [
      "Mənzillər",
      "Evlər",
      "Ofislər",
      "Torpaq sahələri",
      "Villalar",
      "Kommersiya obyektləri",
    ],
  },
  {
    id: "electronics",
    name: "Elektronika",
    slug: "elektronika",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_4.svg",
    href: "/elektronika",
    count: 12567,
    products: MOCK_PRODUCTS.electronics,
    subcategories: [
      "Mobil telefonlar",
      "Kompyuterlər",
      "TV və Audio",
      "Foto-video",
      "Oyun konsolları",
      "Aksesuarlar",
    ],
  },
  {
    id: "jobs",
    name: "İş Elanları",
    slug: "is-elanlari",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_3.svg",
    href: "/is-elanlari",
    count: 3421,
    products: MOCK_PRODUCTS.jobs,
    subcategories: [
      "IT sektoru",
      "Satış",
      "Maliyyə",
      "İnsan resursları",
      "Təhsil",
      "Xidmət sektoru",
    ],
  },
  {
    id: "clothing",
    name: "Geyim",
    slug: "geyim",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9639.svg",
    href: "/geyim",
    count: 6789,
    products: MOCK_PRODUCTS.clothing,
    subcategories: [
      "Qadın geyimi",
      "Kişi geyimi",
      "Uşaq geyimi",
      "Ayaqqabı",
      "Aksesuarlar",
      "Çantalar",
    ],
  },
  {
    id: "services",
    name: "Xidmətlər",
    slug: "xidmetler",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_6.svg",
    href: "/xidmetler",
    count: 4523,
    products: MOCK_PRODUCTS.services,
    subcategories: [
      "Təmir xidmətləri",
      "Təhsil",
      "Gözəllik və sağlamlıq",
      "Tərcümə",
      "Daşıma",
      "Dizayn",
    ],
  },
  {
    id: "children",
    name: "Uşaq aləmi",
    slug: "usaq-alemi",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_1.svg",
    href: "/usaq-alemi",
    count: 2876,
    products: generateMixedProducts(15),
    subcategories: [
      "Oyuncaqlar",
      "Uşaq geyimi",
      "Uşaq mebeli",
      "Təhsil",
      "İdman və əyləncə",
      "Uşaq baxımı",
    ],
  },
  {
    id: "cosmetics",
    name: "Kosmetika və sağlamlıq",
    slug: "kosmetika",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_2.svg",
    href: "/kosmetika",
    count: 1987,
    products: generateMixedProducts(15),
    subcategories: [
      "Gözəllik məhsulları",
      "Dərman",
      "Vitamin və əlavələr",
      "Tibbi avadanlıq",
      "Dietik məhsullar",
      "Aromaterapi",
    ],
  },
  {
    id: "home",
    name: "Ev və bağ üçün",
    slug: "ev-bag",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9639_1.svg",
    href: "/ev-bag",
    count: 5643,
    products: generateMixedProducts(15),
    subcategories: [
      "Mebel",
      "Məişət texnikası",
      "Dekor",
      "Bağ avadanlığı",
      "Inşaat materialları",
      "Mətbəx ləvazimatları",
    ],
  },
  {
    id: "food",
    name: "Ərzaq",
    slug: "erzaq",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9640_2.svg",
    href: "/erzaq",
    count: 987,
    products: generateMixedProducts(15),
    subcategories: [
      "Təzə məhsullar",
      "Konservlər",
      "İçkilər",
      "Şirniyyat",
      "Ədviyyat",
      "Orqanik məhsullar",
    ],
  },
  {
    id: "animals",
    name: "Heyvan, Bitki",
    slug: "heyvan-bitki",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_5.svg",
    href: "/heyvan-bitki",
    count: 1234,
    products: generateMixedProducts(15),
    subcategories: [
      "Ev heyvanları",
      "Heyvan yemlər",
      "Bitki və toxum",
      "Akvarium",
      "Heyvan aksesuarları",
      "Veterinar xidmətləri",
    ],
  },
  {
    id: "sports",
    name: "İdman, musiqi, hobbi",
    slug: "idman-musiqi",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_8.svg",
    href: "/idman-musiqi",
    count: 2543,
    products: generateMixedProducts(15),
    subcategories: [
      "İdman avadanlığı",
      "Musiqi alətləri",
      "Hobbi məhsulları",
      "Kitablar",
      "Oyunlar",
      "Kolleksiya əşyaları",
    ],
  },
  {
    id: "other",
    name: "Digər",
    slug: "diger",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_7.svg",
    href: "/diger",
    count: 876,
    products: generateMixedProducts(15),
    subcategories: [
      "Antikvar",
      "Hədiyyələr",
      "Sənətkarlıq",
      "Məktub və sənədlər",
      "Çeşidli",
      "Nadir tapıntılar",
    ],
  },
  {
    id: "free",
    name: "Pulsuz",
    slug: "pulsuz",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_9.svg",
    href: "/pulsuz",
    count: 543,
    products: MOCK_PRODUCTS.free,
    subcategories: [
      "Pulsuz verilir",
      "Pulsuz xidmətlər",
      "Pulsuz təlim",
      "Pulsuz məshvərət",
      "Pulsuz tədbirlər",
      "Könüllü işlər",
    ],
  },
];

// Featured brands for vehicles
export const VEHICLE_BRANDS = [
  "Mercedes-Benz",
  "BMW",
  "Toyota",
  "Hyundai",
  "Kia",
  "Nissan",
  "Volkswagen",
  "Audi",
  "Honda",
  "Mazda",
  "Ford",
  "Chevrolet",
];

// Popular locations with product counts
export const LOCATIONS = [
  { name: "Bakı", count: 45623 },
  { name: "Gəncə", count: 8934 },
  { name: "Sumqayıt", count: 6543 },
  { name: "Mingəçevir", count: 3421 },
  { name: "Qəbələ", count: 2876 },
  { name: "Şəki", count: 2543 },
  { name: "Yevlax", count: 1987 },
  { name: "Naxçıvan", count: 1876 },
];

// Price ranges for filtering
export const PRICE_RANGES = [
  { label: "0 - 100 ₼", min: 0, max: 100 },
  { label: "100 - 500 ₼", min: 100, max: 500 },
  { label: "500 - 1000 ₼", min: 500, max: 1000 },
  { label: "1000 - 5000 ₼", min: 1000, max: 5000 },
  { label: "5000 - 20000 ₼", min: 5000, max: 20000 },
  { label: "20000+ ₼", min: 20000, max: null },
];

// Helper functions
export const getCategoryBySlug = (slug) => {
  return CATEGORIES.find((cat) => cat.slug === slug);
};

export const getCategoryById = (id) => {
  return CATEGORIES.find((cat) => cat.id === id);
};

export const getCategoryProducts = (categoryId, limit = null) => {
  const category = getCategoryById(categoryId);
  if (!category) return [];

  return limit ? category.products.slice(0, limit) : category.products;
};

export const getPopularCategories = (limit = 6) => {
  return CATEGORIES.sort((a, b) => b.count - a.count).slice(0, limit);
};

export const searchProducts = (query, categoryId = null) => {
  let products = [];

  if (categoryId) {
    const category = getCategoryById(categoryId);
    products = category ? category.products : [];
  } else {
    // Search across all categories
    products = CATEGORIES.flatMap((cat) => cat.products);
  }

  if (!query) return products;

  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.location.toLowerCase().includes(searchTerm)
  );
};

// Get category-specific phrases for search typing animation
export const getCategorySearchPhrases = (category) => {
  const phrases = {
    vehicles: [
      "Mercedes axtarın...",
      "BMW avtomobil...",
      "Toyota Camry...",
      "Hyundai Tucson...",
      "Motosiklet axtarın...",
    ],
    realestate: [
      "Mənzil satılır...",
      "Ev kirayə verilir...",
      "Ofis sahəsi...",
      "Torpaq satılır...",
      "Villa axtarın...",
    ],
    electronics: [
      "iPhone axtarın...",
      "Samsung telefon...",
      "Laptop satılır...",
      "Smart TV...",
      "Gaming console...",
    ],
    jobs: [
      "İş axtarın...",
      "Frontend developer...",
      "Mühasib vakansiyası...",
      "Satış meneceri...",
      "İT mütəxəssis...",
    ],
    clothing: [
      "Nike ayaqqabı...",
      "Adidas geyim...",
      "Zara palto...",
      "H&M köynək...",
      "Boss kostyum...",
    ],
    services: [
      "Ev təmizliyi...",
      "Kompyuter təmiri...",
      "Tərcümə xidməti...",
      "Fotoqraf...",
      "Elektrik işləri...",
    ],
    default: [
      "bolbol axtar",
      "Toyota Land Cruiser",
      "Mercedes G63 AMG",
      "BMW 5-series",
      "Land Rover Range Rover",
      "Lexus LX 600",
      "və sairə...",
    ],
  };

  return phrases[category] || phrases.default;
};
