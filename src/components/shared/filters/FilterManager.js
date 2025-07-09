// src/components/shared/filters/FilterManager.js

import React, { useState } from "react";
import { useFilterConfig } from "./hooks/useFilterConfig";
import { useFilterManager } from "./hooks/useFilterManager";
import { renderFilterComponent } from "./components/FilterComponentRegistry";
import UniversalFilterDrawer from "./UniversalFilterDrawer";
import FilterSection from "./FilterSection";
import "./styles/FilterManager.css";

/**
 * Universal filter manager component
 * Renders filters for any category based on configuration
 */
const FilterManager = ({
  category,
  onFiltersChange,
  initialFilters = {},
  className = "",
  showMobileDrawer = true,
  showDesktopFilters = true,
  autoApply = false,
  urlSync = true,
  ...props
}) => {
  // Load configuration for the category
  const config = useFilterConfig(category);

  // State for mobile drawer
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Universal filter state management
  const {
    filters,
    sectionVisibility,
    updateFilter,
    updateRangeFilter,
    updateArrayFilter,
    resetFilters,
    toggleMoreFilters,
    applyFilters,
    activeFilterCount,
    visibleSections,
    hasActiveFilters,
    showMoreFilters,
  } = useFilterManager(config, {
    onFiltersChange,
    initialFilters,
    autoApply,
    urlSync,
  });

  // Don't render if no configuration
  if (!config) {
    console.warn(
      `FilterManager: No configuration found for category "${category}"`
    );
    return null;
  }

  // Handle filter updates with proper type handling
  const handleFilterChange = (filterId, value, filterConfig) => {
    if (filterConfig.type === "PriceRangeFilter") {
      // Handle price range filter
      updateRangeFilter("price", value.min, value.max);
    } else if (filterConfig.type === "RangeInput") {
      // Handle range input (e.g., year, engine, mileage)
      const baseId = filterId.replace(/(Min|Max)$/, "");
      const isMin = filterId.endsWith("Min");
      const isMax = filterId.endsWith("Max");

      if (isMin || isMax) {
        const minValue = isMin ? value : filters[`${baseId}Min`];
        const maxValue = isMax ? value : filters[`${baseId}Max`];
        updateRangeFilter(baseId, minValue, maxValue);
      } else {
        updateFilter(filterId, value);
      }
    } else if (filterConfig.type === "CheckboxGroup") {
      // Handle checkbox group
      updateArrayFilter(filterId, value);
    } else {
      // Handle standard filters
      updateFilter(filterId, value);
    }
  };

  // Render individual filter component
  const renderFilter = (filterConfig, sectionId) => {
    const {
      id,
      type,
      className: filterClassName = "",
      ...filterProps
    } = filterConfig;

    // Get current filter value
    let currentValue = filters[id];

    // Handle special cases for different filter types
    if (type === "PriceRangeFilter") {
      currentValue = {
        min: filters.priceMin || "",
        max: filters.priceMax || "",
      };
    } else if (type === "RangeInput") {
      currentValue = {
        min: filters[`${id}Min`] || "",
        max: filters[`${id}Max`] || "",
      };
    }

    // Prepare component props
    const componentProps = {
      ...filterProps.componentProps,
      value: currentValue,
      onChange: (value) => handleFilterChange(id, value, filterConfig),
      className: filterClassName,
    };

    // Handle special props for specific component types
    if (type === "RangeInput") {
      componentProps.min = currentValue.min;
      componentProps.max = currentValue.max;
      componentProps.onMinChange = (value) =>
        handleFilterChange(`${id}Min`, value, filterConfig);
      componentProps.onMaxChange = (value) =>
        handleFilterChange(`${id}Max`, value, filterConfig);
    }

    return (
      <div key={id} className={`filter-item ${filterClassName}`}>
        {renderFilterComponent(filterConfig, componentProps)}
      </div>
    );
  };

  // Render filter section
  const renderSection = (section, isDesktop = true) => {
    const {
      id,
      title,
      className: sectionClassName = "",
      layout = "grid",
      filters: sectionFilters,
    } = section;

    // Check if section should be visible
    if (!sectionVisibility[id]) {
      return null;
    }

    return (
      <FilterSection
        key={id}
        id={id}
        title={title}
        className={`filter-section ${sectionClassName} layout-${layout}`}
        isCollapsible={!section.alwaysVisible}
        isExpanded={sectionVisibility[id]}
        onToggle={() => toggleSectionVisibility && toggleSectionVisibility(id)}
      >
        <div
          className={`filter-grid ${layout === "flex" ? "filter-flex" : ""}`}
        >
          {sectionFilters.map((filterConfig) => renderFilter(filterConfig, id))}
        </div>
      </FilterSection>
    );
  };

  // Render desktop filters
  const renderDesktopFilters = () => {
    if (!showDesktopFilters) return null;

    return (
      <div className={`filter-manager-desktop ${className}`} {...props}>
        <div className="desctop_filters">
          {visibleSections.map((section) => renderSection(section, true))}
        </div>

        {/* More filters toggle and action buttons */}
        <div className="filter-actions">
          {config.sections.some((s) => s.visible === "showMoreFilters") && (
            <button
              type="button"
              className="btn btn-link more-filters-toggle"
              onClick={toggleMoreFilters}
            >
              {showMoreFilters ? "Daha az filtr" : "Daha çox filtr"}
              <i
                className={`icon-chevron-${showMoreFilters ? "up" : "down"}`}
              ></i>
            </button>
          )}

          {hasActiveFilters && (
            <button
              type="button"
              className="btn btn-outline reset-filters"
              onClick={resetFilters}
            >
              Sıfırla
            </button>
          )}

          {!autoApply && (
            <button
              type="button"
              className="btn btn-primary apply-filters"
              onClick={applyFilters}
            >
              Nəticələri göstər
              {activeFilterCount > 0 && (
                <span className="filter-count">({activeFilterCount})</span>
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  // Render mobile filter trigger
  const renderMobileFilterTrigger = () => {
    if (!showMobileDrawer) return null;

    return (
      <div className="filter-manager-mobile d-lg-none">
        <button
          type="button"
          className="btn btn-outline-primary mobile-filter-trigger"
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          <i className="icon-filter"></i>
          Filtr
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Filters */}
      <div className="d-none d-lg-block">{renderDesktopFilters()}</div>

      {/* Mobile Filter Trigger */}
      {renderMobileFilterTrigger()}

      {/* Mobile Filter Drawer */}
      {showMobileDrawer && (
        <UniversalFilterDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          config={config}
          filters={filters}
          sectionVisibility={sectionVisibility}
          visibleSections={visibleSections}
          activeFilterCount={activeFilterCount}
          hasActiveFilters={hasActiveFilters}
          showMoreFilters={showMoreFilters}
          onFilterChange={handleFilterChange}
          onRangeFilterChange={updateRangeFilter}
          onArrayFilterChange={updateArrayFilter}
          onToggleMoreFilters={toggleMoreFilters}
          onResetFilters={resetFilters}
          onApplyFilters={() => {
            applyFilters();
            setIsMobileDrawerOpen(false);
          }}
          renderFilter={renderFilter}
          renderSection={renderSection}
        />
      )}
    </>
  );
};

export default FilterManager;
