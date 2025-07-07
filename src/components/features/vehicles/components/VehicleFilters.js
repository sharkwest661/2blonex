"use client";
import React, { useState } from "react";
import VehicleFilterBottomDrawer from "./VehicleFilterBottomDrawer";
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
} from "../constants";
import "../styles/VehicleFilters.css";

const VehicleFilters = () => {
  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Filters state - using your existing structure
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
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      // Reset model when brand changes
      ...(field === "brand" && { model: "" }),
    }));
  };

  const handleReset = () => {
    setFilters({
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
    });
  };

  const handleShowResults = () => {
    console.log("Showing results with filters:", filters);
    // TODO: Implement actual filtering/search logic
  };

  const handleMobileFiltersApply = (newFilters) => {
    setFilters(newFilters);
    handleShowResults();
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
      return value !== "" && value !== false;
    }).length;
  };

  return (
    <>
      {/* Mobile Filter Button - Only visible on mobile */}
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

      {/* Desktop Filters - Hidden on mobile */}
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

          {/* Row 3: Transmission, City, Condition, Mileage */}
          <div className="form-group for_width20 grow-1 order-9">
            <Dropdown
              placeholder="Sürətlər qutusu"
              options={TRANSMISSIONS}
              value={filters.transmission}
              onChange={(value) => handleFilterChange("transmission", value)}
            />
          </div>

          <div className="form-group for_width20 grow-1 order-10">
            <LocationFilter
              value={filters.city}
              onChange={(value) => handleFilterChange("city", value)}
            />
          </div>

          <div className="form-group for_width_big grow-1 order-11">
            <RadioGroup2
              options={CONDITION_OPTIONS}
              value={filters.condition}
              onChange={(value) => handleFilterChange("condition", value)}
              name="car-condition"
            />
          </div>

          <div className="form-group for_width_small grow-1 order-12">
            <MileageRangeFilter
              minValue={filters.mileageMin}
              maxValue={filters.mileageMax}
              onMinChange={(value) => handleFilterChange("mileageMin", value)}
              onMaxChange={(value) => handleFilterChange("mileageMax", value)}
            />
          </div>

          {/* More Filters Section */}
          {filters.showMoreFilters && (
            <>
              <div className="additional_chekings_hero order-17">
                <h3 className="additional_chekings_title">Avadanlıq</h3>
                <div className="additional_chekings">
                  {EQUIPMENT_CATEGORIES.map((category) => {
                    const categoryEquipment = getEquipmentByCategory(
                      category.value
                    );
                    if (categoryEquipment.length === 0) return null;

                    return (
                      <div key={category.value} className="equipment-category">
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

        {/* Filter Action Buttons - Desktop only */}
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

      {/* Mobile Bottom Drawer */}
      <VehicleFilterBottomDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        filters={filters}
        onApplyFilters={handleMobileFiltersApply}
        resultsCount={0}
      />
    </>
  );
};

export default VehicleFilters;
