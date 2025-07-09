// src/components/shared/filters/UniversalFilterDrawer.js

import React, { useEffect, useRef } from "react";
import FilterSection from "./FilterSection";
import { renderFilterComponent } from "./components/FilterComponentRegistry";

/**
 * Universal mobile filter drawer component
 * Handles mobile filter experience for any category
 */
const UniversalFilterDrawer = ({
  isOpen,
  onClose,
  config,
  filters,
  sectionVisibility,
  visibleSections,
  activeFilterCount,
  hasActiveFilters,
  showMoreFilters,
  onFilterChange,
  onRangeFilterChange,
  onArrayFilterChange,
  onToggleMoreFilters,
  onResetFilters,
  onApplyFilters,
  renderFilter,
  renderSection,
}) => {
  const drawerRef = useRef(null);
  const bodyRef = useRef(null);

  // Handle drawer open/close animations and body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Add animation classes
      if (drawerRef.current) {
        drawerRef.current.classList.add("filter-drawer-open");
      }
    } else {
      // Unlock body scroll
      document.body.style.overflow = "";

      // Remove animation classes
      if (drawerRef.current) {
        drawerRef.current.classList.remove("filter-drawer-open");
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Render individual filter for mobile
  const renderMobileFilter = (filterConfig, sectionId) => {
    const {
      id,
      type,
      label,
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

    // Prepare component props for mobile
    const componentProps = {
      ...filterProps.componentProps,
      value: currentValue,
      onChange: (value) => onFilterChange(id, value, filterConfig),
      className: `mobile-filter ${filterClassName}`,
    };

    // Handle special props for range inputs
    if (type === "RangeInput") {
      componentProps.min = currentValue.min;
      componentProps.max = currentValue.max;
      componentProps.onMinChange = (value) =>
        onFilterChange(`${id}Min`, value, filterConfig);
      componentProps.onMaxChange = (value) =>
        onFilterChange(`${id}Max`, value, filterConfig);
    }

    return (
      <div key={id} className={`mobile-filter-item ${filterClassName}`}>
        {label && <label className="mobile-filter-label">{label}</label>}
        {renderFilterComponent(filterConfig, componentProps)}
      </div>
    );
  };

  // Render mobile filter section
  const renderMobileSection = (section) => {
    const {
      id,
      title,
      className: sectionClassName = "",
      filters: sectionFilters,
    } = section;

    // Check if section should be visible
    if (!sectionVisibility[id]) {
      return null;
    }

    return (
      <div key={id} className={`mobile-filter-section ${sectionClassName}`}>
        {title && (
          <div className="mobile-section-header">
            <h4 className="mobile-section-title">{title}</h4>
          </div>
        )}
        <div className="mobile-section-content">
          {sectionFilters.map((filterConfig) =>
            renderMobileFilter(filterConfig, id)
          )}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div
      ref={drawerRef}
      className="filter-drawer-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="filter-drawer">
        {/* Header */}
        <div className="filter-drawer-header">
          <button
            type="button"
            className="btn btn-link filter-drawer-close"
            onClick={onClose}
          >
            <i className="icon-times"></i>
          </button>
          <h3 className="filter-drawer-title">
            {config.mobile?.drawerTitle || "Filtrlər"}
          </h3>
          {hasActiveFilters && (
            <button
              type="button"
              className="btn btn-link filter-drawer-reset"
              onClick={onResetFilters}
            >
              Sıfırla
            </button>
          )}
        </div>

        {/* Body */}
        <div ref={bodyRef} className="filter-drawer-body">
          {visibleSections.map((section) => renderMobileSection(section))}

          {/* More filters toggle for mobile */}
          {config.sections.some((s) => s.visible === "showMoreFilters") && (
            <div className="mobile-more-filters">
              <button
                type="button"
                className="btn btn-outline more-filters-toggle-mobile"
                onClick={onToggleMoreFilters}
              >
                {showMoreFilters
                  ? "Daha az filtr"
                  : config.mobile?.moreFiltersLabel || "Daha çox filtr"}
                <i
                  className={`icon-chevron-${showMoreFilters ? "up" : "down"}`}
                ></i>
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="filter-drawer-footer">
          <div className="filter-drawer-actions">
            <button
              type="button"
              className="btn btn-outline reset-filters-mobile"
              onClick={onResetFilters}
              disabled={!hasActiveFilters}
            >
              Sıfırla
            </button>
            <button
              type="button"
              className="btn btn-primary apply-filters-mobile"
              onClick={onApplyFilters}
            >
              {config.mobile?.showResultsButton
                ? "Nəticələri göstər"
                : "Tətbiq et"}
              {activeFilterCount > 0 && (
                <span className="filter-count-mobile">
                  ({activeFilterCount})
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalFilterDrawer;
