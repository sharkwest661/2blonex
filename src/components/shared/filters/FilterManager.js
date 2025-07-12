// src/components/shared/filters/FilterManager.js
"use client";
import React, { useState, useEffect } from "react";
import {
  getFilterCategoryId,
  getDefaultFilters,
} from "../../../utils/filterRegistry";

// Shared UI Components
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
  AreaRangeFilter,
  FloorRangeFilter,
} from "@/components/shared/filters";

// ============================================================================
// EXISTING CATEGORY CONSTANTS (Keep your existing imports)
// ============================================================================

// Vehicle Constants
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

// Electronics Constants
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

// Jobs Constants
import {
  ACTIVITY_FIELDS,
  WORK_SCHEDULES,
  WORK_EXPERIENCE,
  EDUCATION_LEVELS,
  JOB_TYPES,
  COMPANY_TYPES,
  JOB_BENEFITS,
  WORK_ENVIRONMENT,
} from "@/components/features/jobs/constants";

// Real Estate Constants
import {
  PROPERTY_TYPES,
  TRANSACTION_TYPES,
  ROOM_COUNTS,
  PROPERTY_CONDITIONS,
  HEATING_TYPES,
  PROPERTY_AMENITIES,
  PROPERTY_FEATURES,
  METRO_STATIONS,
  DISTRICTS,
  ROOM_OPTIONS,
  RENOVATION_CONDITIONS,
  getMetroStationsForCity,
  getDistrictsForCity,
  BUILDING_FEATURES,
} from "@/components/features/realestate/constants";

// Clothing Constants
import {
  CLOTHING_TYPES,
  CLOTHING_BRANDS,
  CLOTHING_SIZES,
  CLOTHING_COLORS,
  CLOTHING_GENDER,
  CLOTHING_CONDITIONS,
  CLOTHING_MATERIALS,
  CLOTHING_SEASONS,
} from "../../../utils/constants/clothingConstants";

// ============================================================================
// NEW CATEGORY CONSTANTS
// ============================================================================

// Services Constants
import {
  SERVICES_TYPES,
  SERVICES_CATEGORIES,
  SERVICES_EXPERIENCE,
  SERVICES_AVAILABILITY,
  SERVICES_SCHEDULE,
  SERVICES_AREA,
} from "../../../utils/constants/servicesConstants";

// Kids Constants
import {
  KIDS_PRODUCT_TYPES,
  KIDS_BRANDS,
  KIDS_AGE_GROUPS,
  KIDS_CONDITIONS,
  KIDS_GENDER,
  KIDS_SIZES,
  KIDS_CATEGORIES,
} from "../../../utils/constants/kidsConstants";

// Cosmetics Constants
import {
  COSMETICS_PRODUCT_TYPES,
  COSMETICS_BRANDS,
  COSMETICS_CONDITIONS,
  COSMETICS_CATEGORIES,
  COSMETICS_SKIN_TYPES,
  COSMETICS_SIZES,
} from "../../../utils/constants/cosmeticsConstants";

// Home Garden Constants
import {
  HOME_GARDEN_TYPES,
  HOME_GARDEN_BRANDS,
  HOME_GARDEN_CONDITIONS,
  HOME_GARDEN_CATEGORIES,
  HOME_GARDEN_ROOMS,
  HOME_GARDEN_MATERIALS,
} from "../../../utils/constants/homeGardenConstants";

// Animals Constants
import {
  ANIMAL_TYPES,
  ANIMAL_BREEDS,
  ANIMAL_AGES,
  ANIMAL_GENDERS,
  ANIMAL_CONDITIONS,
  ANIMAL_PURPOSES,
  ANIMAL_CATEGORIES,
} from "../../../utils/constants/animalsConstants";

// Sports Constants
import {
  SPORTS_CATEGORIES,
  SPORTS_PRODUCT_TYPES,
  SPORTS_BRANDS,
  SPORTS_CONDITIONS,
  SPORTS_SIZES,
  SPORTS_TYPES,
  HOBBY_CATEGORIES,
} from "../../../utils/constants/sportsConstants";

// Minimal Category Constants
import {
  FOOD_CATEGORIES,
  FOOD_CONDITIONS,
} from "../../../utils/constants/foodConstants";

import {
  OTHER_CATEGORIES,
  OTHER_CONDITIONS,
} from "../../../utils/constants/otherConstants";

import {
  FREE_CATEGORIES,
  FREE_CONDITIONS,
} from "../../../utils/constants/freeConstants";

// ============================================================================
// MOBILE DRAWER COMPONENTS
// ============================================================================

// Existing Mobile Drawers
import VehicleFilterBottomDrawer from "@/components/features/vehicles/components/VehicleFilterBottomDrawer";
import ElectronicsFilterDrawer from "@/components/features/electronics/filters/ElectronicsFilterDrawer";
import JobsFilterDrawer from "@/components/features/jobs/filters/JobsFilterDrawer";
import RealEstateFilterDrawer from "@/components/features/realestate/filters/RealEstateFilterDrawer";
import ClothingFilterDrawer from "../../features/clothing/filters/ClothingFilterDrawer";

// New Mobile Drawers
import ServicesFilterDrawer from "./mobile/ServicesFilterDrawer";
import KidsFilterDrawer from "./mobile/KidsFilterDrawer";
import CosmeticsFilterDrawer from "./mobile/CosmeticsFilterDrawer";
import HomeGardenFilterDrawer from "./mobile/HomeGardenFilterDrawer";
import AnimalsFilterDrawer from "./mobile/AnimalsFilterDrawer";
import SportsFilterDrawer from "./mobile/SportsFilterDrawer";
import FoodFilterDrawer from "./mobile/FoodFilterDrawer";
import OtherFilterDrawer from "./mobile/OtherFilterDrawer";
import FreeFilterDrawer from "./mobile/FreeFilterDrawer";

// ============================================================================
// MAIN FILTERMANAGER COMPONENT
// ============================================================================

const FilterManager = ({ category, onFiltersChange, initialFilters = {} }) => {
  // ✅ DEBUG: Log what we receive
  console.log("=== FILTER MANAGER DEBUG ===");
  console.log("1. Raw category prop:", category);
  console.log("2. Type of category:", typeof category);
  console.log(
    "3. Current URL:",
    typeof window !== "undefined" ? window.location.pathname : "SSR"
  );

  // Map slug to actual category ID for filter components
  const actualCategory = getFilterCategoryId(category);
  console.log("4. Mapped actualCategory:", actualCategory);

  // ✅ Initialize filters based on actual category
  const [filters, setFilters] = useState(() => {
    const defaultFilters = getDefaultFilters(actualCategory);
    console.log("5. Default filters keys:", Object.keys(defaultFilters));
    console.log("==========================");
    return { ...defaultFilters, ...initialFilters };
  });

  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // ✅ Update filters when category changes
  useEffect(() => {
    const defaultFilters = getDefaultFilters(actualCategory);
    setFilters({ ...defaultFilters, ...initialFilters });
  }, [actualCategory, initialFilters]);

  // Calculate active filter count
  const activeFilterCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "showMoreFilters") return false;
    if (Array.isArray(value)) return value.length > 0;
    return value !== "" && value !== false && value !== "all";
  }).length;

  // ============================================================================
  // FILTER EVENT HANDLERS
  // ============================================================================

  const handleFilterChange = (field, value) => {
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        [field]: value,
        // Reset model when brand changes (for vehicles)
        ...(field === "brand" &&
          actualCategory === "vehicles" && { model: "" }),
      };

      // Call onFiltersChange if provided
      if (onFiltersChange) {
        onFiltersChange(newFilters);
      }

      return newFilters;
    });
  };

  const handleReset = () => {
    const resetFilters = getDefaultFilters(actualCategory);
    setFilters(resetFilters);

    if (onFiltersChange) {
      onFiltersChange(resetFilters);
    }
  };

  const handleShowResults = () => {
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  };

  const handleMobileFiltersApply = (newFilters) => {
    setFilters(newFilters);
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
    setIsMobileDrawerOpen(false);
  };

  // Helper function to get models for selected brand
  const getModelsForBrand = (brandValue) => {
    return CAR_MODELS[brandValue] || [];
  };

  // Helper function to get equipment by category
  const getEquipmentByCategory = (category) => {
    return VEHICLE_EQUIPMENT[category] || [];
  };

  // ============================================================================
  // CATEGORY IMPLEMENTATIONS
  // ============================================================================

  // VEHICLES CATEGORY (ORIGINAL)
  if (actualCategory === "vehicles") {
    return (
      <>
        {/* Mobile Filter Button */}
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Brand, Model, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Marka seçin"
                options={CAR_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-car"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Model seçin"
                options={getModelsForBrand(filters.brand)}
                value={filters.model}
                onChange={(value) => handleFilterChange("model", value)}
                icon="fa-solid fa-car-side"
                disabled={!filters.brand}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Color, Fuel, Body Type, Year */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Rəng seçin"
                options={COLORS}
                value={filters.color}
                onChange={(value) => handleFilterChange("color", value)}
                icon="fa-solid fa-palette"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Yanacaq növü"
                options={FUEL_TYPES}
                value={filters.fuel}
                onChange={(value) => handleFilterChange("fuel", value)}
                icon="fa-solid fa-gas-pump"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Kuzov növü"
                options={BODY_TYPES}
                value={filters.bodyType}
                onChange={(value) => handleFilterChange("bodyType", value)}
                icon="fa-solid fa-car"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <YearRangeFilter
                minValue={filters.yearMin}
                maxValue={filters.yearMax}
                onMinChange={(value) => handleFilterChange("yearMin", value)}
                onMaxChange={(value) => handleFilterChange("yearMax", value)}
                placeholder="İl aralığı"
              />
            </div>

            {/* Row 3: More Filters */}
            {filters.showMoreFilters && (
              <>
                {/* Transmission, Condition, Mileage, Engine */}
                <div className="form-group for_width20 grow-1 order-9">
                  <Dropdown
                    placeholder="Sürət qutusu"
                    options={TRANSMISSIONS}
                    value={filters.transmission}
                    onChange={(value) =>
                      handleFilterChange("transmission", value)
                    }
                    icon="fa-solid fa-gears"
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-10">
                  <div className="condition-filter">
                    <div className="condition-label">Vəziyyət</div>
                    <RadioGroup2
                      options={CONDITION_OPTIONS}
                      value={filters.condition}
                      onChange={(value) =>
                        handleFilterChange("condition", value)
                      }
                      name="condition"
                      layout="horizontal"
                      variant="default"
                    />
                  </div>
                </div>

                <div className="form-group for_width20 grow-1 order-11">
                  <MileageRangeFilter
                    maxValue={filters.mileageMax}
                    onMaxChange={(value) =>
                      handleFilterChange("mileageMax", value)
                    }
                    placeholder="Maksimum yürüş"
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-12">
                  <EngineVolumeRangeFilter
                    minValue={filters.engineVolumeMin}
                    maxValue={filters.engineVolumeMax}
                    onMinChange={(value) =>
                      handleFilterChange("engineVolumeMin", value)
                    }
                    onMaxChange={(value) =>
                      handleFilterChange("engineVolumeMax", value)
                    }
                    placeholder="Mühərrik həcmi"
                  />
                </div>

                {/* Equipment Section */}
                <div className="additional_chekings_section">
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

            {/* Row 4: Filter Action Buttons */}
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

          {/* Mobile Bottom Drawer */}
          <VehicleFilterBottomDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // ELECTRONICS CATEGORY
  if (actualCategory === "electronics") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Item Type, Brand, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Növ seçin"
                options={ELECTRONICS_CATEGORIES}
                value={filters.itemType}
                onChange={(value) => handleFilterChange("itemType", value)}
                icon="fa-solid fa-mobile-alt"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Marka seçin"
                options={ELECTRONICS_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-tag"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Condition, Category, Specifications, Warranty */}
            <div className="form-group for_width20 grow-1 order-5">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={ELECTRONICS_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={ELECTRONICS_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-list"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Xüsusiyyətlər"
                options={SCREEN_SIZES}
                value={filters.specifications}
                onChange={(value) =>
                  handleFilterChange("specifications", value)
                }
                icon="fa-solid fa-cog"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Zəmanət"
                options={[
                  { value: "yes", label: "Zəmanətli" },
                  { value: "no", label: "Zəmanətsiz" },
                ]}
                value={filters.warranty}
                onChange={(value) => handleFilterChange("warranty", value)}
                icon="fa-solid fa-shield-alt"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <ElectronicsFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // JOBS CATEGORY
  if (actualCategory === "jobs") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Activity Field, Work Schedule, Salary, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Fəaliyyət sahəsi"
                options={ACTIVITY_FIELDS}
                value={filters.activityField}
                onChange={(value) => handleFilterChange("activityField", value)}
                icon="fa-solid fa-briefcase"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="İş qrafiki"
                options={WORK_SCHEDULES}
                value={filters.workSchedule}
                onChange={(value) => handleFilterChange("workSchedule", value)}
                icon="fa-solid fa-clock"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.salaryMin}
                maxValue={filters.salaryMax}
                onMinChange={(value) => handleFilterChange("salaryMin", value)}
                onMaxChange={(value) => handleFilterChange("salaryMax", value)}
                currency="₼"
                placeholder="Maaş aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Experience, Education, Job Type, Benefits */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Təcrübə"
                options={WORK_EXPERIENCE}
                value={filters.experience}
                onChange={(value) => handleFilterChange("experience", value)}
                icon="fa-solid fa-star"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Təhsil"
                options={EDUCATION_LEVELS}
                value={filters.education}
                onChange={(value) => handleFilterChange("education", value)}
                icon="fa-solid fa-graduation-cap"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="İş növü"
                options={JOB_TYPES}
                value={filters.jobType}
                onChange={(value) => handleFilterChange("jobType", value)}
                icon="fa-solid fa-building"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Üstünlüklər"
                options={JOB_BENEFITS}
                value={filters.benefits}
                onChange={(value) => handleFilterChange("benefits", value)}
                icon="fa-solid fa-gift"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <JobsFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // REAL ESTATE CATEGORY
  if (actualCategory === "realestate") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Property Type, Transaction Type, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Əmlak növü"
                options={PROPERTY_TYPES}
                value={filters.propertyType}
                onChange={(value) => handleFilterChange("propertyType", value)}
                icon="fa-solid fa-home"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <div className="transaction-toggle">
                <div className="toggle-buttons">
                  <button
                    className={`toggle-btn ${filters.transactionType === "sale" ? "active" : ""}`}
                    onClick={() =>
                      handleFilterChange("transactionType", "sale")
                    }
                  >
                    Satış
                  </button>
                  <button
                    className={`toggle-btn ${filters.transactionType === "rent" ? "active" : ""}`}
                    onClick={() =>
                      handleFilterChange("transactionType", "rent")
                    }
                  >
                    İcarə
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Rooms, Area, Condition, Floor */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Otaq sayı"
                options={ROOM_COUNTS}
                value={filters.rooms}
                onChange={(value) => handleFilterChange("rooms", value)}
                icon="fa-solid fa-bed"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <AreaRangeFilter
                minValue={filters.areaMin}
                maxValue={filters.areaMax}
                onMinChange={(value) => handleFilterChange("areaMin", value)}
                onMaxChange={(value) => handleFilterChange("areaMax", value)}
                placeholder="Sahə (m²)"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={PROPERTY_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <FloorRangeFilter
                floorValue={filters.floor}
                totalFloorsValue={filters.totalFloors}
                onFloorChange={(value) => handleFilterChange("floor", value)}
                onTotalFloorsChange={(value) =>
                  handleFilterChange("totalFloors", value)
                }
                placeholder="Mərtəbə"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <RealEstateFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // CLOTHING CATEGORY
  if (actualCategory === "clothing") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Clothing Type, Brand, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Geyim növü seçin"
                options={CLOTHING_TYPES}
                value={filters.clothingType}
                onChange={(value) => handleFilterChange("clothingType", value)}
                icon="fa-solid fa-tshirt"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Marka seçin"
                options={CLOTHING_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-tag"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Size, Color, Condition, Gender */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Ölçü seçin"
                options={CLOTHING_SIZES}
                value={filters.size}
                onChange={(value) => handleFilterChange("size", value)}
                icon="fa-solid fa-ruler"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Rəng seçin"
                options={CLOTHING_COLORS}
                value={filters.color}
                onChange={(value) => handleFilterChange("color", value)}
                icon="fa-solid fa-palette"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={CLOTHING_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Cins seçin"
                options={CLOTHING_GENDER}
                value={filters.gender}
                onChange={(value) => handleFilterChange("gender", value)}
                icon="fa-solid fa-person"
              />
            </div>

            {/* Row 3: More Filters */}
            {filters.showMoreFilters && (
              <>
                <div className="form-group for_width20 grow-1 order-9">
                  <Dropdown
                    placeholder="Material seçin"
                    options={CLOTHING_MATERIALS}
                    value={filters.material}
                    onChange={(value) => handleFilterChange("material", value)}
                    icon="fa-solid fa-leaf"
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-10">
                  <Dropdown
                    placeholder="Mövsüm seçin"
                    options={CLOTHING_SEASONS}
                    value={filters.season}
                    onChange={(value) => handleFilterChange("season", value)}
                    icon="fa-solid fa-sun"
                  />
                </div>
              </>
            )}

            {/* Row 4: Filter Action Buttons */}
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

          <ClothingFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // SERVICES CATEGORY (Template B - Copy Jobs Pattern)
  if (actualCategory === "services") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Service Type, Category, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Xidmət növü seçin"
                options={SERVICES_TYPES}
                value={filters.serviceType}
                onChange={(value) => handleFilterChange("serviceType", value)}
                icon="fa-solid fa-wrench"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={SERVICES_CATEGORIES}
                value={filters.serviceCategory}
                onChange={(value) =>
                  handleFilterChange("serviceCategory", value)
                }
                icon="fa-solid fa-list"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Experience, Availability, Schedule, Service Area */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Təcrübə seçin"
                options={SERVICES_EXPERIENCE}
                value={filters.experience}
                onChange={(value) => handleFilterChange("experience", value)}
                icon="fa-solid fa-star"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Mövcudluq seçin"
                options={SERVICES_AVAILABILITY}
                value={filters.availability}
                onChange={(value) => handleFilterChange("availability", value)}
                icon="fa-solid fa-calendar"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Qrafik seçin"
                options={SERVICES_SCHEDULE}
                value={filters.schedule}
                onChange={(value) => handleFilterChange("schedule", value)}
                icon="fa-solid fa-clock"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Xidmət sahəsi"
                options={SERVICES_AREA}
                value={filters.serviceArea}
                onChange={(value) => handleFilterChange("serviceArea", value)}
                icon="fa-solid fa-location-dot"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <ServicesFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // KIDS CATEGORY (Template A - Copy Electronics Pattern)
  if (actualCategory === "kids") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Product Type, Brand, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Məhsul növü seçin"
                options={KIDS_PRODUCT_TYPES}
                value={filters.productType}
                onChange={(value) => handleFilterChange("productType", value)}
                icon="fa-solid fa-baby"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Marka seçin"
                options={KIDS_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-tag"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Age Group, Condition, Gender, Category */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Yaş qrupu seçin"
                options={KIDS_AGE_GROUPS}
                value={filters.ageGroup}
                onChange={(value) => handleFilterChange("ageGroup", value)}
                icon="fa-solid fa-child"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={KIDS_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Cins seçin"
                options={KIDS_GENDER}
                value={filters.gender}
                onChange={(value) => handleFilterChange("gender", value)}
                icon="fa-solid fa-person"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={KIDS_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-list"
              />
            </div>

            {/* Row 3: More Filters */}
            {filters.showMoreFilters && (
              <>
                <div className="form-group for_width20 grow-1 order-9">
                  <Dropdown
                    placeholder="Ölçü seçin"
                    options={KIDS_SIZES}
                    value={filters.size}
                    onChange={(value) => handleFilterChange("size", value)}
                    icon="fa-solid fa-ruler"
                  />
                </div>
              </>
            )}

            {/* Row 4: Filter Action Buttons */}
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

          <KidsFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // COSMETICS CATEGORY
  if (actualCategory === "cosmetics") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Product Type, Brand, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Məhsul növü seçin"
                options={COSMETICS_PRODUCT_TYPES}
                value={filters.productType}
                onChange={(value) => handleFilterChange("productType", value)}
                icon="fa-solid fa-palette"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Marka seçin"
                options={COSMETICS_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-tag"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Condition, Category, Skin Type, Size */}
            <div className="form-group for_width20 grow-1 order-5">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={COSMETICS_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={COSMETICS_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-list"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Dəri növü seçin"
                options={COSMETICS_SKIN_TYPES}
                value={filters.skinType}
                onChange={(value) => handleFilterChange("skinType", value)}
                icon="fa-solid fa-face-smile"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Ölçü seçin"
                options={COSMETICS_SIZES}
                value={filters.size}
                onChange={(value) => handleFilterChange("size", value)}
                icon="fa-solid fa-ruler"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <CosmeticsFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // HOME GARDEN CATEGORY
  if (actualCategory === "home-garden") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Product Type, Brand, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Məhsul növü seçin"
                options={HOME_GARDEN_TYPES}
                value={filters.productType}
                onChange={(value) => handleFilterChange("productType", value)}
                icon="fa-solid fa-home"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Marka seçin"
                options={HOME_GARDEN_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-tag"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Condition, Category, Room, Material */}
            <div className="form-group for_width20 grow-1 order-5">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={HOME_GARDEN_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={HOME_GARDEN_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-list"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Otaq seçin"
                options={HOME_GARDEN_ROOMS}
                value={filters.room}
                onChange={(value) => handleFilterChange("room", value)}
                icon="fa-solid fa-door-open"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Material seçin"
                options={HOME_GARDEN_MATERIALS}
                value={filters.material}
                onChange={(value) => handleFilterChange("material", value)}
                icon="fa-solid fa-cube"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <HomeGardenFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // ANIMALS CATEGORY
  if (actualCategory === "animals") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Animal Type, Breed, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Heyvan növü seçin"
                options={ANIMAL_TYPES}
                value={filters.animalType}
                onChange={(value) => handleFilterChange("animalType", value)}
                icon="fa-solid fa-paw"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Cins seçin"
                options={ANIMAL_BREEDS}
                value={filters.breed}
                onChange={(value) => handleFilterChange("breed", value)}
                icon="fa-solid fa-dog"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            {/* Row 2: Age, Gender, Condition, Purpose */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Yaş seçin"
                options={ANIMAL_AGES}
                value={filters.age}
                onChange={(value) => handleFilterChange("age", value)}
                icon="fa-solid fa-birthday-cake"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Cins seçin"
                options={ANIMAL_GENDERS}
                value={filters.gender}
                onChange={(value) => handleFilterChange("gender", value)}
                icon="fa-solid fa-venus-mars"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={ANIMAL_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Məqsəd seçin"
                options={ANIMAL_PURPOSES}
                value={filters.purpose}
                onChange={(value) => handleFilterChange("purpose", value)}
                icon="fa-solid fa-target"
              />
            </div>

            {/* Row 3: More Filters */}
            {filters.showMoreFilters && (
              <>
                <div className="form-group for_width20 grow-1 order-9">
                  <Dropdown
                    placeholder="Kateqoriya seçin"
                    options={ANIMAL_CATEGORIES}
                    value={filters.category}
                    onChange={(value) => handleFilterChange("category", value)}
                    icon="fa-solid fa-list"
                  />
                </div>
              </>
            )}

            {/* Row 4: Filter Action Buttons */}
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

          <AnimalsFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // SPORTS CATEGORY
  if (actualCategory === "sports") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Sport Category, Product Type, Brand, Price */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="İdman növü seçin"
                options={SPORTS_CATEGORIES}
                value={filters.sportCategory}
                onChange={(value) => handleFilterChange("sportCategory", value)}
                icon="fa-solid fa-futbol"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Məhsul növü seçin"
                options={SPORTS_PRODUCT_TYPES}
                value={filters.productType}
                onChange={(value) => handleFilterChange("productType", value)}
                icon="fa-solid fa-dumbbell"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-3">
              <Dropdown
                placeholder="Marka seçin"
                options={SPORTS_BRANDS}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                icon="fa-solid fa-tag"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-4">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            {/* Row 2: City, Condition, Size, Sport Type */}
            <div className="form-group for_width20 grow-1 order-5">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={SPORTS_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="Ölçü seçin"
                options={SPORTS_SIZES}
                value={filters.size}
                onChange={(value) => handleFilterChange("size", value)}
                icon="fa-solid fa-ruler"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="İdman tipi seçin"
                options={SPORTS_TYPES}
                value={filters.sportType}
                onChange={(value) => handleFilterChange("sportType", value)}
                icon="fa-solid fa-trophy"
              />
            </div>

            {/* Row 4: Filter Action Buttons */}
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

          <SportsFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // FOOD CATEGORY (Template C - Minimal)
  if (actualCategory === "food") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Category, Price, City, Condition */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={FOOD_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-apple-alt"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-2">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-3">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={FOOD_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            {/* Row 2: Filter Action Buttons */}
            <div className="desc_filters_btns">
              <FilterButtons
                onReset={handleReset}
                onShowResults={handleShowResults}
                resultsCount={0}
                resetText="Sıfırla"
                showResultsText="Elanları göstər"
                hideMoreFilters={true}
              />
            </div>
          </div>

          <FoodFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // OTHER CATEGORY (Template C - Minimal)
  if (actualCategory === "other") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Category, Price, City, Condition */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={OTHER_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-boxes"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-2">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="₼"
                placeholder="Qiymət aralığı"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-3">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={OTHER_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            {/* Row 2: Filter Action Buttons */}
            <div className="desc_filters_btns">
              <FilterButtons
                onReset={handleReset}
                onShowResults={handleShowResults}
                resultsCount={0}
                resetText="Sıfırla"
                showResultsText="Elanları göstər"
                hideMoreFilters={true}
              />
            </div>
          </div>

          <OtherFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // FREE CATEGORY (Template C - No Price Filter)
  if (actualCategory === "free") {
    return (
      <>
        <div className="mobile-filter-trigger">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filtrlər</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Category, City, Condition */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Kateqoriya seçin"
                options={FREE_CATEGORIES}
                value={filters.category}
                onChange={(value) => handleFilterChange("category", value)}
                icon="fa-solid fa-gift"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-3">
              <div className="condition-filter">
                <div className="condition-label">Vəziyyət</div>
                <RadioGroup2
                  options={FREE_CONDITIONS}
                  value={filters.condition}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="horizontal"
                  variant="default"
                />
              </div>
            </div>

            {/* Row 2: Filter Action Buttons */}
            <div className="desc_filters_btns">
              <FilterButtons
                onReset={handleReset}
                onShowResults={handleShowResults}
                resultsCount={0}
                resetText="Sıfırla"
                showResultsText="Elanları göstər"
                hideMoreFilters={true}
              />
            </div>
          </div>

          <FreeFilterDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            filters={filters}
            onApplyFilters={handleMobileFiltersApply}
            resultsCount={0}
          />
        </div>
      </>
    );
  }

  // ============================================================================
  // FALLBACK FOR UNMAPPED CATEGORIES
  // ============================================================================
  return (
    <div
      className="filter-fallback"
      style={{ padding: "20px", backgroundColor: "#f9f9f9", margin: "20px" }}
    >
      <h3>🚧 Filter Development Status</h3>
      <p>
        <strong>URL Category:</strong> "{category}"
      </p>
      <p>
        <strong>Mapped Category:</strong> "{actualCategory}"
      </p>
      <p>
        <strong>Current Filters:</strong>
      </p>
      <pre
        style={{ backgroundColor: "#fff", padding: "10px", fontSize: "12px" }}
      >
        {JSON.stringify(filters, null, 2)}
      </pre>
      <p>✅ This means the category mapping is working correctly!</p>
      <p>🔧 Just need to implement the filter UI for this category.</p>
    </div>
  );
};

export default FilterManager;
