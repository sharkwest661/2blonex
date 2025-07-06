"use client";
// components/ui/forms/CheckboxGroup2.js (Simple inline checkbox design)
import styles from "./CheckboxGroup2.module.css";

const CheckboxGroup2 = ({
  options = [],
  values = [],
  onChange,
  name = "checkbox-group",
  className = "",
  disabled = false,
}) => {
  const handleChange = (optionValue) => {
    if (disabled) return;

    const newValues = values.includes(optionValue)
      ? values.filter((v) => v !== optionValue)
      : [...values, optionValue];

    onChange(newValues);
  };

  const groupClasses = [
    styles.checkboxGroup,
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
        const optionId = `${name}-${option.value}`;

        return (
          <div key={option.value} className={styles.checkboxOption}>
            <input
              type="checkbox"
              id={optionId}
              checked={isChecked}
              onChange={() => handleChange(option.value)}
              disabled={isOptionDisabled}
            />
            <label htmlFor={optionId}>{option.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxGroup2;
