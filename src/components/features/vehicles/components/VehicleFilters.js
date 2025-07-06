"use client";
// features/vehicles/components/VehicleFilters.js (Updated with reusable components)
import { useState } from "react";
import {
  Dropdown,
  FilterButtons,
  RadioGroup2,
  CheckboxGroup2,
} from "@/components/ui/forms";
import {
  PriceRangeFilter,
  LocationFilter,
  YearRangeFilter,
  MileageRangeFilter,
  PowerRangeFilter,
  EngineVolumeRangeFilter,
} from "@/components/shared/filters";
import { VEHICLE_CONSTANTS } from "../constants";
import styles from "../styles/VehicleFilters.module.css";

const {
  CAR_BRANDS,
  FUEL_TYPES,
  BODY_TYPES,
  TRANSMISSIONS,
  DRIVETRAIN_TYPES,
  VEHICLE_EQUIPMENT,
} = VEHICLE_CONSTANTS;

// Car Models Data
const CAR_MODELS = {
  bmw: [
    { value: "3_series", label: "3 Series" },
    { value: "5_series", label: "5 Series" },
    { value: "x5", label: "X5" },
    { value: "x3", label: "X3" },
    { value: "x1", label: "X1" },
    { value: "1_series", label: "1 Series" },
  ],
  mercedes: [
    { value: "c_class", label: "C-Class" },
    { value: "e_class", label: "E-Class" },
    { value: "glc", label: "GLC" },
    { value: "gla", label: "GLA" },
    { value: "a_class", label: "A-Class" },
    { value: "s_class", label: "S-Class" },
  ],
  toyota: [
    { value: "camry", label: "Camry" },
    { value: "corolla", label: "Corolla" },
    { value: "rav4", label: "RAV4" },
    { value: "prius", label: "Prius" },
    { value: "highlander", label: "Highlander" },
    { value: "land_cruiser", label: "Land Cruiser" },
  ],
  hyundai: [
    { value: "elantra", label: "Elantra" },
    { value: "sonata", label: "Sonata" },
    { value: "tucson", label: "Tucson" },
    { value: "santa_fe", label: "Santa Fe" },
    { value: "accent", label: "Accent" },
  ],
};

const COLORS = [
  { value: "white", label: "Ağ" },
  { value: "black", label: "Qara" },
  { value: "silver", label: "Gümüşü" },
  { value: "gray", label: "Boz" },
  { value: "red", label: "Qırmızı" },
  { value: "blue", label: "Göy" },
  { value: "green", label: "Yaşıl" },
  { value: "brown", label: "Qəhvəyi" },
  { value: "yellow", label: "Sarı" },
  { value: "orange", label: "Narıncı" },
];

const SEAT_COUNTS = [
  { value: "2", label: "2" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "7", label: "7" },
  { value: "8", label: "8+" },
];

const CONDITION_OPTIONS = [
  { value: "all", label: "Hamısı" },
  { value: "new", label: "Yeni" },
  { value: "used", label: "Sürülmüş" },
];

const PAYMENT_OPTIONS = [
  { value: "credit", label: "Kredit" },
  { value: "barter", label: "Barter" },
];

const VehicleFilters = () => {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    yearMin: "",
    yearMax: "",
    mileageMin: "",
    mileageMax: "",
    color: "",
    fuelType: "",
    bodyType: "",
    transmission: "",
    city: "",
    condition: "all",
    engineVolumeMin: "",
    engineVolumeMax: "",
    powerMin: "",
    powerMax: "",
    drivetrainType: "",
    seatCount: "",
    paymentOptions: [], // Changed to array
    equipment: [],
    showMoreFilters: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      yearMin: "",
      yearMax: "",
      mileageMin: "",
      mileageMax: "",
      color: "",
      fuelType: "",
      bodyType: "",
      transmission: "",
      city: "",
      condition: "all",
      engineVolumeMin: "",
      engineVolumeMax: "",
      powerMin: "",
      powerMax: "",
      drivetrainType: "",
      seatCount: "",
      paymentOptions: [],
      equipment: [],
      showMoreFilters: false,
    });
  };

  const handleShowResults = () => {
    console.log("Showing results with filters:", filters);
  };

  return (
    <div className={styles.filtersSection}>
      <div className={styles.filtersContainer}>
        <h3 className={styles.titleCategory}>Maşın axtarışı</h3>

        <div className={styles.filtersGrid}>
          {/* Row 1: Brand, Model, Price Range, Color */}
          <div className={styles.filterField}>
            <Dropdown
              placeholder="Marka"
              options={CAR_BRANDS}
              value={filters.brand}
              onChange={(value) => {
                handleFilterChange("brand", value);
                handleFilterChange("model", "");
              }}
            />
          </div>

          <div className={styles.filterField}>
            <Dropdown
              placeholder="Model"
              options={filters.brand ? CAR_MODELS[filters.brand] || [] : []}
              value={filters.model}
              onChange={(value) => handleFilterChange("model", value)}
              disabled={!filters.brand}
            />
          </div>

          <div className={styles.filterField}>
            <PriceRangeFilter
              minValue={filters.priceMin}
              maxValue={filters.priceMax}
              onMinChange={(value) => handleFilterChange("priceMin", value)}
              onMaxChange={(value) => handleFilterChange("priceMax", value)}
            />
          </div>

          <div className={styles.filterField}>
            <Dropdown
              placeholder="Rəng"
              options={COLORS}
              value={filters.color}
              onChange={(value) => handleFilterChange("color", value)}
            />
          </div>

          {/* Row 2: Fuel Type, Body Type, Engine Volume, Year */}
          <div className={styles.filterField}>
            <Dropdown
              placeholder="Yanacaq növü"
              options={FUEL_TYPES}
              value={filters.fuelType}
              onChange={(value) => handleFilterChange("fuelType", value)}
            />
          </div>

          <div className={styles.filterField}>
            <Dropdown
              placeholder="Ban növü"
              options={BODY_TYPES}
              value={filters.bodyType}
              onChange={(value) => handleFilterChange("bodyType", value)}
            />
          </div>

          <div className={styles.filterField}>
            <EngineVolumeRangeFilter
              minValue={filters.engineVolumeMin}
              maxValue={filters.engineVolumeMax}
              onMinChange={(value) =>
                handleFilterChange("engineVolumeMin", value)
              }
              onMaxChange={(value) =>
                handleFilterChange("engineVolumeMax", value)
              }
            />
          </div>

          <div className={styles.filterField}>
            <YearRangeFilter
              minValue={filters.yearMin}
              maxValue={filters.yearMax}
              onMinChange={(value) => handleFilterChange("yearMin", value)}
              onMaxChange={(value) => handleFilterChange("yearMax", value)}
            />
          </div>

          {/* Row 3: Transmission, City, Condition, Mileage */}
          <div className={styles.filterField}>
            <Dropdown
              placeholder="Sürətlər qutusu"
              options={TRANSMISSIONS}
              value={filters.transmission}
              onChange={(value) => handleFilterChange("transmission", value)}
            />
          </div>

          <div className={styles.filterField}>
            <LocationFilter
              value={filters.city}
              onChange={(value) => handleFilterChange("city", value)}
            />
          </div>

          <div className={styles.filterField}>
            <RadioGroup2
              options={CONDITION_OPTIONS}
              value={filters.condition}
              onChange={(value) => handleFilterChange("condition", value)}
              name="car-condition"
            />
          </div>

          <div className={styles.filterField}>
            <MileageRangeFilter
              minValue={filters.mileageMin}
              maxValue={filters.mileageMax}
              onMinChange={(value) => handleFilterChange("mileageMin", value)}
              onMaxChange={(value) => handleFilterChange("mileageMax", value)}
            />
          </div>

          {/* Additional Filters */}
          {filters.showMoreFilters && (
            <>
              <div className={styles.filterField}>
                <Dropdown
                  placeholder="Ötürücü"
                  options={DRIVETRAIN_TYPES}
                  value={filters.drivetrainType}
                  onChange={(value) =>
                    handleFilterChange("drivetrainType", value)
                  }
                />
              </div>

              <div className={styles.filterField}>
                <Dropdown
                  placeholder="Yerlərin sayı"
                  options={SEAT_COUNTS}
                  value={filters.seatCount}
                  onChange={(value) => handleFilterChange("seatCount", value)}
                />
              </div>

              <div className={styles.filterField}>
                <PowerRangeFilter
                  minValue={filters.powerMin}
                  maxValue={filters.powerMax}
                  onMinChange={(value) => handleFilterChange("powerMin", value)}
                  onMaxChange={(value) => handleFilterChange("powerMax", value)}
                />
              </div>

              <div className={styles.filterField}>
                <CheckboxGroup2
                  options={PAYMENT_OPTIONS}
                  values={filters.paymentOptions}
                  onChange={(values) =>
                    handleFilterChange("paymentOptions", values)
                  }
                  name="payment-options"
                />
              </div>
            </>
          )}
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterActions}>
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
    </div>
  );
};

export default VehicleFilters;
