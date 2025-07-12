// src/utils/constants/homeGardenConstants.js

export const HOME_GARDEN_TYPES = [
  { value: "furniture", label: "Mebel" },
  { value: "appliances", label: "Ev texnikası" },
  { value: "decor", label: "Dekor" },
  { value: "kitchen", label: "Mətbəx ləvazimatı" },
  { value: "bathroom", label: "Hamam ləvazimatı" },
  { value: "lighting", label: "İşıqlandırma" },
  { value: "textiles", label: "Ev tekstili" },
  { value: "storage", label: "Saxlama ləvazimatı" },
  { value: "garden", label: "Bağ ləvazimatı" },
  { value: "tools", label: "Alətlər" },
  { value: "cleaning", label: "Təmizlik ləvazimatı" },
  { value: "security", label: "Təhlükəsizlik" },
  { value: "heating", label: "İstilik sistemləri" },
  { value: "other", label: "Digər" },
];

export const HOME_GARDEN_BRANDS = [
  { value: "ikea", label: "IKEA" },
  { value: "bosch", label: "Bosch" },
  { value: "siemens", label: "Siemens" },
  { value: "samsung", label: "Samsung" },
  { value: "lg", label: "LG" },
  { value: "electrolux", label: "Electrolux" },
  { value: "whirlpool", label: "Whirlpool" },
  { value: "philips", label: "Philips" },
  { value: "tefal", label: "Tefal" },
  { value: "karcher", label: "Kärcher" },
  { value: "black-decker", label: "Black & Decker" },
  { value: "local-brands", label: "Yerli markalar" },
  { value: "no-brand", label: "Marksız" },
  { value: "other", label: "Digər" },
];

export const HOME_GARDEN_CONDITIONS = [
  { value: "new", label: "Yeni" },
  { value: "like-new", label: "Yeni kimi" },
  { value: "good", label: "Yaxşı vəziyyətdə" },
  { value: "fair", label: "Orta vəziyyətdə" },
  { value: "needs-repair", label: "Təmir tələb edir" },
];

export const HOME_GARDEN_CATEGORIES = [
  // Furniture
  { value: "sofa", label: "Divan" },
  { value: "chair", label: "Stul" },
  { value: "table", label: "Masa" },
  { value: "bed", label: "Çarpayı" },
  { value: "wardrobe", label: "Şkaf" },
  { value: "bookshelf", label: "Kitab rəfi" },

  // Appliances
  { value: "refrigerator", label: "Soyuducu" },
  { value: "washing-machine", label: "Paltaryuyan" },
  { value: "dishwasher", label: "Qabyuyan" },
  { value: "oven", label: "Fırın" },
  { value: "microwave", label: "Mikrodalğalı fırın" },
  { value: "vacuum", label: "Tozsoran" },

  // Garden
  { value: "plants", label: "Bitkilər" },
  { value: "garden-tools", label: "Bağ alətləri" },
  { value: "pots", label: "Saksılar" },
  { value: "fertilizers", label: "Gübrələr" },
  { value: "garden-furniture", label: "Bağ mebelləri" },
];

export const HOME_GARDEN_ROOMS = [
  { value: "living-room", label: "Qonaq otağı" },
  { value: "bedroom", label: "Yataq otağı" },
  { value: "kitchen", label: "Mətbəx" },
  { value: "bathroom", label: "Hamam" },
  { value: "dining-room", label: "Yemək otağı" },
  { value: "office", label: "Kabinet" },
  { value: "children-room", label: "Uşaq otağı" },
  { value: "balcony", label: "Balkon" },
  { value: "garden", label: "Bağ" },
  { value: "garage", label: "Qaraj" },
  { value: "basement", label: "Zirzəmi" },
  { value: "any-room", label: "Hər hansı otaq" },
];

export const HOME_GARDEN_MATERIALS = [
  { value: "wood", label: "Ağac" },
  { value: "metal", label: "Metal" },
  { value: "plastic", label: "Plastik" },
  { value: "glass", label: "Şüşə" },
  { value: "fabric", label: "Parça" },
  { value: "leather", label: "Dəri" },
  { value: "ceramic", label: "Keramika" },
  { value: "stone", label: "Daş" },
  { value: "composite", label: "Kompozit" },
  { value: "other", label: "Digər" },
];

export const HOME_GARDEN_DEFAULT_FILTERS = {
  productType: "",
  brand: "",
  priceMin: "",
  priceMax: "",
  city: "",
  condition: "",
  category: "",
  room: "",
  material: "",
  showMoreFilters: false,
};

export const generateHomeGardenProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    const randomType =
      HOME_GARDEN_TYPES[Math.floor(Math.random() * HOME_GARDEN_TYPES.length)];
    const randomBrand =
      HOME_GARDEN_BRANDS[Math.floor(Math.random() * HOME_GARDEN_BRANDS.length)];
    const randomCategory =
      HOME_GARDEN_CATEGORIES[
        Math.floor(Math.random() * HOME_GARDEN_CATEGORIES.length)
      ];

    products.push({
      id: `home-garden-${i}`,
      title: `${randomBrand.label} ${randomCategory.label}`,
      price: Math.floor(Math.random() * 1000) + 20,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=home${i}`,
      category: "home-garden",
      filters: {
        productType: randomType.value,
        brand: randomBrand.value,
        category: randomCategory.value,
        condition:
          HOME_GARDEN_CONDITIONS[
            Math.floor(Math.random() * HOME_GARDEN_CONDITIONS.length)
          ].value,
      },
    });
  }
  return products;
};
