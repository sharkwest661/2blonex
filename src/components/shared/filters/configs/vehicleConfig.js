// src/components/shared/filters/configs/vehicleConfig.js

import {
  CAR_BRANDS,
  BODY_TYPES,
  FUEL_TYPES,
  GEAR_TYPES,
  VEHICLE_CONDITIONS,
} from "../../../../data/vehicleConstants";

/**
 * Vehicle filter configuration for FilterManager
 * Based on existing VehicleFilters component structure
 */
const vehicleConfig = {
  category: "vehicles",

  // Default filter state
  defaultFilters: {
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    yearFrom: "",
    yearTo: "",
    condition: "all",
    fuelType: "",
    gearType: "",
    bodyType: "",
    engineMin: "",
    engineMax: "",
    mileageFrom: "",
    mileageTo: "",
    location: "",
    showMoreFilters: false,

    // Equipment filters (for more filters section)
    equipment: {
      comfort: [],
      safety: [],
      multimedia: [],
      other: [],
    },
  },

  // Filter sections configuration
  sections: [
    {
      id: "basic",
      title: null, // No title for basic section
      alwaysVisible: true,
      className: "desctop_filters",
      layout: "grid", // or 'flex'
      filters: [
        {
          id: "brand",
          type: "Dropdown",
          label: "Marka",
          placeholder: "Marka seçin",
          className: "for_width20",
          dataSource: CAR_BRANDS,
          dependencies: ["model"], // Reset model when brand changes
          componentProps: {
            options: CAR_BRANDS,
          },
        },
        {
          id: "model",
          type: "Dropdown",
          label: "Model",
          placeholder: "Model seçin",
          className: "for_width20",
          dependsOn: "brand", // Enabled only when brand is selected
          dataSource: "DYNAMIC", // Will be populated based on brand
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
            options: VEHICLE_CONDITIONS,
            name: "condition",
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
      visible: "showMoreFilters", // Show when showMoreFilters is true
      className: "additional_filters",
      filters: [
        {
          id: "yearRange",
          type: "RangeInput",
          label: "Buraxılış ili",
          className: "for_width20",
          componentProps: {
            placeholder: {
              min: "Min il",
              max: "Max il",
            },
            min: 1990,
            max: new Date().getFullYear(),
          },
        },
        {
          id: "bodyType",
          type: "Dropdown",
          label: "Ban növü",
          placeholder: "Ban növü seçin",
          className: "for_width20",
          componentProps: {
            options: BODY_TYPES,
          },
        },
        {
          id: "fuelType",
          type: "Dropdown",
          label: "Yanacaq növü",
          placeholder: "Yanacaq növü seçin",
          className: "for_width20",
          componentProps: {
            options: FUEL_TYPES,
          },
        },
        {
          id: "gearType",
          type: "Dropdown",
          label: "Sürət qutusu",
          placeholder: "Sürət qutusu seçin",
          className: "for_width20",
          componentProps: {
            options: GEAR_TYPES,
          },
        },
        {
          id: "engineRange",
          type: "RangeInput",
          label: "Mühərrik həcmi",
          className: "for_width20",
          componentProps: {
            placeholder: {
              min: "Min həcm",
              max: "Max həcm",
            },
            suffix: "L",
            step: 0.1,
          },
        },
        {
          id: "mileageRange",
          type: "RangeInput",
          label: "Yürüş",
          className: "for_width20",
          componentProps: {
            placeholder: {
              min: "Min yürüş",
              max: "Max yürüş",
            },
            suffix: "km",
          },
        },
      ],
    },
    {
      id: "equipment",
      title: "Avadanlıq",
      visible: "showMoreFilters",
      className: "equipment_filters",
      layout: "categories",
      filters: [
        {
          id: "comfortEquipment",
          type: "CheckboxGroup",
          label: "Komfort",
          className: "equipment-category",
          componentProps: {
            options: [
              { value: "climate", label: "Kondisioner" },
              { value: "cruise", label: "Kruiz kontrol" },
              { value: "leather", label: "Dəri salon" },
              { value: "heated_seats", label: "Oturacaqların isidilməsi" },
              { value: "sunroof", label: "Lyuk" },
            ],
          },
        },
        {
          id: "safetyEquipment",
          type: "CheckboxGroup",
          label: "Təhlükəsizlik",
          className: "equipment-category",
          componentProps: {
            options: [
              { value: "abs", label: "ABS" },
              { value: "airbags", label: "Təhlükəsizlik yastıqları" },
              { value: "esp", label: "ESP" },
              { value: "parking_sensors", label: "Park sensorları" },
              { value: "camera", label: "Arxa görüntü kamerası" },
            ],
          },
        },
        {
          id: "multimediaEquipment",
          type: "CheckboxGroup",
          label: "Multimedia",
          className: "equipment-category",
          componentProps: {
            options: [
              { value: "bluetooth", label: "Bluetooth" },
              { value: "usb", label: "USB" },
              { value: "navigation", label: "Naviqasiya sistemi" },
              { value: "audio_system", label: "Audio sistem" },
              { value: "dvd", label: "DVD player" },
            ],
          },
        },
      ],
    },
  ],

  // Mobile configuration
  mobile: {
    drawerTitle: "Filtrlər",
    showResultsButton: true,
    showResetButton: true,
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",
  },

  // Filter behavior configuration
  behavior: {
    autoApply: false, // Apply filters automatically or wait for button click
    preserveOnReset: ["condition"], // Filters to preserve when resetting
    urlSync: true, // Sync with URL parameters
    dependencies: {
      // Define filter dependencies
      model: {
        dependsOn: "brand",
        resetWhen: ["brand"],
        dataSource: "getModelsForBrand", // Function name to get models
      },
    },
  },

  // Validation rules
  validation: {
    priceRange: {
      min: 0,
      max: 1000000,
      required: false,
    },
    yearRange: {
      min: 1990,
      max: new Date().getFullYear(),
      required: false,
    },
  },
};

export default vehicleConfig;
