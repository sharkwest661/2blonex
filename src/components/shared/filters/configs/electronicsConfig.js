// src/components/shared/filters/configs/electronicsConfig.js

/**
 * Electronics filter configuration for FilterManager
 * Covers computers, phones, audio-video, and other electronics
 */
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
    location: "",
    delivery: "",
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
          placeholder: "Malın tipini seçin",
          className: "for_width20",
          dependencies: ["brand", "model"], // Reset brand/model when item type changes
          componentProps: {
            options: [
              { value: "computers", label: "Kompüterlər və noutbuklar" },
              { value: "phones", label: "Telefonlar" },
              { value: "tablets", label: "Planşetlər" },
              { value: "audio-video", label: "Audio və video" },
              { value: "gaming", label: "Oyun konsolları" },
              { value: "accessories", label: "Aksesuarlar" },
              { value: "appliances", label: "Məişət texnikası" },
              { value: "other", label: "Digər" },
            ],
          },
        },
        {
          id: "brand",
          type: "Dropdown",
          label: "Marka",
          placeholder: "Marka seçin",
          className: "for_width20",
          dependsOn: "itemType",
          dependencies: ["model"],
          dataSource: "DYNAMIC", // Will be populated based on item type
          componentProps: {
            options: [], // Will be populated dynamically
          },
        },
        {
          id: "model",
          type: "Dropdown",
          label: "Model",
          placeholder: "Model seçin",
          className: "for_width20",
          dependsOn: "brand",
          dataSource: "DYNAMIC",
          componentProps: {
            options: [],
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
          id: "condition",
          type: "RadioGroup2",
          label: "Vəziyyəti",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "all", label: "Hamısı" },
              { value: "new", label: "Yeni" },
              { value: "used", label: "İstifadə olunmuş" },
            ],
            name: "condition",
          },
        },
        {
          id: "delivery",
          type: "Dropdown",
          label: "Çatdırılma",
          placeholder: "Çatdırılma seçin",
          className: "for_width20",
          componentProps: {
            options: [
              { value: "yes", label: "Bəli" },
              { value: "no", label: "Xeyr" },
            ],
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
      brand: {
        dependsOn: "itemType",
        resetWhen: ["itemType"],
        dataSource: "getBrandsForItemType",
      },
      model: {
        dependsOn: "brand",
        resetWhen: ["brand", "itemType"],
        dataSource: "getModelsForBrand",
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
};

// Brand mappings by item type
export const ELECTRONICS_BRANDS = {
  computers: [
    { value: "apple", label: "Apple" },
    { value: "dell", label: "Dell" },
    { value: "hp", label: "HP" },
    { value: "lenovo", label: "Lenovo" },
    { value: "asus", label: "ASUS" },
    { value: "acer", label: "Acer" },
    { value: "msi", label: "MSI" },
    { value: "samsung", label: "Samsung" },
    { value: "other", label: "Digər" },
  ],
  phones: [
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    { value: "huawei", label: "Huawei" },
    { value: "xiaomi", label: "Xiaomi" },
    { value: "oppo", label: "OPPO" },
    { value: "oneplus", label: "OnePlus" },
    { value: "sony", label: "Sony" },
    { value: "nokia", label: "Nokia" },
    { value: "other", label: "Digər" },
  ],
  tablets: [
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    { value: "huawei", label: "Huawei" },
    { value: "lenovo", label: "Lenovo" },
    { value: "microsoft", label: "Microsoft" },
    { value: "other", label: "Digər" },
  ],
  "audio-video": [
    { value: "sony", label: "Sony" },
    { value: "samsung", label: "Samsung" },
    { value: "lg", label: "LG" },
    { value: "bose", label: "Bose" },
    { value: "jbl", label: "JBL" },
    { value: "panasonic", label: "Panasonic" },
    { value: "philips", label: "Philips" },
    { value: "other", label: "Digər" },
  ],
  gaming: [
    { value: "sony", label: "Sony PlayStation" },
    { value: "microsoft", label: "Microsoft Xbox" },
    { value: "nintendo", label: "Nintendo" },
    { value: "other", label: "Digər" },
  ],
  appliances: [
    { value: "samsung", label: "Samsung" },
    { value: "lg", label: "LG" },
    { value: "bosch", label: "Bosch" },
    { value: "siemens", label: "Siemens" },
    { value: "whirlpool", label: "Whirlpool" },
    { value: "electrolux", label: "Electrolux" },
    { value: "other", label: "Digər" },
  ],
  accessories: [
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    { value: "logitech", label: "Logitech" },
    { value: "belkin", label: "Belkin" },
    { value: "anker", label: "Anker" },
    { value: "other", label: "Digər" },
  ],
};

// Helper function to get brands for item type
export const getBrandsForItemType = (itemType) => {
  return ELECTRONICS_BRANDS[itemType] || [];
};

// Helper function to get models for brand (simplified - would be dynamic in real app)
export const getModelsForBrand = (brand, itemType) => {
  // This would typically fetch from an API based on brand and item type
  // For now, return empty array - implement based on your data structure
  return [];
};

export default electronicsConfig;
