// src/components/shared/filters/configs/electronicsConfig.js

import {
  ELECTRONICS_CATEGORIES,
  ELECTRONICS_BRANDS,
  ELECTRONICS_CONDITIONS,
  STORAGE_OPTIONS,
  RAM_OPTIONS,
  OPERATING_SYSTEMS,
  SCREEN_SIZES,
  CONNECTIVITY_OPTIONS,
} from "@/components/features/electronics/constants";

/**
 * Electronics filter configuration matching original design exactly
 */
const electronicsConfig = {
  category: "electronics",

  mobile: {
    drawerTitle: "Elektronika Filtrləri",
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",
  },

  defaultFilters: {
    category: "all",
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    condition: "all",
    city: "",
    storage: [],
    ram: [],
    os: "",
    screenSize: [],
    connectivity: [],
    showMoreFilters: false,
  },

  // Use original structure like vehicles
  useOriginalStructure: true,
};

export default electronicsConfig;
