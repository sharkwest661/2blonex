// src/components/shared/filters/FilterManager.js
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useFilterManager } from "./hooks/useFilterManager";
import { useFilterConfig } from "./hooks/useFilterConfig";
import { getFilterCategoryId } from "@/utils/filterRegistry";
import VehicleFilters from "@/components/features/vehicles/components/VehicleFilters";
import ElectronicsFilterDrawer from "@/components/features/electronics/filters/ElectronicsFilterDrawer";
import RealEstateFilterDrawer from "@/components/features/realestate/filters/RealEstateFilterDrawer";
import JobsFilterDrawer from "@/components/features/jobs/filters/JobsFilterDrawer";
import ServicesFilterDrawer from "@/components/features/services/filters/ServicesFilterDrawer";
import {
  Dropdown,
  FilterButtons,
  RadioGroup2,
  CheckboxGroup2,
  CheckboxGroup,
} from "@/components/ui/forms";
import {
  PriceRangeFilter,
  LocationFilter,
  YearRangeFilter,
  MileageRangeFilter,
  PowerRangeFilter,
  EngineVolumeRangeFilter,
} from "@/components/shared/filters";
import "./styles/FilterManager.css";

const FilterManager = ({ category, onFiltersChange, initialFilters = {} }) => {
  // Map slug to actual category ID for filter components
  const actualCategory = getFilterCategoryId(category);

  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Get configuration for this category
  const config = useFilterConfig(actualCategory);

  // Memoize initial filters to prevent constant re-initialization
  const memoizedInitialFilters = useMemo(() => initialFilters, []);

  // Use filter manager hook for universal categories
  const {
    filters,
    updateFilter,
    resetFilters,
    applyFilters,
    activeFilterCount,
  } = useFilterManager(config, {
    onFiltersChange,
    initialFilters: memoizedInitialFilters,
  });

  // For vehicles category, use existing VehicleFilters component
  if (actualCategory === "vehicles") {
    return <VehicleFilters />;
  }

  // For other categories, check if we have configuration
  if (!config) {
    console.warn(
      `FilterManager: No configuration found for category "${actualCategory}"`
    );
    return <div>Filter configuration not found for {actualCategory}</div>;
  }

  const handleFilterChange = (field, value) => {
    updateFilter(field, value);
  };

  const handleShowResults = () => {
    applyFilters();
  };

  const handleReset = () => {
    resetFilters();
  };

  const handleMobileFiltersApply = (newFilters) => {
    Object.keys(newFilters).forEach((key) => {
      updateFilter(key, newFilters[key]);
    });
    applyFilters();
  };

  // Render desktop filters based on configuration
  const renderDesktopFilters = () => {
    return (
      <div className="d-none d-md-block">
        <div className="main_container">
          <div className="desctop_filters">
            {/* Basic Filters */}
            {config.sections?.map((section, sectionIndex) => {
              // Basic filters section
              if (section.className === "basic-filters") {
                return (
                  <React.Fragment key={sectionIndex}>
                    {section.filters.map((filter) => {
                      return renderFilterComponent(filter);
                    })}
                  </React.Fragment>
                );
              }
              return null;
            })}

            {/* Advanced Filters Section */}
            {config.sections?.map((section, sectionIndex) => {
              if (
                section.className === "advanced-filters" &&
                section.visible === "showMoreFilters" &&
                filters.showMoreFilters
              ) {
                return (
                  <div key={sectionIndex} className="advanced-filter-section">
                    {section.filters.map((filter, filterIndex) => {
                      return (
                        <div key={filter.id} className="advanced-filter-row">
                          <div className="advanced-filter-label">
                            {getFilterLabel(filter)}
                          </div>
                          {renderAdvancedFilterComponent(filter)}
                        </div>
                      );
                    })}
                  </div>
                );
              }
              return null;
            })}

            {/* Filter Action Buttons */}
            <div className="desc_filters_btns">
              <FilterButtons
                onReset={handleReset}
                onToggleMoreFilters={() =>
                  handleFilterChange(
                    "showMoreFilters",
                    !filters.showMoreFilters
                  )
                }
                onShowResults={handleShowResults}
                moreFiltersExpanded={filters.showMoreFilters}
                resultsCount={0}
                resetText="Sıfırla"
                moreFiltersText="Daha çox filtr"
                showResultsText="Elanları göstər"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Get filter label for advanced filters
  const getFilterLabel = (filter) => {
    const labels = {
      storage: "Yaddaş həcmi",
      ram: "RAM",
      os: "Əməliyyat sistemi",
      screenSize: "Ekran ölçüsü",
      connectivity: "Əlaqə",
    };
    return labels[filter.id] || filter.placeholder || filter.id;
  };

  // Render advanced filter components with proper styling
  const renderAdvancedFilterComponent = (filter) => {
    switch (filter.type) {
      case "CheckboxGroup":
        return (
          <div
            className={`checkbox-group-horizontal ${actualCategory}-${filter.id}-section`}
          >
            <CheckboxGroup2
              key={filter.id}
              options={filter.options || []}
              values={filters[filter.id] || []}
              onChange={(values) => handleFilterChange(filter.id, values)}
              name={filter.id}
              layout="horizontal"
              variant={filter.variant || "default"}
            />
          </div>
        );

      case "RadioGroup":
        return (
          <div
            className={`radio-group-horizontal ${actualCategory}-${filter.id}-section`}
          >
            <RadioGroup2
              key={filter.id}
              options={filter.options || []}
              value={filters[filter.id] || ""}
              onChange={(value) => handleFilterChange(filter.id, value)}
              name={filter.id}
              layout="horizontal"
            />
          </div>
        );

      default:
        return renderFilterComponent(filter);
    }
  };

  // Render individual filter components
  const renderFilterComponent = (filter) => {
    // ✅ Extract key separately from other props
    const { key, ...componentProps } = {
      key: filter.id,
      value: filters[filter.id] || filter.defaultValue || "",
      onChange: (value) => handleFilterChange(filter.id, value),
      className: filter.className || "for_width20",
    };

    switch (filter.type) {
      case "Dropdown":
        return (
          <Dropdown
            key={key} // ✅ Pass key directly
            {...componentProps} // ✅ Spread only the remaining props
            options={filter.options || []}
            placeholder={filter.placeholder}
          />
        );

      case "PriceRangeFilter":
        return (
          <PriceRangeFilter
            key={key} // ✅ Pass key directly
            minValue={filters.priceMin || ""}
            maxValue={filters.priceMax || ""}
            onMinChange={(value) => handleFilterChange("priceMin", value)}
            onMaxChange={(value) => handleFilterChange("priceMax", value)}
            currency={filter.currency || "AZN"}
            className={filter.className}
          />
        );

      case "LocationFilter":
        return (
          <LocationFilter
            key={key} // ✅ Pass key directly
            {...componentProps}
            options={filter.options || []}
            placeholder={filter.placeholder || "Şəhər"}
          />
        );

      case "YearRangeFilter":
        return (
          <YearRangeFilter
            key={key} // ✅ Pass key directly
            minValue={filters.yearMin || ""}
            maxValue={filters.yearMax || ""}
            onMinChange={(value) => handleFilterChange("yearMin", value)}
            onMaxChange={(value) => handleFilterChange("yearMax", value)}
            className={filter.className}
          />
        );

      case "RadioGroup":
        return (
          <RadioGroup2
            key={key} // ✅ Pass key directly
            {...componentProps}
            options={filter.options || []}
            name={filter.id}
            layout={filter.layout || "horizontal"}
          />
        );

      case "CheckboxGroup":
        return (
          <CheckboxGroup
            key={key} // ✅ Pass key directly
            options={filter.options || []}
            values={filters[filter.id] || []}
            onChange={(values) => handleFilterChange(filter.id, values)}
            name={filter.id}
            layout={filter.layout || "horizontal"}
            variant={filter.variant || "default"}
          />
        );

      case "CustomComponent":
        if (filter.component) {
          const CustomComponent = filter.component;
          return (
            <CustomComponent
              key={key} // ✅ Pass key directly
              {...componentProps}
              {...filter.componentProps}
            />
          );
        }
        return null;

      default:
        console.warn(`Unknown filter type: ${filter.type}`);
        return null;
    }
  };

  // Render mobile drawer based on category
  const renderMobileDrawer = () => {
    const drawerProps = {
      isOpen: isMobileDrawerOpen,
      onClose: () => setIsMobileDrawerOpen(false),
      filters: filters,
      onApplyFilters: handleMobileFiltersApply,
      resultsCount: 0,
    };

    switch (actualCategory) {
      case "electronics":
        return <ElectronicsFilterDrawer {...drawerProps} />;
      case "realestate":
        return <RealEstateFilterDrawer {...drawerProps} />;
      case "jobs":
        return <JobsFilterDrawer {...drawerProps} />;
      case "services":
        return <ServicesFilterDrawer {...drawerProps} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Filter Trigger */}
      <div className="desc_filters_btn_mobile d-md-none">
        <button
          className="filter_btn_mobile"
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          <i className="fas fa-filter"></i>
          <span>Filtr</span>
          {activeFilterCount > 0 && (
            <span className="filter_btn_count">{activeFilterCount}</span>
          )}
        </button>
      </div>

      {/* Desktop Filters */}
      {renderDesktopFilters()}

      {/* Mobile Drawer */}
      {renderMobileDrawer()}
    </>
  );
};

export default FilterManager;
