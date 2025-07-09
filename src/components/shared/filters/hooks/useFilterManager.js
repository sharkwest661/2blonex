// src/components/shared/filters/hooks/useFilterManager.js

import { useState, useCallback, useMemo, useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Universal filter state management hook
 * Handles any category's filters based on configuration
 */
export const useFilterManager = (config, options = {}) => {
  const {
    onFiltersChange,
    initialFilters = {},
    urlSync = true,
    autoApply = false,
  } = options;

  const router = useRouter();

  // Initialize filter state with config defaults merged with initial values
  const [filters, setFilters] = useState(() => {
    if (!config) return {};

    return {
      ...config.defaultFilters,
      ...initialFilters,
    };
  });

  // Track which sections are expanded/visible
  const [sectionVisibility, setSectionVisibility] = useState(() => {
    const visibility = {};
    if (config?.sections) {
      config.sections.forEach((section) => {
        if (section.visible && typeof section.visible === "string") {
          // Section visibility depends on a filter value
          visibility[section.id] = filters[section.visible] || false;
        } else {
          // Section is always visible or has static visibility
          visibility[section.id] = section.alwaysVisible !== false;
        }
      });
    }
    return visibility;
  });

  // Update filter value and handle dependencies
  const updateFilter = useCallback(
    (filterId, value) => {
      setFilters((prevFilters) => {
        const newFilters = { ...prevFilters, [filterId]: value };

        // Handle filter dependencies
        if (config?.behavior?.dependencies) {
          const dependency = config.behavior.dependencies[filterId];
          if (dependency?.resetWhen) {
            // Reset dependent filters
            dependency.resetWhen.forEach((depId) => {
              if (newFilters[depId] !== newFilters[filterId]) {
                // Find filters that depend on this one and reset them
                Object.keys(config.behavior.dependencies).forEach((key) => {
                  const dep = config.behavior.dependencies[key];
                  if (dep.dependsOn === depId) {
                    newFilters[key] = config.defaultFilters[key] || "";
                  }
                });
              }
            });
          }
        }

        // Handle section visibility changes
        if (filterId === "showMoreFilters") {
          setSectionVisibility((prev) => {
            const newVisibility = { ...prev };
            config.sections?.forEach((section) => {
              if (section.visible === "showMoreFilters") {
                newVisibility[section.id] = value;
              }
            });
            return newVisibility;
          });
        }

        return newFilters;
      });
    },
    [config]
  );

  // Update range filters (for components that have min/max values)
  const updateRangeFilter = useCallback((filterId, minValue, maxValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [`${filterId}Min`]: minValue,
      [`${filterId}Max`]: maxValue,
    }));
  }, []);

  // Update array filters (for checkboxes, multi-select)
  const updateArrayFilter = useCallback((filterId, values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterId]: Array.isArray(values) ? values : [],
    }));
  }, []);

  // Reset all filters to default values
  const resetFilters = useCallback(() => {
    if (!config) return;

    const resetValues = { ...config.defaultFilters };

    // Preserve certain filters if configured
    if (config.behavior?.preserveOnReset) {
      config.behavior.preserveOnReset.forEach((filterId) => {
        resetValues[filterId] = filters[filterId];
      });
    }

    setFilters(resetValues);

    // Reset section visibility
    setSectionVisibility(() => {
      const visibility = {};
      config.sections?.forEach((section) => {
        visibility[section.id] = section.alwaysVisible !== false;
      });
      return visibility;
    });
  }, [config, filters]);

  // Get count of active (non-default) filters
  const getActiveFilterCount = useMemo(() => {
    if (!config) return 0;

    let count = 0;
    Object.keys(filters).forEach((key) => {
      const currentValue = filters[key];
      const defaultValue = config.defaultFilters[key];

      // Skip certain meta filters
      if (key === "showMoreFilters") return;

      // Check if filter has a non-default value
      if (Array.isArray(currentValue)) {
        if (currentValue.length > 0) count++;
      } else if (currentValue && currentValue !== defaultValue) {
        count++;
      }
    });

    return count;
  }, [filters, config]);

  // Get visible sections based on current state
  const getVisibleSections = useMemo(() => {
    if (!config?.sections) return [];

    return config.sections.filter((section) => {
      if (section.alwaysVisible) return true;
      return sectionVisibility[section.id];
    });
  }, [config, sectionVisibility]);

  // Toggle section visibility
  const toggleSectionVisibility = useCallback((sectionId) => {
    setSectionVisibility((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  }, []);

  // Toggle "more filters" functionality
  const toggleMoreFilters = useCallback(() => {
    updateFilter("showMoreFilters", !filters.showMoreFilters);
  }, [filters.showMoreFilters, updateFilter]);

  // Get filters formatted for API calls
  const getApiFilters = useMemo(() => {
    if (!config) return {};

    const apiFilters = {};
    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      // Skip meta filters
      if (key === "showMoreFilters") return;

      // Only include non-empty values
      if (Array.isArray(value)) {
        if (value.length > 0) apiFilters[key] = value;
      } else if (value && value !== config.defaultFilters[key]) {
        apiFilters[key] = value;
      }
    });

    return apiFilters;
  }, [filters, config]);

  // Sync with URL parameters if enabled
  useEffect(() => {
    if (!urlSync || !router.isReady || !config) return;

    const params = new URLSearchParams(router.asPath.split("?")[1] || "");
    const urlFilters = {};

    // Parse URL parameters into filter values
    Object.keys(config.defaultFilters).forEach((key) => {
      const paramValue = params.get(key);
      if (paramValue) {
        urlFilters[key] = paramValue;
      }
    });

    if (Object.keys(urlFilters).length > 0) {
      setFilters((prev) => ({ ...prev, ...urlFilters }));
    }
  }, [router.isReady, router.asPath, urlSync, config]);

  // Update URL when filters change (if urlSync enabled)
  useEffect(() => {
    if (!urlSync || !router.isReady || !config || autoApply) return;

    const params = new URLSearchParams();
    const apiFilters = getApiFilters;

    Object.keys(apiFilters).forEach((key) => {
      params.set(key, apiFilters[key]);
    });

    const newUrl = `${router.pathname}${params.toString() ? `?${params.toString()}` : ""}`;

    if (newUrl !== router.asPath) {
      router.replace(newUrl, undefined, { shallow: true });
    }
  }, [filters, urlSync, router, config, autoApply, getApiFilters]);

  // Call onFiltersChange when filters update (if autoApply enabled)
  useEffect(() => {
    if (autoApply && onFiltersChange) {
      onFiltersChange(getApiFilters);
    }
  }, [autoApply, onFiltersChange, getApiFilters]);

  // Apply filters manually (for non-autoApply mode)
  const applyFilters = useCallback(() => {
    if (onFiltersChange) {
      onFiltersChange(getApiFilters);
    }
  }, [onFiltersChange, getApiFilters]);

  return {
    // State
    filters,
    sectionVisibility,

    // Actions
    updateFilter,
    updateRangeFilter,
    updateArrayFilter,
    resetFilters,
    toggleSectionVisibility,
    toggleMoreFilters,
    applyFilters,

    // Computed values
    activeFilterCount: getActiveFilterCount,
    visibleSections: getVisibleSections,
    apiFilters: getApiFilters,

    // Status
    hasActiveFilters: getActiveFilterCount > 0,
    showMoreFilters: filters.showMoreFilters || false,
  };
};

export default useFilterManager;
