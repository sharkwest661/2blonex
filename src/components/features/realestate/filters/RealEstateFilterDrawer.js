// Replace RealEstateFilterDrawer.js with this PROPERLY STYLED version:

"use client";
import React, { useState, useEffect } from "react";
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
  PROPERTY_TYPE_ICONS,
} from "../constants";
import BottomDrawer from "@/components/ui/BottomDrawer";

export default function RealEstateFilterDrawer({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount = 0,
}) {
  // Local state for filters - SAME pattern as other drawers
  const [localFilters, setLocalFilters] = useState({
    transactionType: "sale",
    propertyType: "",
    rooms: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    floorMin: "",
    floorMax: "",
    renovation: "all",
    city: "",
    metro: "",
    district: "",
    heating: "",
    amenities: [],
    features: [],
    showMoreFilters: false,
  });

  // Sync with parent filters when drawer opens
  useEffect(() => {
    if (isOpen && filters) {
      setLocalFilters({ ...localFilters, ...filters });
    }
  }, [isOpen, filters]);

  // Local filter change handler
  const handleLocalFilterChange = (field, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Apply filters and close drawer
  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  // Reset all filters
  const handleReset = () => {
    const resetFilters = {
      transactionType: "sale",
      propertyType: "",
      rooms: "",
      priceMin: "",
      priceMax: "",
      areaMin: "",
      areaMax: "",
      floorMin: "",
      floorMax: "",
      renovation: "all",
      city: "",
      metro: "",
      district: "",
      heating: "",
      amenities: [],
      features: [],
      showMoreFilters: false,
    };
    setLocalFilters(resetFilters);
  };

  return (
    <BottomDrawer isOpen={isOpen} onClose={onClose}>
      {/* Header - SAME as other drawers */}
      <div className="filter-drawer-header">
        <button className="filter-drawer-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="filter-drawer-title">Əmlak Filterləri</h3>
        <button className="filter-drawer-reset" onClick={handleReset}>
          Sıfırla
        </button>
      </div>

      {/* Filter Content */}
      <div className="filter-drawer-content">
        {/* Transaction Type Section */}
        <FilterSection
          title="Əməliyyat növü"
          isExpanded={true}
          onToggle={() => {}}
        >
          <RadioFilter
            options={TRANSACTION_TYPES}
            value={localFilters.transactionType}
            onChange={(value) =>
              handleLocalFilterChange("transactionType", value)
            }
            name="transactionType"
          />
        </FilterSection>

        {/* Property Type Carousel - SPECIAL for Real Estate */}
        <FilterSection title="Əmlak növü" isExpanded={true} onToggle={() => {}}>
          <div className="emlak_checks_carusel">
            {PROPERTY_TYPES.filter((type) => type.value !== "all").map(
              (type) => (
                <div
                  key={type.value}
                  className={`property-type-card ${
                    localFilters.propertyType === type.value ? "active" : ""
                  }`}
                  onClick={() =>
                    handleLocalFilterChange("propertyType", type.value)
                  }
                >
                  <span className="property-type-icon">
                    {PROPERTY_TYPE_ICONS[type.value] || "🏗️"}
                  </span>
                  <span className="property-type-label">{type.label}</span>
                </div>
              )
            )}
          </div>
        </FilterSection>

        {/* Room Count */}
        <FilterSection title="Otaq sayı" isExpanded={true} onToggle={() => {}}>
          <DropdownFilter
            placeholder="Otaq sayı seçin"
            options={ROOM_COUNTS}
            value={localFilters.rooms}
            onChange={(value) => handleLocalFilterChange("rooms", value)}
          />
        </FilterSection>

        {/* Price Range - PROPERLY STYLED */}
        <FilterSection
          title="Qiymət aralığı (AZN)"
          isExpanded={true}
          onToggle={() => {}}
        >
          <div className="range-filter-group">
            <input
              type="number"
              placeholder="Min qiymət"
              value={localFilters.priceMin}
              onChange={(e) =>
                handleLocalFilterChange("priceMin", e.target.value)
              }
              className="filter-range-input"
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              placeholder="Max qiymət"
              value={localFilters.priceMax}
              onChange={(e) =>
                handleLocalFilterChange("priceMax", e.target.value)
              }
              className="filter-range-input"
            />
          </div>
        </FilterSection>

        {/* Area Range - PROPERLY STYLED */}
        <FilterSection title="Sahə (m²)" isExpanded={true} onToggle={() => {}}>
          <div className="range-filter-group">
            <input
              type="number"
              placeholder="Min sahə"
              value={localFilters.areaMin}
              onChange={(e) =>
                handleLocalFilterChange("areaMin", e.target.value)
              }
              className="filter-range-input"
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              placeholder="Max sahə"
              value={localFilters.areaMax}
              onChange={(e) =>
                handleLocalFilterChange("areaMax", e.target.value)
              }
              className="filter-range-input"
            />
          </div>
        </FilterSection>

        {/* Floor Range - PROPERLY STYLED */}
        <FilterSection title="Mərtəbə" isExpanded={true} onToggle={() => {}}>
          <div className="range-filter-group">
            <input
              type="number"
              placeholder="Min mərtəbə"
              value={localFilters.floorMin}
              onChange={(e) =>
                handleLocalFilterChange("floorMin", e.target.value)
              }
              className="filter-range-input"
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              placeholder="Max mərtəbə"
              value={localFilters.floorMax}
              onChange={(e) =>
                handleLocalFilterChange("floorMax", e.target.value)
              }
              className="filter-range-input"
            />
          </div>
        </FilterSection>

        {/* Property Condition */}
        <FilterSection
          title="Təmir vəziyyəti"
          isExpanded={true}
          onToggle={() => {}}
        >
          <RadioFilter
            options={PROPERTY_CONDITIONS}
            value={localFilters.renovation}
            onChange={(value) => handleLocalFilterChange("renovation", value)}
            name="renovation"
          />
        </FilterSection>

        {/* Location - City */}
        <FilterSection title="Şəhər" isExpanded={true} onToggle={() => {}}>
          <input
            type="text"
            placeholder="Şəhər daxil edin"
            value={localFilters.city}
            onChange={(e) => handleLocalFilterChange("city", e.target.value)}
            className="filter-input"
          />
        </FilterSection>

        {/* More Filters Section */}
        {localFilters.showMoreFilters && (
          <>
            {/* Metro Station */}
            <FilterSection
              title="Metro stansiyası"
              isExpanded={true}
              onToggle={() => {}}
            >
              <DropdownFilter
                placeholder="Metro seçin"
                options={METRO_STATIONS}
                value={localFilters.metro}
                onChange={(value) => handleLocalFilterChange("metro", value)}
              />
            </FilterSection>

            {/* District */}
            <FilterSection title="Rayon" isExpanded={true} onToggle={() => {}}>
              <DropdownFilter
                placeholder="Rayon seçin"
                options={DISTRICTS}
                value={localFilters.district}
                onChange={(value) => handleLocalFilterChange("district", value)}
              />
            </FilterSection>

            {/* Heating Type */}
            <FilterSection
              title="İstilik sistemi"
              isExpanded={true}
              onToggle={() => {}}
            >
              <DropdownFilter
                placeholder="İstilik sistemi seçin"
                options={HEATING_TYPES}
                value={localFilters.heating}
                onChange={(value) => handleLocalFilterChange("heating", value)}
              />
            </FilterSection>

            {/* Property Amenities */}
            <FilterSection
              title="Əmlak imkanları"
              isExpanded={true}
              onToggle={() => {}}
            >
              <div className="amenity-category">
                <CheckboxFilter
                  options={PROPERTY_AMENITIES}
                  values={localFilters.amenities}
                  onChange={(values) =>
                    handleLocalFilterChange("amenities", values)
                  }
                />
              </div>
            </FilterSection>

            {/* Property Features */}
            <FilterSection
              title="Əlavə imkanlar"
              isExpanded={true}
              onToggle={() => {}}
            >
              <div className="amenity-category">
                <CheckboxFilter
                  options={PROPERTY_FEATURES}
                  values={localFilters.features}
                  onChange={(values) =>
                    handleLocalFilterChange("features", values)
                  }
                />
              </div>
            </FilterSection>
          </>
        )}
      </div>

      {/* More Filters Toggle - SAME as other drawers */}
      <div className="more-filters-toggle">
        <button
          className="more-filters-btn"
          onClick={() =>
            handleLocalFilterChange(
              "showMoreFilters",
              !localFilters.showMoreFilters
            )
          }
        >
          <span>
            {localFilters.showMoreFilters ? "Daha az filtr" : "Daha çox filtr"}
          </span>
          <i
            className={`fas fa-chevron-${
              localFilters.showMoreFilters ? "up" : "down"
            }`}
          ></i>
        </button>
      </div>

      {/* Footer - SAME as other drawers */}
      <div className="filter-drawer-footer">
        <button
          className="apply-filters-btn"
          onClick={handleApply}
          disabled={false}
        >
          Elanları göstər ({resultsCount})
        </button>
      </div>

      {/* Reset Button - Proper styling */}
      <div className="filter-reset-section">
        <button className="reset-filters-mobile" onClick={handleReset}>
          Sıfırla
        </button>
      </div>
    </BottomDrawer>
  );
}

// Reusable Components - SAME as other successful drawers

function FilterSection({ title, children, isExpanded, onToggle }) {
  return (
    <div className="mobile-filter-item">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function DropdownFilter({
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
}) {
  return (
    <select
      className="filter-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function RadioFilter({ options, value, onChange, name }) {
  return (
    <div className="filter-radio-group">
      {options.map((option) => (
        <label key={option.value} className="filter-radio-item">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="filter-radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function CheckboxFilter({ options, values, onChange }) {
  const handleChange = (optionValue, checked) => {
    const newValues = checked
      ? [...values, optionValue]
      : values.filter((v) => v !== optionValue);
    onChange(newValues);
  };

  return (
    <div className="filter-checkbox-group">
      {options.map((option) => (
        <label key={option.value} className="filter-checkbox-item">
          <input
            type="checkbox"
            value={option.value}
            checked={values.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
          />
          <span className="filter-checkbox-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
