// components/shared/filters/LocationFilter.js
import { Dropdown } from "@/components/ui/forms";

const CITIES = [
  { value: "baku", label: "Bakı" },
  { value: "ganja", label: "Gəncə" },
  { value: "sumqayit", label: "Sumqayıt" },
  { value: "mingachevir", label: "Mingəçevir" },
  { value: "lankaran", label: "Lənkəran" },
  { value: "sheki", label: "Şəki" },
  { value: "yevlax", label: "Yevlax" },
  { value: "nakhchivan", label: "Naxçıvan" },
  { value: "quba", label: "Quba" },
  { value: "shamakhi", label: "Şamaxı" },
];

export const LocationFilter = ({
  value,
  onChange,
  disabled = false,
  className = "",
  placeholder = "Şəhər",
}) => {
  return (
    <Dropdown
      placeholder={placeholder}
      options={CITIES}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
      searchable
    />
  );
};
