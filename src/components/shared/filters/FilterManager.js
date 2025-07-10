// src/components/shared/filters/FilterManager.js
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useFilterManager } from "./hooks/useFilterManager";
import { useFilterConfig } from "./hooks/useFilterConfig";
import { getFilterCategoryId } from "@/utils/filterRegistry";
import VehicleFilterBottomDrawer from "@/components/features/vehicles/components/VehicleFilterBottomDrawer";
import ElectronicsFilterDrawer from "@/components/features/electronics/filters/ElectronicsFilterDrawer";
import UniversalFilterDrawer from "./UniversalFilterDrawer";
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
import {
  CAR_BRANDS,
  CAR_MODELS,
  FUEL_TYPES,
  BODY_TYPES,
  TRANSMISSIONS,
  DRIVETRAIN_TYPES,
  COLORS,
  SEAT_COUNTS,
  CONDITION_OPTIONS,
  PAYMENT_OPTIONS,
  VEHICLE_EQUIPMENT,
  EQUIPMENT_CATEGORIES,
} from "@/components/features/vehicles/constants";
import {
  ELECTRONICS_CATEGORIES,
  ELECTRONICS_BRANDS,
  ELECTRONICS_CONDITIONS,
  STORAGE_OPTIONS,
  RAM_OPTIONS,
  OPERATING_SYSTEMS,
  SCREEN_SIZES,
  CONNECTIVITY_OPTIONS,
} from "@/components/features/electronics/constants";

const FilterManager = ({ category, onFiltersChange, initialFilters = {} }) => {
  // Map slug to actual category ID for filter components
  const actualCategory = getFilterCategoryId(category);

  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Get configuration for this category
  const config = useFilterConfig(actualCategory);

  // Filters state - exact original structure
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    color: "",
    fuel: "",
    bodyType: "",
    volumeMin: "",
    volumeMax: "",
    yearMin: "",
    yearMax: "",
    transmission: "",
    city: "",
    condition: "all",
    mileageMin: "",
    mileageMax: "",
    gearbox: "",
    seatCount: "",
    powerMin: "",
    powerMax: "",
    paymentOptions: [],
    equipment: [],
    showMoreFilters: false,
    ...initialFilters,
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      // Reset model when brand changes
      ...(field === "brand" && { model: "" }),
    }));

    // Call onFiltersChange if provided
    if (onFiltersChange) {
      onFiltersChange({ ...filters, [field]: value });
    }
  };

  const handleReset = () => {
    const resetFilters = {
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      color: "",
      fuel: "",
      bodyType: "",
      volumeMin: "",
      volumeMax: "",
      yearMin: "",
      yearMax: "",
      transmission: "",
      city: "",
      condition: "all",
      mileageMin: "",
      mileageMax: "",
      gearbox: "",
      seatCount: "",
      powerMin: "",
      powerMax: "",
      paymentOptions: [],
      equipment: [],
      showMoreFilters: false,
    };
    setFilters(resetFilters);
  };

  const handleShowResults = () => {
    console.log("Showing results with filters:", filters);
    // TODO: Implement actual filtering/search logic
  };

  const handleMobileFiltersApply = (newFilters) => {
    setFilters(newFilters);
    handleShowResults();
    setIsMobileDrawerOpen(false);
  };

  const getModelOptions = () => {
    return filters.brand ? CAR_MODELS[filters.brand] || [] : [];
  };

  const getEquipmentByCategory = (category) => {
    return VEHICLE_EQUIPMENT.filter((item) => item.category === category);
  };

  // Count active filters for mobile button
  const getActiveFiltersCount = () => {
    return Object.values(filters).filter((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== "" && value !== false && value !== "all";
    }).length;
  };

  // Render vehicles with exact original structure
  if (actualCategory === "vehicles") {
    return (
      <>
        {/* Mobile Filter Button - Exact Original Styling */}
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filter</span>
            {getActiveFiltersCount() > 0 && (
              <span className="filter-count-badge">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Filters - Exact Original Structure */}
        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Brand, Model, Price, Color */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Marka"
                options={CAR_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Model"
                options={getModelOptions()}
                value={filters.model}
                onChange={(value) => handleFilterChange("model", value)}
                disabled={!filters.brand}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
              />
            </div>

            <div className="form-group for_width_small grow-1 order-4">
              <Dropdown
                placeholder="Rəng"
                options={COLORS}
                value={filters.color}
                onChange={(value) => handleFilterChange("color", value)}
              />
            </div>

            {/* Row 2: Fuel, Body Type, Engine Volume, Year */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Yanacaq növü"
                options={FUEL_TYPES}
                value={filters.fuel}
                onChange={(value) => handleFilterChange("fuel", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Ban növü"
                options={BODY_TYPES}
                value={filters.bodyType}
                onChange={(value) => handleFilterChange("bodyType", value)}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-7">
              <EngineVolumeRangeFilter
                minValue={filters.volumeMin}
                maxValue={filters.volumeMax}
                onMinChange={(value) => handleFilterChange("volumeMin", value)}
                onMaxChange={(value) => handleFilterChange("volumeMax", value)}
              />
            </div>

            <div className="form-group for_width_small grow-1 order-8">
              <YearRangeFilter
                minValue={filters.yearMin}
                maxValue={filters.yearMax}
                onMinChange={(value) => handleFilterChange("yearMin", value)}
                onMaxChange={(value) => handleFilterChange("yearMax", value)}
              />
            </div>

            {/* Condition Row */}
            <div className="form-group for_width_big grow-1 order-9">
              <div className="condition-filters">
                <label className="condition-label">Vəziyyəti</label>
                <RadioGroup2
                  options={CONDITION_OPTIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                />
              </div>
            </div>

            {/* More Filters Section */}
            {filters.showMoreFilters && (
              <>
                {/* Row 3: Advanced Filters */}
                <div className="form-group for_width20 grow-1 order-10">
                  <Dropdown
                    placeholder="Sürətlər qutusu"
                    options={TRANSMISSIONS}
                    value={filters.transmission}
                    onChange={(value) =>
                      handleFilterChange("transmission", value)
                    }
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-11">
                  <LocationFilter
                    placeholder="Şəhər"
                    value={filters.city}
                    onChange={(value) => handleFilterChange("city", value)}
                  />
                </div>

                <div className="form-group for_width_big grow-1 order-12">
                  <MileageRangeFilter
                    minValue={filters.mileageMin}
                    maxValue={filters.mileageMax}
                    onMinChange={(value) =>
                      handleFilterChange("mileageMin", value)
                    }
                    onMaxChange={(value) =>
                      handleFilterChange("mileageMax", value)
                    }
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-13">
                  <Dropdown
                    placeholder="Ötürücü"
                    options={DRIVETRAIN_TYPES}
                    value={filters.gearbox}
                    onChange={(value) => handleFilterChange("gearbox", value)}
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-14">
                  <Dropdown
                    placeholder="Oturacaq sayı"
                    options={SEAT_COUNTS}
                    value={filters.seatCount}
                    onChange={(value) => handleFilterChange("seatCount", value)}
                  />
                </div>

                <div className="form-group for_width_big grow-1 order-15">
                  <PowerRangeFilter
                    minValue={filters.powerMin}
                    maxValue={filters.powerMax}
                    onMinChange={(value) =>
                      handleFilterChange("powerMin", value)
                    }
                    onMaxChange={(value) =>
                      handleFilterChange("powerMax", value)
                    }
                  />
                </div>

                {/* Payment Options */}
                <div className="form-group for_width_big grow-1 order-16">
                  <div className="payment-options">
                    <label className="payment-label">Ödəniş növü</label>
                    <CheckboxGroup
                      options={PAYMENT_OPTIONS}
                      values={filters.paymentOptions}
                      onChange={(values) =>
                        handleFilterChange("paymentOptions", values)
                      }
                      name="paymentOptions"
                      layout="horizontal"
                      variant="default"
                    />
                  </div>
                </div>

                {/* Equipment Section - Exact Original Structure */}
                <div className="additional_chekings_hero order-17">
                  <div className="additional_chekings_title">Avadanlıq</div>
                  <div className="additional_chekings">
                    {EQUIPMENT_CATEGORIES.map((category) => {
                      const categoryEquipment = getEquipmentByCategory(
                        category.value
                      );
                      if (categoryEquipment.length === 0) return null;

                      return (
                        <div
                          key={category.value}
                          className="equipment-category"
                        >
                          <h4 className="equipment-category-title">
                            {category.label}
                          </h4>
                          <CheckboxGroup
                            options={categoryEquipment}
                            values={filters.equipment}
                            onChange={(values) =>
                              handleFilterChange("equipment", values)
                            }
                            name={`equipment-${category.value}`}
                            layout="horizontal"
                            variant="default"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Filter Action Buttons - Exact Original */}
          <div className="desc_filters_btns">
            <FilterButtons
              onReset={handleReset}
              onToggleMoreFilters={() =>
                handleFilterChange("showMoreFilters", !filters.showMoreFilters)
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

        {/* Mobile Bottom Drawer - Original VehicleFilterBottomDrawer */}
        <VehicleFilterBottomDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          filters={filters}
          onApplyFilters={handleMobileFiltersApply}
          resultsCount={0}
        />
      </>
    );
  }

  // Electronics category with EXACT vehicle structure
  if (actualCategory === "electronics") {
    return (
      <>
        {/* Mobile Filter Button - EXACT same as vehicles */}
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filter</span>
            {getActiveFiltersCount() > 0 && (
              <span className="filter-count-badge">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Filters - EXACT Vehicle Structure */}
        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Category, Brand, Price, Condition - SAME as vehicles row 1 */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Malın tipi"
                options={ELECTRONICS_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Marka"
                options={ELECTRONICS_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
              />
            </div>

            <div className="form-group for_width_small grow-1 order-4">
              <Dropdown
                placeholder="Vəziyyət"
                options={ELECTRONICS_CONDITIONS}
                value={filters.condition}
                onChange={(value) => handleFilterChange("condition", value)}
              />
            </div>

            {/* Row 2: City only - like vehicles row 2 */}
            <div className="form-group for_width20 grow-1 order-5">
              <LocationFilter
                placeholder="Şəhər"
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
              />
            </div>

            {/* Çatdırılma Section - EXACT same as vehicle condition */}
            <div className="form-group for_width_big grow-1 order-6">
              <div className="condition-filters">
                <label className="condition-label">Çatdırılma?</label>
                <RadioGroup2
                  options={[
                    { value: "all", label: "Hamısı" },
                    { value: "yes", label: "Bəli" },
                    { value: "no", label: "Xeyr" },
                  ]}
                  value={filters.delivery || "all"}
                  onChange={(value) => handleFilterChange("delivery", value)}
                  name="delivery"
                  layout="horizontal"
                />
              </div>
            </div>

            {/* More Filters Section - EXACT same structure as vehicles */}
            {filters.showMoreFilters && (
              <>
                {/* Storage Options */}
                <div className="form-group for_width_big grow-1 order-7">
                  <div className="payment-options">
                    <label className="payment-label">Yaddaş həcmi</label>
                    <CheckboxGroup
                      options={STORAGE_OPTIONS}
                      values={filters.storage}
                      onChange={(values) =>
                        handleFilterChange("storage", values)
                      }
                      name="storage"
                      layout="horizontal"
                      variant="default"
                    />
                  </div>
                </div>

                {/* RAM Options */}
                <div className="form-group for_width_big grow-1 order-8">
                  <div className="payment-options">
                    <label className="payment-label">RAM</label>
                    <CheckboxGroup
                      options={RAM_OPTIONS}
                      values={filters.ram}
                      onChange={(values) => handleFilterChange("ram", values)}
                      name="ram"
                      layout="horizontal"
                      variant="default"
                    />
                  </div>
                </div>

                {/* Operating System */}
                <div className="form-group for_width_big grow-1 order-9">
                  <div className="condition-filters">
                    <label className="condition-label">Əməliyyat sistemi</label>
                    <RadioGroup2
                      options={OPERATING_SYSTEMS}
                      value={filters.os}
                      onChange={(value) => handleFilterChange("os", value)}
                      name="os"
                      layout="horizontal"
                    />
                  </div>
                </div>

                {/* Screen Size */}
                <div className="form-group for_width_big grow-1 order-10">
                  <div className="payment-options">
                    <label className="payment-label">Ekran ölçüsü</label>
                    <CheckboxGroup
                      options={SCREEN_SIZES}
                      values={filters.screenSize}
                      onChange={(values) =>
                        handleFilterChange("screenSize", values)
                      }
                      name="screenSize"
                      layout="horizontal"
                      variant="default"
                    />
                  </div>
                </div>

                {/* Connectivity - SAME as vehicles equipment section */}
                <div className="additional_chekings_hero order-11">
                  <div className="additional_chekings_title">Əlaqə</div>
                  <div className="additional_chekings">
                    <div className="equipment-category">
                      <CheckboxGroup
                        options={CONNECTIVITY_OPTIONS}
                        values={filters.connectivity}
                        onChange={(values) =>
                          handleFilterChange("connectivity", values)
                        }
                        name="connectivity"
                        layout="horizontal"
                        variant="default"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Filter Action Buttons - EXACT same as vehicles */}
          <div className="desc_filters_btns">
            <FilterButtons
              onReset={handleReset}
              onToggleMoreFilters={() =>
                handleFilterChange("showMoreFilters", !filters.showMoreFilters)
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

        {/* Mobile Bottom Drawer - Electronics specific */}
        <ElectronicsFilterDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          filters={filters}
          onApplyFilters={handleMobileFiltersApply}
          resultsCount={0}
        />
      </>
    );
  }

  // For other categories, use the new universal system
  const {
    filters: universalFilters,
    updateFilter,
    resetFilters,
    applyFilters,
    activeFilterCount,
  } = useFilterManager(config, {
    onFiltersChange,
    initialFilters,
  });

  const renderMobileDrawer = () => {
    const drawerProps = {
      isOpen: isMobileDrawerOpen,
      onClose: () => setIsMobileDrawerOpen(false),
      filters: universalFilters,
      onApplyFilters: (newFilters) => {
        Object.keys(newFilters).forEach((key) => {
          updateFilter(key, newFilters[key]);
        });
        setIsMobileDrawerOpen(false);
      },
      resultsCount: 0,
    };

    switch (actualCategory) {
      case "electronics":
        return <ElectronicsFilterDrawer {...drawerProps} />;
      default:
        return (
          <UniversalFilterDrawer
            {...drawerProps}
            config={config}
            onFilterChange={updateFilter}
            activeFilterCount={activeFilterCount}
          />
        );
    }
  };

  // For non-vehicle categories
  if (!config) {
    console.warn(
      `FilterManager: No configuration found for category "${actualCategory}"`
    );
    return null;
  }

  return (
    <>
      {/* Mobile Filter Trigger */}
      <div className="mobile-filter-trigger">
        <button
          className="mobile-filter-btn"
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          <i className="fas fa-filter"></i>
          <span>Filtr</span>
          {activeFilterCount > 0 && (
            <span className="filter-count-badge">{activeFilterCount}</span>
          )}
        </button>
      </div>

      {/* For other categories - basic desktop filters */}
      <div className="main_container">
        <div className="desctop_filters">
          <div>Other categories coming soon...</div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {renderMobileDrawer()}
    </>
  );
};

export default FilterManager;
