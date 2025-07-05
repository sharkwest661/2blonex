"use client";
// components/ui/forms/RangeInput.js
import { useState } from "react";
import styles from "./Forms.module.css";

const RangeInput = ({
  minLabel = "Min",
  maxLabel = "Max",
  minPlaceholder = "0",
  maxPlaceholder = "999+",
  minValue = "",
  maxValue = "",
  onMinChange,
  onMaxChange,
  className = "",
  type = "text", // "text", "number"
  disabled = false,
  suffix = "", // e.g., "₼", "km", "hp"
  formatValue, // function to format display value
  parseValue, // function to parse input value
}) => {
  const [minFocused, setMinFocused] = useState(false);
  const [maxFocused, setMaxFocused] = useState(false);

  const handleMinChange = (e) => {
    let value = e.target.value;
    if (parseValue) {
      value = parseValue(value);
    }
    onMinChange(value);
  };

  const handleMaxChange = (e) => {
    let value = e.target.value;
    if (parseValue) {
      value = parseValue(value);
    }
    onMaxChange(value);
  };

  const displayMinValue = formatValue ? formatValue(minValue) : minValue;
  const displayMaxValue = formatValue ? formatValue(maxValue) : maxValue;

  const minFieldClasses = [
    styles.rangeField,
    minFocused && styles.focused,
    minValue && styles.hasValue,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const maxFieldClasses = [
    styles.rangeField,
    maxFocused && styles.focused,
    maxValue && styles.hasValue,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const minInputClasses = [styles.rangeInput, suffix && styles.withSuffix]
    .filter(Boolean)
    .join(" ");

  const maxInputClasses = [styles.rangeInput, suffix && styles.withSuffix]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.rangeInputWrapper} ${className}`}>
      <div className={styles.rangeInputs}>
        <div className={minFieldClasses}>
          <label className={styles.rangeLabel}>{minLabel}</label>
          <div className={styles.inputContainer}>
            <input
              type={type}
              value={displayMinValue}
              onChange={handleMinChange}
              onFocus={() => setMinFocused(true)}
              onBlur={() => setMinFocused(false)}
              placeholder={minPlaceholder}
              disabled={disabled}
              className={minInputClasses}
            />
            {suffix && <span className={styles.inputSuffix}>{suffix}</span>}
          </div>
        </div>

        <div className={styles.rangeSeparator}>
          <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
            <path d="M0 1H16" stroke="#9CA3AF" strokeWidth="2" />
          </svg>
        </div>

        <div className={maxFieldClasses}>
          <label className={styles.rangeLabel}>{maxLabel}</label>
          <div className={styles.inputContainer}>
            <input
              type={type}
              value={displayMaxValue}
              onChange={handleMaxChange}
              onFocus={() => setMaxFocused(true)}
              onBlur={() => setMaxFocused(false)}
              placeholder={maxPlaceholder}
              disabled={disabled}
              className={maxInputClasses}
            />
            {suffix && <span className={styles.inputSuffix}>{suffix}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
