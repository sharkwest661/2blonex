// src/components/features/vehicles/components/VehicleFilterBottomDrawer.js
import { useState } from "react";
import BottomDrawer from "@/components/ui/BottomDrawer";
import {
  CAR_BRANDS,
  CAR_MODELS,
  COLORS,
  FUEL_TYPES,
  BODY_TYPES,
  TRANSMISSIONS,
  CONDITION_OPTIONS,
  VEHICLE_EQUIPMENT,
  EQUIPMENT_CATEGORIES,
} from "../constants";

export default function VehicleFilterBottomDrawer({
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
      // Reset model when brand changes
      ...(key === "brand" && { model: "" }),
    }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
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
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  const getModelOptions = () => {
    return localFilters.brand ? CAR_MODELS[localFilters.brand] || [] : [];
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
        {/* Brand Filter */}
        <FilterSection
          title="Marka"
          isExpanded={expandedSections.brand}
          onToggle={() => toggleSection("brand")}
        >
          <DropdownFilter
            placeholder="Marka seçin"
            options={CAR_BRANDS}
            value={localFilters.brand}
            onChange={(value) => handleFilterChange("brand", value)}
          />
        </FilterSection>

        {/* Model Filter */}
        <FilterSection
          title="Model"
          isExpanded={expandedSections.model}
          onToggle={() => toggleSection("model")}
        >
          <DropdownFilter
            placeholder="Model seçin"
            options={getModelOptions()}
            value={localFilters.model}
            onChange={(value) => handleFilterChange("model", value)}
            disabled={!localFilters.brand}
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

        {/* Engine Volume Range Filter */}
        <FilterSection
          title="Mühərrikin həcmi (L)"
          isExpanded={expandedSections.volume}
          onToggle={() => toggleSection("volume")}
        >
          <div className="filter-range-group">
            <input
              type="number"
              className="filter-range-input"
              placeholder="Min həcm"
              step="0.1"
              value={localFilters.volumeMin}
              onChange={(e) => handleFilterChange("volumeMin", e.target.value)}
            />
            <span className="filter-range-separator">-</span>
            <input
              type="number"
              className="filter-range-input"
              placeholder="Max həcm"
              step="0.1"
              value={localFilters.volumeMax}
              onChange={(e) => handleFilterChange("volumeMax", e.target.value)}
            />
          </div>
        </FilterSection>

        {/* Year Range Filter */}
        <FilterSection
          title="İl"
          isExpanded={expandedSections.year}
          onToggle={() => toggleSection("year")}
        >
          <div className="filter-range-group">
            <input
              type="number"
              className="filter-range-input"
              placeholder="Min il"
              value={localFilters.yearMin}
              onChange={(e) => handleFilterChange("yearMin", e.target.value)}
            />
            <span className="filter-range-separator">-</span>
            <input
              type="number"
              className="filter-range-input"
              placeholder="Max il"
              value={localFilters.yearMax}
              onChange={(e) => handleFilterChange("yearMax", e.target.value)}
            />
          </div>
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
              { value: "mingachevir", label: "Mingəçevir" },
              { value: "lankaran", label: "Lənkəran" },
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

        {/* Mileage Range Filter */}
        <FilterSection
          title="Yürüş (km)"
          isExpanded={expandedSections.mileage}
          onToggle={() => toggleSection("mileage")}
        >
          <div className="filter-range-group">
            <input
              type="number"
              className="filter-range-input"
              placeholder="Min yürüş"
              value={localFilters.mileageMin}
              onChange={(e) => handleFilterChange("mileageMin", e.target.value)}
            />
            <span className="filter-range-separator">-</span>
            <input
              type="number"
              className="filter-range-input"
              placeholder="Max yürüş"
              value={localFilters.mileageMax}
              onChange={(e) => handleFilterChange("mileageMax", e.target.value)}
            />
          </div>
        </FilterSection>

        {/* Power Range Filter */}
        <FilterSection
          title="Güc (hp)"
          isExpanded={expandedSections.power}
          onToggle={() => toggleSection("power")}
        >
          <div className="filter-range-group">
            <input
              type="number"
              className="filter-range-input"
              placeholder="Min güc"
              value={localFilters.powerMin}
              onChange={(e) => handleFilterChange("powerMin", e.target.value)}
            />
            <span className="filter-range-separator">-</span>
            <input
              type="number"
              className="filter-range-input"
              placeholder="Max güc"
              value={localFilters.powerMax}
              onChange={(e) => handleFilterChange("powerMax", e.target.value)}
            />
          </div>
        </FilterSection>

        {/* Equipment/Features Filter */}
        <FilterSection
          title="Avadanlıq"
          isExpanded={expandedSections.equipment}
          onToggle={() => toggleSection("equipment")}
        >
          <CheckboxFilter
            options={VEHICLE_EQUIPMENT.slice(0, 12)} // Show first 12 equipment items
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
