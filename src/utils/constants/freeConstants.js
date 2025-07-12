// src/utils/constants/freeConstants.js

export const FREE_CATEGORIES = [
  { value: "furniture", label: "Mebel" },
  { value: "electronics", label: "Elektronika" },
  { value: "books", label: "Kitablar" },
  { value: "clothes", label: "Geyim" },
  { value: "toys", label: "Oyuncaqlar" },
  { value: "household", label: "Ev əşyaları" },
  { value: "plants", label: "Bitkilər" },
  { value: "materials", label: "Materiallar" },
  { value: "services", label: "Xidmətlər" },
  { value: "other", label: "Digər" },
];

export const FREE_CONDITIONS = [
  { value: "good", label: "Yaxşı vəziyyətdə" },
  { value: "fair", label: "Orta vəziyyətdə" },
  { value: "needs-work", label: "İş tələb edir" },
  { value: "parts-only", label: "Yalnız hissələr üçün" },
];

export const FREE_DEFAULT_FILTERS = {
  category: "",
  city: "",
  condition: "",
  showMoreFilters: false,
};

export const generateFreeProducts = () => {
  const products = [];
  for (let i = 1; i <= 30; i++) {
    const randomCategory =
      FREE_CATEGORIES[Math.floor(Math.random() * FREE_CATEGORIES.length)];
    const randomCondition =
      FREE_CONDITIONS[Math.floor(Math.random() * FREE_CONDITIONS.length)];

    products.push({
      id: `free-${i}`,
      title: `Pulsuz ${randomCategory.label}`,
      price: 0,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=free${i}`,
      category: "free",
      isFree: true,
      filters: {
        category: randomCategory.value,
        condition: randomCondition.value,
      },
    });
  }
  return products;
};
