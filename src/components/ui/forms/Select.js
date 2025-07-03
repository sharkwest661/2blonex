"use client";
// src/components/ui/forms/Select.js
import React from "react";
import ReactSelect, { components } from "react-select";
import clsx from "clsx";
import styles from "./Select.module.css"; // Import your custom styles

const Select = ({
  options = [],
  value = null,
  onChange,
  placeholder = "Seçin...",
  isSearchable = true,
  isMulti = false,
  isDisabled = false,
  size = "normal", // "normal", "small"
  className = "",
  name = "",
  id = "",
  isClearable = false,
  isLoading = false,
  noOptionsMessage = () => "Nəticə tapılmadı",
  loadingMessage = () => "Yüklənir...",
  ...rest
}) => {
  // Custom DropdownIndicator to match Bootstrap-select arrow
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <div
          className={styles.selectArrow}
          style={{
            transform: props.selectProps.menuIsOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
          }}
        />
      </components.DropdownIndicator>
    );
  };

  // Custom styles to match your Bootstrap-select design
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: size === "small" ? "36px" : "48px",
      minHeight: size === "small" ? "36px" : "48px",
      padding: "0",
      border: `1px solid ${state.isFocused ? "#80bdff" : "#cccccc"}`,
      // borderRadius: "10px",
      backgroundColor: "#ffffff",
      fontSize: "1.6rem",
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: state.isFocused ? "#80bdff" : "#cccccc",
      },
    }),

    valueContainer: (provided) => ({
      ...provided,
      height: size === "small" ? "34px" : "46px",
      padding: size === "small" ? "9px 12px" : "15px 10px 15px 12px",
      paddingRight: "40px",
    }),

    input: (provided) => ({
      ...provided,
      margin: "0",
      fontSize: "1.6rem",
      lineHeight: "1.125",
      color: "#000",
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: "1.6rem",
      lineHeight: "1.125",
      color: "rgba(0, 0, 0, 0.3)",
      margin: "0",
    }),

    singleValue: (provided) => ({
      ...provided,
      fontSize: "1.6rem",
      lineHeight: "1.125",
      color: "#000",
      margin: "0",
    }),

    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "rgba(255, 230, 0, 0.5)",
      borderColor: "#ffe600",
      color: "#013f44",
      borderRadius: "5px",
    }),

    multiValueLabel: (provided) => ({
      ...provided,
      color: "#013f44",
      fontSize: "1.4rem",
    }),

    multiValueRemove: (provided) => ({
      ...provided,
      color: "#013f44",
      ":hover": {
        backgroundColor: "#ffe600",
        color: "#013f44",
      },
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      height: size === "small" ? "34px" : "46px",
      paddingRight: "10px",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    menu: (provided) => ({
      ...provided,
      borderRadius: "10px",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
      border: "1px solid #e9ecef",
      zIndex: 1021,
    }),

    menuList: (provided) => ({
      ...provided,
      padding: "0",
      borderRadius: "10px",
    }),

    option: (provided, state) => ({
      ...provided,
      padding: "5px 10px",
      fontSize: "1.3rem",
      color: state.isSelected ? "#fff" : "#4d4d4d",
      backgroundColor: state.isSelected
        ? "#013f44"
        : state.isFocused
          ? "#013f44"
          : "transparent",
      cursor: "pointer",
      transition: "0.3s",
      ":active": {
        backgroundColor: "#013f44",
        color: "#fff",
      },
      ":hover": {
        backgroundColor: "#013f44",
        color: "#fff",
      },
    }),

    loadingIndicator: (provided) => ({
      ...provided,
      color: "#013f44",
    }),

    clearIndicator: (provided) => ({
      ...provided,
      color: "rgba(1, 63, 68, 0.5)",
      cursor: "pointer",
      ":hover": {
        color: "#013f44",
      },
    }),
  };

  // Handle form state integration
  const handleChange = (selectedOption) => {
    if (onChange) {
      if (isMulti) {
        onChange(
          selectedOption ? selectedOption.map((option) => option.value) : []
        );
      } else {
        onChange(selectedOption ? selectedOption.value : null);
      }
    }
  };

  // Convert value to react-select format
  const getSelectValue = () => {
    if (!value) return null;

    if (isMulti) {
      return Array.isArray(value)
        ? options.filter((option) => value.includes(option.value))
        : [];
    } else {
      return options.find((option) => option.value === value) || null;
    }
  };

  return (
    <ReactSelect
      id={id}
      name={name}
      value={getSelectValue()}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isMulti={isMulti}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isLoading={isLoading}
      noOptionsMessage={noOptionsMessage}
      loadingMessage={loadingMessage}
      styles={customStyles}
      components={{
        DropdownIndicator,
      }}
      className={clsx(
        "react-select-container",
        size === "small" && "react-select--small",
        className
      )}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};

export default Select;
