// src/components/features/realestate/filters/RealEstateFilterDrawer.js
// Mobile drawer following EXACT VehicleFilterBottomDrawer pattern

import React, { useState, useEffect } from "react";
import "../../../shared/filters/styles/FilterManager.css";

const RealEstateFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  resultsCount = 0,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [expandedSections, setExpandedSections] = useState({
    dealType: true,
    propertyType: true,
    price: true,
    rooms: true,
    area: false,
    floor: false,
    condition: false,
    location: false,
    amenities: false,
    building: false,
  });

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      dealType: "sale",
      propertyType: "",
      priceMin: "",
      priceMax: "",
      city: "",
      rooms: "",
      areaMin: "",
      areaMax: "",
      floorMin: "",
      totalFloors: "",
      condition: "",
      metro: "",
      district: "",
      amenities: [],
      buildingFeatures: [],
      buildingType: "all",
    };
    setLocalFilters(resetFilters);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (localFilters.dealType && localFilters.dealType !== "sale") count++;
    if (localFilters.propertyType) count++;
    if (localFilters.priceMin || localFilters.priceMax) count++;
    if (localFilters.city) count++;
    if (localFilters.rooms) count++;
    if (localFilters.areaMin || localFilters.areaMax) count++;
    if (localFilters.floorMin || localFilters.totalFloors) count++;
    if (localFilters.condition) count++;
    if (localFilters.metro) count++;
    if (localFilters.district) count++;
    if (localFilters.amenities?.length > 0)
      count += localFilters.amenities.length;
    if (localFilters.buildingFeatures?.length > 0)
      count += localFilters.buildingFeatures.length;
    if (localFilters.buildingType && localFilters.buildingType !== "all")
      count++;
    return count;
  };

  // FilterSection component - exact same as VehicleFilterBottomDrawer
  const FilterSection = ({ title, children, isExpanded, onToggle }) => (
    <div className="filter-section">
      <button
        className="filter-section-header"
        onClick={onToggle}
        type="button"
      >
        <h4 className="filter-section-title">{title}</h4>
        <i className={`fa-solid fa-chevron-${isExpanded ? "up" : "down"}`}></i>
      </button>
      {isExpanded && <div className="filter-section-content">{children}</div>}
    </div>
  );

  // DropdownFilter component - exact same as VehicleFilterBottomDrawer
  const DropdownFilter = ({
    placeholder,
    options,
    value,
    onChange,
    disabled = false,
  }) => (
    <select
      className="filter-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  if (!isOpen) return null;

  return (
    <div className="mobile-filter-drawer">
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer-content">
        {/* Header - EXACT same as VehicleFilterBottomDrawer */}
        <div className="drawer-header">
          <h3>Əmlak Filtrləri</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        {/* Body - EXACT same structure as VehicleFilterBottomDrawer */}
        <div className="drawer-body">
          {/* Deal Type Filter */}
          <FilterSection
            title="Əməliyyat növü"
            isExpanded={expandedSections.dealType}
            onToggle={() => toggleSection("dealType")}
          >
            <div className="filter-radio-group">
              {[
                { value: "sale", label: "Alış" },
                { value: "rent", label: "Kirayə" },
              ].map((option) => (
                <div key={option.value} className="filter-radio-item">
                  <input
                    type="radio"
                    id={`dealType-${option.value}`}
                    name="dealType"
                    value={option.value}
                    checked={localFilters.dealType === option.value}
                    onChange={() =>
                      handleFilterChange("dealType", option.value)
                    }
                  />
                  <label
                    htmlFor={`dealType-${option.value}`}
                    className="filter-radio-label"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Property Type Filter */}
          <FilterSection
            title="Əmlak növü"
            isExpanded={expandedSections.propertyType}
            onToggle={() => toggleSection("propertyType")}
          >
            <DropdownFilter
              placeholder="Əmlak növü seçin"
              options={PROPERTY_TYPES}
              value={localFilters.propertyType}
              onChange={(value) => handleFilterChange("propertyType", value)}
            />
          </FilterSection>

          {/* Price Range Filter */}
          <FilterSection
            title="Qiymət aralığı (AZN)"
            isExpanded={expandedSections.price}
            onToggle={() => toggleSection("price")}
          >
            <div className="filter-range-group">
              <input
                type="number"
                className="filter-range-input"
                placeholder="Min qiymət"
                value={localFilters.priceMin || ""}
                onChange={(e) => handleFilterChange("priceMin", e.target.value)}
              />
              <input
                type="number"
                className="filter-range-input"
                placeholder="Max qiymət"
                value={localFilters.priceMax || ""}
                onChange={(e) => handleFilterChange("priceMax", e.target.value)}
              />
            </div>
          </FilterSection>

          {/* Rooms Filter */}
          <FilterSection
            title="Otaq sayı"
            isExpanded={expandedSections.rooms}
            onToggle={() => toggleSection("rooms")}
          >
            <DropdownFilter
              placeholder="Otaq sayı seçin"
              options={ROOM_OPTIONS}
              value={localFilters.rooms}
              onChange={(value) => handleFilterChange("rooms", value)}
            />
          </FilterSection>

          {/* Area Range Filter */}
          <FilterSection
            title="Sahə (m²)"
            isExpanded={expandedSections.area}
            onToggle={() => toggleSection("area")}
          >
            <div className="filter-range-group">
              <input
                type="number"
                className="filter-range-input"
                placeholder="Min sahə"
                value={localFilters.areaMin || ""}
                onChange={(e) => handleFilterChange("areaMin", e.target.value)}
              />
              <input
                type="number"
                className="filter-range-input"
                placeholder="Max sahə"
                value={localFilters.areaMax || ""}
                onChange={(e) => handleFilterChange("areaMax", e.target.value)}
              />
            </div>
          </FilterSection>

          {/* Floor Range Filter */}
          <FilterSection
            title="Mərtəbə"
            isExpanded={expandedSections.floor}
            onToggle={() => toggleSection("floor")}
          >
            <div className="filter-range-group">
              <input
                type="number"
                className="filter-range-input"
                placeholder="Mərtəbə"
                value={localFilters.floorMin || ""}
                onChange={(e) => handleFilterChange("floorMin", e.target.value)}
              />
              <input
                type="number"
                className="filter-range-input"
                placeholder="Ümumi mərtəbə"
                value={localFilters.totalFloors || ""}
                onChange={(e) =>
                  handleFilterChange("totalFloors", e.target.value)
                }
              />
            </div>
          </FilterSection>

          {/* Condition Filter */}
          <FilterSection
            title="Təmir vəziyyəti"
            isExpanded={expandedSections.condition}
            onToggle={() => toggleSection("condition")}
          >
            <DropdownFilter
              placeholder="Təmir vəziyyəti seçin"
              options={RENOVATION_CONDITIONS}
              value={localFilters.condition}
              onChange={(value) => handleFilterChange("condition", value)}
            />
          </FilterSection>

          {/* Location Filters */}
          <FilterSection
            title="Məkan"
            isExpanded={expandedSections.location}
            onToggle={() => toggleSection("location")}
          >
            <div className="filter-group" style={{ marginBottom: "15px" }}>
              <DropdownFilter
                placeholder="Metro stansiyası"
                options={getMetroStationsForCity(localFilters.city || "baku")}
                value={localFilters.metro}
                onChange={(value) => handleFilterChange("metro", value)}
              />
            </div>
            <div className="filter-group">
              <DropdownFilter
                placeholder="Rayon"
                options={getDistrictsForCity(localFilters.city || "baku")}
                value={localFilters.district}
                onChange={(value) => handleFilterChange("district", value)}
              />
            </div>
          </FilterSection>

          {/* Property Amenities */}
          <FilterSection
            title="Əmlak xüsusiyyətləri"
            isExpanded={expandedSections.amenities}
            onToggle={() => toggleSection("amenities")}
          >
            <div className="filter-checkbox-group">
              {PROPERTY_AMENITIES.map((amenity) => (
                <div key={amenity.value} className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    id={`amenity-${amenity.value}`}
                    checked={(localFilters.amenities || []).includes(
                      amenity.value
                    )}
                    onChange={(e) => {
                      const currentAmenities = localFilters.amenities || [];
                      const newAmenities = e.target.checked
                        ? [...currentAmenities, amenity.value]
                        : currentAmenities.filter(
                            (item) => item !== amenity.value
                          );
                      handleFilterChange("amenities", newAmenities);
                    }}
                  />
                  <label
                    htmlFor={`amenity-${amenity.value}`}
                    className="filter-checkbox-label"
                  >
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Building Features */}
          <FilterSection
            title="Bina xüsusiyyətləri"
            isExpanded={expandedSections.building}
            onToggle={() => toggleSection("building")}
          >
            <div className="filter-checkbox-group">
              {BUILDING_FEATURES.map((feature) => (
                <div key={feature.value} className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    id={`building-${feature.value}`}
                    checked={(localFilters.buildingFeatures || []).includes(
                      feature.value
                    )}
                    onChange={(e) => {
                      const currentFeatures =
                        localFilters.buildingFeatures || [];
                      const newFeatures = e.target.checked
                        ? [...currentFeatures, feature.value]
                        : currentFeatures.filter(
                            (item) => item !== feature.value
                          );
                      handleFilterChange("buildingFeatures", newFeatures);
                    }}
                  />
                  <label
                    htmlFor={`building-${feature.value}`}
                    className="filter-checkbox-label"
                  >
                    {feature.label}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Reset Section - EXACT same as VehicleFilterBottomDrawer */}
          {getActiveFiltersCount() > 0 && (
            <div className="filter-reset-section">
              <button className="filter-drawer-reset" onClick={handleReset}>
                <i className="fa-solid fa-rotate-left"></i>
                Filtrlər sıfırla ({getActiveFiltersCount()})
              </button>
            </div>
          )}
        </div>

        {/* Footer - EXACT same as VehicleFilterBottomDrawer */}
        <div className="drawer-footer">
          <button className="apply-filters-btn" onClick={handleApply}>
            Elanları göstər {resultsCount > 0 && `(${resultsCount})`}
          </button>
        </div>
      </div>
    </div>
  );
};

// Constants - same as desktop implementation
const PROPERTY_TYPES = [
  { value: "apartment", label: "Mənzil" },
  { value: "house", label: "Ev" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Ofis" },
  { value: "commercial", label: "Kommersiya" },
  { value: "land", label: "Torpaq" },
  { value: "garage", label: "Qaraj" },
  { value: "warehouse", label: "Anbar" },
];

const ROOM_OPTIONS = [
  { value: "1", label: "1 otaq" },
  { value: "2", label: "2 otaq" },
  { value: "3", label: "3 otaq" },
  { value: "4", label: "4 otaq" },
  { value: "5+", label: "5+ otaq" },
];

const RENOVATION_CONDITIONS = [
  { value: "excellent", label: "Əla təmir" },
  { value: "good", label: "Yaxşı təmir" },
  { value: "normal", label: "Normal təmir" },
  { value: "needs_repair", label: "Təmir tələb edir" },
];

const PROPERTY_AMENITIES = [
  { value: "parking", label: "Parkinq" },
  { value: "balcony", label: "Balkon" },
  { value: "elevator", label: "Lift" },
  { value: "furnished", label: "Mebelli" },
  { value: "air_conditioning", label: "Kondisioner" },
  { value: "heating", label: "İstilik sistemi" },
  { value: "internet", label: "İnternet" },
  { value: "phone", label: "Telefon" },
];

const BUILDING_FEATURES = [
  { value: "security", label: "Mühafizə" },
  { value: "concierge", label: "Kapıçı" },
  { value: "gym", label: "İdman zalı" },
  { value: "pool", label: "Hovuz" },
  { value: "garden", label: "Bağ" },
  { value: "playground", label: "Uşaq meydançası" },
  { value: "generator", label: "Generator" },
  { value: "water_tank", label: "Su çəni" },
];

// Helper functions
const getMetroStationsForCity = (city) => {
  // Always return Baku metro stations for now, regardless of city
  return [
    { value: "28_may", label: "28 May" },
    { value: "genclik", label: "Gənclik" },
    { value: "nariman_narimanov", label: "Nəriman Nərimanov" },
    { value: "sahil", label: "Sahil" },
    { value: "iceri_sheher", label: "İçəri Şəhər" },
    { value: "koroglu", label: "Koroğlu" },
    { value: "qara_qarayev", label: "Qara Qarayev" },
    { value: "neftciler", label: "Neftçilər" },
    { value: "hezi_aslanov", label: "Həzi Aslanov" },
    { value: "elmler_akademiyasi", label: "Elmlər Akademiyası" },
    { value: "inshaatchilar", label: "İnşaatçılar" },
    { value: "memar_ajami", label: "Memar Əcəmi" },
  ];
};

const getDistrictsForCity = (city) => {
  // Always return Baku districts for now, regardless of city
  return [
    { value: "nasimi", label: "Nəsimi" },
    { value: "yasamal", label: "Yasamal" },
    { value: "sabail", label: "Səbail" },
    { value: "narimanov", label: "Nərimanov" },
    { value: "nizami", label: "Nizami" },
    { value: "binagadi", label: "Binəqədi" },
    { value: "qaradagh", label: "Qaradağ" },
    { value: "sabunchu", label: "Sabunçu" },
    { value: "surakhani", label: "Suraxanı" },
    { value: "khazar", label: "Xəzər" },
  ];
};

export default RealEstateFilterDrawer;
