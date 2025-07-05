"use client";
// src/components/shared/sectiontitle/SectionTitle.js
import Link from "next/link";
import Image from "next/image";
import Select from "@/components/ui/forms/Select";

const SectionTitle = ({
  title,
  icon = null,
  iconSize = 32,
  iconMarginClass = "mr-10",
  buttonText = null,
  buttonHref = "#",
  alignment = "left", // "left", "center", "right"
  showSortSelect = false,
  sortValue = "-created_at",
  onSortChange = () => {},
  className = "",
}) => {
  const alignmentClass =
    alignment === "center"
      ? "title--center"
      : alignment === "right"
        ? "title--right"
        : "title--left";

  // Sort options for the dropdown
  const sortOptions = [
    { value: "-created_at", label: "Əvvəlcə yeni" },
    { value: "created_at", label: "Əvvəlcə köhnə" },
    { value: "-price", label: "Əvvəlcə baha" },
    { value: "price", label: "Əvvəlcə ucuz" },
  ];

  return (
    <div className="title_bg">
      <div className="main_container">
        <div
          className={`title ${alignmentClass} ${showSortSelect ? "yeniElanlar" : ""} ${className}`}
          style={{ padding: "0 !important" }}
        >
          <span className="center-vertical">
            {icon && (
              <Image
                src={icon}
                alt=""
                className={iconMarginClass}
                width={iconSize}
                height={iconSize}
              />
            )}
            {title}
          </span>

          {showSortSelect && (
            <form className="datefiltersort_form">
              <div className="form-group sort__select desktop-sort">
                <Select
                  options={sortOptions}
                  value={sortValue}
                  onChange={onSortChange}
                  isSearchable={false}
                  size="small"
                  placeholder="Çeşidlə..."
                />
              </div>
            </form>
          )}

          {buttonText && (
            <Link className="btn btn--icon btn--transparent" href={buttonHref}>
              <Image
                src="/img/chevron_lmain.svg"
                alt=""
                width={16}
                height={16}
              />{" "}
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
