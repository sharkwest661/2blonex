"use client";
// components/ui/forms/CheckboxGroup.js
import styles from "./Forms.module.css";

const CheckboxGroup = ({
  options = [],
  values = [], // array of selected values
  onChange,
  name = "checkbox-group",
  className = "",
  layout = "horizontal", // "horizontal", "vertical"
  disabled = false,
  variant = "default", // "default", "card"
}) => {
  const handleChange = (optionValue, isChecked) => {
    if (disabled) return;

    let newValues;
    if (isChecked) {
      newValues = [...values, optionValue];
    } else {
      newValues = values.filter((val) => val !== optionValue);
    }
    onChange(newValues);
  };

  const groupClasses = [
    styles.checkboxGroup,
    styles[layout],
    styles[variant],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={groupClasses}>
      {options.map((option) => {
        const isChecked = values.includes(option.value);
        const isOptionDisabled = disabled || option.disabled;

        const optionClasses = [
          styles.checkboxOption,
          isChecked && styles.checked,
          isOptionDisabled && styles.disabled,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <label key={option.value} className={optionClasses}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={(e) => handleChange(option.value, e.target.checked)}
              disabled={isOptionDisabled}
              className={styles.checkboxInput}
            />

            <div className={styles.checkboxIndicator}>
              {isChecked && (
                <svg
                  className={styles.checkIcon}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <div className={styles.checkboxContent}>
              <span className={styles.checkboxLabel}>{option.label}</span>
              {option.description && (
                <span className={styles.checkboxDescription}>
                  {option.description}
                </span>
              )}
            </div>

            {option.icon && (
              <div className={styles.checkboxIcon}>{option.icon}</div>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
