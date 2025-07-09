// src/components/shared/filters/FilterManager.js

import React, { useState } from "react";
import { useFilterConfig } from "./hooks/useFilterConfig";
import { useFilterManager } from "./hooks/useFilterManager";

// Import EXACT same components as VehicleFilters
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

// Import vehicle constants
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

// Import vehicle styles
import "@/components/features/vehicles/styles/VehicleFilters.css";

// Import mobile drawer
import VehicleFilterBottomDrawer from "@/components/features/vehicles/components/VehicleFilterBottomDrawer";

/**
 * Universal FilterManager that preserves exact VehicleFilters structure for vehicles
 * and uses config system for other categories
 */
const FilterManager = ({
  category,
  onFiltersChange,
  initialFilters = {},
  ...props
}) => {
  // Load configuration
  const config = useFilterConfig(category);

  // State for mobile drawer
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Debug log to check data
  console.log("CAR_BRANDS:", CAR_BRANDS);
  console.log("COLORS:", COLORS);
  console.log("FUEL_TYPES:", FUEL_TYPES);

  // FOR VEHICLES - Use exact VehicleFilters structure
  if (category === "vehicles") {
    // Filters state - EXACT same as VehicleFilters
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
      const newFilters = {
        ...filters,
        [field]: value,
        // Reset model when brand changes
        ...(field === "brand" && { model: "" }),
      };

      setFilters(newFilters);

      if (onFiltersChange) {
        onFiltersChange(newFilters);
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

      if (onFiltersChange) {
        onFiltersChange(resetFilters);
      }
    };

    const handleShowResults = () => {
      console.log("Showing results with filters:", filters);
      if (onFiltersChange) {
        onFiltersChange(filters);
      }
    };

    const handleMobileFiltersApply = (newFilters) => {
      setFilters(newFilters);
      if (onFiltersChange) {
        onFiltersChange(newFilters);
      }
      handleShowResults();
    };

    const getModelOptions = () => {
      // Debug log to check CAR_MODELS structure
      console.log("CAR_MODELS:", CAR_MODELS);
      console.log("Selected brand:", filters.brand);

      if (!filters.brand || !CAR_MODELS) {
        return [];
      }

      // Check if CAR_MODELS is an array or object
      if (Array.isArray(CAR_MODELS)) {
        return CAR_MODELS.filter((model) => model.brand === filters.brand);
      } else if (typeof CAR_MODELS === "object") {
        // If CAR_MODELS is structured like { bmw: [models], mercedes: [models] }
        return CAR_MODELS[filters.brand] || [];
      }

      return [];
    };

    // EXACT SAME RENDER as VehicleFilters
    return (
      <>
        {/* Mobile Filter Trigger */}
        <div className="desc_filters_btn_mobile d-md-none">
          <button
            className="filter_btn_mobile"
            onClick={() => setIsMobileDrawerOpen(true)}
            type="button"
          >
            <i className="fas fa-filter"></i>
            <span>Filtr</span>
            {/* Filter count badge */}
            {Object.values(filters).filter((value) =>
              Array.isArray(value)
                ? value.length > 0
                : value && value !== "" && value !== "all"
            ).length > 0 && (
              <span className="filter_btn_count">
                {
                  Object.values(filters).filter((value) =>
                    Array.isArray(value)
                      ? value.length > 0
                      : value && value !== "" && value !== "all"
                  ).length
                }
              </span>
            )}
          </button>
        </div>

        {/* Desktop Filters */}
        <div className="d-none d-md-block">
          <div className="main_container">
            <div className="desctop_filters">
              {/* First Row */}
              <div className="form-group for_width20 grow-1 order-1">
                <Dropdown
                  options={CAR_BRANDS || []}
                  value={filters.brand || ""}
                  onChange={(value) => {
                    console.log("Brand changed:", value);
                    handleFilterChange("brand", value);
                  }}
                  placeholder="Marka"
                  className="vehicle-dropdown"
                />
              </div>

              <div className="form-group for_width20 grow-1 order-2">
                <Dropdown
                  options={getModelOptions() || []}
                  value={filters.model || ""}
                  onChange={(value) => {
                    console.log("Model changed:", value);
                    handleFilterChange("model", value);
                  }}
                  placeholder="Model"
                  disabled={!filters.brand}
                  className="vehicle-dropdown"
                />
              </div>

              <div className="form-group for_width20 grow-1 order-3">
                <PriceRangeFilter
                  minValue={filters.priceMin || ""}
                  maxValue={filters.priceMax || ""}
                  onMinChange={(value) => {
                    console.log("Price min changed:", value);
                    handleFilterChange("priceMin", value);
                  }}
                  onMaxChange={(value) => {
                    console.log("Price max changed:", value);
                    handleFilterChange("priceMax", value);
                  }}
                  currency="AZN"
                />
              </div>

              <div className="form-group for_width_small grow-1 order-4">
                <Dropdown
                  options={COLORS || []}
                  value={filters.color || ""}
                  onChange={(value) => {
                    console.log("Color changed:", value);
                    handleFilterChange("color", value);
                  }}
                  placeholder="Rəng"
                  className="vehicle-dropdown"
                />
              </div>

              {/* Second Row */}
              <div className="form-group for_width20 grow-1 order-5">
                <Dropdown
                  options={FUEL_TYPES || []}
                  value={filters.fuel || ""}
                  onChange={(value) => {
                    console.log("Fuel changed:", value);
                    handleFilterChange("fuel", value);
                  }}
                  placeholder="Yanacaq növü"
                  className="vehicle-dropdown"
                />
              </div>

              <div className="form-group for_width20 grow-1 order-6">
                <Dropdown
                  options={BODY_TYPES || []}
                  value={filters.bodyType || ""}
                  onChange={(value) => {
                    console.log("Body type changed:", value);
                    handleFilterChange("bodyType", value);
                  }}
                  placeholder="Ban növü"
                  className="vehicle-dropdown"
                />
              </div>

              <div className="form-group for_width_big grow-1 order-7">
                <EngineVolumeRangeFilter
                  minValue={filters.volumeMin}
                  maxValue={filters.volumeMax}
                  onMinChange={(value) =>
                    handleFilterChange("volumeMin", value)
                  }
                  onMaxChange={(value) =>
                    handleFilterChange("volumeMax", value)
                  }
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

              {/* Third Row */}
              <div className="form-group for_width20 grow-1 order-9">
                <Dropdown
                  options={TRANSMISSIONS || []}
                  value={filters.transmission || ""}
                  onChange={(value) => {
                    console.log("Transmission changed:", value);
                    handleFilterChange("transmission", value);
                  }}
                  placeholder="Sürətlər qutusu"
                  className="vehicle-dropdown"
                />
              </div>

              <div className="form-group for_width20 grow-1 order-10">
                <LocationFilter
                  value={filters.city || ""}
                  onChange={(value) => {
                    console.log("City changed:", value);
                    handleFilterChange("city", value);
                  }}
                  placeholder="Şəhər"
                />
              </div>

              <div className="form-group for_width_big grow-1 order-11">
                <RadioGroup2
                  options={CONDITION_OPTIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="car-condition"
                  className="vehicle-condition-radio"
                />
              </div>

              <div className="form-group for_width_small grow-1 order-12">
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

              {/* More Filters Section */}
              {filters.showMoreFilters && (
                <>
                  {/* Fourth Row - More Filters */}
                  <div className="form-group for_width20 grow-1 order-13">
                    <Dropdown
                      options={DRIVETRAIN_TYPES}
                      value={filters.gearbox}
                      onChange={(value) => handleFilterChange("gearbox", value)}
                      placeholder="Ötürücü"
                    />
                  </div>

                  <div className="form-group for_width20 grow-1 order-14">
                    <Dropdown
                      options={SEAT_COUNTS}
                      value={filters.seatCount}
                      onChange={(value) =>
                        handleFilterChange("seatCount", value)
                      }
                      placeholder="Oturacaq"
                    />
                  </div>

                  <div className="form-group for_width20 grow-1 order-15">
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
                  <div className="form-group for_width100 grow-1 order-16">
                    <CheckboxGroup2
                      options={PAYMENT_OPTIONS}
                      values={filters.paymentOptions}
                      onChange={(values) =>
                        handleFilterChange("paymentOptions", values)
                      }
                      title="Ödəniş növü"
                      layout="horizontal"
                    />
                  </div>

                  {/* Equipment Section */}
                  <div className="additional_chekings_hero order-17">
                    <div className="additional_chekings_title">Avadanlıq</div>
                    <div className="additional_chekings">
                      {EQUIPMENT_CATEGORIES.map((category) => {
                        const categoryEquipment = VEHICLE_EQUIPMENT.filter(
                          (item) => item.category === category.value
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
  }

  // FOR OTHER CATEGORIES - Use configuration system
  const {
    filters,
    updateFilter,
    resetFilters,
    applyFilters,
    activeFilterCount,
  } = useFilterManager(config, {
    onFiltersChange,
    initialFilters,
  });

  if (!config) {
    console.warn(
      `FilterManager: No configuration found for category "${category}"`
    );
    return <div>Filter configuration not found for {category}</div>;
  }

  const handleFilterChange = (field, value) => {
    updateFilter(field, value);
  };

  const handleShowResults = () => {
    applyFilters();
  };

  // Render filters for other categories (electronics, jobs, real estate)
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

      {/* Desktop Filters for other categories */}
      <div className="d-none d-md-block">
        <div className="main_container">
          <div className="desctop_filters">
            {/* Render based on configuration */}
            {config.sections?.map((section) => {
              if (
                section.visible === "showMoreFilters" &&
                !filters.showMoreFilters
              ) {
                return null;
              }

              return section.filters.map((filter) => {
                if (filter.type === "Dropdown") {
                  return (
                    <Dropdown
                      key={filter.id}
                      options={filter.componentProps?.options || []}
                      value={filters[filter.id] || ""}
                      onChange={(value) => handleFilterChange(filter.id, value)}
                      placeholder={filter.placeholder}
                      className={filter.className || "for_width20"}
                    />
                  );
                }

                if (filter.type === "PriceRangeFilter") {
                  return (
                    <PriceRangeFilter
                      key={filter.id}
                      minValue={filters.priceMin || ""}
                      maxValue={filters.priceMax || ""}
                      onMinChange={(value) =>
                        handleFilterChange("priceMin", value)
                      }
                      onMaxChange={(value) =>
                        handleFilterChange("priceMax", value)
                      }
                      className={filter.className || "for_width20"}
                      currency={filter.componentProps?.currency || "AZN"}
                    />
                  );
                }

                if (filter.type === "LocationFilter") {
                  return (
                    <LocationFilter
                      key={filter.id}
                      value={filters[filter.id] || ""}
                      onChange={(value) => handleFilterChange(filter.id, value)}
                      placeholder={filter.placeholder}
                      className={filter.className || "for_width20"}
                    />
                  );
                }

                if (filter.type === "RadioGroup2") {
                  return (
                    <RadioGroup2
                      key={filter.id}
                      options={filter.componentProps?.options || []}
                      value={filters[filter.id] || "all"}
                      onChange={(value) => handleFilterChange(filter.id, value)}
                      name={filter.id}
                      className={filter.className || "for_width100"}
                    />
                  );
                }

                return null;
              });
            })}
          </div>

          {/* Filter Action Buttons */}
          <div className="desc_filters_btns">
            <FilterButtons
              onReset={() => resetFilters()}
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
      </div>

      {/* Mobile drawer for other categories would go here */}
    </>
  );
};

export default FilterManager;
