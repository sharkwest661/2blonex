"use client";
// features/vehicles/components/VehicleFilters.js (Simple organized layout)
import { useState } from "react";
import { Dropdown, FilterButtons } from "@/components/ui/forms";
import { LocationFilter } from "@/components/shared/filters";
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
    hasCredit: false,
    hasBarter: false,
    equipment: [],
    showMoreFilters: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePriceChange = (e, type) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    if (value && value <= 0) value = "";

    if (type === "min") {
      handleFilterChange("priceMin", value);
    } else {
      handleFilterChange("priceMax", value);
    }
  };

  const handleYearChange = (e, type) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    const currentYear = new Date().getFullYear();

    if (value && (value < 1900 || value > currentYear)) {
      value = type === "min" ? 1900 : currentYear;
    }

    if (type === "min") {
      handleFilterChange("yearMin", value);
    } else {
      handleFilterChange("yearMax", value);
    }
  };

  const handleMileageChange = (e, type) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    if (value && value < 0) value = "";

    if (type === "min") {
      handleFilterChange("mileageMin", value);
    } else {
      handleFilterChange("mileageMax", value);
    }
  };

  const handleEngineVolumeChange = (e, type) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    if (value && value < 0) value = "";

    if (type === "min") {
      handleFilterChange("engineVolumeMin", value);
    } else {
      handleFilterChange("engineVolumeMax", value);
    }
  };

  const handlePowerChange = (e, type) => {
    let value = e.target.value ? parseInt(e.target.value) : "";
    if (value && value < 0) value = "";

    if (type === "min") {
      handleFilterChange("powerMin", value);
    } else {
      handleFilterChange("powerMax", value);
    }
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
      hasCredit: false,
      hasBarter: false,
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
            <div className={styles.rangeInputs}>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.priceMin}
                  onChange={(e) => handlePriceChange(e, "min")}
                  placeholder="Min"
                  min="0"
                />
                <label>Qiymət, min</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.priceMax}
                  onChange={(e) => handlePriceChange(e, "max")}
                  placeholder="Max"
                  min="0"
                />
                <label>maks</label>
              </div>
            </div>
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
            <div className={styles.rangeInputs}>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.engineVolumeMin}
                  onChange={(e) => handleEngineVolumeChange(e, "min")}
                  placeholder="Min"
                  min="0"
                />
                <label>Həcm (sm³), min</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.engineVolumeMax}
                  onChange={(e) => handleEngineVolumeChange(e, "max")}
                  placeholder="Max"
                  min="0"
                />
                <label>maks</label>
              </div>
            </div>
          </div>

          <div className={styles.filterField}>
            <div className={styles.rangeInputs}>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.yearMin}
                  onChange={(e) => handleYearChange(e, "min")}
                  placeholder="Min"
                  min="1900"
                  max={new Date().getFullYear()}
                />
                <label>İl, min</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.yearMax}
                  onChange={(e) => handleYearChange(e, "max")}
                  placeholder="Max"
                  min="1900"
                  max={new Date().getFullYear()}
                />
                <label>maks</label>
              </div>
            </div>
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
            <div className={styles.conditionGroup}>
              <div className={styles.radioOption}>
                <input
                  type="radio"
                  name="condition"
                  id="condition_all"
                  value="all"
                  checked={filters.condition === "all"}
                  onChange={(e) =>
                    handleFilterChange("condition", e.target.value)
                  }
                />
                <label htmlFor="condition_all">Hamısı</label>
              </div>
              <div className={styles.radioOption}>
                <input
                  type="radio"
                  name="condition"
                  id="condition_new"
                  value="new"
                  checked={filters.condition === "new"}
                  onChange={(e) =>
                    handleFilterChange("condition", e.target.value)
                  }
                />
                <label htmlFor="condition_new">Yeni</label>
              </div>
              <div className={styles.radioOption}>
                <input
                  type="radio"
                  name="condition"
                  id="condition_used"
                  value="used"
                  checked={filters.condition === "used"}
                  onChange={(e) =>
                    handleFilterChange("condition", e.target.value)
                  }
                />
                <label htmlFor="condition_used">Sürülmüş</label>
              </div>
            </div>
          </div>

          <div className={styles.filterField}>
            <div className={styles.rangeInputs}>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.mileageMin}
                  onChange={(e) => handleMileageChange(e, "min")}
                  placeholder="Min"
                  min="0"
                />
                <label>Yürüş, min</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  value={filters.mileageMax}
                  onChange={(e) => handleMileageChange(e, "max")}
                  placeholder="Max"
                  min="0"
                />
                <label>maks</label>
              </div>
            </div>
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
                <div className={styles.rangeInputs}>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      value={filters.powerMin}
                      onChange={(e) => handlePowerChange(e, "min")}
                      placeholder="Min"
                      min="0"
                    />
                    <label>Güc, min</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      value={filters.powerMax}
                      onChange={(e) => handlePowerChange(e, "max")}
                      placeholder="Max"
                      min="0"
                    />
                    <label>maks</label>
                  </div>
                </div>
              </div>

              <div className={styles.filterField}>
                <div className={styles.paymentGroup}>
                  <div className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      id="kredit"
                      checked={filters.hasCredit}
                      onChange={(e) =>
                        handleFilterChange("hasCredit", e.target.checked)
                      }
                    />
                    <label htmlFor="kredit">Kredit</label>
                  </div>
                  <div className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      id="barter"
                      checked={filters.hasBarter}
                      onChange={(e) =>
                        handleFilterChange("hasBarter", e.target.checked)
                      }
                    />
                    <label htmlFor="barter">Barter</label>
                  </div>
                </div>
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
