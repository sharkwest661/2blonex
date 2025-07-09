// src/components/shared/filters/configs/vehicleConfig.js

/**
 * Simplified vehicle configuration
 * Since FilterManager handles vehicles with hardcoded structure,
 * this config is mainly for the registry and basic metadata
 */
const vehicleConfig = {
  category: "vehicles",

  // Basic metadata
  mobile: {
    drawerTitle: "Nəqliyyat Filtrləri",
  },

  // This config is minimal because FilterManager has the actual
  // vehicle structure hardcoded to match existing VehicleFilters exactly
  sections: [
    {
      id: "basic",
      alwaysVisible: true,
      filters: [], // Empty because handled by hardcoded structure
    },
  ],

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
};

export default vehicleConfig;
