"use client";
// src/components/features/vehicles/VehicleFilters.js
import React, { useState } from "react";
import {
  Dropdown,
  FilterButtons,
  RadioGroup2,
  CheckboxGroup2,
  CheckboxGroup,
} from "@/components/ui/forms";
import {
  PriceRangeFilter,
  LocationFilter,
  YearRangeFilter,
  MileageRangeFilter,
  PowerRangeFilter,
  EngineVolumeRangeFilter,
} from "@/components/shared/filters";
import {
  CAR_BRANDS,
  CAR_MODELS,
  FUEL_TYPES,
  BODY_TYPES,
  TRANSMISSIONS,
  DRIVETRAIN_TYPES,
  COLORS,
  SEAT_COUNTS,
  CONDITION_OPTIONS,
  PAYMENT_OPTIONS,
  VEHICLE_EQUIPMENT,
  EQUIPMENT_CATEGORIES,
} from "../constants";
import "../styles/VehicleFilters.css";

const VehicleFilters = () => {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    color: "",
    fuel: "",
    bodyType: "",
    volumeMin: "",
    volumeMax: "",
    yearMin: "",
    yearMax: "",
    transmission: "",
    city: "",
    condition: "all",
    mileageMin: "",
    mileageMax: "",
    gearbox: "",
    seatCount: "",
    powerMin: "",
    powerMax: "",
    paymentOptions: [],
    equipment: [],
    showMoreFilters: false,
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      // Reset model when brand changes
      ...(field === "brand" && { model: "" }),
    }));
  };

  const handleReset = () => {
    setFilters({
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      color: "",
      fuel: "",
      bodyType: "",
      volumeMin: "",
      volumeMax: "",
      yearMin: "",
      yearMax: "",
      transmission: "",
      city: "",
      condition: "all",
      mileageMin: "",
      mileageMax: "",
      gearbox: "",
      seatCount: "",
      powerMin: "",
      powerMax: "",
      paymentOptions: [],
      equipment: [],
      showMoreFilters: false,
    });
  };

  const handleShowResults = () => {
    console.log("Showing results with filters:", filters);
    // TODO: Implement actual filtering/search logic
  };

  const getModelOptions = () => {
    return filters.brand ? CAR_MODELS[filters.brand] || [] : [];
  };

  const getEquipmentByCategory = (category) => {
    return VEHICLE_EQUIPMENT.filter((item) => item.category === category);
  };

  return (
    <>
      <h1 className="title_category">Nəqliyyat</h1>

      <div className="main_container">
        <div className="desctop_filters">
          {/* Row 1: Brand, Model, Price, Color */}
          <div className="form-group for_width20 grow-1 order-1">
            <Dropdown
              placeholder="Marka"
              options={CAR_BRANDS}
              value={filters.brand}
              onChange={(value) => handleFilterChange("brand", value)}
            />
          </div>

          <div className="form-group for_width20 grow-1 order-2">
            <Dropdown
              placeholder="Model"
              options={getModelOptions()}
              value={filters.model}
              onChange={(value) => handleFilterChange("model", value)}
              disabled={!filters.brand}
            />
          </div>

          <div className="form-group for_width_big grow-1 order-3">
            <PriceRangeFilter
              minValue={filters.priceMin}
              maxValue={filters.priceMax}
              onMinChange={(value) => handleFilterChange("priceMin", value)}
              onMaxChange={(value) => handleFilterChange("priceMax", value)}
            />
          </div>

          <div className="form-group for_width_small grow-1 order-4">
            <Dropdown
              placeholder="Rəng"
              options={COLORS}
              value={filters.color}
              onChange={(value) => handleFilterChange("color", value)}
            />
          </div>

          {/* Row 2: Fuel, Body Type, Engine Volume, Year */}
          <div className="form-group for_width20 grow-1 order-5">
            <Dropdown
              placeholder="Yanacaq növü"
              options={FUEL_TYPES}
              value={filters.fuel}
              onChange={(value) => handleFilterChange("fuel", value)}
            />
          </div>

          <div className="form-group for_width20 grow-1 order-6">
            <Dropdown
              placeholder="Ban növü"
              options={BODY_TYPES}
              value={filters.bodyType}
              onChange={(value) => handleFilterChange("bodyType", value)}
            />
          </div>

          <div className="form-group for_width_big grow-1 order-7">
            <EngineVolumeRangeFilter
              minValue={filters.volumeMin}
              maxValue={filters.volumeMax}
              onMinChange={(value) => handleFilterChange("volumeMin", value)}
              onMaxChange={(value) => handleFilterChange("volumeMax", value)}
            />
          </div>

          <div className="form-group for_width_small grow-1 order-8">
            <YearRangeFilter
              minValue={filters.yearMin}
              maxValue={filters.yearMax}
              onMinChange={(value) => handleFilterChange("yearMin", value)}
              onMaxChange={(value) => handleFilterChange("yearMax", value)}
            />
          </div>

          {/* Row 3: Transmission, City, Condition, Mileage */}
          <div className="form-group for_width20 grow-1 order-9">
            <Dropdown
              placeholder="Sürətlər qutusu"
              options={TRANSMISSIONS}
              value={filters.transmission}
              onChange={(value) => handleFilterChange("transmission", value)}
            />
          </div>

          <div className="form-group for_width20 grow-1 order-10">
            <LocationFilter
              value={filters.city}
              onChange={(value) => handleFilterChange("city", value)}
            />
          </div>

          <div className="form-group for_width_big grow-1 order-11">
            <RadioGroup2
              options={CONDITION_OPTIONS}
              value={filters.condition}
              onChange={(value) => handleFilterChange("condition", value)}
              name="car-condition"
            />
          </div>

          <div className="form-group for_width_small grow-1 order-12">
            <MileageRangeFilter
              minValue={filters.mileageMin}
              maxValue={filters.mileageMax}
              onMinChange={(value) => handleFilterChange("mileageMin", value)}
              onMaxChange={(value) => handleFilterChange("mileageMax", value)}
            />
          </div>

          {/* Additional Filters - Hidden by Default */}
          {filters.showMoreFilters && (
            <>
              {/* Additional vehicle filters */}
              <div className="form-group for_width20 grow-1 order-13">
                <Dropdown
                  placeholder="Ötürücü"
                  options={DRIVETRAIN_TYPES}
                  value={filters.gearbox}
                  onChange={(value) => handleFilterChange("gearbox", value)}
                />
              </div>

              <div className="form-group for_width20 grow-1 order-14">
                <Dropdown
                  placeholder="Yerlərin sayı"
                  options={SEAT_COUNTS}
                  value={filters.seatCount}
                  onChange={(value) => handleFilterChange("seatCount", value)}
                />
              </div>

              <div className="form-group for_width_big grow-1 order-15">
                <PowerRangeFilter
                  minValue={filters.powerMin}
                  maxValue={filters.powerMax}
                  onMinChange={(value) => handleFilterChange("powerMin", value)}
                  onMaxChange={(value) => handleFilterChange("powerMax", value)}
                />
              </div>

              <div className="form-group for_width_small grow-1 order-16">
                <CheckboxGroup2
                  options={PAYMENT_OPTIONS}
                  values={filters.paymentOptions}
                  onChange={(values) =>
                    handleFilterChange("paymentOptions", values)
                  }
                  name="payment-options"
                />
              </div>

              {/* Vehicle Equipment Section */}
              <div className="additional_chekings_hero order-17">
                <p className="additional_chekings_title">
                  Avtomobilin təchizatı
                </p>
                <div className="additional_chekings">
                  {EQUIPMENT_CATEGORIES.map((category) => {
                    const categoryEquipment = getEquipmentByCategory(
                      category.value
                    );
                    if (categoryEquipment.length === 0) return null;

                    return (
                      <div key={category.value} className="equipment-category">
                        <h4 className="equipment-category-title">
                          {category.label}
                        </h4>
                        <CheckboxGroup
                          options={categoryEquipment}
                          values={filters.equipment}
                          onChange={(values) =>
                            handleFilterChange("equipment", values)
                          }
                          name={`equipment-${category.value}`}
                          layout="horizontal"
                          variant="default"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Filter Action Buttons */}
        <div className="desc_filters_btns">
          <FilterButtons
            onReset={handleReset}
            onToggleMoreFilters={() =>
              handleFilterChange("showMoreFilters", !filters.showMoreFilters)
            }
            onShowResults={handleShowResults}
            moreFiltersExpanded={filters.showMoreFilters}
            resultsCount={0}
            resetText="Sıfırla"
            moreFiltersText="Daha çox filtr"
            showResultsText="Elanları göstər"
          />
        </div>
      </div>

      <div className="main_container">
        {/* Mobile Sections (767px and below) */}
        <div className="after_767">
          <div id="mark767_show_btn">
            <div className="mark767_show_btn_title">
              <i className="fa-solid fa-car"></i>
              <p>Bütün markalar</p>
            </div>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        <div className="neqliyyat_767">
          <div id="afterMark767">
            <label id="markLabel767">Marka</label>
            <p id="checkedMark767">
              {filters.brand &&
                CAR_BRANDS.find((b) => b.value === filters.brand)?.label}
            </p>
            <i className="fa-solid fa-chevron-down" id="mark_arrow_down"></i>
            <i className="fa-solid fa-circle-xmark" id="mark_reset_xmark"></i>
          </div>
          <div id="afterModel767">
            <label id="modelLabel767">Model</label>
            <p id="checkedModel767">
              {filters.model &&
                getModelOptions().find((m) => m.value === filters.model)?.label}
            </p>
            <i className="fa-solid fa-chevron-down" id="model_arrow_down"></i>
            <i className="fa-solid fa-circle-xmark" id="model_reset_xmark"></i>
          </div>
        </div>

        <div className="filters_767">
          <div className="filters_767_inner">
            <a href="filters.html">
              <i className="fa-solid fa-arrow-down-short-wide"></i>
              <p>Filtrlər</p>
            </a>
          </div>
          <div className="filters_767_inner" id="filter_date">
            <a href="#">
              <i className="fa-solid fa-arrow-down-z-a"></i>
              <p>Tarixə görə</p>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Mark Dropdown */}
      <div id="mark767_dropdown">
        <div className="mark767_header">
          <i className="fa-solid fa-arrow-left" id="markCloseBtn767"></i>
          <h3>Marka</h3>
        </div>
        <div className="search search--live">
          <div className="input-group search__group">
            <input
              type="text"
              className="form-control search__input"
              id="markInput767"
            />
            <div className="input-group-append search__append">
              <button className="search__btn" type="button"></button>
            </div>
          </div>
        </div>
        <ul className="selectBox__list" id="carMarks767">
          {CAR_BRANDS.map((brand) => (
            <li
              key={brand.value}
              onClick={() => handleFilterChange("brand", brand.value)}
            >
              {brand.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Model Dropdown */}
      <div id="model767_dropdown">
        <div className="model767_header">
          <i className="fa-solid fa-arrow-left" id="modelCloseBtn767"></i>
          <h3>Model</h3>
        </div>
        <div className="search search--live">
          <div className="input-group search__group">
            <input
              type="text"
              className="form-control search__input"
              id="modelInput767"
            />
            <div className="input-group-append search__append">
              <button className="search__btn" type="button"></button>
            </div>
          </div>
        </div>
        <ul className="selectBox__list" id="carModel767">
          {getModelOptions().map((model) => (
            <li
              key={model.value}
              onClick={() => handleFilterChange("model", model.value)}
            >
              {model.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Brands Section */}
      <section className="mark_section">
        <div className="main_container">
          <div className="container-fluid">
            <div className="brands">
              <div className="brands__heading">
                <h2 className="mb-0">Markalar</h2>
                <a href="">Bütün markalar</a>
              </div>
              <div className="brands__grid">
                {CAR_BRANDS.slice(0, 8).map((brand) => (
                  <a
                    key={brand.value}
                    href="#"
                    className="brands__item"
                    onClick={() => handleFilterChange("brand", brand.value)}
                  >
                    {brand.label}
                    <span>{Math.floor(Math.random() * 5000) + 100}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleFilters;
