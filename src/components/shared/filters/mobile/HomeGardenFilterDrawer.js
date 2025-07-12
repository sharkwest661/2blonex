// src/components/shared/filters/mobile/KidsFilterDrawer.js
import React, { useState } from "react";
import {
  KIDS_PRODUCT_TYPES,
  KIDS_BRANDS,
  KIDS_AGE_GROUPS,
  KIDS_CONDITIONS,
  KIDS_GENDER,
  KIDS_CATEGORIES,
} from "../../../../utils/constants/kidsConstants";

const KidsFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key, value) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      productType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      ageGroup: "",
      condition: "",
      gender: "",
      category: "",
      size: "",
    };
    setLocalFilters(resetFilters);
  };

  return (
    <div className={`mobile-filter-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className="drawer-content">
        <div className="drawer-header">
          <h3>Uşaq Aləmi Filtri</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <div className="drawer-body">
          {/* Product Type */}
          <div className="filter-section">
            <label>Məhsul növü</label>
            <select
              value={localFilters.productType}
              onChange={(e) =>
                handleFilterChange("productType", e.target.value)
              }
            >
              <option value="">Hamısı</option>
              {KIDS_PRODUCT_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Brand */}
          <div className="filter-section">
            <label>Marka</label>
            <select
              value={localFilters.brand}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
            >
              <option value="">Hamısı</option>
              {KIDS_BRANDS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Age Group */}
          <div className="filter-section">
            <label>Yaş qrupu</label>
            <select
              value={localFilters.ageGroup}
              onChange={(e) => handleFilterChange("ageGroup", e.target.value)}
            >
              <option value="">Hamısı</option>
              {KIDS_AGE_GROUPS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="filter-section">
            <label>Qiymət aralığı</label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={localFilters.priceMin}
                onChange={(e) => handleFilterChange("priceMin", e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={localFilters.priceMax}
                onChange={(e) => handleFilterChange("priceMax", e.target.value)}
              />
            </div>
          </div>

          {/* Condition */}
          <div className="filter-section">
            <label>Vəziyyət</label>
            <div className="radio-group">
              {KIDS_CONDITIONS.map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="condition"
                    value={option.value}
                    checked={localFilters.condition === option.value}
                    onChange={(e) =>
                      handleFilterChange("condition", e.target.value)
                    }
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <button className="reset-btn" onClick={handleReset}>
            Sıfırla
          </button>
          <button className="apply-btn" onClick={handleApply}>
            Elanları göstər ({resultsCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsFilterDrawer;
