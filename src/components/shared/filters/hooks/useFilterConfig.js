// src/components/shared/filters/hooks/useFilterConfig.js

import { useMemo } from "react";
import { vehicleConfig } from "../config/vehicleConfig";
import { electronicsConfig } from "../config/electronicsConfig";
import { realEstateConfig } from "../config/realEstateConfig";
import { jobsConfig } from "../config/jobsConfig";
import { servicesConfig } from "../config/servicesConfig";

/**
 * Configuration registry mapping category names to their config objects
 */
const CONFIG_REGISTRY = {
  vehicles: vehicleConfig,
  electronics: electronicsConfig,
  "real-estate": realEstateConfig,
  jobs: jobsConfig,
  // Aliases for flexibility
  transport: vehicleConfig,
  property: realEstateConfig,
  employment: jobsConfig,
};

/**
 * Hook to load and validate filter configuration for a specific category
 * @param {string} category - Category identifier
 * @returns {Object} Filter configuration object
 */

export const useFilterConfig = (category) => {
  return useMemo(() => {
    const configs = {
      vehicles: vehicleConfig,
      electronics: electronicsConfig,
      realestate: realEstateConfig,
      jobs: jobsConfig,
      services: servicesConfig,
    };

    return configs[category] || null;
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

  // Required fields
  const requiredFields = ["category", "defaultFilters", "sections"];
  for (const field of requiredFields) {
    if (!(field in config)) {
      console.error(
        `Config validation failed: Missing required field "${field}"`
      );
      return false;
    }
  }

  // Validate sections structure
  if (!Array.isArray(config.sections)) {
    console.error("Config validation failed: sections must be an array");
    return false;
  }

  // Validate each section
  for (const section of config.sections) {
    if (!section.id || !Array.isArray(section.filters)) {
      console.error(
        "Config validation failed: Each section must have id and filters array"
      );
      return false;
    }

    // Validate each filter in section
    for (const filter of section.filters) {
      if (!filter.id || !filter.type) {
        console.error(
          "Config validation failed: Each filter must have id and type"
        );
        return false;
      }
    }
  }

  return true;
};

/**
 * Get all available category names
 * @returns {string[]} Array of category identifiers
 */
export const getAvailableCategories = () => {
  return Object.keys(CONFIG_REGISTRY);
};

/**
 * Register a new category configuration
 * @param {string} category - Category identifier
 * @param {Object} config - Configuration object
 */
export const registerCategoryConfig = (category, config) => {
  if (validateConfig(config)) {
    CONFIG_REGISTRY[category.toLowerCase()] = config;
  } else {
    console.error(
      `Failed to register config for category "${category}": Invalid configuration`
    );
  }
};

/**
 * Get configuration for multiple categories
 * @param {string[]} categories - Array of category identifiers
 * @returns {Object} Object mapping categories to their configs
 */
export const useMultipleConfigs = (categories) => {
  return useMemo(() => {
    const configs = {};
    categories.forEach((category) => {
      const config = CONFIG_REGISTRY[category.toLowerCase()];
      if (config) {
        configs[category] = config;
      }
    });
    return configs;
  }, [categories]);
};

export default useFilterConfig;
