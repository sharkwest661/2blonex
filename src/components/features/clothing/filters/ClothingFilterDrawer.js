"use client";

import { useState } from "react";
import FilterSection from "@/components/shared/filters/FilterSection";
import { Dropdown, RadioGroup2 } from "@/components/ui/forms";
import { LocationFilter, PriceRangeFilter } from "@/components/shared/filters";
import {
  CLOTHING_TYPES,
  CLOTHING_BRANDS,
  CLOTHING_SIZES,
  CLOTHING_COLORS,
  CLOTHING_GENDER,
  CLOTHING_CONDITIONS,
  CLOTHING_MATERIALS,
  CLOTHING_SEASONS,
} from "@/utils/constants/clothingConstants";

export default function ClothingFilterDrawer({
  isOpen,
  onClose,
  filters = {},
  onApplyFilters,
  resultsCount = 0,
}) {
  const [localFilters, setLocalFilters] = useState(filters);
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    details: false,
    material: false,
    delivery: false,
  });

  const handleFilterChange = (key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      clothingType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      size: "",
      color: "",
      condition: "",
      gender: "",
      material: "",
      season: "",
      delivery: "",
      showMoreFilters: false,
    };
    setLocalFilters(resetFilters);
  };

  if (!isOpen) return null;

  return (
    <div className="filter-drawer-overlay">
      <div className="filter-drawer">
        {/* Header */}
        <div className="filter-drawer-header">
          <button className="filter-drawer-close" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h3 className="filter-drawer-title">Geyim Filtrləri</h3>
          <button className="filter-drawer-reset" onClick={handleReset}>
            Sıfırla
          </button>
        </div>

        {/* Content */}
        <div className="filter-drawer-content">
          {/* Basic Filters */}
          <FilterSection
            title="Əsas Filtrlar"
            isExpanded={expandedSections.basic}
            onToggle={() => toggleSection("basic")}
          >
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <Dropdown
                placeholder="Geyim növü seçin"
                options={CLOTHING_TYPES}
                value={localFilters.clothingType}
                onChange={(value) => handleFilterChange("clothingType", value)}
              />
            </div>
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <Dropdown
                placeholder="Marka seçin"
                options={CLOTHING_BRANDS}
                value={localFilters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
              />
            </div>
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <PriceRangeFilter
                minValue={localFilters.priceMin}
                maxValue={localFilters.priceMax}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                placeholder={{ min: "Min qiymət", max: "Max qiymət" }}
                currency="₼"
              />
            </div>
            <div className="filter-group">
              <LocationFilter
                value={localFilters.city}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər seçin"
              />
            </div>
          </FilterSection>

          {/* Details Filters */}
          <FilterSection
            title="Təfərrüatlar"
            isExpanded={expandedSections.details}
            onToggle={() => toggleSection("details")}
          >
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <Dropdown
                placeholder="Ölçü seçin"
                options={CLOTHING_SIZES}
                value={localFilters.size}
                onChange={(value) => handleFilterChange("size", value)}
              />
            </div>
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <Dropdown
                placeholder="Rəng seçin"
                options={CLOTHING_COLORS}
                value={localFilters.color}
                onChange={(value) => handleFilterChange("color", value)}
              />
            </div>
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <Dropdown
                placeholder="Cins seçin"
                options={CLOTHING_GENDER}
                value={localFilters.gender}
                onChange={(value) => handleFilterChange("gender", value)}
              />
            </div>
            <div className="filter-group">
              <label className="filter-label">Vəziyyət</label>
              <RadioGroup2
                options={CLOTHING_CONDITIONS}
                value={localFilters.condition}
                onChange={(value) => handleFilterChange("condition", value)}
                name="condition-mobile"
                layout="vertical"
                variant="mobile"
              />
            </div>
          </FilterSection>

          {/* Material & Season */}
          <FilterSection
            title="Material və Mövsüm"
            isExpanded={expandedSections.material}
            onToggle={() => toggleSection("material")}
          >
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <Dropdown
                placeholder="Material seçin"
                options={CLOTHING_MATERIALS}
                value={localFilters.material}
                onChange={(value) => handleFilterChange("material", value)}
              />
            </div>
            <div className="filter-group">
              <Dropdown
                placeholder="Mövsüm seçin"
                options={CLOTHING_SEASONS}
                value={localFilters.season}
                onChange={(value) => handleFilterChange("season", value)}
              />
            </div>
          </FilterSection>

          {/* Delivery */}
          <FilterSection
            title="Çatdırılma"
            isExpanded={expandedSections.delivery}
            onToggle={() => toggleSection("delivery")}
          >
            <RadioGroup2
              options={[
                { value: "yes", label: "Bəli" },
                { value: "no", label: "Xeyr" },
                { value: "all", label: "Hamısı" },
              ]}
              value={localFilters.delivery}
              onChange={(value) => handleFilterChange("delivery", value)}
              name="delivery-mobile"
              layout="vertical"
              variant="mobile"
            />
          </FilterSection>
        </div>

        {/* Footer */}
        <div className="filter-drawer-footer">
          <button className="filter-drawer-apply" onClick={handleApply}>
            <i className="fa-solid fa-check"></i>
            Elanları göstər ({resultsCount})
          </button>
        </div>
      </div>
    </div>
  );
}
