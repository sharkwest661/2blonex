// src/utils/constants/foodConstants.js

export const FOOD_CATEGORIES = [
  { value: "fruits", label: "Meyvələr" },
  { value: "vegetables", label: "Tərəvəzlər" },
  { value: "meat", label: "Ət məhsulları" },
  { value: "dairy", label: "Süd məhsulları" },
  { value: "bakery", label: "Çörək məhsulları" },
  { value: "sweets", label: "Şirniyyat" },
  { value: "beverages", label: "İçkilər" },
  { value: "spices", label: "Ədviyyat" },
  { value: "organic", label: "Təbii məhsullar" },
  { value: "frozen", label: "Dondurulmuş məhsullar" },
  { value: "canned", label: "Konserv məhsulları" },
  { value: "baby-food", label: "Uşaq qidası" },
  { value: "other", label: "Digər" },
];

export const FOOD_CONDITIONS = [
  { value: "fresh", label: "Təzə" },
  { value: "frozen", label: "Dondurulmuş" },
  { value: "packaged", label: "Qablaşdırılmış" },
  { value: "homemade", label: "Ev hazırlaması" },
];

export const FOOD_DEFAULT_FILTERS = {
  category: "",
  priceMin: "",
  priceMax: "",
  city: "",
  condition: "",
  showMoreFilters: false,
};

export const generateFoodProducts = () => {
  const products = [];
  for (let i = 1; i <= 30; i++) {
    const randomCategory =
      FOOD_CATEGORIES[Math.floor(Math.random() * FOOD_CATEGORIES.length)];
    const randomCondition =
      FOOD_CONDITIONS[Math.floor(Math.random() * FOOD_CONDITIONS.length)];

    products.push({
      id: `food-${i}`,
      title: `${randomCategory.label} - ${randomCondition.label}`,
      price: Math.floor(Math.random() * 100) + 1,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=food${i}`,
      category: "food",
      filters: {
        category: randomCategory.value,
        condition: randomCondition.value,
      },
    });
  }
  return products;
};
