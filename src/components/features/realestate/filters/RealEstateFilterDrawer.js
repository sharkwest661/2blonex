// src/components/features/realestate/filters/RealEstateFilterDrawer.js
"use client";
import React, { useState } from "react";
import {
  Dropdown,
  FilterButtons,
  RadioGroup2,
  CheckboxGroup2,
} from "@/components/ui/forms";
import { PriceRangeFilter, LocationFilter } from "@/components/shared/filters";
import {
  PROPERTY_TYPES,
  TRANSACTION_TYPES,
  ROOM_COUNTS,
  PROPERTY_CONDITIONS,
  HEATING_TYPES,
  PROPERTY_AMENITIES,
  PROPERTY_FEATURES,
} from "../constants";
import "../styles/RealEstateFilters.css";

const RealEstateFilterDrawer = ({
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
      // Reset room count when property type changes
      ...(field === "propertyType" && { roomCount: "all" }),
    }));
  };

  const handleReset = () => {
    const resetFilters = {
      propertyType: "all",
      transactionType: "",
      priceMin: "",
      priceMax: "",
      city: "",
      roomCount: "all",
      areaMin: "",
      areaMax: "",
      floor: "",
      totalFloors: "",
      condition: "",
      heating: [],
      amenities: [],
      features: [],
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
              <label>Növ</label>
              <Dropdown
                options={PROPERTY_TYPES}
                value={localFilters.propertyType || "all"}
                onChange={(value) => handleFilterChange("propertyType", value)}
                placeholder="Növ"
              />
            </div>

            <div className="filter-group">
              <label>Əməliyyat növü</label>
              <RadioGroup2
                options={TRANSACTION_TYPES}
                value={localFilters.transactionType || ""}
                onChange={(value) =>
                  handleFilterChange("transactionType", value)
                }
                name="transactionType"
                layout="vertical"
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
              <label>Şəhər</label>
              <LocationFilter
                value={localFilters.city || ""}
                onChange={(value) => handleFilterChange("city", value)}
                placeholder="Şəhər"
              />
            </div>

            <div className="filter-group">
              <label>Otaq sayı</label>
              <Dropdown
                options={ROOM_COUNTS}
                value={localFilters.roomCount || "all"}
                onChange={(value) => handleFilterChange("roomCount", value)}
                placeholder="Otaq sayı"
              />
            </div>
          </div>

          {/* Advanced Filters */}
          {localFilters.showMoreFilters && (
            <div className="filter-section">
              <h4>Əlavə filtrlər</h4>

              <div className="filter-group">
                <label>Sahə (m²)</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={localFilters.areaMin || ""}
                    onChange={(e) =>
                      handleFilterChange("areaMin", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={localFilters.areaMax || ""}
                    onChange={(e) =>
                      handleFilterChange("areaMax", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Mərtəbə</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Mərtəbə"
                    value={localFilters.floor || ""}
                    onChange={(e) =>
                      handleFilterChange("floor", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Ümumi"
                    value={localFilters.totalFloors || ""}
                    onChange={(e) =>
                      handleFilterChange("totalFloors", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Vəziyyət</label>
                <RadioGroup2
                  options={PROPERTY_CONDITIONS}
                  value={localFilters.condition || ""}
                  onChange={(value) => handleFilterChange("condition", value)}
                  name="condition"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>İstilik sistemi</label>
                <CheckboxGroup2
                  options={HEATING_TYPES}
                  values={localFilters.heating || []}
                  onChange={(values) => handleFilterChange("heating", values)}
                  name="heating"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>İmkanlar</label>
                <CheckboxGroup2
                  options={PROPERTY_AMENITIES}
                  values={localFilters.amenities || []}
                  onChange={(values) => handleFilterChange("amenities", values)}
                  name="amenities"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Xüsusiyyətlər</label>
                <CheckboxGroup2
                  options={PROPERTY_FEATURES}
                  values={localFilters.features || []}
                  onChange={(values) => handleFilterChange("features", values)}
                  name="features"
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

export default RealEstateFilterDrawer;
