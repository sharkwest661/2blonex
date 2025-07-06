"use client";
// components/shared/filters/PriceRangeFilter.js (Updated with simple design)
import styles from "./PriceRangeFilter.module.css";

export const PriceRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  currency = "₼",
  disabled = false,
  className = "",
}) => {
  const handleMinChange = (e) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    if (value && value <= 0) value = "";
    onMinChange(value);
  };

  const handleMaxChange = (e) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    if (value && value <= 0) value = "";
    onMaxChange(value);
  };

  return (
    <div className={`${styles.priceRangeFilter} ${className}`}>
      <div className={styles.rangeInputs}>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={minValue || ""}
            onChange={handleMinChange}
            placeholder="Min"
            min="0"
            disabled={disabled}
          />
          <label>Qiymət, min</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={maxValue || ""}
            onChange={handleMaxChange}
            placeholder="Max"
            min="0"
            disabled={disabled}
          />
          <label>maks</label>
        </div>
      </div>
    </div>
  );
};
