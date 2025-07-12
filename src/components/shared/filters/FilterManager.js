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
import JobsFilterDrawer from "@/components/features/jobs/filters/JobsFilterDrawer";
import { AreaRangeFilter, FloorRangeFilter } from "@/components/shared/filters";

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
import RealEstateFilterDrawer from "@/components/features/realestate/filters/RealEstateFilterDrawer";
// Add to existing imports
import {
  CLOTHING_TYPES,
  CLOTHING_BRANDS,
  CLOTHING_SIZES,
  CLOTHING_COLORS,
  CLOTHING_GENDER,
  CLOTHING_CONDITIONS,
  CLOTHING_MATERIALS,
  CLOTHING_SEASONS,
  CLOTHING_DEFAULT_FILTERS,
} from "../../../utils/constants/clothingConstants";
import ClothingFilterDrawer from "../../features/clothing/filters/ClothingFilterDrawer";

const FilterManager = ({ category, onFiltersChange, initialFilters = {} }) => {
  // Map slug to actual category ID for filter components
  const actualCategory = getFilterCategoryId(category);

  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Get configuration for this category
  const config = useFilterConfig(actualCategory);

  const [filters, setFilters] = useState({
    // Vehicle filters
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

    // Electronics filters
    category: "",
    storage: [],
    ram: [],
    os: "",
    screenSize: [],
    connectivity: [],

    // Jobs filters
    activityField: "",
    workSchedule: "all",
    salaryMin: "",
    salaryMax: "",
    experience: "all",
    education: "all",
    jobType: "all",
    companyType: "all",
    benefits: [],
    workEnvironment: [],

    // Real Estate filters
    transactionType: "sale",
    propertyType: "",
    rooms: "",
    areaMin: "",
    areaMax: "",
    floorMin: "",
    floorMax: "",
    renovation: "all",
    metro: "",
    district: "",
    heating: "",
    amenities: [],
    features: [],

    // Common
    showMoreFilters: false,
    ...initialFilters,
  });

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
      // Vehicle filters
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

      // Electronics filters
      category: "",
      storage: [],
      ram: [],
      os: "",
      screenSize: [],
      connectivity: [],

      // Jobs filters
      activityField: "",
      workSchedule: "all",
      salaryMin: "",
      salaryMax: "",
      experience: "all",
      education: "all",
      jobType: "all",
      companyType: "all",
      benefits: [],
      workEnvironment: [],

      // Real Estate filters
      transactionType: "sale",
      propertyType: "",
      rooms: "",
      areaMin: "",
      areaMax: "",
      floorMin: "",
      floorMax: "",
      renovation: "all",
      metro: "",
      district: "",
      heating: "",
      amenities: [],
      features: [],

      // Common
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

  // Jobs category - EXACT same structure as vehicles and electronics
  if (actualCategory === "jobs") {
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

        {/* Desktop Filters - EXACT Vehicle Structure for Jobs */}
        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Activity Field, Work Schedule, Salary Range, City - SAME layout as vehicles */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Fəaliyyət sahəsi"
                options={ACTIVITY_FIELDS}
                value={filters.activityField}
                onChange={(value) => handleFilterChange("activityField", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="İş qrafiki"
                options={WORK_SCHEDULES}
                value={filters.workSchedule}
                onChange={(value) => handleFilterChange("workSchedule", value)}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.salaryMin}
                maxValue={filters.salaryMax}
                onMinChange={(value) => handleFilterChange("salaryMin", value)}
                onMaxChange={(value) => handleFilterChange("salaryMax", value)}
                placeholder={{ min: "Min maaş", max: "Max maaş" }}
                currency="AZN"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər"
              />
            </div>

            {/* Row 2: Experience, Education, Job Type, Company Type - SAME layout */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="İş təcrübəsi"
                options={WORK_EXPERIENCE}
                value={filters.experience}
                onChange={(value) => handleFilterChange("experience", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-6">
              <Dropdown
                placeholder="Təhsil"
                options={EDUCATION_LEVELS}
                value={filters.education}
                onChange={(value) => handleFilterChange("education", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-7">
              <Dropdown
                placeholder="İş növü"
                options={JOB_TYPES}
                value={filters.jobType}
                onChange={(value) => handleFilterChange("jobType", value)}
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Şirkət növü"
                options={COMPANY_TYPES}
                value={filters.companyType}
                onChange={(value) => handleFilterChange("companyType", value)}
              />
            </div>

            {/* Advanced Filters Section - SAME as vehicles equipment section */}
            {filters.showMoreFilters && (
              <>
                {/* Job Benefits - SAME structure as vehicle equipment */}
                <div className="additional_chekings_hero order-9">
                  <div className="additional_chekings_title">
                    Təklif olunan imkanlar
                  </div>
                  <div className="additional_chekings">
                    <div className="equipment-category">
                      <div className="equipment-category-title">
                        Sosial paket
                      </div>
                      <CheckboxGroup
                        options={JOB_BENEFITS}
                        values={filters.benefits}
                        onChange={(values) =>
                          handleFilterChange("benefits", values)
                        }
                        name="benefits"
                        layout="horizontal"
                        variant="default"
                      />
                    </div>
                  </div>
                </div>

                {/* Work Environment - SAME structure as vehicle equipment */}
                <div className="additional_chekings_hero order-10">
                  <div className="additional_chekings_title">İş mühiti</div>
                  <div className="additional_chekings">
                    <div className="equipment-category">
                      <CheckboxGroup
                        options={WORK_ENVIRONMENT}
                        values={filters.workEnvironment}
                        onChange={(values) =>
                          handleFilterChange("workEnvironment", values)
                        }
                        name="workEnvironment"
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
              moreFiltersVisible={filters.showMoreFilters}
              activeFiltersCount={getActiveFiltersCount()}
            />
          </div>
        </div>

        {/* Mobile Filter Drawer - Same pattern as vehicles */}
        <JobsFilterDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          filters={filters}
          onApplyFilters={handleMobileFiltersApply}
          resultsCount={getActiveFiltersCount()}
        />
      </>
    );
  }

  // Real Estate category - EXACT same structure as vehicles/electronics/jobs
  if (actualCategory === "realestate") {
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
            {/* Row 1: Deal Type, Property Type, Price Range, City - SAME as vehicles row 1 */}
            <div className="form-group for_width20 grow-1 order-1">
              <RadioGroup2
                options={[
                  { value: "sale", label: "Alış" },
                  { value: "rent", label: "Kirayə" },
                ]}
                value={filters.dealType || "sale"}
                onChange={(value) => handleFilterChange("dealType", value)}
                name="dealType"
                layout="horizontal"
                variant="default"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-2">
              <Dropdown
                placeholder="Əmlak növü"
                options={PROPERTY_TYPES}
                value={filters.propertyType}
                onChange={(value) => handleFilterChange("propertyType", value)}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-3">
              <PriceRangeFilter
                minValue={filters.priceMin}
                maxValue={filters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="AZN"
                minPlaceholder="Min qiymət"
                maxPlaceholder="Max qiymət"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-4">
              <LocationFilter
                value={filters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər"
              />
            </div>

            {/* Row 2: Rooms, Area Range, Floor Range, Condition - SAME as vehicles row 2 */}
            <div className="form-group for_width20 grow-1 order-5">
              <Dropdown
                placeholder="Otaq sayı"
                options={ROOM_OPTIONS}
                value={filters.rooms}
                onChange={(value) => handleFilterChange("rooms", value)}
              />
            </div>

            <div className="form-group for_width_big grow-1 order-6">
              <PriceRangeFilter
                minValue={filters.areaMin}
                maxValue={filters.areaMax}
                onMinChange={(value) => handleFilterChange("areaMin", value)}
                onMaxChange={(value) => handleFilterChange("areaMax", value)}
                currency="m²"
                minPlaceholder="Min sahə"
                maxPlaceholder="Max sahə"
              />
            </div>

            <div className="form-group for_width_big grow-1 order-7">
              <PriceRangeFilter
                minValue={filters.floorMin}
                maxValue={filters.totalFloors}
                onMinChange={(value) => handleFilterChange("floorMin", value)}
                onMaxChange={(value) =>
                  handleFilterChange("totalFloors", value)
                }
                currency=""
                minPlaceholder="Mərtəbə"
                maxPlaceholder="Ümumi mərtəbə"
              />
            </div>

            <div className="form-group for_width20 grow-1 order-8">
              <Dropdown
                placeholder="Təmir vəziyyəti"
                options={RENOVATION_CONDITIONS}
                value={filters.condition}
                onChange={(value) => handleFilterChange("condition", value)}
              />
            </div>

            {/* Row 3: Progressive disclosure "More Filters" - Each filter gets its own column */}
            {filters.showMoreFilters && (
              <>
                {/* Metro Station */}
                <div className="form-group for_width20 grow-1 order-9">
                  <Dropdown
                    placeholder="Metro stansiyası"
                    options={getMetroStationsForCity(filters.city || "baku")}
                    value={filters.metro}
                    onChange={(value) => handleFilterChange("metro", value)}
                  />
                </div>

                {/* District */}
                <div className="form-group for_width20 grow-1 order-10">
                  <Dropdown
                    placeholder="Rayon"
                    options={getDistrictsForCity(filters.city || "baku")}
                    value={filters.district}
                    onChange={(value) => handleFilterChange("district", value)}
                  />
                </div>

                {/* Building Type */}
                <div className="form-group for_width20 grow-1 order-11">
                  <RadioGroup2
                    options={[
                      { value: "all", label: "Hamısı" },
                      { value: "new", label: "Yeni tikili" },
                      { value: "old", label: "Köhnə tikili" },
                    ]}
                    value={filters.buildingType || "all"}
                    onChange={(value) =>
                      handleFilterChange("buildingType", value)
                    }
                    name="buildingType"
                    layout="horizontal"
                    variant="default"
                  />
                </div>

                {/* Property Features - Full width row */}
                <div className="form-group for_width_full grow-1 order-12">
                  <div className="additional_chekings_hero">
                    <div className="additional_chekings_title">
                      Əmlak xüsusiyyətləri
                    </div>
                    <div className="additional_chekings">
                      <div className="equipment-categories">
                        <div className="equipment-category">
                          <div className="equipment-category-title">
                            Əmlak xüsusiyyətləri
                          </div>
                          <div className="checkbox-group-horizontal">
                            {PROPERTY_AMENITIES.map((amenity) => (
                              <div
                                key={amenity.value}
                                className="checkbox-group-item"
                              >
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={(filters.amenities || []).includes(
                                      amenity.value
                                    )}
                                    onChange={(e) => {
                                      const currentAmenities =
                                        filters.amenities || [];
                                      const newAmenities = e.target.checked
                                        ? [...currentAmenities, amenity.value]
                                        : currentAmenities.filter(
                                            (item) => item !== amenity.value
                                          );
                                      handleFilterChange(
                                        "amenities",
                                        newAmenities
                                      );
                                    }}
                                  />
                                  {amenity.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="equipment-category">
                          <div className="equipment-category-title">
                            Bina xüsusiyyətləri
                          </div>
                          <div className="checkbox-group-horizontal">
                            {BUILDING_FEATURES.map((feature) => (
                              <div
                                key={feature.value}
                                className="checkbox-group-item"
                              >
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={(
                                      filters.buildingFeatures || []
                                    ).includes(feature.value)}
                                    onChange={(e) => {
                                      const currentFeatures =
                                        filters.buildingFeatures || [];
                                      const newFeatures = e.target.checked
                                        ? [...currentFeatures, feature.value]
                                        : currentFeatures.filter(
                                            (item) => item !== feature.value
                                          );
                                      handleFilterChange(
                                        "buildingFeatures",
                                        newFeatures
                                      );
                                    }}
                                  />
                                  {feature.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Filter Action Buttons - OUTSIDE desctop_filters, EXACT same as vehicles */}
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

        {/* Mobile Bottom Drawer - Real Estate specific */}
        <RealEstateFilterDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          filters={filters}
          onApplyFilters={handleMobileFiltersApply}
          resultsCount={0}
        />
      </>
    );
  }

  // Clothing category - EXACT same structure as electronics and jobs
  if (actualCategory === "clothing") {
    return (
      <>
        {/* Mobile Filter Button - EXACT same as other categories */}
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

        {/* Desktop Filters Container */}
        <div className="main_container">
          <div className="desctop_filters">
            {/* Row 1: Clothing Type, Brand, Price, City */}
            <div className="form-group for_width20 grow-1 order-1">
              <Dropdown
                placeholder="Geyim növü seçin"
                options={CLOTHING_TYPES}
                value={filters.clothingType}
                onChange={(value) => handleFilterChange("clothingType", value)}
                icon="fa-solid fa-shirt"
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
                placeholder={{ min: "Min qiymət", max: "Max qiymət" }}
                currency="₼"
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

            {/* Row 3: More Filters Section */}
            {filters.showMoreFilters && (
              <>
                {/* Material and Season Filters */}
                <div className="form-group for_width20 grow-1 order-9">
                  <Dropdown
                    placeholder="Material seçin"
                    options={CLOTHING_MATERIALS}
                    value={filters.material}
                    onChange={(value) => handleFilterChange("material", value)}
                    icon="fa-solid fa-scroll"
                  />
                </div>

                <div className="form-group for_width20 grow-1 order-10">
                  <Dropdown
                    placeholder="Mövsüm seçin"
                    options={CLOTHING_SEASONS}
                    value={filters.season}
                    onChange={(value) => handleFilterChange("season", value)}
                    icon="fa-solid fa-calendar"
                  />
                </div>

                {/* Delivery Option */}
                <div className="form-group for_width20 grow-1 order-11">
                  <div className="delivery-filter">
                    <div className="delivery-label">Çatdırılma</div>
                    <RadioGroup2
                      options={[
                        { value: "yes", label: "Bəli" },
                        { value: "no", label: "Xeyr" },
                        { value: "all", label: "Hamısı" },
                      ]}
                      value={filters.delivery}
                      onChange={(value) =>
                        handleFilterChange("delivery", value)
                      }
                      name="delivery"
                      layout="horizontal"
                      variant="default"
                    />
                  </div>
                </div>

                {/* Empty slot for symmetry */}
                <div className="form-group for_width20 grow-1 order-12"></div>
              </>
            )}
          </div>

          {/* Filter Action Buttons - EXACT same as other categories */}
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

        {/* Mobile Bottom Drawer - Clothing specific */}
        <ClothingFilterDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          filters={filters}
          onApplyFilters={handleMobileFiltersApply}
          resultsCount={0}
        />
      </>
    );
  }

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
