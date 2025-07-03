// src/components/shared/SectionTitle.js
import Link from "next/link";
import Image from "next/image";

const SectionTitle = ({
  title,
  icon = null,
  buttonText = null,
  buttonHref = "#",
  alignment = "left", // "left", "center", "right"
  showSortSelect = false,
  className = "",
}) => {
  const alignmentClass =
    alignment === "center"
      ? "title--center"
      : alignment === "right"
        ? "title--right"
        : "title--left";

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
                className="mr-10"
                width={24}
                height={24}
              />
            )}
            {title}
          </span>

          {showSortSelect && (
            <form>
              <div className="form-group sort__select">
                <select id="sort_input" className="selectpicker">
                  <option value="-created_at" defaultValue>
                    Əvvəlcə yeni
                  </option>
                  <option value="created_at">Əvvəlcə köhnə</option>
                  <option value="-price">Əvvəlcə baha</option>
                  <option value="price">Əvvəlcə ucuz</option>
                </select>
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
