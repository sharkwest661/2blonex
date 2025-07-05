"use client";
// components/shared/filters/PriceRangeFilter.js
import { RangeInput } from "@/components/ui/forms";

export const PriceRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  currency = "₼",
  disabled = false,
  className = "",
}) => {
  return (
    <RangeInput
      minLabel="Qiymət, min"
      maxLabel="maks"
      minPlaceholder="0"
      maxPlaceholder="∞"
      minValue={minValue}
      maxValue={maxValue}
      onMinChange={onMinChange}
      onMaxChange={onMaxChange}
      suffix={currency}
      type="number"
      disabled={disabled}
      className={className}
    />
  );
};
