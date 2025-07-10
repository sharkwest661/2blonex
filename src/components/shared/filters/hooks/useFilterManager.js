// src/components/shared/filters/hooks/useFilterManager.js

import { useState, useCallback, useEffect } from "react";

/**
 * Universal filter state management hook
 * @param {Object} config - Filter configuration object
 * @param {Object} options - Hook options
 * @returns {Object} Filter state and methods
 */
export const useFilterManager = (config, options = {}) => {
  const { onFiltersChange, initialFilters = {} } = options;

  // Initialize filters based on config
  const getInitialFilters = useCallback(() => {
    if (!config) return {};

    // For vehicles with original structure, use default filters directly
    if (config.useOriginalStructure) {
      return { ...config.defaultFilters, ...initialFilters };
    }

    // For universal system, merge default filters with initial
    return { ...config.defaultFilters, ...initialFilters };
  }, [config, initialFilters]);

  const [filters, setFilters] = useState(getInitialFilters);

  // Update filter value
  const updateFilter = useCallback(
    (key, value) => {
      setFilters((prev) => {
        const newFilters = { ...prev, [key]: value };

        // Handle dependencies (e.g., model resets when brand changes)
        if (key === "brand" && config?.category === "vehicles") {
          newFilters.model = "";
        }

        // Call onChange callback if provided
        if (onFiltersChange) {
          onFiltersChange(newFilters);
        }

        return newFilters;
      });
    },
    [onFiltersChange, config]
  );

  // Reset all filters
  const resetFilters = useCallback(() => {
    const resetState = config?.defaultFilters || {};
    setFilters(resetState);

    if (onFiltersChange) {
      onFiltersChange(resetState);
    }
  }, [config, onFiltersChange]);

  // Apply filters (for mobile drawer)
  const applyFilters = useCallback(() => {
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  }, [filters, onFiltersChange]);

  // Get active filter count
  const activeFilterCount = Object.values(filters).filter((value) => {
    if (Array.isArray(value)) return value.length > 0;
    return value !== "" && value !== false && value !== "all";
  }).length;

  // Update filters when config changes
  useEffect(() => {
    if (config) {
      setFilters(getInitialFilters());
    }
  }, [config, getInitialFilters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    applyFilters,
    activeFilterCount,
  };
};

export default useFilterManager;
