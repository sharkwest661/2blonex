// src/components/features/electronics/filters/ElectronicsFilterDrawer.js
"use client";
import React, { useState } from "react";
import {
  Dropdown,
  FilterButtons,
  RadioGroup2,
  CheckboxGroup2,
} from "@/components/ui/forms";
import {
  PriceRangeFilter,
  LocationFilter,
  YearRangeFilter,
} from "@/components/shared/filters";
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
import "../styles/ElectronicsFilters.css";

const ElectronicsFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

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

  if (!isOpen) return null;

  return (
    <div className="mobile-filter-drawer">
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className="drawer-content">
        <div className="drawer-header">
          <h3>Filtr</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="drawer-body">
          {/* Basic Filters */}
          <div className="filter-section">
            <h4>Əsas filtrlər</h4>

            <div className="filter-group">
              <label>Kateqoriya</label>
              <Dropdown
                options={ELECTRONICS_CATEGORIES}
                value={localFilters.category || "all"}
                onChange={(value) => handleFilterChange("category", value)}
                placeholder="Kateqoriya"
              />
            </div>

            <div className="filter-group">
              <label>Marka</label>
              <Dropdown
                options={ELECTRONICS_BRANDS}
                value={localFilters.brand || ""}
                onChange={(value) => handleFilterChange("brand", value)}
                placeholder="Marka"
              />
            </div>

            <div className="filter-group">
              <label>Qiymət</label>
              <PriceRangeFilter
                minValue={localFilters.priceMin || ""}
                maxValue={localFilters.priceMax || ""}
                onMinChange={(value) => handleFilterChange("priceMin", value)}
                onMaxChange={(value) => handleFilterChange("priceMax", value)}
                currency="AZN"
              />
            </div>

            <div className="filter-group">
              <label>Vəziyyət</label>
              <Dropdown
                options={ELECTRONICS_CONDITIONS}
                value={localFilters.condition || "all"}
                onChange={(value) => handleFilterChange("condition", value)}
                placeholder="Vəziyyət"
              />
            </div>

            <div className="filter-group">
              <label>Şəhər</label>
              <LocationFilter
                value={localFilters.city || ""}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər"
              />
            </div>
          </div>

          {/* Advanced Filters */}
          {localFilters.showMoreFilters && (
            <div className="filter-section">
              <h4>Əlavə filtrlər</h4>

              <div className="filter-group">
                <label>Yaddaş həcmi</label>
                <CheckboxGroup2
                  options={STORAGE_OPTIONS}
                  values={localFilters.storage || []}
                  onChange={(values) => handleFilterChange("storage", values)}
                  name="storage"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>RAM</label>
                <CheckboxGroup2
                  options={RAM_OPTIONS}
                  values={localFilters.ram || []}
                  onChange={(values) => handleFilterChange("ram", values)}
                  name="ram"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Əməliyyat sistemi</label>
                <RadioGroup2
                  options={OPERATING_SYSTEMS}
                  value={localFilters.os || ""}
                  onChange={(value) => handleFilterChange("os", value)}
                  name="os"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Ekran ölçüsü</label>
                <CheckboxGroup2
                  options={SCREEN_SIZES}
                  values={localFilters.screenSize || []}
                  onChange={(values) =>
                    handleFilterChange("screenSize", values)
                  }
                  name="screenSize"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Əlaqə</label>
                <CheckboxGroup2
                  options={CONNECTIVITY_OPTIONS}
                  values={localFilters.connectivity || []}
                  onChange={(values) =>
                    handleFilterChange("connectivity", values)
                  }
                  name="connectivity"
                  layout="vertical"
                />
              </div>
            </div>
          )}
        </div>

        <div className="drawer-footer">
          <FilterButtons
            onReset={handleReset}
            onToggleMoreFilters={() =>
              handleFilterChange(
                "showMoreFilters",
                !localFilters.showMoreFilters
              )
            }
            onShowResults={handleApply}
            moreFiltersExpanded={localFilters.showMoreFilters}
            resultsCount={resultsCount}
            resetText="Sıfırla"
            moreFiltersText="Daha çox filtr"
            showResultsText="Nəticələri göstər"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectronicsFilterDrawer;
