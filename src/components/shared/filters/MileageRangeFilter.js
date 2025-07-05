// components/shared/filters/MileageRangeFilter.js
import { RangeInput } from "@/components/ui/forms";

export const MileageRangeFilter = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  disabled = false,
  className = "",
}) => {
  return (
    <RangeInput
      minLabel="Yürüş, min"
      maxLabel="maks"
      minPlaceholder="0"
      maxPlaceholder="∞"
      minValue={minValue}
      maxValue={maxValue}
      onMinChange={onMinChange}
      onMaxChange={onMaxChange}
      suffix="km"
      type="number"
      disabled={disabled}
      className={className}
    />
  );
};
