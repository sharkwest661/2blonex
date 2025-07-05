"use client";
// features/vehicles/components/VehicleFilters.js (Final Version)
import { useState } from "react";
import {
  Dropdown,
  RadioGroup,
  CheckboxGroup,
  FilterButtons,
} from "@/components/ui/forms";
import {
  PriceRangeFilter,
  LocationFilter,
  YearRangeFilter,
  MileageRangeFilter,
  PowerRangeFilter,
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

// Car Models Data (you can move this to constants later)
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

const ENGINE_VOLUMES = [
  { value: "1000", label: "1.0" },
  { value: "1200", label: "1.2" },
  { value: "1400", label: "1.4" },
  { value: "1600", label: "1.6" },
  { value: "1800", label: "1.8" },
  { value: "2000", label: "2.0" },
  { value: "2500", label: "2.5" },
  { value: "3000", label: "3.0" },
  { value: "3500", label: "3.5" },
  { value: "4000", label: "4.0" },
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
    color: "",
    fuelType: "",
    bodyType: "",
    engineVolumeMin: "",
    engineVolumeMax: "",
    yearMin: "",
    yearMax: "",
    transmission: "",
    city: "",
    condition: "all",
    mileageMin: "",
    mileageMax: "",
    drivetrainType: "",
    seatCount: "",
    powerMin: "",
    powerMax: "",
    paymentOptions: [],
    equipment: [],
    showMoreFilters: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      // Reset model when brand changes
      ...(key === "brand" && { model: "" }),
    }));
  };

  const handleReset = () => {
    setFilters({
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      color: "",
      fuelType: "",
      bodyType: "",
      engineVolumeMin: "",
      engineVolumeMax: "",
      yearMin: "",
      yearMax: "",
      transmission: "",
      city: "",
      condition: "all",
      mileageMin: "",
      mileageMax: "",
      drivetrainType: "",
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
    // Here you would typically trigger a search or navigate to results
  };

  const availableModels = filters.brand ? CAR_MODELS[filters.brand] || [] : [];

  return (
    <div className={styles.filtersSection}>
      <div className={styles.filtersContainer}>
        <h1 className={styles.titleCategory}>Nəqliyyat</h1>

        <div className={styles.desctopFilters}>
          {/* Brand - Order 1 */}
          <div
            className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order1}`}
          >
            <Dropdown
              placeholder="Marka"
              options={CAR_BRANDS}
              value={filters.brand}
              onChange={(value) => handleFilterChange("brand", value)}
              searchable
            />
          </div>

          {/* Model - Order 2 */}
          <div
            className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order2}`}
          >
            <Dropdown
              placeholder="Model"
              options={availableModels}
              value={filters.model}
              onChange={(value) => handleFilterChange("model", value)}
              disabled={!filters.brand}
            />
          </div>

          {/* Price Range - Order 3 */}
          <div
            className={`${styles.formGroup} ${styles.forWidthBig} ${styles.grow1} ${styles.order3}`}
          >
            <PriceRangeFilter
              minValue={filters.priceMin}
              maxValue={filters.priceMax}
              onMinChange={(value) => handleFilterChange("priceMin", value)}
              onMaxChange={(value) => handleFilterChange("priceMax", value)}
            />
          </div>

          {/* Color - Order 4 */}
          <div
            className={`${styles.formGroup} ${styles.forWidthSmall} ${styles.grow1} ${styles.order4}`}
          >
            <Dropdown
              placeholder="Rəng"
              options={COLORS}
              value={filters.color}
              onChange={(value) => handleFilterChange("color", value)}
            />
          </div>

          {/* Fuel Type - Order 5 */}
          <div
            className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order5}`}
          >
            <Dropdown
              placeholder="Yanacaq növü"
              options={FUEL_TYPES}
              value={filters.fuelType}
              onChange={(value) => handleFilterChange("fuelType", value)}
            />
          </div>

          {/* Body Type - Order 6 */}
          <div
            className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order6}`}
          >
            <Dropdown
              placeholder="Ban Növü"
              options={BODY_TYPES}
              value={filters.bodyType}
              onChange={(value) => handleFilterChange("bodyType", value)}
            />
          </div>

          {/* Engine Volume Range - Order 7 */}
          <div
            className={`${styles.litrGroup} ${styles.forWidthBig} ${styles.grow1} ${styles.order7}`}
          >
            <div className={styles.formGroup}>
              <Dropdown
                placeholder="Həcm (sm³), min"
                options={ENGINE_VOLUMES}
                value={filters.engineVolumeMin}
                onChange={(value) =>
                  handleFilterChange("engineVolumeMin", value)
                }
              />
            </div>
            <div className={styles.formGroup}>
              <Dropdown
                placeholder="maks"
                options={ENGINE_VOLUMES.filter(
                  (vol) =>
                    !filters.engineVolumeMin ||
                    parseInt(vol.value) >= parseInt(filters.engineVolumeMin)
                )}
                value={filters.engineVolumeMax}
                onChange={(value) =>
                  handleFilterChange("engineVolumeMax", value)
                }
                disabled={!filters.engineVolumeMin}
              />
            </div>
          </div>

          {/* Year Range - Order 8 */}
          <div
            className={`${styles.yearGroup} ${styles.forWidthSmall} ${styles.grow1} ${styles.order8}`}
          >
            <YearRangeFilter
              minValue={filters.yearMin}
              maxValue={filters.yearMax}
              onMinChange={(value) => handleFilterChange("yearMin", value)}
              onMaxChange={(value) => handleFilterChange("yearMax", value)}
            />
          </div>

          {/* Transmission - Order 9 */}
          <div
            className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order9}`}
          >
            <Dropdown
              placeholder="Sürətlər qutusu"
              options={TRANSMISSIONS}
              value={filters.transmission}
              onChange={(value) => handleFilterChange("transmission", value)}
            />
          </div>

          {/* City - Order 10 */}
          <div
            className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order10}`}
          >
            <LocationFilter
              value={filters.city}
              onChange={(value) => handleFilterChange("city", value)}
            />
          </div>

          {/* Condition Radio - Order 11 */}
          <div
            className={`${styles.formGroup} ${styles.forWidthBig} ${styles.grow1} ${styles.order11}`}
          >
            <RadioGroup
              options={CONDITION_OPTIONS}
              value={filters.condition}
              onChange={(value) => handleFilterChange("condition", value)}
              name="car-condition"
              variant="button"
              layout="horizontal"
            />
          </div>

          {/* Mileage Range - Order 12 (conditionally hidden) */}
          <div
            className={`${styles.formGroup} ${styles.forWidthSmall} ${styles.grow1} ${styles.order12} ${!filters.showMoreFilters ? styles.dnone : ""}`}
          >
            <MileageRangeFilter
              minValue={filters.mileageMin}
              maxValue={filters.mileageMax}
              onMinChange={(value) => handleFilterChange("mileageMin", value)}
              onMaxChange={(value) => handleFilterChange("mileageMax", value)}
            />
          </div>

          {/* Additional Hidden Filters */}
          {filters.showMoreFilters && (
            <>
              {/* Drivetrain Type - Order 13 */}
              <div
                className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order13}`}
              >
                <Dropdown
                  placeholder="Ötürücü"
                  options={DRIVETRAIN_TYPES}
                  value={filters.drivetrainType}
                  onChange={(value) =>
                    handleFilterChange("drivetrainType", value)
                  }
                />
              </div>

              {/* Seat Count - Order 14 */}
              <div
                className={`${styles.formGroup} ${styles.forWidth20} ${styles.grow1} ${styles.order14}`}
              >
                <Dropdown
                  placeholder="Yerlərin sayı"
                  options={SEAT_COUNTS}
                  value={filters.seatCount}
                  onChange={(value) => handleFilterChange("seatCount", value)}
                />
              </div>

              {/* Power Range - Order 15 */}
              <div
                className={`${styles.formGroup} ${styles.forWidthBig} ${styles.grow1} ${styles.order15}`}
              >
                <PowerRangeFilter
                  minValue={filters.powerMin}
                  maxValue={filters.powerMax}
                  onMinChange={(value) => handleFilterChange("powerMin", value)}
                  onMaxChange={(value) => handleFilterChange("powerMax", value)}
                />
              </div>

              {/* Payment Options - Order 16 */}
              <div
                className={`${styles.formGroup} ${styles.forWidthSmall} ${styles.grow1} ${styles.dFlex} ${styles.order16} ${styles.forCredit}`}
              >
                <CheckboxGroup
                  options={PAYMENT_OPTIONS}
                  values={filters.paymentOptions}
                  onChange={(values) =>
                    handleFilterChange("paymentOptions", values)
                  }
                  name="payment-options"
                  layout="horizontal"
                />
              </div>

              {/* Vehicle Equipment - Order 17 */}
              <div
                className={`${styles.additionalChekingsHero} ${styles.order17}`}
              >
                <p className={styles.additionalChekingsTitle}>
                  Avtomobilin təchizatı
                </p>
                <div className={styles.additionalChekings}>
                  <CheckboxGroup
                    options={VEHICLE_EQUIPMENT}
                    values={filters.equipment}
                    onChange={(values) =>
                      handleFilterChange("equipment", values)
                    }
                    name="vehicle-equipment"
                    layout="horizontal"
                    variant="default"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Filter Buttons */}
        <div className={styles.descFiltersBtns}>
          <FilterButtons
            onReset={handleReset}
            onToggleMoreFilters={() =>
              handleFilterChange("showMoreFilters", !filters.showMoreFilters)
            }
            onShowResults={handleShowResults}
            moreFiltersExpanded={filters.showMoreFilters}
            resultsCount={0} // This would come from your search results
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
