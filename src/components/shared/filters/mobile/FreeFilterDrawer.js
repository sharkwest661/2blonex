// src/components/shared/filters/mobile/FreeFilterDrawer.js (No Price Filter)
import React, { useState } from "react";
import {
  FREE_CATEGORIES,
  FREE_CONDITIONS,
} from "../../../../utils/constants/freeConstants";

const FreeFilterDrawer = ({
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
          <h3>Pulsuz Elanlar</h3>
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
              {FREE_CATEGORIES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Condition */}
          <div className="filter-section">
            <label>Vəziyyət</label>
            <div className="radio-group">
              {FREE_CONDITIONS.map((option) => (
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

export default FreeFilterDrawer;
