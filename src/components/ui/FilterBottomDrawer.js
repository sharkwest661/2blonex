// src/components/ui/FilterBottomDrawer.js
import { useState } from "react";
import BottomDrawer from "./BottomDrawer";

// Import the actual data from vehicles constants
import {
  COLORS,
  FUEL_TYPES,
  BODY_TYPES,
  TRANSMISSIONS,
  CONDITION_OPTIONS,
  VEHICLE_EQUIPMENT,
  EQUIPMENT_CATEGORIES,
} from "@/components/features/vehicles/constants";

export default function FilterBottomDrawer({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount = 0,
}) {
  const [expandedSections, setExpandedSections] = useState({});
  const [localFilters, setLocalFilters] = useState(filters);

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleFilterChange = (key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = Object.keys(localFilters).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  const actionButton = (
    <button className="bottom-drawer-apply-btn" onClick={handleApply}>
      Elanları göstər {resultsCount > 0 && `(${resultsCount})`}
    </button>
  );

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="Filter"
      actionButton={actionButton}
      className="filter-bottom-drawer"
    >
      {/* Filter Sections */}
      <div className="filter-sections">
        {/* Color Filter */}
        <FilterSection
          title="Rəng"
          isExpanded={expandedSections.color}
          onToggle={() => toggleSection("color")}
        >
          <DropdownFilter
            placeholder="Rəng seçin"
            options={COLORS}
            value={localFilters.color}
            onChange={(value) => handleFilterChange("color", value)}
          />
        </FilterSection>

        {/* Fuel Type Filter */}
        <FilterSection
          title="Yanacaq növü"
          isExpanded={expandedSections.fuel}
          onToggle={() => toggleSection("fuel")}
        >
          <DropdownFilter
            placeholder="Yanacaq növü seçin"
            options={FUEL_TYPES}
            value={localFilters.fuel}
            onChange={(value) => handleFilterChange("fuel", value)}
          />
        </FilterSection>

        {/* Body Type Filter */}
        <FilterSection
          title="Ban növü"
          isExpanded={expandedSections.bodyType}
          onToggle={() => toggleSection("bodyType")}
        >
          <DropdownFilter
            placeholder="Ban növü seçin"
            options={BODY_TYPES}
            value={localFilters.bodyType}
            onChange={(value) => handleFilterChange("bodyType", value)}
          />
        </FilterSection>

        {/* Transmission Filter */}
        <FilterSection
          title="Sürətlər qutusu"
          isExpanded={expandedSections.transmission}
          onToggle={() => toggleSection("transmission")}
        >
          <DropdownFilter
            placeholder="Sürətlər qutusu seçin"
            options={TRANSMISSIONS}
            value={localFilters.transmission}
            onChange={(value) => handleFilterChange("transmission", value)}
          />
        </FilterSection>

        {/* Mileage Filter */}
        <FilterSection
          title="Yürüş"
          isExpanded={expandedSections.mileage}
          onToggle={() => toggleSection("mileage")}
        >
          <DropdownFilter
            placeholder="Yürüş seçin"
            options={[
              { value: "0-50000", label: "0 - 50,000 km" },
              { value: "50000-100000", label: "50,000 - 100,000 km" },
              { value: "100000-200000", label: "100,000 - 200,000 km" },
              { value: "200000+", label: "200,000+ km" },
            ]}
            value={localFilters.mileageMin}
            onChange={(value) => handleFilterChange("mileageMin", value)}
          />
        </FilterSection>

        {/* Year Filter */}
        <FilterSection
          title="İl"
          isExpanded={expandedSections.year}
          onToggle={() => toggleSection("year")}
        >
          <DropdownFilter
            placeholder="İl seçin"
            options={[
              { value: "2023-2024", label: "2023-2024" },
              { value: "2020-2022", label: "2020-2022" },
              { value: "2015-2019", label: "2015-2019" },
              { value: "2010-2014", label: "2010-2014" },
            ]}
            value={localFilters.yearMin}
            onChange={(value) => handleFilterChange("yearMin", value)}
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
              { value: "baku", label: "Bakı" },
              { value: "ganja", label: "Gəncə" },
              { value: "sumgait", label: "Sumqayıt" },
            ]}
            value={localFilters.city}
            onChange={(value) => handleFilterChange("city", value)}
          />
        </FilterSection>

        {/* Condition Filter - Radio buttons */}
        <FilterSection
          title="Vəziyyət"
          isExpanded={expandedSections.condition}
          onToggle={() => toggleSection("condition")}
        >
          <RadioFilter
            options={CONDITION_OPTIONS}
            value={localFilters.condition}
            onChange={(value) => handleFilterChange("condition", value)}
            name="condition"
          />
        </FilterSection>

        {/* Features Filter */}
        <FilterSection
          title="Xüsusiyyətlər"
          isExpanded={expandedSections.features}
          onToggle={() => toggleSection("features")}
        >
          <CheckboxFilter
            options={VEHICLE_EQUIPMENT.slice(0, 8)} // Show first 8 equipment items
            values={localFilters.equipment || []}
            onChange={(values) => handleFilterChange("equipment", values)}
          />
        </FilterSection>
      </div>

      {/* Reset Button */}
      <div className="filter-reset-section">
        <button className="filter-reset-btn" onClick={handleReset}>
          Sıfırla
        </button>
      </div>
    </BottomDrawer>
  );
}

// Filter Section Component
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

// Dropdown Filter Component
function DropdownFilter({ placeholder, options, value, onChange }) {
  return (
    <select
      className="filter-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
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

// Radio Filter Component
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

// Checkbox Filter Component
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
