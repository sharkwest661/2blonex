// src/components/shared/filters/FilterSection.js

import React from "react";

/**
 * Layout wrapper component for filter sections
 * Provides consistent structure and styling for filter groups
 */
const FilterSection = ({
  children,
  id,
  title,
  className = "",
  isCollapsible = false,
  isExpanded = true,
  onToggle,
  style = {},
}) => {
  const sectionClass = [
    "filter-section",
    className,
    isCollapsible && !isExpanded ? "collapsed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={sectionClass} style={style}>
      {title && (
        <div className="filter-section-header">
          <h3 className="filter-section-title">{title}</h3>
          {isCollapsible && (
            <button
              className="filter-section-toggle"
              onClick={onToggle}
              aria-expanded={isExpanded}
              aria-controls={id}
            >
              <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
            </button>
          )}
        </div>
      )}
      <div
        className={`filter-section-content ${isExpanded ? "show" : "hide"}`}
        id={id}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
