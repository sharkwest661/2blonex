"use client";
// components/ui/forms/FilterButtons.js
import styles from "./Forms.module.css";

const FilterButtons = ({
  onReset,
  onToggleMoreFilters,
  onShowResults,
  moreFiltersExpanded = false,
  resultsCount = 0,
  disabled = false,
  className = "",
  resetText = "Sıfırla",
  moreFiltersText = "Daha çox filtr",
  showResultsText = "Elanları göstər",
}) => {
  const moreFiltersClasses = [
    styles.filterButton,
    styles.moreFiltersButton,
    moreFiltersExpanded && styles.expanded,
  ]
    .filter(Boolean)
    .join(" ");

  const iconClasses = [
    styles.buttonIcon,
    moreFiltersExpanded && styles.expanded,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.filterButtons} ${className}`}>
      <button
        type="button"
        className={`${styles.filterButton} ${styles.resetButton}`}
        onClick={onReset}
        disabled={disabled}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.5 6.5h-11M8.5 2.5L4.5 6.5L8.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {resetText}
      </button>

      <button
        type="button"
        className={moreFiltersClasses}
        onClick={onToggleMoreFilters}
        disabled={disabled}
      >
        {moreFiltersText}
        <svg
          className={iconClasses}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.filterButton} ${styles.showResultsButton}`}
        onClick={onShowResults}
        disabled={disabled}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6.5 12.5a6 6 0 100-12 6 6 0 000 12zM12.5 12.5l-3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {showResultsText}
        {resultsCount > 0 && <span>({resultsCount})</span>}
      </button>
    </div>
  );
};

export default FilterButtons;
