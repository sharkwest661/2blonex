// src/components/shared/filters/components/FilterComponentRegistry.js

import { CheckboxGroup, Dropdown, RadioGroup2 } from "@/components/ui/forms";
import { PriceRangeFilter } from "../PriceRangeFilter";
import { LocationFilter } from "../LocationFilter";

/**
 * Maps filter configuration types to actual React components
 * This registry allows FilterManager to dynamically render any filter type
 */
const FILTER_COMPONENT_MAP = {
  Dropdown: Dropdown,
  RadioGroup2: RadioGroup2,
  CheckboxGroup: CheckboxGroup,
  PriceRangeFilter: PriceRangeFilter,
  LocationFilter: LocationFilter,
  RangeInput: ({
    min,
    max,
    onMinChange,
    onMaxChange,
    placeholder,
    suffix,
    ...props
  }) => (
    <div className="range-input-wrapper">
      <input
        type="number"
        placeholder={placeholder?.min || "Min"}
        value={min}
        onChange={(e) => onMinChange(e.target.value)}
        {...props}
      />
      <span className="range-separator">-</span>
      <input
        type="number"
        placeholder={placeholder?.max || "Max"}
        value={max}
        onChange={(e) => onMaxChange(e.target.value)}
        {...props}
      />
      {suffix && <span className="range-suffix">{suffix}</span>}
    </div>
  ),
  CustomComponent: ({ component: Component, ...props }) => (
    <Component {...props} />
  ),
};

/**
 * Renders a filter component based on configuration
 * @param {Object} filterConfig - Filter configuration object
 * @param {Object} props - Props to pass to the component
 * @returns {JSX.Element|null} Rendered component or null if type not found
 */
export const renderFilterComponent = (filterConfig, props) => {
  const Component = FILTER_COMPONENT_MAP[filterConfig.type];

  if (!Component) {
    console.warn(
      `Filter component type "${filterConfig.type}" not found in registry`
    );
    return null;
  }

  // Merge filter config props with passed props
  const componentProps = {
    ...filterConfig.componentProps,
    ...props,
    className:
      `${filterConfig.className || ""} ${props.className || ""}`.trim(),
  };

  return <Component {...componentProps} />;
};

/**
 * Register a new filter component type
 * @param {string} type - Component type identifier
 * @param {React.Component} component - React component
 */
export const registerFilterComponent = (type, component) => {
  FILTER_COMPONENT_MAP[type] = component;
};

/**
 * Get all registered component types
 * @returns {string[]} Array of registered type names
 */
export const getRegisteredTypes = () => {
  return Object.keys(FILTER_COMPONENT_MAP);
};

export default FILTER_COMPONENT_MAP;
