// Update electronics config to include city options
// src/components/shared/filters/config/electronicsConfig.js
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
import { AZERBAIJAN_CITIES } from "@/utils/constants";

export const electronicsConfig = {
  sections: [
    {
      className: "basic-filters",
      filters: [
        {
          id: "category",
          type: "Dropdown",
          placeholder: "Malın tipi",
          options: ELECTRONICS_CATEGORIES,
          className: "for_width20",
          defaultValue: "all",
        },
        {
          id: "brand",
          type: "Dropdown",
          placeholder: "Marka",
          options: ELECTRONICS_BRANDS,
          className: "for_width20",
          defaultValue: "",
        },
        {
          id: "priceRange",
          type: "PriceRangeFilter",
          currency: "AZN",
          className: "for_width20",
        },
        {
          id: "condition",
          type: "Dropdown",
          placeholder: "Vəziyyət",
          options: ELECTRONICS_CONDITIONS,
          className: "for_width20",
          defaultValue: "all",
        },
        {
          id: "city", // Changed from location to city
          type: "LocationFilter",
          placeholder: "Şəhər",
          options: AZERBAIJAN_CITIES, // Added city options
          className: "for_width20",
        },
      ],
    },
    {
      className: "advanced-filters",
      visible: "showMoreFilters",
      filters: [
        {
          id: "storage",
          type: "CheckboxGroup",
          options: STORAGE_OPTIONS,
          layout: "horizontal",
          variant: "default",
        },
        {
          id: "ram",
          type: "CheckboxGroup",
          options: RAM_OPTIONS,
          layout: "horizontal",
          variant: "default",
        },
        {
          id: "os",
          type: "RadioGroup",
          options: OPERATING_SYSTEMS,
          layout: "horizontal",
        },
        {
          id: "screenSize",
          type: "CheckboxGroup",
          options: SCREEN_SIZES,
          layout: "horizontal",
          variant: "default",
        },
        {
          id: "connectivity",
          type: "CheckboxGroup",
          options: CONNECTIVITY_OPTIONS,
          layout: "horizontal",
          variant: "default",
        },
      ],
    },
  ],
  dependencies: {
    category: ["brand"], // Reset brand when category changes
  },
};
