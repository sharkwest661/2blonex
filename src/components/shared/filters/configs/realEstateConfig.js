// src/components/shared/filters/configs/realEstateConfig.js

/**
 * Real Estate filter configuration for FilterManager
 * Handles complex property filtering with location hierarchy
 */
const realEstateConfig = {
  category: "real-estate",

  // Default filter state
  defaultFilters: {
    dealType: "sale", // sale or rent
    propertyType: "",
    rooms: [],
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    floorMin: "",
    floorMax: "",
    renovation: "all",
    location: "",
    metro: "",
    district: "",
    showMoreFilters: false,

    // Additional features
    features: {
      parking: false,
      balcony: false,
      elevator: false,
      furnished: false,
      newBuilding: false,
    },
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
          id: "dealType",
          type: "RadioGroup2",
          label: "Əməliyyat növü",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "sale", label: "Alış" },
              { value: "rent", label: "Kirayə" },
            ],
            name: "dealType",
          },
        },
        {
          id: "propertyType",
          type: "Dropdown",
          label: "Əmlak növü",
          placeholder: "Əmlak növü seçin",
          className: "for_width20",
          dependencies: ["rooms"], // Some property types may affect room options
          componentProps: {
            options: [
              { value: "apartment", label: "Mənzil" },
              { value: "house", label: "Ev" },
              { value: "villa", label: "Villa" },
              { value: "office", label: "Ofis" },
              { value: "commercial", label: "Kommersiya" },
              { value: "land", label: "Torpaq" },
              { value: "garage", label: "Qaraj" },
              { value: "other", label: "Digər" },
            ],
          },
        },
        {
          id: "rooms",
          type: "CheckboxGroup",
          label: "Otaq sayı",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "1", label: "1 otaq" },
              { value: "2", label: "2 otaq" },
              { value: "3", label: "3 otaq" },
              { value: "4", label: "4 otaq" },
              { value: "5+", label: "5+ otaq" },
            ],
            layout: "horizontal",
          },
        },
        {
          id: "priceRange",
          type: "PriceRangeFilter",
          label: "Qiymət",
          className: "for_width20",
          componentProps: {
            currency: "AZN",
            placeholder: {
              min: "Min qiymət",
              max: "Max qiymət",
            },
          },
        },
        {
          id: "location",
          type: "LocationFilter",
          label: "Şəhər",
          className: "for_width20",
          dependencies: ["metro", "district"], // Reset metro/district when city changes
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
          id: "areaRange",
          type: "RangeInput",
          label: "Sahə",
          className: "for_width20",
          componentProps: {
            placeholder: {
              min: "Min sahə",
              max: "Max sahə",
            },
            suffix: "m²",
            min: 0,
            max: 1000,
          },
        },
        {
          id: "floorRange",
          type: "RangeInput",
          label: "Mərtəbə",
          className: "for_width20",
          componentProps: {
            placeholder: {
              min: "Min mərtəbə",
              max: "Max mərtəbə",
            },
            min: 1,
            max: 50,
          },
        },
        {
          id: "renovation",
          type: "RadioGroup2",
          label: "Təmir",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "all", label: "Hamısı" },
              { value: "excellent", label: "Əla təmir" },
              { value: "good", label: "Yaxşı təmir" },
              { value: "normal", label: "Orta təmir" },
              { value: "needs_repair", label: "Təmirə ehtiyac" },
            ],
            name: "renovation",
          },
        },
        {
          id: "metro",
          type: "Dropdown",
          label: "Metro",
          placeholder: "Metro stansiyası seçin",
          className: "for_width20",
          dependsOn: "location",
          dataSource: "DYNAMIC",
          componentProps: {
            options: [], // Will be populated based on selected city
          },
        },
        {
          id: "district",
          type: "Dropdown",
          label: "Rayon",
          placeholder: "Rayon seçin",
          className: "for_width20",
          dependsOn: "location",
          dataSource: "DYNAMIC",
          componentProps: {
            options: [], // Will be populated based on selected city
          },
        },
      ],
    },
    {
      id: "features",
      title: "Xüsusiyyətlər",
      visible: "showMoreFilters",
      className: "features_filters",
      layout: "categories",
      filters: [
        {
          id: "propertyFeatures",
          type: "CheckboxGroup",
          label: "Əmlak xüsusiyyətləri",
          className: "features-category",
          componentProps: {
            options: [
              { value: "parking", label: "Parkinq" },
              { value: "balcony", label: "Balkon" },
              { value: "elevator", label: "Lift" },
              { value: "furnished", label: "Mebelli" },
              { value: "newBuilding", label: "Yeni tikili" },
              { value: "security", label: "Mühafizə" },
              { value: "pool", label: "Hovuz" },
              { value: "garden", label: "Bağ" },
            ],
            layout: "grid",
          },
        },
      ],
    },
  ],

  // Mobile configuration
  mobile: {
    drawerTitle: "Əmlak Filtrləri",
    showResultsButton: true,
    showResetButton: true,
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",

    // Special mobile components for real estate
    propertyTypeCarousel: true, // Enable property type carousel on mobile
  },

  // Filter behavior configuration
  behavior: {
    autoApply: false,
    preserveOnReset: ["dealType"],
    urlSync: true,
    dependencies: {
      metro: {
        dependsOn: "location",
        resetWhen: ["location"],
        dataSource: "getMetroStationsForCity",
      },
      district: {
        dependsOn: "location",
        resetWhen: ["location"],
        dataSource: "getDistrictsForCity",
      },
      rooms: {
        dependsOn: "propertyType",
        resetWhen: ["propertyType"],
        dataSource: "getRoomOptionsForPropertyType",
      },
    },
  },

  // Validation rules
  validation: {
    priceRange: {
      min: 0,
      max: 10000000,
      required: false,
    },
    areaRange: {
      min: 0,
      max: 1000,
      required: false,
    },
    floorRange: {
      min: 1,
      max: 50,
      required: false,
    },
  },
};

// Location data for Baku (example)
export const BAKU_METRO_STATIONS = [
  { value: "28_may", label: "28 May" },
  { value: "gənclik", label: "Gənclik" },
  { value: "nəriman_nərimanov", label: "Nəriman Nərimanov" },
  { value: "bakmil", label: "Bakmil" },
  { value: "koroğlu", label: "Koroğlu" },
  { value: "qara_qarayev", label: "Qara Qarayev" },
  { value: "neftçilər", label: "Neftçilər" },
  { value: "həzi_aslanov", label: "Həzi Aslanov" },
  { value: "elmlər_akademiyası", label: "Elmlər Akademiyası" },
  { value: "inshaatchilar", label: "İnşaatçılar" },
  { value: "iceri_sheher", label: "İçəri Şəhər" },
  { value: "sahil", label: "Sahil" },
  { value: "memar_ajami", label: "Memar Əcəmi" },
];

export const BAKU_DISTRICTS = [
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

// Helper functions for dynamic data
export const getMetroStationsForCity = (city) => {
  if (city === "baku") {
    return BAKU_METRO_STATIONS;
  }
  return [];
};

export const getDistrictsForCity = (city) => {
  if (city === "baku") {
    return BAKU_DISTRICTS;
  }
  return [];
};

export const getRoomOptionsForPropertyType = (propertyType) => {
  // Adjust room options based on property type
  if (propertyType === "office" || propertyType === "commercial") {
    return []; // No room filtering for commercial properties
  }

  if (propertyType === "land" || propertyType === "garage") {
    return []; // No room filtering for land or garage
  }

  // Default room options for residential properties
  return [
    { value: "1", label: "1 otaq" },
    { value: "2", label: "2 otaq" },
    { value: "3", label: "3 otaq" },
    { value: "4", label: "4 otaq" },
    { value: "5+", label: "5+ otaq" },
  ];
};

export default realEstateConfig;
