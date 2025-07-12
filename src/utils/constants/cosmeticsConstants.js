// src/utils/constants/cosmeticsConstants.js

export const COSMETICS_PRODUCT_TYPES = [
  { value: "face-makeup", label: "Üz makiyajı" },
  { value: "eye-makeup", label: "Göz makiyajı" },
  { value: "lip-makeup", label: "Dodaq makiyajı" },
  { value: "skincare", label: "Dəri baxımı" },
  { value: "haircare", label: "Saç baxımı" },
  { value: "bodycare", label: "Bədən baxımı" },
  { value: "fragrances", label: "Ətir" },
  { value: "nails", label: "Dırnaq məhsulları" },
  { value: "tools", label: "Makiyaj alətləri" },
  { value: "mens-care", label: "Kişi baxımı" },
  { value: "sun-care", label: "Günəş qoruyucuları" },
  { value: "organic", label: "Təbii məhsullar" },
  { value: "sets", label: "Dəstlər" },
  { value: "other", label: "Digər" },
];

export const COSMETICS_BRANDS = [
  { value: "loreal", label: "L'Oréal" },
  { value: "maybelline", label: "Maybelline" },
  { value: "nivea", label: "Nivea" },
  { value: "garnier", label: "Garnier" },
  { value: "revlon", label: "Revlon" },
  { value: "mac", label: "MAC" },
  { value: "chanel", label: "Chanel" },
  { value: "dior", label: "Dior" },
  { value: "estee-lauder", label: "Estée Lauder" },
  { value: "clinique", label: "Clinique" },
  { value: "lancome", label: "Lancôme" },
  { value: "ysl", label: "YSL" },
  { value: "sephora", label: "Sephora" },
  { value: "local-brands", label: "Yerli markalar" },
  { value: "no-brand", label: "Marksız" },
  { value: "other", label: "Digər" },
];

export const COSMETICS_CONDITIONS = [
  { value: "new", label: "Yeni" },
  { value: "new-sealed", label: "Yeni (möhürlü)" },
  { value: "new-opened", label: "Yeni (açılmış)" },
  { value: "like-new", label: "Yeni kimi" },
  { value: "good", label: "Yaxşı vəziyyətdə" },
];

export const COSMETICS_CATEGORIES = [
  { value: "foundation", label: "Tonal krem" },
  { value: "concealer", label: "Konsiler" },
  { value: "powder", label: "Pudra" },
  { value: "blush", label: "Allıq" },
  { value: "eyeshadow", label: "Göz kölgəsi" },
  { value: "mascara", label: "Tuş" },
  { value: "eyeliner", label: "Eyeliner" },
  { value: "lipstick", label: "Dodaq boyası" },
  { value: "lip-gloss", label: "Dodaq parıltısı" },
  { value: "cleanser", label: "Təmizləyici" },
  { value: "moisturizer", label: "Nəmləndirici" },
  { value: "serum", label: "Serum" },
  { value: "sunscreen", label: "Günəş kremi" },
  { value: "shampoo", label: "Şampun" },
  { value: "conditioner", label: "Kondisioner" },
];

export const COSMETICS_SKIN_TYPES = [
  { value: "normal", label: "Normal" },
  { value: "dry", label: "Quru" },
  { value: "oily", label: "Yağlı" },
  { value: "combination", label: "Qarışıq" },
  { value: "sensitive", label: "Həssas" },
  { value: "all-types", label: "Bütün növlər" },
];

export const COSMETICS_SIZES = [
  { value: "travel", label: "Travel ölçü" },
  { value: "mini", label: "Mini" },
  { value: "standard", label: "Standart" },
  { value: "large", label: "Böyük" },
  { value: "xl", label: "XL" },
];

export const COSMETICS_DEFAULT_FILTERS = {
  productType: "",
  brand: "",
  priceMin: "",
  priceMax: "",
  city: "",
  condition: "",
  category: "",
  skinType: "",
  size: "",
  showMoreFilters: false,
};

export const generateCosmeticsProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    const randomType =
      COSMETICS_PRODUCT_TYPES[
        Math.floor(Math.random() * COSMETICS_PRODUCT_TYPES.length)
      ];
    const randomBrand =
      COSMETICS_BRANDS[Math.floor(Math.random() * COSMETICS_BRANDS.length)];
    const randomCategory =
      COSMETICS_CATEGORIES[
        Math.floor(Math.random() * COSMETICS_CATEGORIES.length)
      ];

    products.push({
      id: `cosmetics-${i}`,
      title: `${randomBrand.label} ${randomCategory.label}`,
      price: Math.floor(Math.random() * 200) + 5,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=cosmetics${i}`,
      category: "cosmetics",
      filters: {
        productType: randomType.value,
        brand: randomBrand.value,
        category: randomCategory.value,
        condition:
          COSMETICS_CONDITIONS[
            Math.floor(Math.random() * COSMETICS_CONDITIONS.length)
          ].value,
      },
    });
  }
  return products;
};
