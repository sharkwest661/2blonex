// src/utils/mockData.js
import { v4 as uuidv4 } from "uuid";

// Azerbaijani cities for location variety
const CITIES = [
  "Bakı",
  "Gəncə",
  "Sumqayıt",
  "Mingəçevir",
  "Qəbələ",
  "Şəki",
  "Yevlax",
  "Naxçıvan",
  "Şamaxı",
  "Lənkəran",
  "Şirvan",
  "Ağdam",
  "Füzuli",
  "Quba",
  "Xaçmaz",
];

// Generate random date within last 30 days
const generateRecentDate = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  const date = new Date(now - daysAgo * 24 * 60 * 60 * 1000);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
};

// Generate random price in AZN
const generatePrice = (min = 10, max = 5000, isFree = false) => {
  if (isFree) return "Pulsuz";
  const price = Math.floor(Math.random() * (max - min) + min);
  return `${price} ₼`;
};

// Generate random city
const getRandomCity = () => {
  return CITIES[Math.floor(Math.random() * CITIES.length)];
};

// Generate random boolean with probability
const randomBool = (probability = 0.3) => {
  return Math.random() < probability;
};

// Base product generator
const generateBaseProduct = (overrides = {}) => {
  return {
    id: uuidv4(),
    location: getRandomCity(),
    date: generateRecentDate(),
    image: "/img/example/post2.png", // Placeholder image
    href: "#",
    isVip: randomBool(0.15),
    isPremium: randomBool(0.2),
    hasBarter: randomBool(0.25),
    hasCredit: randomBool(0.3),
    hasPercent: randomBool(0.2),
    ...overrides,
  };
};

// VEHICLES (Nəqliyyat) - 15 products
export const generateVehicleProducts = () => {
  const vehicleData = [
    { title: "Mercedes-Benz E-Class 2019", price: generatePrice(45000, 85000) },
    {
      title: "BMW X5 2020, sürətlər avtomatik",
      price: generatePrice(50000, 95000),
    },
    { title: "Toyota Camry 2021, hibrid", price: generatePrice(35000, 65000) },
    { title: "Hyundai Tucson 2020", price: generatePrice(28000, 45000) },
    {
      title: "Kia Optima 2019, təmiz maşın",
      price: generatePrice(22000, 38000),
    },
    { title: "Nissan Qashqai 2022", price: generatePrice(32000, 48000) },
    { title: "Volkswagen Passat 2018", price: generatePrice(18000, 32000) },
    { title: "Audi A6 2020", price: generatePrice(48000, 75000) },
    { title: "Honda Accord 2021", price: generatePrice(30000, 50000) },
    { title: "Mazda CX-5 2019", price: generatePrice(26000, 42000) },
    { title: "Ford Focus 2020", price: generatePrice(15000, 28000) },
    { title: "Chevrolet Cruze 2019", price: generatePrice(12000, 25000) },
    { title: "Lada Granta 2021", price: generatePrice(8000, 15000) },
    { title: "GAZ Gazelle yük maşını", price: generatePrice(15000, 25000) },
    { title: "Yamaha motosiklet 2020", price: generatePrice(3000, 8000) },
  ];

  return vehicleData.map((vehicle) =>
    generateBaseProduct({
      ...vehicle,
      hasCredit: randomBool(0.6), // Higher credit probability for vehicles
      hasBarter: randomBool(0.4),
    })
  );
};

// REAL ESTATE (Daşınmaz Əmlak) - 15 products
export const generateRealEstateProducts = () => {
  const realEstateData = [
    {
      title: "3 otaqlı mənzil satılır, Nəsimi r-nu",
      price: generatePrice(120000, 280000),
    },
    { title: "2 otaqlı mənzil kirayə verilir", price: generatePrice(400, 800) },
    {
      title: "Ev satılır, həyətyanı sahə ilə",
      price: generatePrice(85000, 200000),
    },
    {
      title: "4 otaqlı mənzil, təmir edilib",
      price: generatePrice(150000, 350000),
    },
    { title: "Ofis sahəsi kirayə verilir", price: generatePrice(800, 2000) },
    {
      title: "Villa satılır, dəniz kənarında",
      price: generatePrice(250000, 500000),
    },
    {
      title: "1 otaqlı mənzil, yeni tikili",
      price: generatePrice(65000, 120000),
    },
    { title: "Torpaq sahəsi satılır", price: generatePrice(15000, 50000) },
    {
      title: "Kommersiya obyekti satılır",
      price: generatePrice(200000, 800000),
    },
    { title: "5 otaqlı ev, qaraj ilə", price: generatePrice(180000, 320000) },
    { title: "Anbar sahəsi kirayə verilir", price: generatePrice(300, 1000) },
    { title: "Penthouse mənzil satılır", price: generatePrice(400000, 750000) },
    { title: "Dəhliz kirayə verilir", price: generatePrice(150, 400) },
    { title: "Bağ evi satılır", price: generatePrice(25000, 80000) },
    { title: "Mağaza sahəsi kirayə", price: generatePrice(1000, 3000) },
  ];

  return realEstateData.map((property) =>
    generateBaseProduct({
      ...property,
      hasCredit: randomBool(0.7), // High credit probability for real estate
      hasBarter: randomBool(0.2),
    })
  );
};

// ELECTRONICS (Elektronika) - 15 products
export const generateElectronicsProducts = () => {
  const electronicsData = [
    { title: "iPhone 14 Pro Max 256GB", price: generatePrice(2200, 2800) },
    { title: "Samsung Galaxy S23 Ultra", price: generatePrice(1800, 2400) },
    { title: "MacBook Pro 13 inch 2022", price: generatePrice(2500, 3500) },
    { title: "Sony PlayStation 5", price: generatePrice(800, 1200) },
    { title: "iPad Air 2022", price: generatePrice(900, 1400) },
    { title: 'Samsung 55" Smart TV', price: generatePrice(800, 1500) },
    { title: "AirPods Pro 2-ci nəsil", price: generatePrice(350, 500) },
    { title: "Dell Gaming Laptop", price: generatePrice(1200, 2200) },
    { title: "Canon EOS R6 kamera", price: generatePrice(2800, 4200) },
    { title: "Nintendo Switch OLED", price: generatePrice(450, 650) },
    { title: "Xiaomi Mi 13", price: generatePrice(600, 1000) },
    { title: "Apple Watch Series 8", price: generatePrice(600, 900) },
    { title: "JBL Bluetooth speaker", price: generatePrice(80, 200) },
    { title: "HP Printer çap maşını", price: generatePrice(150, 350) },
    { title: "Logitech Gaming Mouse", price: generatePrice(50, 120) },
  ];

  return electronicsData.map((electronics) =>
    generateBaseProduct({
      ...electronics,
      hasCredit: randomBool(0.4),
      hasBarter: randomBool(0.3),
      hasPercent: randomBool(0.3), // Electronics often have discounts
    })
  );
};

// JOBS (İş Elanları) - 15 products
export const generateJobProducts = () => {
  const jobsData = [
    { title: "Frontend Developer axtarılır", price: generatePrice(800, 2500) },
    { title: "Mühasib xanım axtarılır", price: generatePrice(500, 1200) },
    { title: "Satış meneceri vakansiyası", price: generatePrice(400, 1000) },
    { title: "İnsan resursları mütəxəssisi", price: generatePrice(600, 1500) },
    { title: "Aşpaz axtarılır restorana", price: generatePrice(400, 800) },
    { title: "Tərcüməçi (İngilis dili)", price: generatePrice(500, 1200) },
    { title: "Maşın sürücüsü vakansiyası", price: generatePrice(350, 700) },
    { title: "Marketing mütəxəssisi", price: generatePrice(600, 1400) },
    { title: "Dizayner (Qrafik dizayn)", price: generatePrice(500, 1300) },
    { title: "Müəllim axtarılır", price: generatePrice(400, 900) },
    { title: "İT support mütəxəssisi", price: generatePrice(700, 1600) },
    { title: "Operator xanım axtarılır", price: generatePrice(350, 650) },
    { title: "Mühəndis (İnşaat)", price: generatePrice(800, 1800) },
    { title: "Massajçı axtarılır", price: generatePrice(300, 600) },
    { title: "Fotoqraf vakansiyası", price: generatePrice(400, 1000) },
  ];

  return jobsData.map((job) =>
    generateBaseProduct({
      ...job,
      hasCredit: false, // Jobs don't have credit
      hasBarter: false, // Jobs don't have barter
      hasPercent: false,
    })
  );
};

// CLOTHING (Geyim) - 15 products
export const generateClothingProducts = () => {
  const clothingData = [
    { title: "Nike Air Max ayaqqabı", price: generatePrice(180, 350) },
    { title: "Adidas idman kostyumu", price: generatePrice(120, 250) },
    { title: "Zara qadın paltosu", price: generatePrice(80, 200) },
    { title: "H&M kişi köynəyi", price: generatePrice(40, 90) },
    { title: "Mango qadın bluzası", price: generatePrice(50, 120) },
    { title: "Levi's jeans şalvar", price: generatePrice(100, 180) },
    { title: "Boss kişi kostyumu", price: generatePrice(300, 600) },
    { title: "Massimo Dutti ayaqqabı", price: generatePrice(150, 280) },
    { title: "Calvin Klein çanta", price: generatePrice(120, 250) },
    { title: "Tommy Hilfiger polo", price: generatePrice(80, 160) },
    { title: "LC Waikiki uşaq geyimi", price: generatePrice(20, 60) },
    { title: "Bershka qadın jaketi", price: generatePrice(60, 140) },
    { title: "Pull & Bear ayaqqabı", price: generatePrice(70, 150) },
    { title: "Stradivarius elbise", price: generatePrice(50, 120) },
    { title: "Defacto kişi şortu", price: generatePrice(30, 70) },
  ];

  return clothingData.map((clothing) =>
    generateBaseProduct({
      ...clothing,
      hasCredit: randomBool(0.2),
      hasBarter: randomBool(0.4),
      hasPercent: randomBool(0.4), // Clothing often has discounts
    })
  );
};

// SERVICES (Xidmətlər) - 15 products
export const generateServicesProducts = () => {
  const servicesData = [
    { title: "Ev təmizliyi xidməti", price: generatePrice(30, 80) },
    { title: "Kompyuter təmiri", price: generatePrice(20, 100) },
    { title: "Avtomobil yuma xidməti", price: generatePrice(15, 40) },
    { title: "Tərcümə xidməti", price: generatePrice(5, 25) },
    { title: "Fotoqraf xidməti (toy)", price: generatePrice(200, 800) },
    { title: "Saç düzümü və makiyaj", price: generatePrice(50, 150) },
    { title: "Kondisioner təmiri", price: generatePrice(30, 120) },
    { title: "Elektrik işləri", price: generatePrice(25, 80) },
    { title: "Plumbing (santexnik)", price: generatePrice(20, 100) },
    { title: "Məktəb dərsləri (repetitor)", price: generatePrice(10, 30) },
    { title: "Masaj xidməti", price: generatePrice(25, 60) },
    { title: "Web sayt hazırlanması", price: generatePrice(200, 1500) },
    { title: "Kargüzarlıq xidməti", price: generatePrice(50, 200) },
    { title: "Pet sitting (heyvan baxımı)", price: generatePrice(15, 40) },
    { title: "Əşyaların daşınması", price: generatePrice(40, 150) },
  ];

  return servicesData.map((service) =>
    generateBaseProduct({
      ...service,
      hasCredit: false,
      hasBarter: randomBool(0.3),
      hasPercent: randomBool(0.2),
    })
  );
};

// FREE ITEMS (Pulsuz) - 15 products
export const generateFreeProducts = () => {
  const freeData = [
    { title: "Köhnə kitablar verilir", price: "Pulsuz" },
    { title: "Uşaq oyuncaqları", price: "Pulsuz" },
    { title: "Ev bitkiləri verilir", price: "Pulsuz" },
    { title: "Köhnə mebel verilir", price: "Pulsuz" },
    { title: "Kağız qutular, karton", price: "Pulsuz" },
    { title: "Uşaq geyimləri verilir", price: "Pulsuz" },
    { title: "İnqilis dili dərsləri", price: "Pulsuz" },
    { title: "Kompyuter kursu pulsuz", price: "Pulsuz" },
    { title: "Köhnə curnallar", price: "Pulsuz" },
    { title: "Mətbəx əşyaları", price: "Pulsuz" },
    { title: "Çiçək toxumu verilir", price: "Pulsuz" },
    { title: "Köhnə televizor verilir", price: "Pulsuz" },
    { title: "Palıd odunu verilir", price: "Pulsuz" },
    { title: "Plastik şüşələr", price: "Pulsuz" },
    { title: "Yoga dərsləri (pulsuz)", price: "Pulsuz" },
  ];

  return freeData.map((free) =>
    generateBaseProduct({
      ...free,
      hasCredit: false,
      hasBarter: false,
      hasPercent: false,
    })
  );
};

// COMBINED GENERATOR FOR ALL CATEGORIES
export const generateProductsByCategory = (category, count = 15) => {
  const generators = {
    vehicles: generateVehicleProducts,
    realestate: generateRealEstateProducts,
    electronics: generateElectronicsProducts,
    jobs: generateJobProducts,
    clothing: generateClothingProducts,
    services: generateServicesProducts,
    free: generateFreeProducts,
  };

  const generator = generators[category];
  if (!generator) {
    console.warn(`No generator found for category: ${category}`);
    return [];
  }

  const products = generator();
  return products.slice(0, count);
};

// Generate mixed products for homepage sections
export const generateMixedProducts = (count = 15) => {
  const categories = [
    "vehicles",
    "realestate",
    "electronics",
    "clothing",
    "services",
  ];
  const allProducts = [];

  categories.forEach((category) => {
    const products = generateProductsByCategory(category, 3);
    allProducts.push(...products);
  });

  // Shuffle and return requested count
  const shuffled = allProducts.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get category-specific phrases for search typing animation
export const getCategorySearchPhrases = (category) => {
  const phrases = {
    vehicles: [
      "Mercedes axtarın...",
      "BMW avtomobil...",
      "Toyota Camry...",
      "Hyundai Tucson...",
      "Motosiklet axtarın...",
    ],
    realestate: [
      "Mənzil satılır...",
      "Ev kirayə verilir...",
      "Ofis sahəsi...",
      "Torpaq satılır...",
      "Villa axtarın...",
    ],
    electronics: [
      "iPhone axtarın...",
      "Samsung telefon...",
      "Laptop satılır...",
      "Smart TV...",
      "Gaming console...",
    ],
    default: [
      "Avtomobil axtarın...",
      "Ev və mənzil tapın...",
      "Telefon və elektronika...",
      "Geyim və ayaqqabı...",
      "Xidmətlər...",
    ],
  };

  return phrases[category] || phrases.default;
};
