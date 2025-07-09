// src/components/shared/filters/configs/jobsConfig.js

/**
 * Jobs filter configuration for FilterManager
 */

// Jobs data constants
const ACTIVITY_FIELDS = [
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

const WORK_SCHEDULES = [
  { value: "all", label: "Hamısı" },
  { value: "full_time", label: "Tam iş günü" },
  { value: "part_time", label: "Yarım iş günü" },
  { value: "flexible", label: "Çevik qrafik" },
  { value: "remote", label: "Uzaqdan iş" },
  { value: "freelance", label: "Freelance" },
  { value: "shift", label: "Növbəli iş" },
];

const WORK_EXPERIENCE = [
  { value: "all", label: "Hamısı" },
  { value: "no_experience", label: "Təcrübə tələb olunmur" },
  { value: "1_year", label: "1 ilə qədər" },
  { value: "1_3_years", label: "1-3 il" },
  { value: "3_5_years", label: "3-5 il" },
  { value: "5_10_years", label: "5-10 il" },
  { value: "10_plus", label: "10 ildən çox" },
];

const EDUCATION_LEVELS = [
  { value: "all", label: "Hamısı" },
  { value: "secondary", label: "Orta təhsil" },
  { value: "vocational", label: "Peşə təhsili" },
  { value: "bachelor", label: "Bakalavr" },
  { value: "master", label: "Magistr" },
  { value: "phd", label: "Doktorantura" },
];

const JOB_TYPES = [
  { value: "all", label: "Hamısı" },
  { value: "permanent", label: "Daimi" },
  { value: "temporary", label: "Müvəqqəti" },
  { value: "contract", label: "Müqavilə əsasında" },
  { value: "internship", label: "Təcrübə" },
  { value: "volunteer", label: "Könüllü" },
];

const COMPANY_TYPES = [
  { value: "all", label: "Hamısı" },
  { value: "private", label: "Özəl şirkət" },
  { value: "public", label: "Dövlət müəssisəsi" },
  { value: "ngo", label: "QHT" },
  { value: "startup", label: "Startup" },
  { value: "multinational", label: "Beynəlxalq şirkət" },
];

const jobsConfig = {
  category: "jobs",

  // Default filter state
  defaultFilters: {
    activityField: "",
    workSchedule: "all",
    salaryMin: "",
    salaryMax: "",
    experience: "all",
    education: "all",
    jobType: "all",
    companyType: "all",
    location: "",
    showMoreFilters: false,
  },

  // Filter sections configuration
  sections: [
    {
      id: "basic",
      title: null,
      alwaysVisible: true,
      className: "desctop_filters",
      layout: "grid",
      filters: [
        {
          id: "activityField",
          type: "Dropdown",
          label: "Fəaliyyət sahəsi",
          placeholder: "Fəaliyyət sahəsi seçin",
          className: "for_width20",
          componentProps: {
            options: ACTIVITY_FIELDS,
          },
        },
        {
          id: "workSchedule",
          type: "Dropdown",
          label: "İş qrafiki",
          placeholder: "İş qrafiki seçin",
          className: "for_width20",
          componentProps: {
            options: WORK_SCHEDULES,
          },
        },
        {
          id: "salaryRange",
          type: "PriceRangeFilter",
          label: "Maaş",
          className: "for_width20",
          componentProps: {
            currency: "AZN",
            placeholder: {
              min: "Min maaş",
              max: "Max maaş",
            },
          },
        },
        {
          id: "experience",
          type: "Dropdown",
          label: "İş təcrübəsi",
          placeholder: "İş təcrübəsi seçin",
          className: "for_width20",
          componentProps: {
            options: WORK_EXPERIENCE,
          },
        },
        {
          id: "education",
          type: "Dropdown",
          label: "Təhsil",
          placeholder: "Təhsil səviyyəsi seçin",
          className: "for_width20",
          componentProps: {
            options: EDUCATION_LEVELS,
          },
        },
        {
          id: "location",
          type: "LocationFilter",
          label: "Şəhər",
          className: "for_width20",
          componentProps: {
            placeholder: "Şəhər seçin",
          },
        },
      ],
    },
    {
      id: "advanced",
      title: "Ətraflı axtarış",
      visible: "showMoreFilters",
      className: "advanced_filters",
      layout: "grid",
      filters: [
        {
          id: "jobType",
          type: "Dropdown",
          label: "İş növü",
          placeholder: "İş növü seçin",
          className: "for_width20",
          componentProps: {
            options: JOB_TYPES,
          },
        },
        {
          id: "companyType",
          type: "Dropdown",
          label: "Şirkət növü",
          placeholder: "Şirkət növü seçin",
          className: "for_width20",
          componentProps: {
            options: COMPANY_TYPES,
          },
        },
      ],
    },
    {
      id: "benefits",
      title: "Təklif olunan imkanlar",
      visible: "showMoreFilters",
      className: "benefits_filters",
      layout: "categories",
      filters: [
        {
          id: "benefits",
          type: "CheckboxGroup",
          label: "Sosial paket",
          className: "benefits-category",
          componentProps: {
            options: [
              { value: "health_insurance", label: "Tibbi sığorta" },
              { value: "life_insurance", label: "Həyat sığortası" },
              { value: "bonus", label: "Bonus sistemi" },
              { value: "training", label: "Təlim imkanları" },
              { value: "career_growth", label: "Karyera inkişafı" },
              { value: "vacation", label: "Əlavə məzuniyyət" },
              { value: "transport", label: "Nəqliyyat" },
              { value: "meals", label: "Yemək" },
            ],
          },
        },
        {
          id: "workEnvironment",
          type: "CheckboxGroup",
          label: "İş mühiti",
          className: "environment-category",
          componentProps: {
            options: [
              { value: "modern_office", label: "Müasir ofis" },
              { value: "parking", label: "Parkinq" },
              { value: "gym", label: "İdman zalı" },
              { value: "recreation_area", label: "İstirahət zonası" },
              { value: "kitchen", label: "Mətbəx" },
              { value: "air_conditioning", label: "Kondisioner" },
            ],
          },
        },
      ],
    },
  ],

  // Mobile configuration
  mobile: {
    drawerTitle: "İş Elanları Filtrləri",
    showResultsButton: true,
    showResetButton: true,
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",
  },

  // Filter behavior configuration
  behavior: {
    autoApply: false,
    preserveOnReset: ["workSchedule"],
    urlSync: true,
    dependencies: {},
  },

  // Validation rules
  validation: {
    salaryRange: {
      min: 0,
      max: 10000,
      required: false,
    },
  },

  // Filter labels and text
  labels: {
    resetAll: "Hamısını təmizlə",
    applyFilters: "Filtrləri tətbiq et",
    showResults: "Nəticələri göstər",
    moreFilters: "Daha çox filtr",
    lessFilters: "Az filtr",
    activeFilters: "Aktiv filtrlər",
  },
};

export default jobsConfig;
