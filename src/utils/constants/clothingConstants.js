// src/utils/constants/clothingConstants.js

/**
 * Clothing category filter constants
 * Copy-paste pattern from electronics with clothing-specific data
 */

export const CLOTHING_TYPES = [
  { value: "shirts", label: "Köynək" },
  { value: "t-shirts", label: "T-shirt" },
  { value: "pants", label: "Şalvar" },
  { value: "jeans", label: "Cins" },
  { value: "dresses", label: "Paltar" },
  { value: "skirts", label: "Ətək" },
  { value: "jackets", label: "Gödəkçə" },
  { value: "coats", label: "Palto" },
  { value: "sweaters", label: "Sviter" },
  { value: "suits", label: "Kostyum" },
  { value: "underwear", label: "Alt paltarı" },
  { value: "socks", label: "Corab" },
  { value: "accessories", label: "Aksesuarlar" },
  { value: "shoes", label: "Ayaqqabı" },
  { value: "bags", label: "Çanta" },
  { value: "other", label: "Digər" },
];

export const CLOTHING_BRANDS = [
  { value: "zara", label: "Zara" },
  { value: "hm", label: "H&M" },
  { value: "mango", label: "Mango" },
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "levis", label: "Levi's" },
  { value: "guess", label: "Guess" },
  { value: "tommy-hilfiger", label: "Tommy Hilfiger" },
  { value: "calvin-klein", label: "Calvin Klein" },
  { value: "massimo-dutti", label: "Massimo Dutti" },
  { value: "pull-bear", label: "Pull & Bear" },
  { value: "bershka", label: "Bershka" },
  { value: "stradivarius", label: "Stradivarius" },
  { value: "local-brands", label: "Yerli markalar" },
  { value: "no-brand", label: "Marksız" },
  { value: "other", label: "Digər" },
];

export const CLOTHING_SIZES = [
  // Women sizes
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
  { value: "xxxl", label: "XXXL" },

  // Numeric sizes
  { value: "34", label: "34" },
  { value: "36", label: "36" },
  { value: "38", label: "38" },
  { value: "40", label: "40" },
  { value: "42", label: "42" },
  { value: "44", label: "44" },
  { value: "46", label: "46" },
  { value: "48", label: "48" },
  { value: "50", label: "50" },

  // Shoe sizes
  { value: "35", label: "35" },
  { value: "37", label: "37" },
  { value: "39", label: "39" },
  { value: "41", label: "41" },
  { value: "43", label: "43" },
  { value: "45", label: "45" },

  { value: "universal", label: "Universal" },
  { value: "other", label: "Digər" },
];

export const CLOTHING_COLORS = [
  { value: "black", label: "Qara" },
  { value: "white", label: "Ağ" },
  { value: "gray", label: "Boz" },
  { value: "brown", label: "Qəhvəyi" },
  { value: "beige", label: "Bej" },
  { value: "red", label: "Qırmızı" },
  { value: "blue", label: "Göy" },
  { value: "navy", label: "Tünd göy" },
  { value: "green", label: "Yaşıl" },
  { value: "yellow", label: "Sarı" },
  { value: "orange", label: "Narıncı" },
  { value: "pink", label: "Çəhrayı" },
  { value: "purple", label: "Bənövşəyi" },
  { value: "multicolor", label: "Rəngarəng" },
  { value: "other", label: "Digər" },
];

export const CLOTHING_GENDER = [
  { value: "women", label: "Qadın" },
  { value: "men", label: "Kişi" },
  { value: "unisex", label: "Uniseks" },
  { value: "kids", label: "Uşaq" },
];

export const CLOTHING_CONDITIONS = [
  { value: "new", label: "Yeni" },
  { value: "excellent", label: "Əla vəziyyətdə" },
  { value: "good", label: "Yaxşı vəziyyətdə" },
  { value: "fair", label: "Normal vəziyyətdə" },
  { value: "worn", label: "İşlənmiş" },
];

export const CLOTHING_MATERIALS = [
  { value: "cotton", label: "Pambıq" },
  { value: "wool", label: "Yun" },
  { value: "silk", label: "İpək" },
  { value: "linen", label: "Kətan" },
  { value: "polyester", label: "Polyester" },
  { value: "denim", label: "Cins" },
  { value: "leather", label: "Dəri" },
  { value: "synthetic", label: "Sintetik" },
  { value: "mixed", label: "Qarışıq" },
  { value: "other", label: "Digər" },
];

export const CLOTHING_SEASONS = [
  { value: "spring", label: "Yaz" },
  { value: "summer", label: "Yay" },
  { value: "autumn", label: "Payız" },
  { value: "winter", label: "Qış" },
  { value: "all-season", label: "Bütün mövsümlər" },
];

// Default filters for clothing category
export const CLOTHING_DEFAULT_FILTERS = {
  clothingType: "",
  brand: "",
  priceMin: "",
  priceMax: "",
  city: "",
  size: "",
  color: "",
  condition: "",
  gender: "",
  material: "",
  season: "",
  delivery: "",
  showMoreFilters: false,
};

// Mock clothing products for development
export const generateClothingProducts = () => {
  const products = [];

  for (let i = 1; i <= 50; i++) {
    const randomType =
      CLOTHING_TYPES[Math.floor(Math.random() * CLOTHING_TYPES.length)];
    const randomBrand =
      CLOTHING_BRANDS[Math.floor(Math.random() * CLOTHING_BRANDS.length)];
    const randomColor =
      CLOTHING_COLORS[Math.floor(Math.random() * CLOTHING_COLORS.length)];
    const randomGender =
      CLOTHING_GENDER[Math.floor(Math.random() * CLOTHING_GENDER.length)];

    products.push({
      id: `clothing-${i}`,
      title: `${randomBrand.label} ${randomType.label} - ${randomColor.label}`,
      price: Math.floor(Math.random() * 500) + 10,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=${i}`,
      isVip: Math.random() > 0.8,
      isPremium: Math.random() > 0.9,
      category: "clothing",
      filters: {
        clothingType: randomType.value,
        brand: randomBrand.value,
        color: randomColor.value,
        gender: randomGender.value,
        condition:
          CLOTHING_CONDITIONS[
            Math.floor(Math.random() * CLOTHING_CONDITIONS.length)
          ].value,
        size: CLOTHING_SIZES[Math.floor(Math.random() * CLOTHING_SIZES.length)]
          .value,
      },
    });
  }

  return products;
};
