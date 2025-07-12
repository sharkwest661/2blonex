// src/utils/constants/otherConstants.js

export const OTHER_CATEGORIES = [
  { value: "antiques", label: "Antikvar əşyalar" },
  { value: "collectibles", label: "Kolleksiya əşyaları" },
  { value: "office-supplies", label: "Ofis ləvazimatı" },
  { value: "industrial", label: "Sənaye avadanlığı" },
  { value: "medical", label: "Tibbi avadanlıq" },
  { value: "scientific", label: "Elmi avadanlıq" },
  { value: "educational", label: "Təhsil materialları" },
  { value: "musical-instruments", label: "Musiqi alətləri" },
  { value: "art-supplies", label: "Sənət ləvazimatı" },
  { value: "party-supplies", label: "Toy ləvazimatı" },
  { value: "seasonal", label: "Mövsümi əşyalar" },
  { value: "miscellaneous", label: "Müxtəlif" },
];

export const OTHER_CONDITIONS = [
  { value: "new", label: "Yeni" },
  { value: "like-new", label: "Yeni kimi" },
  { value: "good", label: "Yaxşı vəziyyətdə" },
  { value: "fair", label: "Orta vəziyyətdə" },
  { value: "poor", label: "Zəif vəziyyətdə" },
];

export const OTHER_DEFAULT_FILTERS = {
  category: "",
  priceMin: "",
  priceMax: "",
  city: "",
  condition: "",
  showMoreFilters: false,
};

export const generateOtherProducts = () => {
  const products = [];
  for (let i = 1; i <= 30; i++) {
    const randomCategory =
      OTHER_CATEGORIES[Math.floor(Math.random() * OTHER_CATEGORIES.length)];
    const randomCondition =
      OTHER_CONDITIONS[Math.floor(Math.random() * OTHER_CONDITIONS.length)];

    products.push({
      id: `other-${i}`,
      title: `${randomCategory.label}`,
      price: Math.floor(Math.random() * 500) + 5,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=other${i}`,
      category: "other",
      filters: {
        category: randomCategory.value,
        condition: randomCondition.value,
      },
    });
  }
  return products;
};
