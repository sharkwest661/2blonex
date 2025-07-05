"use client";
// components/shared/filters/YearRangeFilter.js
import { useState } from "react";
import { Dropdown } from "@/components/ui/forms";

// Generate years from 1990 to current year + 1
const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear + 1; year >= 1990; year--) {
    years.push({ value: year.toString(), label: year.toString() });
  }
  return years;
};

const YEARS = generateYears();

export const YearRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`year_group for_width_small grow-1 ${className}`}>
      <div className="form-group">
        <Dropdown
          placeholder="İl, min"
          options={YEARS}
          value={minValue}
          onChange={onMinChange}
          disabled={disabled}
        />
      </div>
      <div className="form-group">
        <Dropdown
          placeholder="maks"
          options={YEARS.filter(
            (year) => !minValue || parseInt(year.value) >= parseInt(minValue)
          )}
          value={maxValue}
          onChange={onMaxChange}
          disabled={disabled || !minValue}
        />
      </div>
    </div>
  );
};
