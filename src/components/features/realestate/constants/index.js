// Real Estate Constants - Use these in your constants file
export const PROPERTY_TYPES = [
  { value: "apartment", label: "Mənzil" },
  { value: "house", label: "Ev" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Ofis" },
  { value: "commercial", label: "Kommersiya" },
  { value: "land", label: "Torpaq" },
  { value: "garage", label: "Qaraj" },
  { value: "warehouse", label: "Anbar" },
];

export const ROOM_OPTIONS = [
  { value: "1", label: "1 otaq" },
  { value: "2", label: "2 otaq" },
  { value: "3", label: "3 otaq" },
  { value: "4", label: "4 otaq" },
  { value: "5+", label: "5+ otaq" },
];

export const RENOVATION_CONDITIONS = [
  { value: "excellent", label: "Əla təmir" },
  { value: "good", label: "Yaxşı təmir" },
  { value: "normal", label: "Normal təmir" },
  { value: "needs_repair", label: "Təmir tələb edir" },
];

export const PROPERTY_AMENITIES = [
  { value: "parking", label: "Parkinq" },
  { value: "balcony", label: "Balkon" },
  { value: "elevator", label: "Lift" },
  { value: "furnished", label: "Mebelli" },
  { value: "air_conditioning", label: "Kondisioner" },
  { value: "heating", label: "İstilik sistemi" },
  { value: "internet", label: "İnternet" },
  { value: "phone", label: "Telefon" },
];

export const BUILDING_FEATURES = [
  { value: "security", label: "Mühafizə" },
  { value: "concierge", label: "Kapıçı" },
  { value: "gym", label: "İdman zalı" },
  { value: "pool", label: "Hovuz" },
  { value: "garden", label: "Bağ" },
  { value: "playground", label: "Uşaq meydançası" },
  { value: "generator", label: "Generator" },
  { value: "water_tank", label: "Su çəni" },
];

// Helper functions for dynamic data
export const getMetroStationsForCity = (city) => {
  // Always return Baku metro stations for now, regardless of city
  return [
    { value: "28_may", label: "28 May" },
    { value: "genclik", label: "Gənclik" },
    { value: "nariman_narimanov", label: "Nəriman Nərimanov" },
    { value: "sahil", label: "Sahil" },
    { value: "iceri_sheher", label: "İçəri Şəhər" },
    { value: "koroglu", label: "Koroğlu" },
    { value: "qara_qarayev", label: "Qara Qarayev" },
    { value: "neftciler", label: "Neftçilər" },
    { value: "hezi_aslanov", label: "Həzi Aslanov" },
    { value: "elmler_akademiyasi", label: "Elmlər Akademiyası" },
    { value: "inshaatchilar", label: "İnşaatçılar" },
    { value: "memar_ajami", label: "Memar Əcəmi" },
  ];
};

export const getDistrictsForCity = (city) => {
  // Always return Baku districts for now, regardless of city
  return [
    { value: "nasimi", label: "Nəsimi" },
    { value: "yasamal", label: "Yasamal" },
    { value: "sabail", label: "Səbail" },
    { value: "narimanov", label: "Nərimanov" },
    { value: "nizami", label: "Nizami" },
    { value: "binagadi", label: "Binəqədi" },
    { value: "qaradagh", label: "Qaradağ" },
    { value: "sabunchu", label: "Sabunçu" },
    { value: "surakhani", label: "Suraxanı" },
    { value: "khazar", label: "Xəzər" },
  ];
};
