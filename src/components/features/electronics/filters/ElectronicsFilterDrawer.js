// src/components/features/electronics/filters/ElectronicsFilterDrawer.js
"use client";
import React, { useState, useEffect } from "react";
import BottomDrawer from "@/components/ui/BottomDrawer";
import {
  ELECTRONICS_CATEGORIES,
  ELECTRONICS_BRANDS,
  ELECTRONICS_CONDITIONS,
  STORAGE_OPTIONS,
  RAM_OPTIONS,
  OPERATING_SYSTEMS,
  SCREEN_SIZES,
  CONNECTIVITY_OPTIONS,
} from "../constants";

export default function ElectronicsFilterDrawer({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount = 0,
}) {
  const [localFilters, setLocalFilters] = useState(filters || {});
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    price: true,
    condition: true,
    city: true,
    delivery: true,
    storage: false,
    ram: false,
    os: false,
    screenSize: false,
    connectivity: false,
  });

  // Update local filters when props change
  useEffect(() => {
    setLocalFilters(filters || {});
  }, [filters]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (field, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value,
      // Reset brand when category changes
      ...(field === "category" && { brand: "" }),
    }));
  };

  const handleReset = () => {
    const resetFilters = {
      category: "all",
      brand: "",
      priceMin: "",
      priceMax: "",
      condition: "all",
      city: "",
      delivery: "all",
      storage: [],
      ram: [],
      os: "",
      screenSize: [],
      connectivity: [],
      showMoreFilters: false,
    };
    setLocalFilters(resetFilters);
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  // Action button for bottom drawer
  const actionButton = (
    <button className="bottom-drawer-apply-btn" onClick={handleApply}>
      Elanları göstər {resultsCount > 0 && `(${resultsCount})`}
    </button>
  );

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="Elektronika Filter"
      actionButton={actionButton}
      className="electronics-filter-bottom-drawer"
    >
      {/* Filter Sections */}
      <div className="filter-sections">
        {/* Category Filter */}
        <FilterSection
          title="Malın tipi"
          isExpanded={expandedSections.category}
          onToggle={() => toggleSection("category")}
        >
          <DropdownFilter
            placeholder="Malın tipi seçin"
            options={ELECTRONICS_CATEGORIES}
            value={localFilters.category}
            onChange={(value) => handleFilterChange("category", value)}
          />
        </FilterSection>

        {/* Brand Filter */}
        <FilterSection
          title="Marka"
          isExpanded={expandedSections.brand}
          onToggle={() => toggleSection("brand")}
        >
          <DropdownFilter
            placeholder="Marka seçin"
            options={ELECTRONICS_BRANDS}
            value={localFilters.brand}
            onChange={(value) => handleFilterChange("brand", value)}
          />
        </FilterSection>

        {/* Price Range Filter */}
        <FilterSection
          title="Qiymət"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection("price")}
        >
          <div className="filter-range-group">
            <input
              type="number"
              className="filter-range-input"
              placeholder="Min qiymət"
              value={localFilters.priceMin}
              onChange={(e) => handleFilterChange("priceMin", e.target.value)}
            />
            <span className="filter-range-separator">-</span>
            <input
              type="number"
              className="filter-range-input"
              placeholder="Max qiymət"
              value={localFilters.priceMax}
              onChange={(e) => handleFilterChange("priceMax", e.target.value)}
            />
          </div>
        </FilterSection>

        {/* Condition Filter */}
        <FilterSection
          title="Vəziyyət"
          isExpanded={expandedSections.condition}
          onToggle={() => toggleSection("condition")}
        >
          <DropdownFilter
            placeholder="Vəziyyət seçin"
            options={ELECTRONICS_CONDITIONS}
            value={localFilters.condition}
            onChange={(value) => handleFilterChange("condition", value)}
          />
        </FilterSection>

        {/* City Filter */}
        <FilterSection
          title="Şəhər"
          isExpanded={expandedSections.city}
          onToggle={() => toggleSection("city")}
        >
          <DropdownFilter
            placeholder="Şəhər seçin"
            options={[
              { value: "", label: "Bütün şəhərlər" },
              { value: "baku", label: "Bakı" },
              { value: "ganja", label: "Gəncə" },
              { value: "sumqayit", label: "Sumqayıt" },
              { value: "mingachevir", label: "Mingəçevir" },
              { value: "shirvan", label: "Şirvan" },
            ]}
            value={localFilters.city}
            onChange={(value) => handleFilterChange("city", value)}
          />
        </FilterSection>

        {/* Delivery Filter */}
        <FilterSection
          title="Çatdırılma"
          isExpanded={expandedSections.delivery}
          onToggle={() => toggleSection("delivery")}
        >
          <RadioFilter
            options={[
              { value: "all", label: "Hamısı" },
              { value: "yes", label: "Bəli" },
              { value: "no", label: "Xeyr" },
            ]}
            value={localFilters.delivery || "all"}
            onChange={(value) => handleFilterChange("delivery", value)}
            name="delivery"
          />
        </FilterSection>

        {/* Advanced Filters - Only show if showMoreFilters is true */}
        {localFilters.showMoreFilters && (
          <>
            {/* Storage Filter */}
            <FilterSection
              title="Yaddaş həcmi"
              isExpanded={expandedSections.storage}
              onToggle={() => toggleSection("storage")}
            >
              <CheckboxFilter
                options={STORAGE_OPTIONS}
                values={localFilters.storage || []}
                onChange={(values) => handleFilterChange("storage", values)}
              />
            </FilterSection>

            {/* RAM Filter */}
            <FilterSection
              title="RAM"
              isExpanded={expandedSections.ram}
              onToggle={() => toggleSection("ram")}
            >
              <CheckboxFilter
                options={RAM_OPTIONS}
                values={localFilters.ram || []}
                onChange={(values) => handleFilterChange("ram", values)}
              />
            </FilterSection>

            {/* Operating System Filter */}
            <FilterSection
              title="Əməliyyat sistemi"
              isExpanded={expandedSections.os}
              onToggle={() => toggleSection("os")}
            >
              <RadioFilter
                options={OPERATING_SYSTEMS}
                value={localFilters.os || ""}
                onChange={(value) => handleFilterChange("os", value)}
                name="os"
              />
            </FilterSection>

            {/* Screen Size Filter */}
            <FilterSection
              title="Ekran ölçüsü"
              isExpanded={expandedSections.screenSize}
              onToggle={() => toggleSection("screenSize")}
            >
              <CheckboxFilter
                options={SCREEN_SIZES}
                values={localFilters.screenSize || []}
                onChange={(values) => handleFilterChange("screenSize", values)}
              />
            </FilterSection>

            {/* Connectivity Filter */}
            <FilterSection
              title="Əlaqə"
              isExpanded={expandedSections.connectivity}
              onToggle={() => toggleSection("connectivity")}
            >
              <CheckboxFilter
                options={CONNECTIVITY_OPTIONS}
                values={localFilters.connectivity || []}
                onChange={(values) =>
                  handleFilterChange("connectivity", values)
                }
              />
            </FilterSection>
          </>
        )}
      </div>

      {/* More Filters Toggle - Proper styling */}
      <div className="filter-more-toggle">
        <button
          className="more-filters-toggle-mobile"
          onClick={() =>
            handleFilterChange("showMoreFilters", !localFilters.showMoreFilters)
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

      {/* Reset Button - Proper styling */}
      <div className="filter-reset-section">
        <button className="reset-filters-mobile" onClick={handleReset}>
          Sıfırla
        </button>
      </div>
    </BottomDrawer>
  );
}

// FilterSection Component - SAME as vehicles
function FilterSection({ title, children, isExpanded, onToggle }) {
  return (
    <div className="filter-section">
      <button className="filter-section-header" onClick={onToggle}>
        <span className="filter-section-title">{title}</span>
        <i className={`fa-solid fa-chevron-${isExpanded ? "up" : "down"}`}></i>
      </button>
      {isExpanded && <div className="filter-section-content">{children}</div>}
    </div>
  );
}

// DropdownFilter Component - SAME as vehicles
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

// RadioFilter Component - SAME as vehicles
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

// CheckboxFilter Component - SAME as vehicles
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
