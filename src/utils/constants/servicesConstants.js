// src/utils/constants/servicesConstants.js

export const SERVICES_TYPES = [
  { value: "repair", label: "Təmir xidmətləri" },
  { value: "cleaning", label: "Təmizlik xidmətləri" },
  { value: "construction", label: "Tikinti xidmətləri" },
  { value: "design", label: "Dizayn xidmətləri" },
  { value: "education", label: "Təhsil xidmətləri" },
  { value: "beauty", label: "Gözəllik xidmətləri" },
  { value: "transport", label: "Nəqliyyat xidmətləri" },
  { value: "legal", label: "Hüquqi xidmətlər" },
  { value: "financial", label: "Maliyyə xidmətləri" },
  { value: "it", label: "IT xidmətləri" },
  { value: "medical", label: "Tibbi xidmətlər" },
  { value: "photo-video", label: "Foto/Video xidmətləri" },
  { value: "translation", label: "Tərcümə xidmətləri" },
  { value: "delivery", label: "Çatdırılma xidmətləri" },
  { value: "pet-care", label: "Heyvan baxımı" },
  { value: "other", label: "Digər xidmətlər" },
];

export const SERVICES_CATEGORIES = [
  { value: "home-repair", label: "Ev təmiri" },
  { value: "appliance-repair", label: "Texnika təmiri" },
  { value: "phone-repair", label: "Telefon təmiri" },
  { value: "car-repair", label: "Avtomobil təmiri" },
  { value: "plumbing", label: "Santexnika" },
  { value: "electrical", label: "Elektrik işləri" },
  { value: "painting", label: "Rəngləmə işləri" },
  { value: "furniture-assembly", label: "Mebel yığma" },
  { value: "house-cleaning", label: "Ev təmizliyi" },
  { value: "office-cleaning", label: "Ofis təmizliyi" },
  { value: "carpet-cleaning", label: "Xalça təmizliyi" },
  { value: "window-cleaning", label: "Pəncərə təmizliyi" },
  { value: "tutoring", label: "Repetitorluq" },
  { value: "language-lessons", label: "Dil dərsləri" },
  { value: "music-lessons", label: "Musiqi dərsləri" },
  { value: "driving-lessons", label: "Sürücülük dərsləri" },
];

export const SERVICES_EXPERIENCE = [
  { value: "beginner", label: "Başlanğıc (0-1 il)" },
  { value: "intermediate", label: "Orta (1-3 il)" },
  { value: "experienced", label: "Təcrübəli (3-5 il)" },
  { value: "expert", label: "Ekspert (5+ il)" },
];

export const SERVICES_AVAILABILITY = [
  { value: "weekdays", label: "Həftə içi" },
  { value: "weekends", label: "Həftə sonu" },
  { value: "24-7", label: "24/7" },
  { value: "flexible", label: "Çevik qrafik" },
  { value: "by-appointment", label: "Təyin ilə" },
];

export const SERVICES_SCHEDULE = [
  { value: "morning", label: "Səhər (9:00-12:00)" },
  { value: "afternoon", label: "Günorta (12:00-18:00)" },
  { value: "evening", label: "Axşam (18:00-22:00)" },
  { value: "flexible", label: "Çevik" },
];

export const SERVICES_AREA = [
  { value: "at-home", label: "Evdə" },
  { value: "at-office", label: "Ofisdə" },
  { value: "remote", label: "Uzaqdan" },
  { value: "on-site", label: "Yerində" },
];

export const SERVICES_DEFAULT_FILTERS = {
  serviceType: "",
  serviceCategory: "",
  priceMin: "",
  priceMax: "",
  city: "",
  experience: "",
  availability: "",
  schedule: "",
  serviceArea: "",
  showMoreFilters: false,
};

export const generateServicesProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    const randomType =
      SERVICES_TYPES[Math.floor(Math.random() * SERVICES_TYPES.length)];
    const randomCategory =
      SERVICES_CATEGORIES[
        Math.floor(Math.random() * SERVICES_CATEGORIES.length)
      ];

    products.push({
      id: `service-${i}`,
      title: `${randomType.label} - ${randomCategory.label}`,
      price: Math.floor(Math.random() * 500) + 20,
      currency: "₼",
      location: "Bakı",
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      image: `https://picsum.photos/300/300?random=service${i}`,
      category: "services",
      filters: {
        serviceType: randomType.value,
        serviceCategory: randomCategory.value,
        experience:
          SERVICES_EXPERIENCE[
            Math.floor(Math.random() * SERVICES_EXPERIENCE.length)
          ].value,
      },
    });
  }
  return products;
};
