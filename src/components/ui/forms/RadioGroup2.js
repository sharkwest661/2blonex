"use client";
// components/ui/forms/RadioGroup2.js (Simple inline radio design)
import styles from "./RadioGroup2.module.css";

const RadioGroup2 = ({
  options = [],
  value = "",
  onChange,
  name = "radio-group",
  className = "",
  disabled = false,
}) => {
  const handleChange = (e) => {
    if (!disabled) {
      onChange(e.target.value);
    }
  };

  const groupClasses = [
    styles.radioGroup,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={groupClasses}>
      {options.map((option) => {
        const isOptionDisabled = disabled || option.disabled;
        const optionId = `${name}-${option.value}`;

        return (
          <div key={option.value} className={styles.radioOption}>
            <input
              type="radio"
              name={name}
              id={optionId}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              disabled={isOptionDisabled}
            />
            <label htmlFor={optionId}>{option.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup2;
