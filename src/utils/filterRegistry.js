// src/utils/filterRegistry.js
import { lazy } from "react";

// Lazy load filter components for better performance
const FILTER_COMPONENTS = {
  neqliyyat: lazy(
    () => import("@/components/features/vehicles/components/VehicleFilters")
  ),
  // emlak: lazy(
  //   () =>
  //     import("@/components/features/realestate/components/RealEstateFilters")
  // ),
  // elektronika: lazy(
  //   () =>
  //     import("@/components/features/electronics/components/ElectronicsFilters")
  // ),
  // is_elanlari: lazy(
  //   () => import("@/components/features/jobs/components/JobFilters")
  // ),
  // xidmetler: lazy(
  //   () => import("@/components/features/services/components/ServiceFilters")
  // ),
  // Add more categories as needed
};

// Add slug to category ID mapping
export const getFilterCategoryId = (slug) => {
  const mapping = {
    neqliyyat: "vehicles",
    emlak: "realestate",
    elektronika: "electronics",
    // Add more mappings
  };

  return mapping[slug] || slug;
};

// Category-specific typing keywords for search animation
export const CATEGORY_TYPING_KEYWORDS = {
  default: ["avtomobil", "telefon", "ev", "iş", "mənzil"],
  neqliyyat: [
    "BMW",
    "Mercedes",
    "Toyota",
    "Hyundai",
    "motosiklet",
    "kamaz",
    "avtobus",
  ],
  emlak: ["mənzil", "ev", "ofis", "torpaq", "villa", "şəhər evi", "bağ evi"],
  elektronika: [
    "iPhone",
    "Samsung",
    "laptop",
    "televizor",
    "telefon",
    "kompüter",
  ],
  is_elanlari: ["iş", "vakansiya", "CV", "məşğulluq", "karyer", "maaş"],
  xidmetler: ["təmir", "təmizlik", "çatdırılma", "dizayn", "tərcümə", "dərs"],
  ev_bahce: ["mebel", "məişət", "bağ", "alət", "dekor", "tekstil"],
  uşaq_aləmi: ["oyuncaq", "geyim", "arabası", "çarpayı", "kitab", "aksesuar"],
  hobbi_istirahət: [
    "kitab",
    "musiqi",
    "idman",
    "oyun",
    "kolleksiya",
    "səyahət",
  ],
  şəxsi_əşyalar: ["geyim", "ayaqqabı", "saat", "zinət", "çanta", "aksesuar"],
  pulsuz: ["hədiyyə", "pulsuz", "bağışlama", "mübadiləe", "yardım"],
};

// Category metadata for SEO and display
export const CATEGORY_METADATA = {
  neqliyyat: {
    title: "Nəqliyyat elanları - Avtomobil alqı-satqısı",
    description:
      "Azərbaycanda avtomobil alqı-satqısı. Yeni və işlənmiş avtomobillər, motosikletlər və digər nəqliyyat vasitələri.",
    keywords: "avtomobil, maşın, nəqliyyat, alqı-satqı, BMW, Mercedes, Toyota",
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "Nəqliyyat", href: "/neqliyyat" },
    ],
  },
  emlak: {
    title: "Əmlak elanları - Ev, mənzil alqı-satqısı",
    description:
      "Azərbaycanda əmlak alqı-satqısı. Mənzillər, evlər, ofioslər və torpaq sahələri.",
    keywords: "əmlak, mənzil, ev, ofis, torpaq, villa, kirayə, satış",
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "Əmlak", href: "/emlak" },
    ],
  },
  elektronika: {
    title: "Elektronika elanları - Telefon, kompüter, TV",
    description:
      "Elektron cihazlar, telefonlar, kompüterlər, televizorlar və digər elektronika.",
    keywords:
      "elektronika, telefon, kompüter, laptop, televizor, iPhone, Samsung",
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "Elektronika", href: "/elektronika" },
    ],
  },
  is_elanlari: {
    title: "İş elanları - Vakansiyalar və CV",
    description:
      "Azərbaycanda iş elanları, vakansiyalar və CV-lər. İş axtaranlar və işəgötürənlər üçün.",
    keywords: "iş, vakansiya, CV, məşğulluq, karyer, maaş, iş elanı",
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "İş elanları", href: "/is-elanlari" },
    ],
  },
  xidmetler: {
    title: "Xidmətlər - Təmir, təmizlik və digər xidmətlər",
    description:
      "Müxtəlif xidmətlər: təmir, təmizlik, çatdırılma, dizayn və digər peşəkar xidmətlər.",
    keywords: "xidmət, təmir, təmizlik, çatdırılma, dizayn, dərs, tərcümə",
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "Xidmətlər", href: "/xidmetler" },
    ],
  },
};

/**
 * Get filter component for a specific category
 * @param {string} categorySlug - Category slug (e.g., 'neqliyyat')
 * @returns {React.Component|null} Filter component or null
 */
export const getFilterComponent = (categorySlug) => {
  return FILTER_COMPONENTS[categorySlug] || null;
};

/**
 * Get typing keywords for a specific category
 * @param {string} categorySlug - Category slug
 * @returns {string[]} Array of typing keywords
 */
export const getCategoryTypingKeywords = (categorySlug) => {
  return (
    CATEGORY_TYPING_KEYWORDS[categorySlug] || CATEGORY_TYPING_KEYWORDS.default
  );
};

/**
 * Get metadata for a specific category
 * @param {string} categorySlug - Category slug
 * @returns {object} Category metadata
 */
export const getCategoryMetadata = (categorySlug) => {
  return (
    CATEGORY_METADATA[categorySlug] || {
      title: "Elanlar - Bolbol.az",
      description: "Azərbaycanın ən böyük elan portalı",
      keywords: "elan, alqı-satqı, Azərbaycan",
      breadcrumbs: [{ label: "Ana səhifə", href: "/" }],
    }
  );
};

export default FILTER_COMPONENTS;
