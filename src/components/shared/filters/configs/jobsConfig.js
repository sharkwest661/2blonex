// src/components/shared/filters/configs/jobsConfig.js

/**
 * Jobs filter configuration for FilterManager
 * Handles employment and career-related filtering
 */
const jobsConfig = {
  category: "jobs",

  // Default filter state
  defaultFilters: {
    activityField: "",
    position: "",
    workSchedule: "",
    salaryMin: "",
    salaryMax: "",
    experience: "",
    education: "",
    location: "",
    companyType: "",
    showMoreFilters: false,

    // Additional job features
    benefits: [],
    remote: "all",
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
          dependencies: ["position"], // Reset position when activity field changes
          componentProps: {
            options: [
              { value: "it", label: "İnformasiya texnologiyaları" },
              { value: "finance", label: "Maliyyə və mühasibat" },
              { value: "marketing", label: "Marketinq və satış" },
              { value: "hr", label: "İnsan resursları" },
              { value: "education", label: "Təhsil" },
              { value: "healthcare", label: "Səhiyyə" },
              { value: "construction", label: "Tikinti" },
              { value: "tourism", label: "Turizm və istirahət" },
              { value: "logistics", label: "Logistika və nəqliyyat" },
              { value: "manufacturing", label: "İstehsal" },
              { value: "retail", label: "Ticarət" },
              { value: "legal", label: "Hüquq" },
              { value: "media", label: "Media və kommunikasiya" },
              { value: "other", label: "Digər" },
            ],
          },
        },
        {
          id: "position",
          type: "Dropdown",
          label: "Vəzifə",
          placeholder: "Vəzifə seçin",
          className: "for_width20",
          dependsOn: "activityField",
          dataSource: "DYNAMIC",
          componentProps: {
            options: [], // Will be populated based on activity field
          },
        },
        {
          id: "workSchedule",
          type: "Dropdown",
          label: "İş qrafiki",
          placeholder: "İş qrafiki seçin",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "full_time", label: "Tam ştat" },
              { value: "part_time", label: "Yarım ştat" },
              { value: "contract", label: "Müqavilə əsasında" },
              { value: "freelance", label: "Freelance" },
              { value: "internship", label: "Təcrübə" },
            ],
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
      id: "additional",
      title: "Əlavə filtrlər",
      visible: "showMoreFilters",
      className: "additional_filters",
      filters: [
        {
          id: "experience",
          type: "Dropdown",
          label: "İş təcrübəsi",
          placeholder: "İş təcrübəsi seçin",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "no_experience", label: "Təcrübə tələb olunmur" },
              { value: "0-1", label: "0-1 il" },
              { value: "1-3", label: "1-3 il" },
              { value: "3-5", label: "3-5 il" },
              { value: "5-10", label: "5-10 il" },
              { value: "10+", label: "10+ il" },
            ],
          },
        },
        {
          id: "education",
          type: "Dropdown",
          label: "Təhsil",
          placeholder: "Təhsil səviyyəsi seçin",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "any", label: "Fərqi yoxdur" },
              { value: "secondary", label: "Orta təhsil" },
              { value: "vocational", label: "Orta ixtisas" },
              { value: "bachelor", label: "Bakalavr" },
              { value: "master", label: "Magistr" },
              { value: "phd", label: "Doktorantura" },
            ],
          },
        },
        {
          id: "companyType",
          type: "Dropdown",
          label: "Şirkət tipi",
          placeholder: "Şirkət tipi seçin",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "local", label: "Yerli şirkət" },
              { value: "international", label: "Beynəlxalq şirkət" },
              { value: "startup", label: "Startup" },
              { value: "government", label: "Dövlət qurumu" },
              { value: "ngo", label: "QHT" },
            ],
          },
        },
        {
          id: "remote",
          type: "RadioGroup2",
          label: "Uzaqdan iş",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "all", label: "Hamısı" },
              { value: "remote", label: "Uzaqdan" },
              { value: "hybrid", label: "Hibrid" },
              { value: "office", label: "Ofisdə" },
            ],
            name: "remote",
          },
        },
      ],
    },
    {
      id: "benefits",
      title: "Müavinətlər və imkanlar",
      visible: "showMoreFilters",
      className: "benefits_filters",
      layout: "categories",
      filters: [
        {
          id: "jobBenefits",
          type: "CheckboxGroup",
          label: "Müavinətlər",
          className: "benefits-category",
          componentProps: {
            options: [
              { value: "health_insurance", label: "Səhiyyə sığortası" },
              { value: "bonus", label: "Bonus sistemi" },
              { value: "training", label: "Təlim proqramları" },
              { value: "career_growth", label: "Karyera inkişafı" },
              { value: "flexible_hours", label: "Çevik iş saatları" },
              { value: "gym", label: "İdman zalı" },
              { value: "lunch", label: "Nahar" },
              { value: "transport", label: "Nəqliyyat" },
              { value: "vacation", label: "Əlavə məzuniyyət" },
              { value: "mobile_laptop", label: "Mobil/laptop" },
            ],
            layout: "grid",
          },
        },
      ],
    },
  ],

  // Mobile configuration
  mobile: {
    drawerTitle: "İş Filtrləri",
    showResultsButton: true,
    showResetButton: true,
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",
  },

  // Filter behavior configuration
  behavior: {
    autoApply: false,
    preserveOnReset: [],
    urlSync: true,
    dependencies: {
      position: {
        dependsOn: "activityField",
        resetWhen: ["activityField"],
        dataSource: "getPositionsForActivityField",
      },
    },
  },

  // Validation rules
  validation: {
    salaryRange: {
      min: 0,
      max: 20000,
      required: false,
    },
  },
};

// Position mappings by activity field
export const JOB_POSITIONS = {
  it: [
    { value: "frontend_developer", label: "Frontend Developer" },
    { value: "backend_developer", label: "Backend Developer" },
    { value: "fullstack_developer", label: "Fullstack Developer" },
    { value: "mobile_developer", label: "Mobile Developer" },
    { value: "devops_engineer", label: "DevOps Engineer" },
    { value: "qa_engineer", label: "QA Engineer" },
    { value: "ui_ux_designer", label: "UI/UX Designer" },
    { value: "data_scientist", label: "Data Scientist" },
    { value: "project_manager", label: "Project Manager" },
    { value: "system_admin", label: "System Administrator" },
    { value: "other", label: "Digər" },
  ],
  finance: [
    { value: "accountant", label: "Mühasib" },
    { value: "financial_analyst", label: "Maliyyə analitiki" },
    { value: "auditor", label: "Auditor" },
    { value: "tax_specialist", label: "Vergi mütəxəssisi" },
    { value: "bank_specialist", label: "Bank mütəxəssisi" },
    { value: "credit_analyst", label: "Kredit analitiki" },
    { value: "financial_manager", label: "Maliyyə meneceri" },
    { value: "other", label: "Digər" },
  ],
  marketing: [
    { value: "marketing_manager", label: "Marketinq meneceri" },
    { value: "sales_manager", label: "Satış meneceri" },
    { value: "digital_marketer", label: "Digital marketer" },
    { value: "content_manager", label: "Kontent meneceri" },
    { value: "smm_specialist", label: "SMM mütəxəssisi" },
    { value: "sales_representative", label: "Satış nümayəndəsi" },
    { value: "brand_manager", label: "Brend meneceri" },
    { value: "other", label: "Digər" },
  ],
  hr: [
    { value: "hr_manager", label: "HR meneceri" },
    { value: "recruiter", label: "Recruiter" },
    { value: "hr_specialist", label: "HR mütəxəssisi" },
    { value: "training_manager", label: "Təlim meneceri" },
    { value: "hr_business_partner", label: "HR Business Partner" },
    { value: "other", label: "Digər" },
  ],
  education: [
    { value: "teacher", label: "Müəllim" },
    { value: "trainer", label: "Təlimçi" },
    { value: "tutor", label: "Tutor" },
    { value: "education_manager", label: "Təhsil meneceri" },
    { value: "curriculum_developer", label: "Kurikulum hazırlayıcısı" },
    { value: "other", label: "Digər" },
  ],
};

// Helper function to get positions for activity field
export const getPositionsForActivityField = (activityField) => {
  return JOB_POSITIONS[activityField] || [];
};

export default jobsConfig;
