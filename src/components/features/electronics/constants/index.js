// src/components/features/electronics/constants/index.js
export const ELECTRONICS_CATEGORIES = [
  { value: "all", label: "Bütün kateqoriyalar" },
  { value: "smartphones", label: "Smartfonlar" },
  { value: "laptops", label: "Noutbuklar" },
  { value: "tablets", label: "Planşetlər" },
  { value: "computers", label: "Kompüterlər" },
  { value: "cameras", label: "Fotoaparatlar" },
  { value: "headphones", label: "Qulaqlıqlar" },
  { value: "speakers", label: "Dinamiklər" },
  { value: "gaming", label: "Oyun aksesuarları" },
  { value: "accessories", label: "Aksesuarlar" },
  { value: "home-appliances", label: "Ev texnikası" },
  { value: "tv-audio", label: "TV və Audio" },
];

export const ELECTRONICS_BRANDS = [
  { value: "apple", label: "Apple" },
  { value: "samsung", label: "Samsung" },
  { value: "huawei", label: "Huawei" },
  { value: "xiaomi", label: "Xiaomi" },
  { value: "sony", label: "Sony" },
  { value: "lg", label: "LG" },
  { value: "hp", label: "HP" },
  { value: "dell", label: "Dell" },
  { value: "lenovo", label: "Lenovo" },
  { value: "asus", label: "ASUS" },
  { value: "acer", label: "Acer" },
  { value: "canon", label: "Canon" },
  { value: "nikon", label: "Nikon" },
  { value: "bose", label: "Bose" },
  { value: "jbl", label: "JBL" },
  { value: "other", label: "Digər" },
];

export const ELECTRONICS_CONDITIONS = [
  { value: "all", label: "Hamısı" },
  { value: "new", label: "Yeni" },
  { value: "used", label: "İşlənmiş" },
  { value: "refurbished", label: "Yenilənmiş" },
  { value: "damaged", label: "Qırıq" },
];

export const STORAGE_OPTIONS = [
  { value: "16gb", label: "16GB" },
  { value: "32gb", label: "32GB" },
  { value: "64gb", label: "64GB" },
  { value: "128gb", label: "128GB" },
  { value: "256gb", label: "256GB" },
  { value: "512gb", label: "512GB" },
  { value: "1tb", label: "1TB" },
  { value: "2tb", label: "2TB+" },
];

export const RAM_OPTIONS = [
  { value: "2gb", label: "2GB" },
  { value: "4gb", label: "4GB" },
  { value: "6gb", label: "6GB" },
  { value: "8gb", label: "8GB" },
  { value: "12gb", label: "12GB" },
  { value: "16gb", label: "16GB" },
  { value: "32gb", label: "32GB+" },
];

export const OPERATING_SYSTEMS = [
  { value: "ios", label: "iOS" },
  { value: "android", label: "Android" },
  { value: "windows", label: "Windows" },
  { value: "macos", label: "macOS" },
  { value: "linux", label: "Linux" },
];

export const SCREEN_SIZES = [
  { value: "small", label: '5" və aşağı' },
  { value: "medium", label: '5"-6"' },
  { value: "large", label: '6"-7"' },
  { value: "xlarge", label: '7"+' },
];

export const CONNECTIVITY_OPTIONS = [
  { value: "wifi", label: "WiFi" },
  { value: "bluetooth", label: "Bluetooth" },
  { value: "4g", label: "4G" },
  { value: "5g", label: "5G" },
  { value: "nfc", label: "NFC" },
  { value: "usb-c", label: "USB-C" },
  { value: "lightning", label: "Lightning" },
  { value: "wireless-charging", label: "Simsiz şarj" },
];

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

// src/components/features/jobs/constants/index.js
export const JOB_CATEGORIES = [
  { value: "all", label: "Bütün sahələr" },
  { value: "it", label: "İnformasiya texnologiyaları" },
  { value: "sales", label: "Satış" },
  { value: "marketing", label: "Marketinq" },
  { value: "finance", label: "Maliyyə" },
  { value: "hr", label: "İnsan resursları" },
  { value: "healthcare", label: "Səhiyyə" },
  { value: "education", label: "Təhsil" },
  { value: "engineering", label: "Mühəndislik" },
  { value: "construction", label: "Tikinti" },
  { value: "logistics", label: "Logistika" },
  { value: "tourism", label: "Turizm" },
  { value: "banking", label: "Bank işi" },
  { value: "retail", label: "Pərakəndə satış" },
  { value: "manufacturing", label: "İstehsal" },
  { value: "other", label: "Digər" },
];

export const EMPLOYMENT_TYPES = [
  { value: "full-time", label: "Tam iş günü" },
  { value: "part-time", label: "Qismən məşğulluq" },
  { value: "contract", label: "Müqavilə" },
  { value: "freelance", label: "Sərbəst iş" },
  { value: "internship", label: "Təcrübə" },
  { value: "temporary", label: "Müvəqqəti" },
];

export const EXPERIENCE_LEVELS = [
  { value: "all", label: "Hamısı" },
  { value: "no-experience", label: "Təcrübə tələb olunmur" },
  { value: "0-1", label: "0-1 il" },
  { value: "1-3", label: "1-3 il" },
  { value: "3-5", label: "3-5 il" },
  { value: "5-10", label: "5-10 il" },
  { value: "10+", label: "10+ il" },
];

export const EDUCATION_LEVELS = [
  { value: "high-school", label: "Orta təhsil" },
  { value: "vocational", label: "Peşə təhsili" },
  { value: "bachelor", label: "Bakalavr" },
  { value: "master", label: "Magistr" },
  { value: "phd", label: "Elmlər doktoru" },
];

export const COMPANY_SIZES = [
  { value: "startup", label: "Startap (1-10)" },
  { value: "small", label: "Kiçik (11-50)" },
  { value: "medium", label: "Orta (51-200)" },
  { value: "large", label: "Böyük (200+)" },
];

export const WORK_ARRANGEMENTS = [
  { value: "office", label: "Ofisdə" },
  { value: "remote", label: "Uzaqdan" },
  { value: "hybrid", label: "Hibrid" },
  { value: "travel", label: "Ezamiyyətlə" },
];

export const JOB_BENEFITS = [
  { value: "health-insurance", label: "Tibbi sığorta" },
  { value: "life-insurance", label: "Həyat sığortası" },
  { value: "flexible-hours", label: "Çevik iş saatları" },
  { value: "vacation", label: "Məzuniyyət" },
  { value: "training", label: "Təlim" },
  { value: "career-growth", label: "Karyera inkişafı" },
  { value: "bonus", label: "Bonus sistemi" },
  { value: "transport", label: "Nəqliyyat" },
  { value: "meal", label: "Yemək" },
  { value: "phone", label: "Telefon" },
];

// src/components/features/services/constants/index.js
export const SERVICE_CATEGORIES = [
  { value: "all", label: "Bütün xidmətlər" },
  { value: "repair", label: "Təmir xidmətləri" },
  { value: "cleaning", label: "Təmizlik" },
  { value: "beauty", label: "Gözəllik" },
  { value: "health", label: "Sağlamlıq" },
  { value: "education", label: "Təhsil" },
  { value: "translation", label: "Tərcümə" },
  { value: "design", label: "Dizayn" },
  { value: "photography", label: "Fotoqrafiya" },
  { value: "transport", label: "Nəqliyyat" },
  { value: "delivery", label: "Çatdırılma" },
  { value: "legal", label: "Hüquqi xidmətlər" },
  { value: "accounting", label: "Mühasibatlıq" },
  { value: "consulting", label: "Məsləhət" },
  { value: "other", label: "Digər" },
];

export const SERVICE_TYPES = [
  { value: "one-time", label: "Birdəfəlik" },
  { value: "recurring", label: "Müntəzəm" },
  { value: "emergency", label: "Təcili" },
  { value: "subscription", label: "Abunəlik" },
];

export const PROVIDER_TYPES = [
  { value: "individual", label: "Fərdi" },
  { value: "company", label: "Şirkət" },
  { value: "freelancer", label: "Sərbəst" },
];

export const AVAILABILITY_OPTIONS = [
  { value: "weekdays", label: "Həftə içi" },
  { value: "weekends", label: "Həftə sonu" },
  { value: "24-7", label: "24/7" },
  { value: "evening", label: "Axşam saatları" },
  { value: "morning", label: "Səhər saatları" },
];

export const SERVICE_EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Başlanğıc" },
  { value: "intermediate", label: "Orta" },
  { value: "experienced", label: "Təcrübəli" },
  { value: "expert", label: "Ekspert" },
];

export const CERTIFICATIONS = [
  { value: "licensed", label: "Lisenziyalı" },
  { value: "insured", label: "Sığortalı" },
  { value: "verified", label: "Təsdiqlənmiş" },
  { value: "certified", label: "Sertifikatlı" },
];

export const SERVICE_FEATURES = [
  { value: "warranty", label: "Zəmanət" },
  { value: "free-consultation", label: "Pulsuz məsləhət" },
  { value: "home-visit", label: "Evə gəlmə" },
  { value: "emergency-service", label: "Təcili xidmət" },
  { value: "online-service", label: "Onlayn xidmət" },
  { value: "discount", label: "Endirim" },
];
