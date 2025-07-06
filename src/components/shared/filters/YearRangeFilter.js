"use client";
// components/shared/filters/YearRangeFilter.js (Updated with simple design)
import styles from "./PriceRangeFilter.module.css"; // Reuse the same styles

export const YearRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  disabled = false,
  className = "",
}) => {
  const handleMinChange = (e) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    const currentYear = new Date().getFullYear();

    if (value && (value < 1900 || value > currentYear)) {
      value = value < 1900 ? 1900 : currentYear;
    }

    onMinChange(value);
  };

  const handleMaxChange = (e) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    const currentYear = new Date().getFullYear();

    if (value && (value < 1900 || value > currentYear)) {
      value = value < 1900 ? 1900 : currentYear;
    }

    onMaxChange(value);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={`${styles.priceRangeFilter} ${className}`}>
      <div className={styles.rangeInputs}>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={minValue || ""}
            onChange={handleMinChange}
            placeholder="Min"
            min="1900"
            max={currentYear}
            disabled={disabled}
          />
          <label>İl, min</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={maxValue || ""}
            onChange={handleMaxChange}
            placeholder="Max"
            min="1900"
            max={currentYear}
            disabled={disabled}
          />
          <label>maks</label>
        </div>
      </div>
    </div>
  );
};
