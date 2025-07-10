// src/components/features/jobs/filters/JobsFilterDrawer.js
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
  JOB_CATEGORIES,
  EMPLOYMENT_TYPES,
  EXPERIENCE_LEVELS,
  EDUCATION_LEVELS,
  COMPANY_SIZES,
  JOB_BENEFITS,
  WORK_ARRANGEMENTS,
} from "../constants";
import "../styles/JobsFilters.css";

const JobsFilterDrawer = ({
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
      // Reset experience when category changes
      ...(field === "category" && { experienceLevel: "all" }),
    }));
  };

  const handleReset = () => {
    const resetFilters = {
      category: "all",
      employmentType: [],
      salaryMin: "",
      salaryMax: "",
      city: "",
      experienceLevel: "all",
      education: [],
      companySize: "",
      workArrangement: [],
      benefits: [],
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
                options={JOB_CATEGORIES}
                value={localFilters.category || "all"}
                onChange={(value) => handleFilterChange("category", value)}
                placeholder="Kateqoriya"
              />
            </div>

            <div className="filter-group">
              <label>Məşğulluq növü</label>
              <CheckboxGroup2
                options={EMPLOYMENT_TYPES}
                values={localFilters.employmentType || []}
                onChange={(values) =>
                  handleFilterChange("employmentType", values)
                }
                name="employmentType"
                layout="vertical"
              />
            </div>

            <div className="filter-group">
              <label>Maaş</label>
              <PriceRangeFilter
                minValue={localFilters.salaryMin || ""}
                maxValue={localFilters.salaryMax || ""}
                onMinChange={(value) => handleFilterChange("salaryMin", value)}
                onMaxChange={(value) => handleFilterChange("salaryMax", value)}
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
              <label>Təcrübə</label>
              <Dropdown
                options={EXPERIENCE_LEVELS}
                value={localFilters.experienceLevel || "all"}
                onChange={(value) =>
                  handleFilterChange("experienceLevel", value)
                }
                placeholder="Təcrübə"
              />
            </div>
          </div>

          {/* Advanced Filters */}
          {localFilters.showMoreFilters && (
            <div className="filter-section">
              <h4>Əlavə filtrlər</h4>

              <div className="filter-group">
                <label>Təhsil</label>
                <CheckboxGroup2
                  options={EDUCATION_LEVELS}
                  values={localFilters.education || []}
                  onChange={(values) => handleFilterChange("education", values)}
                  name="education"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Şirkət ölçüsü</label>
                <RadioGroup2
                  options={COMPANY_SIZES}
                  value={localFilters.companySize || ""}
                  onChange={(value) => handleFilterChange("companySize", value)}
                  name="companySize"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>İş formatı</label>
                <CheckboxGroup2
                  options={WORK_ARRANGEMENTS}
                  values={localFilters.workArrangement || []}
                  onChange={(values) =>
                    handleFilterChange("workArrangement", values)
                  }
                  name="workArrangement"
                  layout="vertical"
                />
              </div>

              <div className="filter-group">
                <label>Müavinətlər</label>
                <CheckboxGroup2
                  options={JOB_BENEFITS}
                  values={localFilters.benefits || []}
                  onChange={(values) => handleFilterChange("benefits", values)}
                  name="benefits"
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

export default JobsFilterDrawer;
