// src/utils/constants/kidsConstants.js

export const KIDS_PRODUCT_TYPES = [
  { value: "toys", label: "Oyuncaqlar" },
  { value: "clothes", label: "Uşaq geyimləri" },
  { value: "shoes", label: "Uşaq ayaqqabıları" },
  { value: "books", label: "Uşaq kitabları" },
  { value: "furniture", label: "Uşaq mebelləri" },
  { value: "strollers", label: "Uşaq arabası" },
  { value: "car-seats", label: "Avtomobil oturacağı" },
  { value: "cribs", label: "Uşaq çarpayısı" },
  { value: "feeding", label: "Qidalanma ləvazimatı" },
  { value: "safety", label: "Təhlükəsizlik məhsulları" },
  { value: "sports", label: "Uşaq idman ləvazimatı" },
  { value: "electronics", label: "Uşaq elektronikası" },
  { value: "educational", label: "Təhsil oyuncaqları" },
  { value: "baby-care", label: "Körpə baxımı" },
  { value: "other", label: "Digər" },
];

export const KIDS_BRANDS = [
  { value: "lego", label: "LEGO" },
  { value: "barbie", label: "Barbie" },
  { value: "fisher-price", label: "Fisher-Price" },
  { value: "chicco", label: "Chicco" },
  { value: "pampers", label: "Pampers" },
  { value: "huggies", label: "Huggies" },
  { value: "johnson", label: "Johnson's" },
  { value: "disney", label: "Disney" },
  { value: "nike-kids", label: "Nike Kids" },
  { value: "adidas-kids", label: "Adidas Kids" },
  { value: "zara-kids", label: "Zara Kids" },
  { value: "hm-kids", label: "H&M Kids" },
  { value: "local-brands", label: "Yerli markalar" },
  { value: "no-brand", label: "Marksız" },
  { value: "other", label: "Digər" },
];

export const KIDS_AGE_GROUPS = [
  { value: "0-6months", label: "0-6 ay" },
  { value: "6-12months", label: "6-12 ay" },
  { value: "1-2years", label: "1-2 yaş" },
  { value: "2-4years", label: "2-4 yaş" },
  { value: "4-6years", label: "4-6 yaş" },
  { value: "6-8years", label: "6-8 yaş" },
  { value: "8-12years", label: "8-12 yaş" },
  { value: "12+years", label: "12+ yaş" },
];

export const KIDS_CONDITIONS = [
  { value: "new", label: "Yeni" },
  { value: "like-new", label: "Yeni kimi" },
  { value: "good", label: "Yaxşı vəziyyətdə" },
  { value: "fair", label: "Orta vəziyyətdə" },
];

export const KIDS_GENDER = [
  { value: "boy", label: "Oğlan" },
  { value: "girl", label: "Qız" },
  { value: "unisex", label: "Universal" },
];

export const KIDS_SIZES = [
  { value: "newborn", label: "Yenidoğan" },
  { value: "0-3m", label: "0-3 ay" },
  { value: "3-6m", label: "3-6 ay" },
  { value: "6-9m", label: "6-9 ay" },
  { value: "9-12m", label: "9-12 ay" },
  { value: "12-18m", label: "12-18 ay" },
  { value: "18-24m", label: "18-24 ay" },
  { value: "2t", label: "2T" },
  { value: "3t", label: "3T" },
  { value: "4t", label: "4T" },
  { value: "5t", label: "5T" },
  { value: "6t", label: "6T" },
];

export const KIDS_CATEGORIES = [
  { value: "educational", label: "Təhsil oyuncaqları" },
  { value: "outdoor", label: "Açıq hava oyuncaqları" },
  { value: "indoor", label: "Ev oyuncaqları" },
  { value: "electronic", label: "Elektron oyuncaqlar" },
  { value: "plush", label: "Yumşaq oyuncaqlar" },
  { value: "building", label: "Konstruktor" },
  { value: "dolls", label: "Kuklalar" },
  { value: "vehicles", label: "Nəqliyyat oyuncaqları" },
];

export const KIDS_DEFAULT_FILTERS = {
  productType: "",
  brand: "",
  priceMin: "",
  priceMax: "",
  city: "",
  ageGroup: "",
  condition: "",
  gender: "",
  category: "",
  size: "",
  showMoreFilters: false,
};

export const generateKidsProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    const randomType =
      KIDS_PRODUCT_TYPES[Math.floor(Math.random() * KIDS_PRODUCT_TYPES.length)];
    const randomBrand =
      KIDS_BRANDS[Math.floor(Math.random() * KIDS_BRANDS.length)];
    const randomAge =
      KIDS_AGE_GROUPS[Math.floor(Math.random() * KIDS_AGE_GROUPS.length)];

    products.push({
      id: `kids-${i}`,
      title: `${randomBrand.label} ${randomType.label} - ${randomAge.label}`,
      price: Math.floor(Math.random() * 300) + 10,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=kids${i}`,
      category: "kids",
      filters: {
        productType: randomType.value,
        brand: randomBrand.value,
        ageGroup: randomAge.value,
        condition:
          KIDS_CONDITIONS[Math.floor(Math.random() * KIDS_CONDITIONS.length)]
            .value,
      },
    });
  }
  return products;
};
