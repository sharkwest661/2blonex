// components/shared/filters/PowerRangeFilter.js
import { RangeInput } from "@/components/ui/forms";

export const PowerRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  disabled = false,
  className = "",
}) => {
  return (
    <RangeInput
      minLabel="Güc, min"
      maxLabel="maks"
      minPlaceholder="0"
      maxPlaceholder="∞"
      minValue={minValue}
      maxValue={maxValue}
      onMinChange={onMinChange}
      onMaxChange={onMaxChange}
      suffix="hp"
      type="number"
      disabled={disabled}
      className={className}
    />
  );
};
