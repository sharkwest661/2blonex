// src/components/features/jobs/filters/JobsFilterDrawer.js
"use client";
import React, { useState, useEffect } from "react";
import BottomDrawer from "@/components/ui/BottomDrawer";
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
import { FilterManager } from "@/components/shared/filters/FilterManager";

const JobsFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount = 0,
}) => {
  const [localFilters, setLocalFilters] = useState(filters || {});
  const [expandedSections, setExpandedSections] = useState({
    activityField: true,
    workSchedule: true,
    salary: true,
    city: true,
    experience: false,
    education: false,
    jobType: false,
    companyType: false,
    benefits: false,
    workEnvironment: false,
  });

  // Update local filters when props change
  useEffect(() => {
    setLocalFilters(filters || {});
  }, [filters]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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

  // Action button for bottom drawer
  const actionButton = (
    <button className="bottom-drawer-apply-btn" onClick={handleApply}>
      Elanları göstər {resultsCount > 0 && `(${resultsCount})`}
    </button>
  );

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="İş Elanları Filtrləri"
      actionButton={actionButton}
      className="jobs-filter-bottom-drawer"
    >
      {/* Filter Sections */}
      <div className="filter-sections">
        {/* Activity Field Filter */}
        <FilterSection
          title="Fəaliyyət sahəsi"
          isExpanded={expandedSections.activityField}
          onToggle={() => toggleSection("activityField")}
        >
          <Dropdown
            placeholder="Fəaliyyət sahəsi seçin"
            options={ACTIVITY_FIELDS}
            value={localFilters.activityField}
            onChange={(value) => handleFilterChange("activityField", value)}
          />
        </FilterSection>

        {/* Work Schedule Filter */}
        <FilterSection
          title="İş qrafiki"
          isExpanded={expandedSections.workSchedule}
          onToggle={() => toggleSection("workSchedule")}
        >
          <Dropdown
            placeholder="İş qrafiki seçin"
            options={WORK_SCHEDULES}
            value={localFilters.workSchedule}
            onChange={(value) => handleFilterChange("workSchedule", value)}
          />
        </FilterSection>

        {/* Salary Range Filter */}
        <FilterSection
          title="Maaş"
          isExpanded={expandedSections.salary}
          onToggle={() => toggleSection("salary")}
        >
          <PriceRangeFilter
            minValue={localFilters.salaryMin}
            maxValue={localFilters.salaryMax}
            onMinChange={(value) => handleFilterChange("salaryMin", value)}
            onMaxChange={(value) => handleFilterChange("salaryMax", value)}
            minPlaceholder="Min maaş"
            maxPlaceholder="Max maaş"
            currency="₼"
          />
        </FilterSection>

        {/* City Filter */}
        <FilterSection
          title="Şəhər"
          isExpanded={expandedSections.city}
          onToggle={() => toggleSection("city")}
        >
          <LocationFilter
            value={localFilters.city}
            onChange={(value) => handleFilterChange("city", value)}
            placeholder="Şəhər seçin"
          />
        </FilterSection>

        {/* Work Experience Filter */}
        <FilterSection
          title="İş təcrübəsi"
          isExpanded={expandedSections.experience}
          onToggle={() => toggleSection("experience")}
        >
          <Dropdown
            placeholder="İş təcrübəsi seçin"
            options={WORK_EXPERIENCE}
            value={localFilters.experience}
            onChange={(value) => handleFilterChange("experience", value)}
          />
        </FilterSection>

        {/* Education Filter */}
        <FilterSection
          title="Təhsil"
          isExpanded={expandedSections.education}
          onToggle={() => toggleSection("education")}
        >
          <Dropdown
            placeholder="Təhsil səviyyəsi seçin"
            options={EDUCATION_LEVELS}
            value={localFilters.education}
            onChange={(value) => handleFilterChange("education", value)}
          />
        </FilterSection>

        {/* Job Type Filter */}
        <FilterSection
          title="İş növü"
          isExpanded={expandedSections.jobType}
          onToggle={() => toggleSection("jobType")}
        >
          <Dropdown
            placeholder="İş növü seçin"
            options={JOB_TYPES}
            value={localFilters.jobType}
            onChange={(value) => handleFilterChange("jobType", value)}
          />
        </FilterSection>

        {/* Company Type Filter */}
        <FilterSection
          title="Şirkət növü"
          isExpanded={expandedSections.companyType}
          onToggle={() => toggleSection("companyType")}
        >
          <Dropdown
            placeholder="Şirkət növü seçin"
            options={COMPANY_TYPES}
            value={localFilters.companyType}
            onChange={(value) => handleFilterChange("companyType", value)}
          />
        </FilterSection>

        {/* Advanced Filters */}
        {localFilters.showMoreFilters && (
          <>
            {/* Job Benefits */}
            <FilterSection
              title="Təklif olunan imkanlar"
              isExpanded={expandedSections.benefits}
              onToggle={() => toggleSection("benefits")}
            >
              <CheckboxGroup
                options={JOB_BENEFITS}
                values={localFilters.benefits || []}
                onChange={(values) => handleFilterChange("benefits", values)}
                name="benefits"
                layout="vertical"
              />
            </FilterSection>

            {/* Work Environment */}
            <FilterSection
              title="İş mühiti"
              isExpanded={expandedSections.workEnvironment}
              onToggle={() => toggleSection("workEnvironment")}
            >
              <CheckboxGroup
                options={WORK_ENVIRONMENT}
                values={localFilters.workEnvironment || []}
                onChange={(values) =>
                  handleFilterChange("workEnvironment", values)
                }
                name="workEnvironment"
                layout="vertical"
              />
            </FilterSection>
          </>
        )}
      </div>

      {/* Advanced Filters Toggle */}
      <div className="filter-group">
        <button
          className={`more-filters-toggle-mobile ${
            localFilters.showMoreFilters ? "expanded" : ""
          }`}
          onClick={() =>
            handleFilterChange("showMoreFilters", !localFilters.showMoreFilters)
          }
        >
          <span>
            {localFilters.showMoreFilters ? "Daha az filtr" : "Daha çox filtr"}
          </span>
          <i
            className={`fas fa-chevron-${
              localFilters.showMoreFilters ? "up" : "down"
            }`}
          ></i>
        </button>
      </div>

      {/* Reset Button */}
      <div className="filter-reset-section">
        <button className="reset-filters-mobile" onClick={handleReset}>
          Sıfırla
        </button>
      </div>
    </BottomDrawer>
  );
};

// FilterSection Component - Same as vehicles/electronics
function FilterSection({ title, children, isExpanded, onToggle }) {
  return (
    <div className="filter-section">
      <button className="filter-section-header" onClick={onToggle}>
        <span className="filter-section-title">{title}</span>
        <i className={`fa-solid fa-chevron-${isExpanded ? "up" : "down"}`}></i>
      </button>
      {isExpanded && <div className="filter-section-content">{children}</div>}
    </div>
  );
}

export default JobsFilterDrawer;
