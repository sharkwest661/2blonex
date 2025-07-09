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

  // Mixed products for homepage sections - now deterministic
  vipListings: generateMixedProducts(15).map((product, index) => ({
    ...product,
    id: `vip-${index}`, // Consistent IDs
    isVip: true,
  })),
  newListings: generateMixedProducts(15).map((product, index) => ({
    ...product,
    id: `new-${index}`, // Consistent IDs
  })),
  premiumListings: generateMixedProducts(15).map((product, index) => ({
    ...product,
    id: `premium-${index}`, // Consistent IDs
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
    slug: "neqliyyat", // Keep Azerbaijani slug
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
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_5.svg",
    href: "/kosmetika",
    count: 1897,
    products: generateMixedProducts(15),
    subcategories: [
      "Dəriyə qulluq",
      "Dekorativ kosmetika",
      "Ətriyyat",
      "Saça qulluq",
      "Sağlamlıq məhsulları",
      "Dərman vasitələri",
    ],
  },
  {
    id: "hobbies",
    name: "Hobiler və İstirahət",
    slug: "hobiler",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_7.svg",
    href: "/hobiler",
    count: 5634,
    products: generateMixedProducts(15),
    subcategories: [
      "Kitablar",
      "İdman inventarı",
      "Musiqi alətləri",
      "Kolleksiya əşyaları",
      "Səyahət",
      "Bağçılıq",
    ],
  },
  {
    id: "free",
    name: "Pulsuz Elanlar",
    slug: "pulsuz",
    icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_2.svg",
    href: "/pulsuz",
    count: 892,
    products: MOCK_PRODUCTS.free,
    subcategories: [
      "Pulsuz verilir",
      "Dəyişmə",
      "Hədiyyə",
      "Könüllü xidmət",
      "Təcrübə paylaşımı",
    ],
  },
];

// Helper functions
export const getCategoryBySlug = (slug) => {
  return CATEGORIES.find((category) => category.slug === slug);
};

// Get category-specific configuration
export const getCategoryConfig = (slug) => {
  const configs = {
    // Vehicles (already implemented)
    neqliyyat: {
      typingKeywords: [
        "BMW axtarın...",
        "Mercedes satılır...",
        "Toyota Camry...",
        "Hyundai Tucson...",
        "motosiklet axtarın...",
        "kamaz satılır...",
        "avtobus kirayə...",
      ],
      resultCount: 15420,
    },

    // Real Estate
    emlak: {
      typingKeywords: [
        "mənzil satılır...",
        "ev kirayə...",
        "ofis satılır...",
        "villa kirayə...",
        "torpaq satılır...",
        "mənzil axtarın...",
        "ev satılır...",
      ],
      resultCount: 8934,
    },

    // Electronics
    elektronika: {
      typingKeywords: [
        "iPhone satılır...",
        "Samsung axtarın...",
        "laptop satılır...",
        "TV axtarın...",
        "kompyuter satılır...",
        "telefon axtarın...",
        "PlayStation satılır...",
      ],
      resultCount: 12567,
    },

    // Jobs
    "is-elanlari": {
      typingKeywords: [
        "iş axtarıram...",
        "IT vakansiya...",
        "satış işi...",
        "ofis işi...",
        "part-time iş...",
        "mühasib işi...",
        "menecer vakansiya...",
      ],
      resultCount: 3421,
    },

    // Clothing
    geyim: {
      typingKeywords: [
        "geyim satılır...",
        "ayaqqabı axtarın...",
        "çanta satılır...",
        "palto axtarın...",
        "köynək satılır...",
        "qadın geyimi...",
        "kişi geyimi...",
      ],
      resultCount: 6789,
    },

    // Services
    xidmetler: {
      typingKeywords: [
        "təmir xidməti...",
        "təmizlik xidməti...",
        "tərcümə xidməti...",
        "çatdırılma...",
        "dizayn xidməti...",
        "dərs xidməti...",
        "fotoqraf xidməti...",
      ],
      resultCount: 4523,
    },

    // Children
    "usaq-alemi": {
      typingKeywords: [
        "oyuncaq satılır...",
        "uşaq geyimi...",
        "uşaq arabaları...",
        "oyun əşyası...",
        "uşaq kitabı...",
        "bebek ehtiyacları...",
        "uşaq mebeli...",
      ],
      resultCount: 2876,
    },

    // Cosmetics
    kosmetika: {
      typingKeywords: [
        "kosmetika satılır...",
        "parfüm axtarın...",
        "dəriyə qulluq...",
        "şampun satılır...",
        "məkiyaj axtarın...",
        "krem satılır...",
        "ətriyyat axtarın...",
      ],
      resultCount: 1897,
    },

    // Hobbies
    hobiler: {
      typingKeywords: [
        "kitab satılır...",
        "musiqi alətləri...",
        "idman avadanlığı...",
        "kolleksiya əşyası...",
        "oyun konsolu...",
        "kamera axtarın...",
        "hobbi məmulatı...",
      ],
      resultCount: 5634,
    },

    // Free
    pulsuz: {
      typingKeywords: [
        "pulsuz hədiyyə...",
        "pulsuz elan...",
        "mübadiləe təklif...",
        "paylaşım elanı...",
        "yardım təklifi...",
        "təcrübə mübadiləsi...",
        "sərvət paylaşımı...",
      ],
      resultCount: 892,
    },
  };

  return configs[slug] || { typingKeywords: [] };
};

export const getCategoryById = (id) => {
  return CATEGORIES.find((category) => category.id === id);
};

export const getCategoryProducts = (categoryId, count = 15) => {
  const category = getCategoryById(categoryId);
  if (!category) return [];
  return category.products.slice(0, count);
};

export const searchProducts = (query, categoryId = null) => {
  const searchTerm = query.toLowerCase();
  let allProducts = [];

  if (categoryId) {
    const category = getCategoryById(categoryId);
    allProducts = category ? category.products : [];
  } else {
    // Search across all categories
    CATEGORIES.forEach((category) => {
      allProducts.push(...category.products);
    });
  }

  return allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.location.toLowerCase().includes(searchTerm)
  );
};

// Search suggestions for autocomplete
export const getSearchSuggestions = (query) => {
  if (!query || query.length < 2) return [];

  const suggestions = [];
  const searchTerm = query.toLowerCase();

  // Add matching product titles
  Object.values(MOCK_PRODUCTS).forEach((productList) => {
    if (Array.isArray(productList)) {
      productList.forEach((product) => {
        if (
          product.title.toLowerCase().includes(searchTerm) &&
          !suggestions.includes(product.title)
        ) {
          suggestions.push(product.title);
        }
      });
    }
  });

  // Add matching category names
  CATEGORIES.forEach((category) => {
    if (
      category.name.toLowerCase().includes(searchTerm) &&
      !suggestions.includes(category.name)
    ) {
      suggestions.push(category.name);
    }
  });

  return suggestions.slice(0, 10); // Limit to 10 suggestions
};

// Enhanced category-specific phrases for search typing animation
export const getCategorySearchPhrases = (category) => {
  const phrases = {
    // Vehicle category
    vehicles: [
      "Mercedes axtarın...",
      "BMW avtomobil...",
      "Toyota Camry...",
      "Hyundai Tucson...",
      "Motosiklet axtarın...",
    ],
    neqliyyat: [
      "BMW axtarın...",
      "Mercedes satılır...",
      "Toyota Camry...",
      "Hyundai Tucson...",
      "motosiklet axtarın...",
      "kamaz satılır...",
      "avtomobil alqı-satqı...",
    ],

    // Real estate category
    realestate: [
      "Mənzil satılır...",
      "Ev kirayə verilir...",
      "Ofis sahəsi...",
      "Torpaq satılır...",
      "Villa axtarın...",
    ],
    emlak: [
      "mənzil satılır...",
      "ev kirayə verilir...",
      "ofis sahəsi axtarın...",
      "villa satılır...",
      "torpaq satılır...",
      "şəhər evi axtarın...",
      "bağ evi kirayə...",
    ],

    // Electronics category
    electronics: [
      "iPhone axtarın...",
      "Samsung telefon...",
      "Laptop satılır...",
      "Smart TV...",
      "Gaming console...",
    ],
    elektronika: [
      "iPhone axtarın...",
      "Samsung telefon...",
      "laptop satılır...",
      "televizor axtarın...",
      "kompüter satılır...",
      "smart TV axtarın...",
      "PlayStation satılır...",
    ],

    // Jobs category
    jobs: [
      "İş axtarın...",
      "Frontend developer...",
      "Mühasib vakansiyası...",
      "Satış meneceri...",
      "İT mütəxəssis...",
    ],
    is_elanlari: [
      "iş axtarın...",
      "vakansiya axtarın...",
      "CV göndərin...",
      "frontend developer...",
      "mühasib işi...",
      "satış meneceri...",
      "marketing mütəxəssis...",
    ],

    // Services category
    services: [
      "Ev təmizliyi...",
      "Kompyuter təmiri...",
      "Tərcümə xidməti...",
      "Fotoqraf...",
      "Elektrik işləri...",
    ],
    xidmetler: [
      "ev təmizliyi...",
      "təmir xidməti...",
      "çatdırılma xidməti...",
      "tərcümə xidməti...",
      "dizayn xidməti...",
      "dərs xidməti...",
      "fotoqraf xidməti...",
    ],

    // Clothing category
    clothing: [
      "Nike ayaqqabı...",
      "Adidas geyim...",
      "Zara palto...",
      "H&M köynək...",
      "Boss kostyum...",
    ],
    sexsi_esyalar: [
      "Nike ayaqqabı...",
      "Adidas geyim...",
      "Zara palto...",
      "geyim axtarın...",
      "ayaqqabı satılır...",
      "çanta axtarın...",
      "saat satılır...",
    ],

    // Home & Garden
    ev_bahce: [
      "mebel satılır...",
      "məişət əşyası...",
      "bağ alətləri...",
      "dekor əşyası...",
      "tekstil məmulatı...",
      "mətbək əşyası...",
      "otaq dekoru...",
    ],

    // Kids category
    usaq_alemi: [
      "oyuncaq satılır...",
      "uşaq geyimi...",
      "uşaq arabaları...",
      "oyun əşyası...",
      "uşaq kitabı...",
      "bebek ehtiyacları...",
      "uşaq mebeli...",
    ],

    // Hobbies & Leisure
    hobbi_istirahət: [
      "kitab satılır...",
      "musiqi alətləri...",
      "idman avadanlığı...",
      "kolleksiya əşyası...",
      "oyun konsolu...",
      "kamera axtarın...",
      "hobbi məmulatı...",
    ],

    // Free category
    pulsuz: [
      "pulsuz hədiyyə...",
      "pulsuz elan...",
      "mübadiləe təklif...",
      "paylaşım elanı...",
      "yardım təklifi...",
      "təcrübə mübadiləsi...",
      "sərvət paylaşımı...",
    ],

    // Default for homepage and unknown categories
    default: [
      "nəyi axtarırsınız?",
      "BMW axtarın...",
      "mənzil satılır...",
      "iPhone axtarın...",
      "iş elanları...",
      "ev təmizliyi...",
      "və ya başqa nə...",
    ],
  };

  return phrases[category] || phrases.default;
};

// Helper function to get typing keywords as array (for new system)
export const getCategoryTypingKeywords = (category) => {
  return getCategorySearchPhrases(category);
};
