// src/utils/constants/sportsConstants.js

export const SPORTS_CATEGORIES = [
  { value: "fitness", label: "Fitness" },
  { value: "football", label: "Futbol" },
  { value: "basketball", label: "Basketbol" },
  { value: "tennis", label: "Tennis" },
  { value: "swimming", label: "Üzgüçülük" },
  { value: "cycling", label: "Velosiped sürmə" },
  { value: "running", label: "Qaçış" },
  { value: "boxing", label: "Boks" },
  { value: "martial-arts", label: "Döyüş sənətləri" },
  { value: "yoga", label: "Yoga" },
  { value: "outdoor", label: "Açıq hava idmanı" },
  { value: "winter-sports", label: "Qış idmanı" },
  { value: "water-sports", label: "Su idmanları" },
  { value: "hobbies", label: "Hobbi" },
  { value: "other", label: "Digər" },
];

export const SPORTS_PRODUCT_TYPES = [
  { value: "equipment", label: "İdman ləvazimatı" },
  { value: "clothing", label: "İdman geyimləri" },
  { value: "shoes", label: "İdman ayaqqabıları" },
  { value: "accessories", label: "Aksesuarlar" },
  { value: "fitness-machines", label: "Fitness qurğuları" },
  { value: "supplements", label: "İdman qidaları" },
  { value: "books-media", label: "Kitab və media" },
  { value: "collectibles", label: "Kolleksiya əşyaları" },
  { value: "outdoor-gear", label: "Açıq hava ləvazimatı" },
  { value: "games", label: "Oyunlar" },
  { value: "other", label: "Digər" },
];

export const SPORTS_BRANDS = [
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "puma", label: "Puma" },
  { value: "reebok", label: "Reebok" },
  { value: "under-armour", label: "Under Armour" },
  { value: "new-balance", label: "New Balance" },
  { value: "wilson", label: "Wilson" },
  { value: "spalding", label: "Spalding" },
  { value: "decathlon", label: "Decathlon" },
  { value: "technogym", label: "Technogym" },
  { value: "kettler", label: "Kettler" },
  { value: "local-brands", label: "Yerli markalar" },
  { value: "no-brand", label: "Marksız" },
  { value: "other", label: "Digər" },
];

export const SPORTS_CONDITIONS = [
  { value: "new", label: "Yeni" },
  { value: "like-new", label: "Yeni kimi" },
  { value: "good", label: "Yaxşı vəziyyətdə" },
  { value: "fair", label: "Orta vəziyyətdə" },
  { value: "needs-repair", label: "Təmir tələb edir" },
];

export const SPORTS_SIZES = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
  { value: "one-size", label: "Universal ölçü" },
  { value: "adjustable", label: "Tənzimlənən" },
];

export const SPORTS_TYPES = [
  { value: "cardio", label: "Kardio" },
  { value: "strength", label: "Güc" },
  { value: "flexibility", label: "Çeviklik" },
  { value: "team-sports", label: "Komanda idmanları" },
  { value: "individual", label: "Fərdi idman" },
  { value: "recreational", label: "İstirahət idmanı" },
  { value: "professional", label: "Professional" },
  { value: "beginner", label: "Başlanğıc" },
];

export const HOBBY_CATEGORIES = [
  { value: "music", label: "Musiqi" },
  { value: "art", label: "Sənət" },
  { value: "crafts", label: "Əl işləri" },
  { value: "photography", label: "Fotoqrafiya" },
  { value: "gardening", label: "Bağçılıq" },
  { value: "cooking", label: "Yemək bişirmə" },
  { value: "reading", label: "Oxu" },
  { value: "gaming", label: "Oyun" },
  { value: "travel", label: "Səyahət" },
  { value: "technology", label: "Texnologiya" },
];

export const SPORTS_DEFAULT_FILTERS = {
  sportCategory: "",
  productType: "",
  brand: "",
  priceMin: "",
  priceMax: "",
  city: "",
  condition: "",
  size: "",
  sportType: "",
  showMoreFilters: false,
};

export const generateSportsProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    const randomCategory =
      SPORTS_CATEGORIES[Math.floor(Math.random() * SPORTS_CATEGORIES.length)];
    const randomType =
      SPORTS_PRODUCT_TYPES[
        Math.floor(Math.random() * SPORTS_PRODUCT_TYPES.length)
      ];
    const randomBrand =
      SPORTS_BRANDS[Math.floor(Math.random() * SPORTS_BRANDS.length)];

    products.push({
      id: `sports-${i}`,
      title: `${randomBrand.label} ${randomCategory.label} ${randomType.label}`,
      price: Math.floor(Math.random() * 800) + 15,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=sports${i}`,
      category: "sports",
      filters: {
        sportCategory: randomCategory.value,
        productType: randomType.value,
        brand: randomBrand.value,
        condition:
          SPORTS_CONDITIONS[
            Math.floor(Math.random() * SPORTS_CONDITIONS.length)
          ].value,
      },
    });
  }
  return products;
};
