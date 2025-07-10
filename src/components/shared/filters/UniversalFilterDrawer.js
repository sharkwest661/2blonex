// src/components/shared/filters/UniversalFilterDrawer.js
"use client";
import React, { useState, useEffect } from "react";
import { renderFilterComponent } from "./components/FilterComponentRegistry";
import { Dropdown, RadioGroup2, CheckboxGroup } from "@/components/ui/forms";
import {
  PriceRangeFilter,
  LocationFilter,
  YearRangeFilter,
  MileageRangeFilter,
  PowerRangeFilter,
  EngineVolumeRangeFilter,
} from "@/components/shared/filters";
import { CAR_MODELS } from "@/components/features/vehicles/constants";

const UniversalFilterDrawer = ({
  isOpen,
  onClose,
  config,
  filters,
  onFilterChange,
  activeFilterCount,
  onApplyFilters,
}) => {
  // Local filter state for drawer
  const [localFilters, setLocalFilters] = useState(filters || {});
  const [sectionVisibility, setSectionVisibility] = useState({});

  // Update local filters when prop changes
  useEffect(() => {
    setLocalFilters(filters || {});
  }, [filters]);

  // Initialize section visibility
  useEffect(() => {
    if (config?.sections) {
      const initialVisibility = {};
      config.sections.forEach((section) => {
        initialVisibility[section.id] = section.alwaysVisible !== false;
      });
      setSectionVisibility(initialVisibility);
    }
  }, [config]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle local filter change
  const handleFilterChange = (filterId, value) => {
    const newFilters = { ...localFilters, [filterId]: value };

    // Handle brand/model dependency for vehicles
    if (filterId === "brand" && config?.category === "vehicles") {
      newFilters.model = ""; // Reset model when brand changes
    }

    setLocalFilters(newFilters);
  };

  // Handle apply filters
  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters(localFilters);
    }
    onClose();
  };

  // Handle reset filters
  const handleReset = () => {
    const resetFilters = config?.defaultFilters || {};
    setLocalFilters(resetFilters);
  };

  // Toggle section visibility
  const handleToggleSection = (sectionId) => {
    setSectionVisibility((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Get model options for vehicles
  const getModelOptions = () => {
    if (config?.category === "vehicles" && localFilters.brand) {
      return CAR_MODELS[localFilters.brand] || [];
    }
    return [];
  };

  // Render individual filter component
  const renderFilter = (filter) => {
    let currentValue = localFilters[filter.id] || filter.defaultValue || "";

    // Handle special cases
    if (filter.type === "PriceRangeFilter") {
      currentValue = {
        min: localFilters.priceMin || "",
        max: localFilters.priceMax || "",
      };
    }

    const componentProps = {
      value: currentValue,
      onChange: (value) => handleFilterChange(filter.id, value),
      className: "mobile-filter-item",
    };

    switch (filter.type) {
      case "Dropdown":
        let options = filter.options || [];
        if (filter.id === "model" && config?.category === "vehicles") {
          options = getModelOptions();
        }

        return (
          <Dropdown
            {...componentProps}
            options={options}
            placeholder={filter.placeholder}
            disabled={filter.id === "model" && !localFilters.brand}
          />
        );

      case "PriceRangeFilter":
        return (
          <PriceRangeFilter
            minValue={localFilters.priceMin || ""}
            maxValue={localFilters.priceMax || ""}
            onMinChange={(value) => handleFilterChange("priceMin", value)}
            onMaxChange={(value) => handleFilterChange("priceMax", value)}
            currency={filter.currency || "AZN"}
            className="mobile-filter-item"
          />
        );

      case "YearRangeFilter":
        return (
          <YearRangeFilter
            minValue={localFilters.yearMin || ""}
            maxValue={localFilters.yearMax || ""}
            onMinChange={(value) => handleFilterChange("yearMin", value)}
            onMaxChange={(value) => handleFilterChange("yearMax", value)}
            className="mobile-filter-item"
          />
        );

      case "EngineVolumeRangeFilter":
        return (
          <EngineVolumeRangeFilter
            minValue={localFilters.volumeMin || ""}
            maxValue={localFilters.volumeMax || ""}
            onMinChange={(value) => handleFilterChange("volumeMin", value)}
            onMaxChange={(value) => handleFilterChange("volumeMax", value)}
            className="mobile-filter-item"
          />
        );

      case "MileageRangeFilter":
        return (
          <MileageRangeFilter
            minValue={localFilters.mileageMin || ""}
            maxValue={localFilters.mileageMax || ""}
            onMinChange={(value) => handleFilterChange("mileageMin", value)}
            onMaxChange={(value) => handleFilterChange("mileageMax", value)}
            className="mobile-filter-item"
          />
        );

      case "PowerRangeFilter":
        return (
          <PowerRangeFilter
            minValue={localFilters.powerMin || ""}
            maxValue={localFilters.powerMax || ""}
            onMinChange={(value) => handleFilterChange("powerMin", value)}
            onMaxChange={(value) => handleFilterChange("powerMax", value)}
            className="mobile-filter-item"
          />
        );

      case "LocationFilter":
        return (
          <LocationFilter
            {...componentProps}
            options={filter.options || []}
            placeholder={filter.placeholder || "Şəhər"}
          />
        );

      case "RadioGroup2":
        return (
          <RadioGroup2
            {...componentProps}
            options={filter.options || []}
            name={filter.id}
            layout="vertical"
          />
        );

      case "CheckboxGroup":
        return (
          <CheckboxGroup
            options={filter.options || []}
            values={localFilters[filter.id] || []}
            onChange={(values) => handleFilterChange(filter.id, values)}
            name={filter.id}
            layout="vertical"
            variant="default"
          />
        );

      case "EquipmentCategory":
        const categoryEquipment = filter.options || [];
        if (categoryEquipment.length === 0) return null;

        return (
          <div className="equipment-category">
            <h4 className="equipment-category-title">{filter.label}</h4>
            <CheckboxGroup
              options={categoryEquipment}
              values={localFilters.equipment || []}
              onChange={(values) => handleFilterChange("equipment", values)}
              name={`equipment-${filter.category}`}
              layout="vertical"
              variant="default"
            />
          </div>
        );

      default:
        return null;
    }
  };

  // Render individual filter with wrapper
  const renderFilterWithWrapper = (filter) => {
    return (
      <div key={filter.id} className="mobile-filter-wrapper">
        <label className="mobile-filter-label">
          {filter.label || filter.placeholder}
        </label>
        {renderFilter(filter)}
      </div>
    );
  };

  // Render collapsible section
  const renderSection = (section) => {
    const { id, title, filters: sectionFilters, visible } = section;

    // Check visibility conditions
    if (visible === "showMoreFilters" && !localFilters.showMoreFilters) {
      return null;
    }

    // Skip sections without title for basic filters
    if (!title && id === "basic") {
      return (
        <div key={id} className="mobile-section-content">
          {sectionFilters.map((filter) => renderFilterWithWrapper(filter))}
        </div>
      );
    }

    const isExpanded = sectionVisibility[id] !== false;

    return (
      <div key={id} className="mobile-filter-section">
        {title && (
          <div
            className="mobile-section-header"
            onClick={() => handleToggleSection(id)}
          >
            <h3 className="mobile-section-title">{title}</h3>
            <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
          </div>
        )}
        {isExpanded && (
          <div className="mobile-section-content">
            {sectionFilters.map((filter) => renderFilterWithWrapper(filter))}
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
            <button className="filter-drawer-reset" onClick={handleReset}>
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
                      !localFilters.showMoreFilters
                    )
                  }
                >
                  <span>
                    {config.mobile?.moreFiltersLabel || "Daha çox filtr"}
                  </span>
                  <i
                    className={`fas fa-chevron-${
                      localFilters.showMoreFilters ? "up" : "down"
                    }`}
                  ></i>
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="filter-drawer-footer">
            <button className="filter-drawer-apply" onClick={handleApply}>
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
