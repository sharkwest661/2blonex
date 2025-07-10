// src/components/shared/filters/hooks/useFilterManager.js
import { useState, useEffect, useCallback, useMemo, useRef } from "react";

export const useFilterManager = (config, options = {}) => {
  const { onFiltersChange, initialFilters = {} } = options;

  // Use ref to track if this is the initial mount
  const isInitialMount = useRef(true);
  const onFiltersChangeRef = useRef(onFiltersChange);

  // Update ref when callback changes
  useEffect(() => {
    onFiltersChangeRef.current = onFiltersChange;
  }, [onFiltersChange]);

  // Memoize initial filters calculation
  const getInitialFilters = useMemo(() => {
    const defaultFilters = {};

    if (config?.sections) {
      config.sections.forEach((section) => {
        section.filters.forEach((filter) => {
          defaultFilters[filter.id] =
            filter.defaultValue || (filter.type === "CheckboxGroup" ? [] : "");
        });
      });
    }

    return { ...defaultFilters, ...initialFilters };
  }, [config, initialFilters]);

  const [filters, setFilters] = useState(getInitialFilters);

  // Update filters when config changes, but only if config actually changes
  useEffect(() => {
    if (!isInitialMount.current) {
      setFilters(getInitialFilters);
    }
    isInitialMount.current = false;
  }, [getInitialFilters]);

  // Update individual filter with dependency handling
  const updateFilter = useCallback(
    (field, value) => {
      setFilters((prev) => {
        const newFilters = { ...prev, [field]: value };

        // Handle dependencies (e.g., brand -> model reset)
        if (config?.dependencies?.[field]) {
          config.dependencies[field].forEach((dependentField) => {
            if (dependentField === "model" && field === "brand") {
              newFilters.model = "";
            }
            if (dependentField === "brand" && field === "category") {
              newFilters.brand = "";
              newFilters.model = ""; // Also reset model when category changes
            }
          });
        }

        return newFilters;
      });
    },
    [config]
  );

  // Reset all filters
  const resetFilters = useCallback(() => {
    const resetFilters = getInitialFilters;
    setFilters(resetFilters);

    // Call onFiltersChange immediately for reset
    if (onFiltersChangeRef.current) {
      onFiltersChangeRef.current(resetFilters);
    }
  }, [getInitialFilters]);

  // Apply filters (trigger callback manually)
  const applyFilters = useCallback(() => {
    if (onFiltersChangeRef.current) {
      onFiltersChangeRef.current(filters);
    }
  }, [filters]);

  // Calculate active filter count
  const activeFilterCount = useMemo(() => {
    return Object.entries(filters).filter(([key, value]) => {
      // Skip meta fields
      if (key === "showMoreFilters") return false;

      // Check for active values
      if (Array.isArray(value)) return value.length > 0;
      return value && value !== "" && value !== "all";
    }).length;
  }, [filters]);

  // Debounced effect to call onFiltersChange (prevents excessive calls)
  useEffect(() => {
    // Skip calling onFiltersChange on initial mount
    if (isInitialMount.current) {
      return;
    }

    // Debounce the callback to prevent excessive calls
    const timeoutId = setTimeout(() => {
      if (onFiltersChangeRef.current) {
        onFiltersChangeRef.current(filters);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    applyFilters,
    activeFilterCount,
  };
};
