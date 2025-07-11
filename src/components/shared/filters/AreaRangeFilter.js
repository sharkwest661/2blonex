// src/components/shared/filters/AreaRangeFilter.js
export const AreaRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  placeholder = "Sahə",
}) => {
  return (
    <div className="range-filter">
      <div className="range-filter-container">
        <input
          type="number"
          className="range-filter-input"
          placeholder="min"
          value={minValue}
          onChange={(e) => onMinChange(e.target.value)}
        />
        <span className="range-filter-separator">-</span>
        <input
          type="number"
          className="range-filter-input"
          placeholder="max"
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
        />
        <span className="range-filter-unit">m²</span>
      </div>
      <div className="range-filter-label">{placeholder}</div>
    </div>
  );
};
