// src/components/shared/filters/FilterSection.js

import React from "react";

/**
 * Filter section wrapper component
 * Handles section layout, collapsibility, and styling
 */
const FilterSection = ({
  id,
  title,
  children,
  className = "",
  isCollapsible = false,
  isExpanded = true,
  onToggle,
  layout = "grid",
}) => {
  // Render section header if title exists or section is collapsible
  const renderHeader = () => {
    if (!title && !isCollapsible) return null;

    return (
      <div className="filter-section-header">
        {title && <h4 className="filter-section-title">{title}</h4>}
        {isCollapsible && (
          <button
            type="button"
            className="btn btn-link filter-section-toggle"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-controls={`filter-section-${id}`}
          >
            <i className={`icon-chevron-${isExpanded ? "up" : "down"}`}></i>
          </button>
        )}
      </div>
    );
  };

  return (
    <div
      className={`filter-section ${className} ${layout ? `layout-${layout}` : ""} ${isExpanded ? "expanded" : "collapsed"}`}
      data-section={id}
    >
      {renderHeader()}

      <div
        id={`filter-section-${id}`}
        className={`filter-section-content ${isExpanded ? "show" : "hide"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
