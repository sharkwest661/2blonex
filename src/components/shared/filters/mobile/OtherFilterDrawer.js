// src/components/shared/filters/mobile/FoodFilterDrawer.js (Minimal Template)
import React, { useState } from "react";
import {
  FOOD_CATEGORIES,
  FOOD_CONDITIONS,
} from "../../../../utils/constants/foodConstants";

const FoodFilterDrawer = ({
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
      category: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
    };
    setLocalFilters(resetFilters);
  };

  return (
    <div className={`mobile-filter-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className="drawer-content">
        <div className="drawer-header">
          <h3>Ərzaq Filtri</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <div className="drawer-body">
          {/* Category */}
          <div className="filter-section">
            <label>Kateqoriya</label>
            <select
              value={localFilters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="">Hamısı</option>
              {FOOD_CATEGORIES.map((option) => (
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
              {FOOD_CONDITIONS.map((option) => (
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

export default FoodFilterDrawer;
