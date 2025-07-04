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

// Simple seeded random number generator for consistent results
let seed = 12345; // Fixed seed for deterministic results
const seededRandom = () => {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
};

// Reset seed function for consistent generation
const resetSeed = () => {
  seed = 12345;
};

// Generate deterministic date within last 30 days
const generateRecentDate = (index = 0) => {
  resetSeed();
  for (let i = 0; i < index; i++) seededRandom(); // Advance seed based on index

  const now = new Date();
  const daysAgo = Math.floor(seededRandom() * 30);
  const date = new Date(now - daysAgo * 24 * 60 * 60 * 1000);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
};

// Generate deterministic price in AZN
const generatePrice = (min = 10, max = 5000, isFree = false, index = 0) => {
  if (isFree) return "Pulsuz";
  resetSeed();
  for (let i = 0; i < index; i++) seededRandom(); // Advance seed based on index

  const price = Math.floor(seededRandom() * (max - min) + min);
  return `${price} ₼`;
};

// Generate deterministic city
const getRandomCity = (index = 0) => {
  resetSeed();
  for (let i = 0; i < index; i++) seededRandom(); // Advance seed based on index

  return CITIES[Math.floor(seededRandom() * CITIES.length)];
};

// Generate deterministic boolean with probability
const randomBool = (probability = 0.3, index = 0) => {
  resetSeed();
  for (let i = 0; i < index; i++) seededRandom(); // Advance seed based on index

  return seededRandom() < probability;
};

// Base product generator with deterministic values
const generateBaseProduct = (overrides = {}, index = 0) => {
  return {
    id: `product-${index}`, // Use index instead of uuid for consistency
    location: getRandomCity(index),
    date: generateRecentDate(index),
    image: "/img/example/post2.png", // Placeholder image
    href: "#",
    isVip: randomBool(0.15, index),
    isPremium: randomBool(0.2, index + 1),
    hasBarter: randomBool(0.25, index + 2),
    hasCredit: randomBool(0.3, index + 3),
    hasPercent: randomBool(0.2, index + 4),
    ...overrides,
  };
};

// VEHICLES (Nəqliyyat) - 15 products with fixed data
export const generateVehicleProducts = () => {
  const vehicleData = [
    { title: "Mercedes-Benz E-Class 2019", price: "75000 ₼" },
    { title: "BMW X5 2020, sürətlər avtomatik", price: "82000 ₼" },
    { title: "Toyota Camry 2021, hibrid", price: "52000 ₼" },
    { title: "Hyundai Tucson 2020", price: "38000 ₼" },
    { title: "Kia Optima 2019, təmiz maşın", price: "32000 ₼" },
    { title: "Nissan Qashqai 2022", price: "42000 ₼" },
    { title: "Volkswagen Passat 2018", price: "28000 ₼" },
    { title: "Audi A6 2020", price: "65000 ₼" },
    { title: "Honda Accord 2021", price: "45000 ₼" },
    { title: "Mazda CX-5 2019", price: "35000 ₼" },
    { title: "Ford Focus 2020", price: "22000 ₼" },
    { title: "Chevrolet Cruze 2019", price: "18000 ₼" },
    { title: "Lada Granta 2021", price: "12000 ₼" },
    { title: "GAZ Gazelle yük maşını", price: "20000 ₼" },
    { title: "Yamaha motosiklet 2020", price: "5500 ₼" },
  ];

  return vehicleData.map((vehicle, index) =>
    generateBaseProduct(
      {
        ...vehicle,
        hasCredit: index % 3 === 0, // Deterministic credit
        hasBarter: index % 4 === 0, // Deterministic barter
      },
      index
    )
  );
};

// REAL ESTATE (Daşınmaz Əmlak) - 15 products with fixed data
export const generateRealEstateProducts = () => {
  const realEstateData = [
    { title: "3 otaqlı mənzil satılır, Nəsimi r-nu", price: "180000 ₼" },
    { title: "2 otaqlı mənzil kirayə verilir", price: "600 ₼" },
    { title: "Ev satılır, həyətyanı sahə ilə", price: "145000 ₼" },
    { title: "4 otaqlı mənzil, təmir edilib", price: "220000 ₼" },
    { title: "Ofis sahəsi kirayə verilir", price: "1200 ₼" },
    { title: "Villa satılır, dəniz kənarında", price: "380000 ₼" },
    { title: "1 otaqlı mənzil, yeni tikili", price: "95000 ₼" },
    { title: "Torpaq sahəsi satılır", price: "35000 ₼" },
    { title: "Kommersiya obyekti satılır", price: "450000 ₼" },
    { title: "5 otaqlı ev, qaraj ilə", price: "250000 ₼" },
    { title: "Anbar sahəsi kirayə verilir", price: "650 ₼" },
    { title: "Penthouse mənzil satılır", price: "580000 ₼" },
    { title: "Dəhliz kirayə verilir", price: "280 ₼" },
    { title: "2 otaqlı studio mənzil", price: "110000 ₼" },
    { title: "Bağ evi satılır", price: "85000 ₼" },
  ];

  return realEstateData.map(
    (estate, index) =>
      generateBaseProduct(
        {
          ...estate,
          hasCredit: index % 2 === 0,
          hasBarter: index % 5 === 0,
        },
        index + 15
      ) // Offset index to avoid ID conflicts
  );
};

// ELECTRONICS (Elektronika) - 15 products with fixed data
export const generateElectronicsProducts = () => {
  const electronicsData = [
    { title: "iPhone 14 Pro Max 256GB", price: "2200 ₼" },
    { title: "Samsung Galaxy S23 Ultra", price: "1800 ₼" },
    { title: "MacBook Pro 16-inch M2", price: "4500 ₼" },
    { title: "Sony PlayStation 5", price: "950 ₼" },
    { title: "Samsung 65-inch QLED TV", price: "1200 ₼" },
    { title: "Dell XPS 13 Laptop", price: "1600 ₼" },
    { title: "iPad Pro 12.9-inch", price: "1400 ₼" },
    { title: "Nintendo Switch OLED", price: "580 ₼" },
    { title: "Canon EOS R5 Camera", price: "3200 ₼" },
    { title: "AirPods Pro 2nd Gen", price: "450 ₼" },
    { title: "Gaming PC RTX 4080", price: "3800 ₼" },
    { title: "Xiaomi Mi 13 Pro", price: "1100 ₼" },
    { title: "Apple Watch Series 8", price: "650 ₼" },
    { title: "Samsung Galaxy Tab S8", price: "750 ₼" },
    { title: "Bose QuietComfort 45", price: "320 ₼" },
  ];

  return electronicsData.map(
    (electronics, index) =>
      generateBaseProduct(
        {
          ...electronics,
          hasCredit: index % 3 === 0,
          hasBarter: index % 6 === 0,
        },
        index + 30
      ) // Offset index
  );
};

// JOBS (İş Elanları) - 15 products with fixed data
export const generateJobProducts = () => {
  const jobsData = [
    { title: "Proqramçı (React.js)", price: "1200 ₼" },
    { title: "Satış meneceri", price: "600 ₼" },
    { title: "Mühasib", price: "500 ₼" },
    { title: "İnsan resursları mütəxəssisi", price: "700 ₼" },
    { title: "Kompyuter təmiri", price: "400 ₼" },
    { title: "Tərcüməçi (İngilis dili)", price: "800 ₼" },
    { title: "Maşın sürücüsü vakansiyası", price: "450 ₼" },
    { title: "Marketing mütəxəssisi", price: "900 ₼" },
    { title: "Dizayner (Qrafik dizayn)", price: "750 ₼" },
    { title: "Müəllim axtarılır", price: "550 ₼" },
    { title: "İT support mütəxəssisi", price: "1000 ₼" },
    { title: "Operator xanım axtarılır", price: "420 ₼" },
    { title: "Mühəndis (İnşaat)", price: "1300 ₼" },
    { title: "Massajçı axtarılır", price: "380 ₼" },
    { title: "Fotoqraf vakansiyası", price: "650 ₼" },
  ];

  return jobsData.map(
    (job, index) =>
      generateBaseProduct(
        {
          ...job,
          hasCredit: false, // Jobs don't have credit
          hasBarter: false, // Jobs don't have barter
          hasPercent: false,
        },
        index + 45
      ) // Offset index
  );
};

// CLOTHING (Geyim) - 15 products with fixed data
export const generateClothingProducts = () => {
  const clothingData = [
    { title: "Nike Air Max ayaqqabı", price: "250 ₼" },
    { title: "Adidas idman kostyumu", price: "180 ₼" },
    { title: "Zara qadın paltosu", price: "140 ₼" },
    { title: "H&M kişi köynəyi", price: "65 ₼" },
    { title: "Mango qadın bluzası", price: "85 ₼" },
    { title: "Levi's jeans şalvar", price: "140 ₼" },
    { title: "Boss kişi kostyumu", price: "450 ₼" },
    { title: "Massimo Dutti ayaqqabı", price: "210 ₼" },
    { title: "Calvin Klein çanta", price: "185 ₼" },
    { title: "Tommy Hilfiger polo", price: "120 ₼" },
    { title: "LC Waikiki uşaq geyimi", price: "40 ₼" },
    { title: "Bershka qadın jaketi", price: "100 ₼" },
    { title: "Pull & Bear ayaqqabı", price: "110 ₼" },
    { title: "Stradivarius elbise", price: "85 ₼" },
    { title: "Defacto kişi şortu", price: "50 ₼" },
  ];

  return clothingData.map(
    (clothing, index) =>
      generateBaseProduct(
        {
          ...clothing,
          hasCredit: index % 4 === 0,
          hasBarter: index % 5 === 0,
        },
        index + 60
      ) // Offset index
  );
};

// SERVICES (Xidmətlər) - 15 products with fixed data
export const generateServicesProducts = () => {
  const servicesData = [
    { title: "Ev təmiri xidməti", price: "300 ₼" },
    { title: "İngilis dili dərsi", price: "180 ₼" },
    { title: "Massage xidməti", price: "120 ₼" },
    { title: "Şəkil çəkdirmək (fotosessiya)", price: "250 ₼" },
    { title: "Daşıma xidməti", price: "80 ₼" },
    { title: "Dizayn xidməti", price: "400 ₼" },
    { title: "Avtomobil təmiri", price: "150 ₼" },
    { title: "Kondisioner təmiri", price: "100 ₼" },
    { title: "Saç kəsdirmək", price: "35 ₼" },
    { title: "Makyaj xidməti", price: "90 ₼" },
    { title: "Bərbər xidməti", price: "25 ₼" },
    { title: "Pet care (Heyvan baxımı)", price: "60 ₼" },
    { title: "Fitness məşqçisi", price: "200 ₼" },
    { title: "Tərcümə xidməti", price: "45 ₼" },
    { title: "Ev təmizliyi", price: "70 ₼" },
  ];

  return servicesData.map(
    (service, index) =>
      generateBaseProduct(
        {
          ...service,
          hasCredit: false,
          hasBarter: index % 7 === 0,
        },
        index + 75
      ) // Offset index
  );
};

// FREE PRODUCTS (Pulsuz) - 15 products with fixed data
export const generateFreeProducts = () => {
  const freeData = [
    { title: "Köhnə kitablar verilir", price: "Pulsuz" },
    { title: "Uşaq oyuncaqları", price: "Pulsuz" },
    { title: "Məktəb dərslikləri", price: "Pulsuz" },
    { title: "Çiçək toxumları", price: "Pulsuz" },
    { title: "Köhnə mebel", price: "Pulsuz" },
    { title: "Kompyuter əlavələri", price: "Pulsuz" },
    { title: "Ev heyvanları üçün aksesuar", price: "Pulsuz" },
    { title: "İdman inventarı", price: "Pulsuz" },
    { title: "Mətbəx əşyaları", price: "Pulsuz" },
    { title: "Geyim (köhnə)", price: "Pulsuz" },
    { title: "Elektron cihazlar (zədəli)", price: "Pulsuz" },
    { title: "Bağçılıq alətləri", price: "Pulsuz" },
    { title: "Uşaq arabaları", price: "Pulsuz" },
    { title: "Plastik şüşələr", price: "Pulsuz" },
    { title: "Yoga dərsləri (pulsuz)", price: "Pulsuz" },
  ];

  return freeData.map(
    (free, index) =>
      generateBaseProduct(
        {
          ...free,
          hasCredit: false,
          hasBarter: false,
          hasPercent: false,
        },
        index + 90
      ) // Offset index
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

// Generate mixed products for homepage sections - deterministic order
export const generateMixedProducts = (count = 15) => {
  const allProducts = [
    ...generateVehicleProducts().slice(0, 3),
    ...generateRealEstateProducts().slice(0, 3),
    ...generateElectronicsProducts().slice(0, 3),
    ...generateClothingProducts().slice(0, 3),
    ...generateServicesProducts().slice(0, 3),
  ];

  // Return consistent order instead of shuffling
  return allProducts.slice(0, count);
};
