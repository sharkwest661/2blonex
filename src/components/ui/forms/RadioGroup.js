"use client";
// components/ui/forms/RadioGroup.js
import styles from "./Forms.module.css";

const RadioGroup = ({
  options = [],
  value = "",
  onChange,
  name = "radio-group",
  className = "",
  layout = "horizontal", // "horizontal", "vertical"
  size = "medium", // "small", "medium", "large"
  disabled = false,
  variant = "default", // "default", "card", "button"
}) => {
  const handleChange = (optionValue) => {
    if (!disabled) {
      onChange(optionValue);
    }
  };

  const groupClasses = [
    styles.radioGroup,
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
        const isSelected = value === option.value;
        const isOptionDisabled = disabled || option.disabled;

        const optionClasses = [
          styles.radioOption,
          isSelected && styles.selected,
          isOptionDisabled && styles.disabled,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <label key={option.value} className={optionClasses}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => handleChange(option.value)}
              disabled={isOptionDisabled}
              className={styles.radioInput}
            />

            <div className={styles.radioIndicator}>
              {isSelected && <div className={styles.radioDot} />}
            </div>

            <div className={styles.radioContent}>
              <span className={styles.radioLabel}>{option.label}</span>
              {option.description && (
                <span className={styles.radioDescription}>
                  {option.description}
                </span>
              )}
            </div>

            {option.icon && (
              <div className={styles.radioIcon}>{option.icon}</div>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;
