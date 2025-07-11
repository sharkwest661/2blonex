// src/components/features/jobs/constants/index.js

/**
 * Jobs filter constants for Bolbol classified ads platform
 * Used by JobsFilters component and FilterManager
 */

// Activity Fields / İş sahələri
export const ACTIVITY_FIELDS = [
  { value: "", label: "Hamısı" },
  { value: "it", label: "İnformasiya texnologiyaları" },
  { value: "finance", label: "Maliyyə və bank" },
  { value: "sales", label: "Satış və marketinq" },
  { value: "education", label: "Təhsil" },
  { value: "healthcare", label: "Səhiyyə" },
  { value: "construction", label: "Tikinti" },
  { value: "transport", label: "Nəqliyyat" },
  { value: "tourism", label: "Turizm" },
  { value: "media", label: "Media və dizayn" },
  { value: "legal", label: "Hüquq" },
  { value: "hr", label: "İnsan resursları" },
  { value: "manufacturing", label: "İstehsalat" },
  { value: "retail", label: "Ticarət" },
  { value: "consulting", label: "Konsaltinq" },
  { value: "other", label: "Digər" },
];

// Work Schedules / İş qrafikləri
export const WORK_SCHEDULES = [
  { value: "all", label: "Hamısı" },
  { value: "full_time", label: "Tam iş günü" },
  { value: "part_time", label: "Yarım iş günü" },
  { value: "flexible", label: "Çevik qrafik" },
  { value: "remote", label: "Uzaqdan iş" },
  { value: "freelance", label: "Freelance" },
  { value: "shift", label: "Növbəli iş" },
];

// Work Experience / İş təcrübəsi
export const WORK_EXPERIENCE = [
  { value: "all", label: "Hamısı" },
  { value: "no_experience", label: "Təcrübə tələb olunmur" },
  { value: "1_year", label: "1 ilə qədər" },
  { value: "1_3_years", label: "1-3 il" },
  { value: "3_5_years", label: "3-5 il" },
  { value: "5_10_years", label: "5-10 il" },
  { value: "10_plus", label: "10 ildən çox" },
];

// Education Levels / Təhsil səviyyələri
export const EDUCATION_LEVELS = [
  { value: "all", label: "Hamısı" },
  { value: "secondary", label: "Orta təhsil" },
  { value: "vocational", label: "Peşə təhsili" },
  { value: "bachelor", label: "Bakalavr" },
  { value: "master", label: "Magistr" },
  { value: "phd", label: "Doktorantura" },
];

// Job Types / İş növləri
export const JOB_TYPES = [
  { value: "all", label: "Hamısı" },
  { value: "permanent", label: "Daimi" },
  { value: "temporary", label: "Müvəqqəti" },
  { value: "contract", label: "Müqavilə əsasında" },
  { value: "internship", label: "Təcrübə" },
  { value: "volunteer", label: "Könüllü" },
];

// Company Types / Şirkət növləri
export const COMPANY_TYPES = [
  { value: "all", label: "Hamısı" },
  { value: "private", label: "Özəl şirkət" },
  { value: "public", label: "Dövlət müəssisəsi" },
  { value: "ngo", label: "QHT" },
  { value: "startup", label: "Startup" },
  { value: "multinational", label: "Beynəlxalq şirkət" },
];

// Job Benefits / İş imkanları
export const JOB_BENEFITS = [
  { value: "health_insurance", label: "Tibbi sığorta" },
  { value: "life_insurance", label: "Həyat sığortası" },
  { value: "bonus", label: "Bonus sistemi" },
  { value: "training", label: "Təlim imkanları" },
  { value: "career_growth", label: "Karyera inkişafı" },
  { value: "vacation", label: "Əlavə məzuniyyət" },
  { value: "transport", label: "Nəqliyyat" },
  { value: "meals", label: "Yemək" },
  { value: "phone", label: "Telefon" },
  { value: "laptop", label: "Laptop" },
];

// Work Environment / İş mühiti
export const WORK_ENVIRONMENT = [
  { value: "modern_office", label: "Müasir ofis" },
  { value: "parking", label: "Parkinq" },
  { value: "gym", label: "İdman zalı" },
  { value: "recreation_area", label: "İstirahət zonası" },
  { value: "kitchen", label: "Mətbəx" },
  { value: "air_conditioning", label: "Kondisioner" },
];

// Salary ranges for display
export const SALARY_RANGES = [
  { value: "0-500", label: "0-500 AZN" },
  { value: "500-1000", label: "500-1000 AZN" },
  { value: "1000-2000", label: "1000-2000 AZN" },
  { value: "2000-3000", label: "2000-3000 AZN" },
  { value: "3000-5000", label: "3000-5000 AZN" },
  { value: "5000+", label: "5000+ AZN" },
];
