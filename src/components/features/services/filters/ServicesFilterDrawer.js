// src/components/features/services/filters/ServicesFilterDrawer.js
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
  SERVICE_CATEGORIES,
  SERVICE_TYPES,
  PROVIDER_TYPES,
  AVAILABILITY_OPTIONS,
  SERVICE_EXPERIENCE_LEVELS,
  CERTIFICATIONS,
  SERVICE_FEATURES,
} from "../constants";
import "../styles/ServicesFilters.css";

const ServicesFilterDrawer = ({
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
      // Reset service type when category changes
      ...(field === "category" && { serviceType: "" }),
    }));
  };

  const handleReset = () => {
    const resetFilters = {
      category: "all",
      serviceType: "",
      priceMin: "",
      priceMax: "",
      city: "",
      providerType: "",
      availability: [],
      experience: "",
      certifications: [],
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
              <label>Xidmət növü</label>
              <Dropdown
                options={SERVICE_CATEGORIES}
                value={localFilters.category || "all"}
                onChange={(value) => handleFilterChange("category", value)}
                placeholder="Xidmət növü"
              />
            </div>

            <div className="filter-group">
              <label>Xidmət tipi</label>
              <RadioGroup2
                options={SERVICE_TYPES}
                value={localFilters.serviceType || ""}
                onChange={(value) => handleFilterChange("serviceType", value)}
                name="serviceType"
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
              <label>Xidmət təminatçısı</label>
              <RadioGroup2
                options={PROVIDER_TYPES}
                value={localFilters.providerType || ""}
                onChange={(value) => handleFilterChange("providerType", value)}
                name="providerType"
                layout="vertical"
              />
            </div>
          </div>

          {/* Advanced Filters */}
          {localFilters.showMoreFilters && (
            <div className="filter-section">
              <h4>Əlavə filtrlər</h4>

              <div className="filter-group">
                <label>Əlçatanlıq</label>
                <CheckboxGroup2
                  options={AVAILABILITY_OPTIONS}
                  values={localFilters.availability || []}
                  onChange={(values) =>
                    handleFilterChange("availability", values)
                  }
                  name="availability"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Təcrübə səviyyəsi</label>
                <RadioGroup2
                  options={SERVICE_EXPERIENCE_LEVELS}
                  value={localFilters.experience || ""}
                  onChange={(value) => handleFilterChange("experience", value)}
                  name="experience"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Sertifikatlar</label>
                <CheckboxGroup2
                  options={CERTIFICATIONS}
                  values={localFilters.certifications || []}
                  onChange={(values) =>
                    handleFilterChange("certifications", values)
                  }
                  name="certifications"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Xüsusiyyətlər</label>
                <CheckboxGroup2
                  options={SERVICE_FEATURES}
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

export default ServicesFilterDrawer;
