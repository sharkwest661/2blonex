// src/components/shared/filters/configs/electronicsConfig.js

/**
 * Electronics filter configuration for FilterManager
 */

// Electronics data constants (you would typically import these from data files)
const ELECTRONICS_BRANDS = [
  { value: "apple", label: "Apple" },
  { value: "samsung", label: "Samsung" },
  { value: "sony", label: "Sony" },
  { value: "lg", label: "LG" },
  { value: "dell", label: "Dell" },
  { value: "hp", label: "HP" },
  { value: "lenovo", label: "Lenovo" },
  { value: "asus", label: "Asus" },
  { value: "acer", label: "Acer" },
  { value: "huawei", label: "Huawei" },
  { value: "xiaomi", label: "Xiaomi" },
  { value: "canon", label: "Canon" },
  { value: "nikon", label: "Nikon" },
  { value: "panasonic", label: "Panasonic" },
];

const ITEM_TYPES = [
  { value: "phones", label: "Mobil telefonlar" },
  { value: "laptops", label: "Noutbuklar" },
  { value: "computers", label: "Kompüterlər" },
  { value: "tablets", label: "Planşetlər" },
  { value: "tv", label: "Televizorlar" },
  { value: "audio", label: "Audio texnika" },
  { value: "cameras", label: "Fotoaparatlar" },
  { value: "gaming", label: "Oyun konsolları" },
  { value: "smart_home", label: "Ağıllı ev" },
  { value: "accessories", label: "Aksesuarlar" },
];

const ELECTRONICS_CONDITIONS = [
  { value: "all", label: "Hamısı" },
  { value: "new", label: "Yeni" },
  { value: "used", label: "İşlənmiş" },
  { value: "refurbished", label: "Təmir edilmiş" },
];

const DELIVERY_OPTIONS = [
  { value: "all", label: "Hamısı" },
  { value: "yes", label: "Bəli" },
  { value: "no", label: "Xeyr" },
];

const electronicsConfig = {
  category: "electronics",

  // Default filter state
  defaultFilters: {
    itemType: "",
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    condition: "all",
    delivery: "all",
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
          id: "itemType",
          type: "Dropdown",
          label: "Malın tipi",
          placeholder: "Malın tipi seçin",
          className: "for_width20",
          dependencies: ["brand", "model"],
          componentProps: {
            options: ITEM_TYPES,
          },
        },
        {
          id: "brand",
          type: "Dropdown",
          label: "Marka",
          placeholder: "Marka seçin",
          className: "for_width20",
          dependencies: ["model"],
          componentProps: {
            options: ELECTRONICS_BRANDS,
          },
        },
        {
          id: "model",
          type: "Dropdown",
          label: "Model",
          placeholder: "Model seçin",
          className: "for_width20",
          dependsOn: "brand",
          componentProps: {
            options: [], // Will be populated dynamically
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
          id: "condition",
          type: "RadioGroup2",
          label: "Vəziyyəti",
          className: "for_width20",
          componentProps: {
            name: "condition",
            options: ELECTRONICS_CONDITIONS,
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
          id: "delivery",
          type: "Dropdown",
          label: "Çatdırılma",
          placeholder: "Çatdırılma seçin",
          className: "for_width20",
          componentProps: {
            options: DELIVERY_OPTIONS,
          },
        },
      ],
    },
  ],

  // Mobile configuration
  mobile: {
    drawerTitle: "Elektronika Filtrləri",
    showResultsButton: true,
    showResetButton: true,
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",
  },

  // Filter behavior configuration
  behavior: {
    autoApply: false,
    preserveOnReset: ["condition"],
    urlSync: true,
    dependencies: {
      model: {
        dependsOn: "brand",
        resetWhen: ["brand", "itemType"],
        dataSource: "getModelsForBrand",
      },
      brand: {
        dependsOn: "itemType",
        resetWhen: ["itemType"],
        dataSource: "getBrandsForItemType",
      },
    },
  },

  // Validation rules
  validation: {
    priceRange: {
      min: 0,
      max: 50000,
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

export default electronicsConfig;
