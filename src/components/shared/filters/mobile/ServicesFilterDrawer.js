// src/components/shared/filters/mobile/ServicesFilterDrawer.js
import React, { useState } from "react";
import {
  SERVICES_TYPES,
  SERVICES_CATEGORIES,
  SERVICES_EXPERIENCE,
  SERVICES_AVAILABILITY,
  SERVICES_SCHEDULE,
  SERVICES_AREA,
} from "../../../../utils/constants/servicesConstants";

const ServicesFilterDrawer = ({
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
      serviceType: "",
      serviceCategory: "",
      priceMin: "",
      priceMax: "",
      city: "",
      experience: "",
      availability: "",
      schedule: "",
      serviceArea: "",
    };
    setLocalFilters(resetFilters);
  };

  return (
    <div className={`mobile-filter-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className="drawer-content">
        <div className="drawer-header">
          <h3>Xidmətlər Filtri</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <div className="drawer-body">
          {/* Service Type */}
          <div className="filter-section">
            <label>Xidmət növü</label>
            <select
              value={localFilters.serviceType}
              onChange={(e) =>
                handleFilterChange("serviceType", e.target.value)
              }
            >
              <option value="">Hamısı</option>
              {SERVICES_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Service Category */}
          <div className="filter-section">
            <label>Kateqoriya</label>
            <select
              value={localFilters.serviceCategory}
              onChange={(e) =>
                handleFilterChange("serviceCategory", e.target.value)
              }
            >
              <option value="">Hamısı</option>
              {SERVICES_CATEGORIES.map((option) => (
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

          {/* Experience */}
          <div className="filter-section">
            <label>Təcrübə</label>
            <select
              value={localFilters.experience}
              onChange={(e) => handleFilterChange("experience", e.target.value)}
            >
              <option value="">Hamısı</option>
              {SERVICES_EXPERIENCE.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
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

export default ServicesFilterDrawer;
