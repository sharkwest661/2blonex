// src/data/vehicleConstants.js

/**
 * Vehicle-related data constants for FilterManager
 * Based on original HTML structure and Azerbaijani market
 */

// Car brands available in Azerbaijan market
export const CAR_BRANDS = [
  { value: "toyota", label: "Toyota" },
  { value: "mercedes", label: "Mercedes" },
  { value: "bmw", label: "BMW" },
  { value: "audi", label: "Audi" },
  { value: "hyundai", label: "Hyundai" },
  { value: "kia", label: "Kia" },
  { value: "nissan", label: "Nissan" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "ford", label: "Ford" },
  { value: "chevrolet", label: "Chevrolet" },
  { value: "lexus", label: "Lexus" },
  { value: "honda", label: "Honda" },
  { value: "mazda", label: "Mazda" },
  { value: "mitsubishi", label: "Mitsubishi" },
  { value: "subaru", label: "Subaru" },
  { value: "suzuki", label: "Suzuki" },
  { value: "jeep", label: "Jeep" },
  { value: "land_rover", label: "Land Rover" },
  { value: "porsche", label: "Porsche" },
  { value: "volvo", label: "Volvo" },
  { value: "infiniti", label: "Infiniti" },
  { value: "acura", label: "Acura" },
  { value: "cadillac", label: "Cadillac" },
  { value: "lincoln", label: "Lincoln" },
  { value: "buick", label: "Buick" },
  { value: "gmc", label: "GMC" },
  { value: "chrysler", label: "Chrysler" },
  { value: "dodge", label: "Dodge" },
  { value: "fiat", label: "Fiat" },
  { value: "alfa_romeo", label: "Alfa Romeo" },
  { value: "maserati", label: "Maserati" },
  { value: "ferrari", label: "Ferrari" },
  { value: "lamborghini", label: "Lamborghini" },
  { value: "bentley", label: "Bentley" },
  { value: "rolls_royce", label: "Rolls Royce" },
  { value: "aston_martin", label: "Aston Martin" },
  { value: "jaguar", label: "Jaguar" },
  { value: "mini", label: "Mini" },
  { value: "smart", label: "Smart" },
  { value: "tesla", label: "Tesla" },
  { value: "other", label: "Digər" },
];

// Vehicle body types
export const BODY_TYPES = [
  { value: "sedan", label: "Sedan" },
  { value: "hatchback", label: "Hetçbek" },
  { value: "suv", label: "SUV" },
  { value: "crossover", label: "Krossover" },
  { value: "coupe", label: "Kupe" },
  { value: "convertible", label: "Kabriolet" },
  { value: "wagon", label: "Universal" },
  { value: "pickup", label: "Pikap" },
  { value: "van", label: "Mikroavtobus" },
  { value: "minivan", label: "Minivan" },
  { value: "limousine", label: "Limuzin" },
  { value: "roadster", label: "Rodster" },
  { value: "other", label: "Digər" },
];

// Fuel types
export const FUEL_TYPES = [
  { value: "petrol", label: "Benzin" },
  { value: "diesel", label: "Dizel" },
  { value: "hybrid", label: "Hibrid" },
  { value: "electric", label: "Elektrik" },
  { value: "gas", label: "Qaz" },
  { value: "petrol_gas", label: "Benzin + Qaz" },
  { value: "other", label: "Digər" },
];

// Transmission types
export const GEAR_TYPES = [
  { value: "manual", label: "Mexaniki" },
  { value: "automatic", label: "Avtomat" },
  { value: "robotic", label: "Robot" },
  { value: "variator", label: "Variator" },
];

// Vehicle conditions
export const VEHICLE_CONDITIONS = [
  { value: "all", label: "Hamısı" },
  { value: "new", label: "Yeni" },
  { value: "used", label: "İstifadə olunmuş" },
  { value: "crashed", label: "Qəzalı" },
  { value: "credit", label: "Kreditdə" },
];

// Car models by brand (simplified - in real app this would be much larger)
export const CAR_MODELS = {
  toyota: [
    { value: "camry", label: "Camry" },
    { value: "corolla", label: "Corolla" },
    { value: "prius", label: "Prius" },
    { value: "rav4", label: "RAV4" },
    { value: "highlander", label: "Highlander" },
    { value: "land_cruiser", label: "Land Cruiser" },
    { value: "yaris", label: "Yaris" },
    { value: "avalon", label: "Avalon" },
    { value: "sienna", label: "Sienna" },
    { value: "tacoma", label: "Tacoma" },
  ],
  mercedes: [
    { value: "c_class", label: "C-Class" },
    { value: "e_class", label: "E-Class" },
    { value: "s_class", label: "S-Class" },
    { value: "a_class", label: "A-Class" },
    { value: "gle", label: "GLE" },
    { value: "glc", label: "GLC" },
    { value: "gls", label: "GLS" },
    { value: "ml", label: "ML" },
    { value: "gl", label: "GL" },
    { value: "slk", label: "SLK" },
  ],
  bmw: [
    { value: "3_series", label: "3 Series" },
    { value: "5_series", label: "5 Series" },
    { value: "7_series", label: "7 Series" },
    { value: "x3", label: "X3" },
    { value: "x5", label: "X5" },
    { value: "x6", label: "X6" },
    { value: "x1", label: "X1" },
    { value: "1_series", label: "1 Series" },
    { value: "z4", label: "Z4" },
    { value: "i3", label: "i3" },
  ],
  audi: [
    { value: "a3", label: "A3" },
    { value: "a4", label: "A4" },
    { value: "a6", label: "A6" },
    { value: "a8", label: "A8" },
    { value: "q3", label: "Q3" },
    { value: "q5", label: "Q5" },
    { value: "q7", label: "Q7" },
    { value: "tt", label: "TT" },
    { value: "r8", label: "R8" },
    { value: "a1", label: "A1" },
  ],
  hyundai: [
    { value: "elantra", label: "Elantra" },
    { value: "sonata", label: "Sonata" },
    { value: "tucson", label: "Tucson" },
    { value: "santa_fe", label: "Santa Fe" },
    { value: "accent", label: "Accent" },
    { value: "genesis", label: "Genesis" },
    { value: "i30", label: "i30" },
    { value: "ix35", label: "ix35" },
    { value: "getz", label: "Getz" },
    { value: "matrix", label: "Matrix" },
  ],
  // Add more brands and models as needed
};

// Vehicle equipment categories
export const VEHICLE_EQUIPMENT = {
  comfort: [
    { value: "climate", label: "Kondisioner" },
    { value: "climate_control", label: "İqlim kontrolu" },
    { value: "cruise_control", label: "Kruiz kontrol" },
    { value: "leather_seats", label: "Dəri oturacaqlar" },
    { value: "heated_seats", label: "Oturacaqların isidilməsi" },
    { value: "cooled_seats", label: "Oturacaqların soyudulması" },
    { value: "electric_seats", label: "Elektrik oturacaqlar" },
    { value: "memory_seats", label: "Yaddaş oturacaqları" },
    { value: "sunroof", label: "Lyuk" },
    { value: "panoramic_roof", label: "Panoram lyuk" },
    { value: "rain_sensors", label: "Yağış sensorları" },
    { value: "light_sensors", label: "İşıq sensorları" },
    { value: "auto_parking", label: "Avtomatik parkinq" },
  ],
  safety: [
    { value: "abs", label: "ABS" },
    { value: "esp", label: "ESP" },
    { value: "airbags", label: "Təhlükəsizlik yastıqları" },
    { value: "front_airbags", label: "Ön təhlükəsizlik yastıqları" },
    { value: "side_airbags", label: "Yan təhlükəsizlik yastıqları" },
    { value: "curtain_airbags", label: "Pərdə təhlükəsizlik yastıqları" },
    { value: "parking_sensors", label: "Park sensorları" },
    { value: "rear_camera", label: "Arxa görüntü kamerası" },
    { value: "front_camera", label: "Ön kamera" },
    { value: "side_cameras", label: "Yan kameralar" },
    { value: "360_camera", label: "360° kamera" },
    { value: "blind_spot", label: "Kor nöqtə nəzarəti" },
    { value: "lane_assist", label: "Zolaq köməkçisi" },
    { value: "collision_warning", label: "Toqquşma xəbərdarlığı" },
    { value: "auto_brake", label: "Avtomatik əyləc" },
  ],
  multimedia: [
    { value: "audio_system", label: "Audio sistem" },
    { value: "premium_audio", label: "Premium audio" },
    { value: "cd_player", label: "CD player" },
    { value: "dvd_player", label: "DVD player" },
    { value: "mp3", label: "MP3" },
    { value: "bluetooth", label: "Bluetooth" },
    { value: "usb", label: "USB" },
    { value: "aux", label: "AUX" },
    { value: "navigation", label: "Naviqasiya sistemi" },
    { value: "touchscreen", label: "Toxunma ekranı" },
    { value: "apple_carplay", label: "Apple CarPlay" },
    { value: "android_auto", label: "Android Auto" },
    { value: "wireless_charging", label: "Simsiz şarj" },
    { value: "rear_entertainment", label: "Arxa əyləncə sistemi" },
  ],
  other: [
    { value: "alloy_wheels", label: "Yüngül lehimli disklər" },
    { value: "fog_lights", label: "Duman fənərləri" },
    { value: "xenon", label: "Ksenon fənərlər" },
    { value: "led_lights", label: "LED fənərlər" },
    { value: "daytime_lights", label: "Gündüz işığı" },
    { value: "tinted_windows", label: "Tünd şüşələr" },
    { value: "electric_windows", label: "Elektrik pəncərələr" },
    { value: "central_lock", label: "Mərkəzi qıfıl" },
    { value: "alarm", label: "Siqnalizasiya" },
    { value: "immobilizer", label: "İmmobilizer" },
    { value: "spare_tire", label: "Ehtiyat təkər" },
    { value: "tool_kit", label: "Alət dəsti" },
    { value: "first_aid", label: "İlk yardım çantası" },
  ],
};

// Helper function to get models for a specific brand
export const getModelsForBrand = (brandValue) => {
  return CAR_MODELS[brandValue] || [];
};

// Helper function to get all equipment for a category
export const getEquipmentForCategory = (category) => {
  return VEHICLE_EQUIPMENT[category] || [];
};

// Helper function to get all equipment flattened
export const getAllVehicleEquipment = () => {
  const allEquipment = [];
  Object.keys(VEHICLE_EQUIPMENT).forEach((category) => {
    allEquipment.push(...VEHICLE_EQUIPMENT[category]);
  });
  return allEquipment;
};

// Price ranges for quick filters
export const PRICE_RANGES = [
  { value: "0-5000", label: "0 - 5,000 AZN", min: 0, max: 5000 },
  { value: "5000-10000", label: "5,000 - 10,000 AZN", min: 5000, max: 10000 },
  {
    value: "10000-20000",
    label: "10,000 - 20,000 AZN",
    min: 10000,
    max: 20000,
  },
  {
    value: "20000-30000",
    label: "20,000 - 30,000 AZN",
    min: 20000,
    max: 30000,
  },
  {
    value: "30000-50000",
    label: "30,000 - 50,000 AZN",
    min: 30000,
    max: 50000,
  },
  { value: "50000+", label: "50,000+ AZN", min: 50000, max: null },
];

// Year ranges for quick filters
export const YEAR_RANGES = [
  { value: "2020-2024", label: "2020-2024", min: 2020, max: 2024 },
  { value: "2015-2019", label: "2015-2019", min: 2015, max: 2019 },
  { value: "2010-2014", label: "2010-2014", min: 2010, max: 2014 },
  { value: "2005-2009", label: "2005-2009", min: 2005, max: 2009 },
  { value: "2000-2004", label: "2000-2004", min: 2000, max: 2004 },
];

// Export all constants as default
export default {
  CAR_BRANDS,
  CAR_MODELS,
  BODY_TYPES,
  FUEL_TYPES,
  GEAR_TYPES,
  VEHICLE_CONDITIONS,
  VEHICLE_EQUIPMENT,
  PRICE_RANGES,
  YEAR_RANGES,
  getModelsForBrand,
  getEquipmentForCategory,
  getAllVehicleEquipment,
};
