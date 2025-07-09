// src/components/shared/filters/UniversalFilterDrawer.js

import React, { useEffect } from "react";
import { renderFilterComponent } from "./components/FilterComponentRegistry";
import "./styles/FilterManager.css";

/**
 * Universal mobile filter drawer component
 * Works with any category configuration
 */
const UniversalFilterDrawer = ({
  isOpen,
  onClose,
  config,
  filters,
  onFilterChange,
  onReset,
  onApply,
  activeFilterCount = 0,
  sectionVisibility = {},
  onToggleSection,
}) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle filter change with proper type handling
  const handleFilterChange = (filterId, value, filterConfig) => {
    if (filterConfig.type === "PriceRangeFilter") {
      onFilterChange(filterId, value, filterConfig);
    } else if (filterConfig.type === "RangeInput") {
      const baseId = filterId.replace(/(Min|Max)$/, "");
      const isMin = filterId.endsWith("Min");
      const isMax = filterId.endsWith("Max");

      if (isMin || isMax) {
        const minValue = isMin ? value : filters[`${baseId}Min`];
        const maxValue = isMax ? value : filters[`${baseId}Max`];
        onFilterChange(baseId, { min: minValue, max: maxValue }, filterConfig);
      } else {
        onFilterChange(filterId, value, filterConfig);
      }
    } else {
      onFilterChange(filterId, value, filterConfig);
    }
  };

  // Render individual filter
  const renderFilter = (filterConfig) => {
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
      className: `mobile-filter-item ${filterClassName}`,
    };

    // Handle special props for RangeInput
    if (type === "RangeInput") {
      componentProps.min = currentValue.min;
      componentProps.max = currentValue.max;
      componentProps.onMinChange = (value) =>
        handleFilterChange(`${id}Min`, value, filterConfig);
      componentProps.onMaxChange = (value) =>
        handleFilterChange(`${id}Max`, value, filterConfig);
    }

    return (
      <div key={id} className="mobile-filter-wrapper">
        <label className="mobile-filter-label">{filterConfig.label}</label>
        {renderFilterComponent(filterConfig, componentProps)}
      </div>
    );
  };

  // Render collapsible section
  const renderSection = (section) => {
    const { id, title, filters: sectionFilters, visible } = section;

    // Check if section should be visible
    if (visible === "showMoreFilters" && !filters.showMoreFilters) {
      return null;
    }

    const isExpanded = sectionVisibility[id] !== false;

    return (
      <div key={id} className="mobile-filter-section">
        {title && (
          <div
            className="mobile-section-header"
            onClick={() => onToggleSection && onToggleSection(id)}
          >
            <h3 className="mobile-section-title">{title}</h3>
            <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
          </div>
        )}
        {isExpanded && (
          <div className="mobile-section-content">
            {sectionFilters.map((filter) => renderFilter(filter))}
          </div>
        )}
      </div>
    );
  };

  if (!config) return null;

  return (
    <div
      className={`filter-drawer-backdrop ${isOpen ? "filter-drawer-open" : ""}`}
    >
      <div
        className="filter-drawer-backdrop-inner"
        onClick={handleBackdropClick}
      >
        <div className="filter-drawer">
          {/* Header */}
          <div className="filter-drawer-header">
            <button className="filter-drawer-close" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
            <h2 className="filter-drawer-title">
              {config.mobile?.drawerTitle || "Filtrlər"}
            </h2>
            <button className="filter-drawer-reset" onClick={onReset}>
              Təmizlə
            </button>
          </div>

          {/* Content */}
          <div className="filter-drawer-content">
            {config.sections?.map((section) => renderSection(section))}

            {/* More Filters Toggle */}
            {config.mobile?.showMoreFiltersToggle && (
              <div className="mobile-more-filters">
                <button
                  className="mobile-more-filters-toggle"
                  onClick={() =>
                    handleFilterChange(
                      "showMoreFilters",
                      !filters.showMoreFilters,
                      {
                        type: "toggle",
                      }
                    )
                  }
                >
                  <span>
                    {config.mobile?.moreFiltersLabel || "Daha çox filtr"}
                  </span>
                  <i
                    className={`fas fa-chevron-${
                      filters.showMoreFilters ? "up" : "down"
                    }`}
                  ></i>
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="filter-drawer-footer">
            <button className="filter-drawer-apply" onClick={onApply}>
              Nəticələri göstər
              {activeFilterCount > 0 && (
                <span className="filter-count">({activeFilterCount})</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalFilterDrawer;
