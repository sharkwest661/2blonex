// src/components/features/vehicles/constants/equipment.js
export const VEHICLE_EQUIPMENT = [
  // Safety & Security
  { value: "abs", label: "ABS", category: "safety" },
  { value: "esp", label: "ESP", category: "safety" },
  { value: "airbags", label: "Təhlükəsizlik yastığı", category: "safety" },
  {
    value: "side_airbags",
    label: "Yan təhlükəsizlik yastığı",
    category: "safety",
  },
  { value: "alarm", label: "Siqnalizasiya", category: "safety" },
  { value: "immobilizer", label: "İmmobilayzer", category: "safety" },
  { value: "central_lock", label: "Mərkəzi qapanma", category: "safety" },

  // Comfort & Convenience
  { value: "climate", label: "Kondisioner", category: "comfort" },
  { value: "climate_control", label: "İqlim kontrolu", category: "comfort" },
  { value: "heated_seats", label: "Oturacaq isitmesi", category: "comfort" },
  { value: "cooled_seats", label: "Oturacaq soyudulması", category: "comfort" },
  { value: "leather_seats", label: "Dəri salon", category: "comfort" },
  {
    value: "electric_seats",
    label: "Elektrik oturacaqları",
    category: "comfort",
  },
  { value: "memory_seats", label: "Oturacaq yaddaşı", category: "comfort" },
  { value: "sunroof", label: "Lyuk", category: "comfort" },
  { value: "panoramic_roof", label: "Panoramik lyuk", category: "comfort" },
  {
    value: "electric_windows",
    label: "Elektrik pəncərələr",
    category: "comfort",
  },
  { value: "cruise_control", label: "Kruiz kontrol", category: "comfort" },
  {
    value: "steering_wheel_heat",
    label: "Sükan isitmesi",
    category: "comfort",
  },

  // Technology & Electronics
  { value: "navigation", label: "Naviqasiya", category: "technology" },
  { value: "bluetooth", label: "Bluetooth", category: "technology" },
  { value: "usb", label: "USB", category: "technology" },
  { value: "auxiliary", label: "AUX", category: "technology" },
  { value: "wireless_charging", label: "Simsiz şarj", category: "technology" },
  { value: "apple_carplay", label: "Apple CarPlay", category: "technology" },
  { value: "android_auto", label: "Android Auto", category: "technology" },
  {
    value: "premium_audio",
    label: "Premium audio sistem",
    category: "technology",
  },
  { value: "subwoofer", label: "Sabvufer", category: "technology" },

  // Lighting & Visibility
  { value: "xenon", label: "Ksenon", category: "lighting" },
  { value: "led_headlights", label: "LED faralar", category: "lighting" },
  { value: "led_drl", label: "LED gündüz işıqları", category: "lighting" },
  { value: "fog_lights", label: "Duman farası", category: "lighting" },
  {
    value: "adaptive_headlights",
    label: "Adaptiv faralar",
    category: "lighting",
  },
  { value: "rain_sensor", label: "Yağış sensoru", category: "lighting" },
  { value: "light_sensor", label: "İşıq sensoru", category: "lighting" },

  // Parking & Assistance
  { value: "parking_sensors", label: "Park sensoru", category: "assistance" },
  { value: "rear_camera", label: "Arxa kamera", category: "assistance" },
  { value: "360_camera", label: "360° kamera", category: "assistance" },
  {
    value: "blind_spot",
    label: "Kor nöqtə monitorinqi",
    category: "assistance",
  },
  { value: "lane_assist", label: "Zolaq köməkçisi", category: "assistance" },
  {
    value: "auto_parking",
    label: "Avtomatik parklanma",
    category: "assistance",
  },

  // Engine & Performance
  { value: "turbo", label: "Turbo", category: "performance" },
  { value: "start_stop", label: "Start/Stop", category: "performance" },
  { value: "sport_mode", label: "Sport rejimi", category: "performance" },
  { value: "eco_mode", label: "Eco rejimi", category: "performance" },

  // Other Features
  { value: "spare_wheel", label: "Ehtiyat təkər", category: "other" },
  { value: "tow_hook", label: "Dartma qurğusu", category: "other" },
  { value: "roof_rails", label: "Dam relinqləri", category: "other" },
  { value: "running_boards", label: "Addım taxtaları", category: "other" },
];

export const EQUIPMENT_CATEGORIES = [
  { value: "safety", label: "Təhlükəsizlik" },
  { value: "comfort", label: "Komfort" },
  { value: "technology", label: "Texnologiya" },
  { value: "lighting", label: "İşıqlandırma" },
  { value: "assistance", label: "Köməkçi sistemlər" },
  { value: "performance", label: "Performans" },
  { value: "other", label: "Digər" },
];
