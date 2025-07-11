// src/components/features/realestate/constants/index.js

export const PROPERTY_TYPES = [
  { value: "all", label: "Bütün növlər" },
  { value: "apartment", label: "Mənzil" },
  { value: "house", label: "Ev" },
  { value: "villa", label: "Villa" },
  { value: "cottage", label: "Kottec" },
  { value: "office", label: "Ofis" },
  { value: "shop", label: "Mağaza" },
  { value: "warehouse", label: "Anbar" },
  { value: "land", label: "Torpaq" },
  { value: "garage", label: "Qaraj" },
  { value: "other", label: "Digər" },
];

export const TRANSACTION_TYPES = [
  { value: "sale", label: "Satış" },
  { value: "rent", label: "İcarə" },
  { value: "exchange", label: "Dəyişmə" },
];

export const ROOM_COUNTS = [
  { value: "all", label: "Hamısı" },
  { value: "studio", label: "Studio" },
  { value: "1", label: "1 otaq" },
  { value: "1+1", label: "1+1" },
  { value: "2", label: "2 otaq" },
  { value: "2+1", label: "2+1" },
  { value: "3", label: "3 otaq" },
  { value: "3+1", label: "3+1" },
  { value: "4", label: "4 otaq" },
  { value: "4+1", label: "4+1" },
  { value: "5+", label: "5+ otaq" },
];

export const PROPERTY_CONDITIONS = [
  { value: "new", label: "Yeni tikili" },
  { value: "renovated", label: "Təmirli" },
  { value: "normal", label: "Normal" },
  { value: "needs-repair", label: "Təmir tələb edir" },
];

export const HEATING_TYPES = [
  { value: "central", label: "Mərkəzi istilik" },
  { value: "gas", label: "Qaz" },
  { value: "electric", label: "Elektrik" },
  { value: "boiler", label: "Kotel" },
  { value: "fireplace", label: "Kamin" },
  { value: "none", label: "Yoxdur" },
];

export const PROPERTY_AMENITIES = [
  { value: "parking", label: "Avtomobil yeri" },
  { value: "elevator", label: "Lift" },
  { value: "balcony", label: "Balkon" },
  { value: "garden", label: "Bağ" },
  { value: "pool", label: "Hovuz" },
  { value: "gym", label: "İdman zalı" },
  { value: "security", label: "Mühafizə" },
  { value: "concierge", label: "Konsyerj" },
  { value: "generator", label: "Generator" },
  { value: "water-tank", label: "Su çəni" },
];

export const PROPERTY_FEATURES = [
  { value: "furnished", label: "Əşyalı" },
  { value: "internet", label: "İnternet" },
  { value: "air-conditioning", label: "Kondisioner" },
  { value: "washing-machine", label: "Paltaryuyan" },
  { value: "dishwasher", label: "Qabyuyan" },
  { value: "refrigerator", label: "Soyuducu" },
  { value: "tv", label: "Televizor" },
  { value: "cable-tv", label: "Kabel TV" },
  { value: "phone", label: "Telefon" },
];

export const FLOOR_RANGES = [
  { value: "basement", label: "Zirzəmi" },
  { value: "ground", label: "Birinci mərtəbə" },
  { value: "1-5", label: "1-5 mərtəbə" },
  { value: "6-10", label: "6-10 mərtəbə" },
  { value: "11-15", label: "11-15 mərtəbə" },
  { value: "16+", label: "16+ mərtəbə" },
  { value: "last", label: "Son mərtəbə" },
];

export const AREA_RANGES = [
  { value: "0-50", label: "50 m²-dək" },
  { value: "50-100", label: "50-100 m²" },
  { value: "100-150", label: "100-150 m²" },
  { value: "150-200", label: "150-200 m²" },
  { value: "200-300", label: "200-300 m²" },
  { value: "300+", label: "300+ m²" },
];

// Property type icons for mobile carousel
export const PROPERTY_TYPE_ICONS = {
  apartment: "🏢",
  house: "🏠",
  villa: "🏡",
  cottage: "🏘️",
  office: "🏢",
  shop: "🏪",
  warehouse: "🏭",
  land: "🌾",
  garage: "🚗",
  other: "🏗️",
};

// Location hierarchy data - simplified version
export const METRO_STATIONS = [
  { value: "nizami", label: "Nizami" },
  { value: "koroglu", label: "Koroğlu" },
  { value: "qara-qarayev", label: "Qara Qarayev" },
  { value: "nariman-narimanov", label: "Nəriman Nərimanov" },
  { value: "ganjlik", label: "Gənclik" },
  { value: "ulduz", label: "Ulduz" },
  { value: "komsomol", label: "Komsomol" },
  { value: "neftchilar", label: "Neftçilər" },
  { value: "khalilar", label: "Xalqlar Dostluğu" },
  { value: "28-may", label: "28 May" },
  { value: "sahil", label: "Sahil" },
  { value: "icherisheher", label: "İçərişəhər" },
];

export const DISTRICTS = [
  { value: "yasamal", label: "Yasamal rayonu" },
  { value: "nasimi", label: "Nəsimi rayonu" },
  { value: "narimanov", label: "Nərimanov rayonu" },
  { value: "sabail", label: "Sabail rayonu" },
  { value: "nizami", label: "Nizami rayonu" },
  { value: "khatai", label: "Xətai rayonu" },
  { value: "binagadi", label: "Binəqədi rayonu" },
  { value: "surakhani", label: "Suraxanı rayonu" },
  { value: "sabunchu", label: "Sabunçu rayonu" },
  { value: "khazar", label: "Xəzər rayonu" },
];
