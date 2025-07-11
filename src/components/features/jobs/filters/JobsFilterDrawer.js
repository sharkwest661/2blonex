// src/components/features/jobs/filters/JobsFilterDrawer.js
"use client";
import React, { useState } from "react";
import {
  Dropdown,
  FilterButtons,
  RadioGroup2,
  CheckboxGroup,
} from "@/components/ui/forms";
import { PriceRangeFilter, LocationFilter } from "@/components/shared/filters";
import {
  ACTIVITY_FIELDS,
  WORK_SCHEDULES,
  WORK_EXPERIENCE,
  EDUCATION_LEVELS,
  JOB_TYPES,
  COMPANY_TYPES,
  JOB_BENEFITS,
  WORK_ENVIRONMENT,
} from "../constants";

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
    }));
  };

  const handleReset = () => {
    const resetFilters = {
      activityField: "",
      workSchedule: "all",
      salaryMin: "",
      salaryMax: "",
      experience: "all",
      education: "all",
      jobType: "all",
      companyType: "all",
      city: "",
      benefits: [],
      workEnvironment: [],
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
          <h3>İş Elanları Filtrləri</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <div className="drawer-body">
          {/* Activity Field */}
          <div className="filter-group">
            <label>Fəaliyyət sahəsi</label>
            <Dropdown
              placeholder="Fəaliyyət sahəsi seçin"
              options={ACTIVITY_FIELDS}
              value={localFilters.activityField}
              onChange={(value) => handleFilterChange("activityField", value)}
            />
          </div>

          {/* Work Schedule */}
          <div className="filter-group">
            <label>İş qrafiki</label>
            <Dropdown
              placeholder="İş qrafiki seçin"
              options={WORK_SCHEDULES}
              value={localFilters.workSchedule}
              onChange={(value) => handleFilterChange("workSchedule", value)}
            />
          </div>

          {/* Salary Range */}
          <div className="filter-group">
            <label>Maaş</label>
            <PriceRangeFilter
              minValue={localFilters.salaryMin}
              maxValue={localFilters.salaryMax}
              onMinChange={(value) => handleFilterChange("salaryMin", value)}
              onMaxChange={(value) => handleFilterChange("salaryMax", value)}
              placeholder={{ min: "Min maaş", max: "Max maaş" }}
              currency="AZN"
            />
          </div>

          {/* Location */}
          <div className="filter-group">
            <label>Şəhər</label>
            <LocationFilter
              value={localFilters.city}
              onChange={(value) => handleFilterChange("city", value)}
              placeholder="Şəhər seçin"
            />
          </div>

          {/* Experience */}
          <div className="filter-group">
            <label>İş təcrübəsi</label>
            <Dropdown
              placeholder="İş təcrübəsi seçin"
              options={WORK_EXPERIENCE}
              value={localFilters.experience}
              onChange={(value) => handleFilterChange("experience", value)}
            />
          </div>

          {/* Education */}
          <div className="filter-group">
            <label>Təhsil</label>
            <Dropdown
              placeholder="Təhsil səviyyəsi seçin"
              options={EDUCATION_LEVELS}
              value={localFilters.education}
              onChange={(value) => handleFilterChange("education", value)}
            />
          </div>

          {/* Job Type */}
          <div className="filter-group">
            <label>İş növü</label>
            <Dropdown
              placeholder="İş növü seçin"
              options={JOB_TYPES}
              value={localFilters.jobType}
              onChange={(value) => handleFilterChange("jobType", value)}
            />
          </div>

          {/* Company Type */}
          <div className="filter-group">
            <label>Şirkət növü</label>
            <Dropdown
              placeholder="Şirkət növü seçin"
              options={COMPANY_TYPES}
              value={localFilters.companyType}
              onChange={(value) => handleFilterChange("companyType", value)}
            />
          </div>

          {/* Advanced Filters Toggle */}
          <div className="filter-group">
            <button
              className="toggle-more-filters"
              onClick={() =>
                handleFilterChange(
                  "showMoreFilters",
                  !localFilters.showMoreFilters
                )
              }
            >
              {localFilters.showMoreFilters ? "Az filtr" : "Daha çox filtr"}
            </button>
          </div>

          {/* Advanced Filters */}
          {localFilters.showMoreFilters && (
            <>
              {/* Job Benefits */}
              <div className="filter-group">
                <label>Təklif olunan imkanlar</label>
                <CheckboxGroup
                  options={JOB_BENEFITS}
                  values={localFilters.benefits}
                  onChange={(values) => handleFilterChange("benefits", values)}
                  name="benefits"
                  layout="vertical"
                />
              </div>

              {/* Work Environment */}
              <div className="filter-group">
                <label>İş mühiti</label>
                <CheckboxGroup
                  options={WORK_ENVIRONMENT}
                  values={localFilters.workEnvironment}
                  onChange={(values) =>
                    handleFilterChange("workEnvironment", values)
                  }
                  name="workEnvironment"
                  layout="vertical"
                />
              </div>
            </>
          )}
        </div>

        <div className="drawer-footer">
          <FilterButtons
            onReset={handleReset}
            onApply={handleApply}
            resultsCount={resultsCount}
            showResults={true}
          />
        </div>
      </div>
    </div>
  );
};

export default JobsFilterDrawer;
