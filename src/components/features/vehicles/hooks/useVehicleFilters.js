// features/vehicles/hooks/useVehicleFilters.js - Custom hook for filter logic
import { useState, useCallback } from "react";

export const useVehicleFilters = (initialFilters = {}) => {
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
    ...initialFilters,
  });

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      // Reset model when brand changes
      ...(key === "brand" && { model: "" }),
    }));
  }, []);

  const resetFilters = useCallback(() => {
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
  }, []);

  const getActiveFilterCount = useCallback(() => {
    const filterKeys = Object.keys(filters);
    return filterKeys.reduce((count, key) => {
      const value = filters[key];
      if (key === "showMoreFilters" || key === "condition") return count;

      if (Array.isArray(value)) {
        return count + (value.length > 0 ? 1 : 0);
      }

      return count + (value ? 1 : 0);
    }, 0);
  }, [filters]);

  const buildQueryParams = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (key === "showMoreFilters") return;

      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (value && value !== "all") {
        params.set(key, value);
      }
    });

    return params.toString();
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    getActiveFilterCount,
    buildQueryParams,
  };
};
