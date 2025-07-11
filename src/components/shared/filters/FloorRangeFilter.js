// src/components/shared/filters/FloorRangeFilter.js
export const FloorRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  placeholder = "Mərtəbə",
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
      </div>
      <div className="range-filter-label">{placeholder}</div>
    </div>
  );
};
