// src/components/shared/filters/configs/vehicleConfig.js

import {
  CAR_BRANDS,
  CAR_MODELS,
  FUEL_TYPES,
  BODY_TYPES,
  TRANSMISSIONS,
  DRIVETRAIN_TYPES,
  COLORS,
  SEAT_COUNTS,
  CONDITION_OPTIONS,
  PAYMENT_OPTIONS,
  VEHICLE_EQUIPMENT,
  EQUIPMENT_CATEGORIES,
} from "@/components/features/vehicles/constants";

/**
 * Complete vehicle filter configuration for FilterManager
 */
const vehicleConfig = {
  category: "vehicles",

  // Mobile drawer configuration
  mobile: {
    drawerTitle: "Nəqliyyat Filtrləri",
    showMoreFiltersToggle: true,
    moreFiltersLabel: "Daha çox filtr",
  },

  // Default filter values
  defaultFilters: {
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    color: "",
    fuel: "",
    bodyType: "",
    volumeMin: "",
    volumeMax: "",
    yearMin: "",
    yearMax: "",
    transmission: "",
    city: "",
    condition: "all",
    mileageMin: "",
    mileageMax: "",
    gearbox: "",
    seatCount: "",
    powerMin: "",
    powerMax: "",
    paymentOptions: [],
    equipment: [],
    showMoreFilters: false,
  },

  // Filter sections for desktop and mobile
  sections: [
    {
      id: "basic",
      title: null, // No title for basic section
      alwaysVisible: true,
      filters: [
        {
          id: "brand",
          type: "Dropdown",
          placeholder: "Marka",
          options: CAR_BRANDS,
          className: "for_width20",
          order: 1,
        },
        {
          id: "model",
          type: "Dropdown",
          placeholder: "Model",
          options: [], // Will be populated dynamically based on brand
          className: "for_width20",
          order: 2,
          dependsOn: "brand", // Reset when brand changes
        },
        {
          id: "price",
          type: "PriceRangeFilter",
          className: "for_width_big",
          order: 3,
          currency: "AZN",
        },
        {
          id: "color",
          type: "Dropdown",
          placeholder: "Rəng",
          options: COLORS,
          className: "for_width_small",
          order: 4,
        },
        {
          id: "fuel",
          type: "Dropdown",
          placeholder: "Yanacaq növü",
          options: FUEL_TYPES,
          className: "for_width20",
          order: 5,
        },
        {
          id: "bodyType",
          type: "Dropdown",
          placeholder: "Ban növü",
          options: BODY_TYPES,
          className: "for_width20",
          order: 6,
        },
        {
          id: "engineVolume",
          type: "EngineVolumeRangeFilter",
          className: "for_width_big",
          order: 7,
        },
        {
          id: "year",
          type: "YearRangeFilter",
          className: "for_width_small",
          order: 8,
        },
      ],
    },
    {
      id: "condition",
      title: "Vəziyyəti",
      alwaysVisible: true,
      filters: [
        {
          id: "condition",
          type: "RadioGroup2",
          options: CONDITION_OPTIONS,
          layout: "horizontal",
          defaultValue: "all",
        },
      ],
    },
    {
      id: "advanced",
      title: "Əlavə filtrlar",
      visible: "showMoreFilters", // Show when showMoreFilters is true
      filters: [
        {
          id: "transmission",
          type: "Dropdown",
          placeholder: "Sürətlər qutusu",
          options: TRANSMISSIONS,
          className: "for_width20",
        },
        {
          id: "city",
          type: "LocationFilter",
          placeholder: "Şəhər",
          className: "for_width20",
        },
        {
          id: "mileage",
          type: "MileageRangeFilter",
          className: "for_width_big",
        },
        {
          id: "gearbox",
          type: "Dropdown",
          placeholder: "Ötürücü",
          options: DRIVETRAIN_TYPES,
          className: "for_width20",
        },
        {
          id: "seatCount",
          type: "Dropdown",
          placeholder: "Oturacaq sayı",
          options: SEAT_COUNTS,
          className: "for_width20",
        },
        {
          id: "power",
          type: "PowerRangeFilter",
          className: "for_width_big",
        },
      ],
    },
    {
      id: "payment",
      title: "Ödəniş növü",
      visible: "showMoreFilters",
      filters: [
        {
          id: "paymentOptions",
          type: "CheckboxGroup",
          options: PAYMENT_OPTIONS,
          layout: "horizontal",
          variant: "default",
        },
      ],
    },
    {
      id: "equipment",
      title: "Avadanlıq",
      visible: "showMoreFilters",
      filters: EQUIPMENT_CATEGORIES.map((category) => ({
        id: `equipment-${category.value}`,
        type: "EquipmentCategory",
        category: category.value,
        label: category.label,
        options: VEHICLE_EQUIPMENT.filter(
          (item) => item.category === category.value
        ),
      })),
    },
  ],

  // Special handling for vehicle dependencies
  dependencies: {
    brand: {
      affects: ["model"],
      handler: (selectedBrand) => {
        return {
          model: CAR_MODELS[selectedBrand] || [],
        };
      },
    },
  },

  // Custom component renderers
  customComponents: {
    EquipmentCategory: ({ category, label, options, filters, onChange }) => {
      const categoryEquipment = options;
      if (categoryEquipment.length === 0) return null;

      return (
        <div className="equipment-category">
          <h4 className="equipment-category-title">{label}</h4>
          <CheckboxGroup
            options={categoryEquipment}
            values={filters.equipment || []}
            onChange={(values) => onChange("equipment", values)}
            name={`equipment-${category}`}
            layout="horizontal"
            variant="default"
          />
        </div>
      );
    },
  },
};

export default vehicleConfig;
