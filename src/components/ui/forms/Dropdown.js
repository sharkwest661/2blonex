"use client";
// components/ui/forms/Dropdown.js
import { useState, useRef, useEffect } from "react";
import styles from "./Forms.module.css";

const Dropdown = ({
  placeholder = "Select option",
  options = [],
  value = "",
  onChange,
  disabled = false,
  className = "",
  name = "",
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const triggerClasses = [
    styles.dropdownTrigger,
    isOpen && styles.open,
    disabled && styles.disabled,
    selectedOption && styles.hasValue,
  ]
    .filter(Boolean)
    .join(" ");

  const arrowClasses = [styles.dropdownArrow, isOpen && styles.rotated]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.dropdownWrapper} ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={triggerClasses}
        onClick={toggleDropdown}
        disabled={disabled}
      >
        <span className={styles.dropdownValue}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={arrowClasses}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {searchable && (
            <div className={styles.dropdownSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.dropdownSearchInput}
                autoFocus
              />
            </div>
          )}

          <div className={styles.dropdownOptions}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`${styles.dropdownOption} ${option.value === value ? styles.selected : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                  {option.value === value && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 4.5L6 12L2.5 8.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <div className={styles.dropdownNoOptions}>No options found</div>
            )}
          </div>
        </div>
      )}

      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default Dropdown;
