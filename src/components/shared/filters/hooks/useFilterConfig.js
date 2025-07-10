// src/components/shared/filters/hooks/useFilterConfig.js

import { useMemo } from "react";
import vehicleConfig from "../configs/vehicleConfig";
// Import other configs as they are created
// import electronicsConfig from "../configs/electronicsConfig";
// import realEstateConfig from "../configs/realEstateConfig";
// import jobsConfig from "../configs/jobsConfig";
// import servicesConfig from "../configs/servicesConfig";

/**
 * Hook to load and validate filter configuration for a specific category
 * @param {string} category - Category identifier
 * @returns {Object} Filter configuration object
 */
export const useFilterConfig = (category) => {
  return useMemo(() => {
    const configs = {
      vehicles: vehicleConfig,
      // Add other configs as they are implemented
      // electronics: electronicsConfig,
      // realestate: realEstateConfig,
      // jobs: jobsConfig,
      // services: servicesConfig,
    };

    const config = configs[category];

    if (!config) {
      console.warn(`No filter configuration found for category: ${category}`);
      return null;
    }

    // For vehicles, we use the original structure, so minimal validation
    if (category === "vehicles" && config.useOriginalStructure) {
      return config;
    }

    // Validate configuration structure for other categories
    if (!validateConfig(config)) {
      console.error(`Invalid configuration for category: ${category}`);
      return null;
    }

    return config;
  }, [category]);
};

/**
 * Validates that a configuration object has the required structure
 * @param {Object} config - Configuration object to validate
 * @returns {boolean} True if valid, false otherwise
 */
const validateConfig = (config) => {
  if (!config || typeof config !== "object") {
    return false;
  }

  // Required fields for universal filter system
  const requiredFields = ["category", "defaultFilters"];
  for (const field of requiredFields) {
    if (!config[field]) {
      console.error(`Missing required field "${field}" in filter config`);
      return false;
    }
  }

  return true;
};

export default useFilterConfig;
