// src/utils/filterRegistry.js
import { CATEGORIES } from "./constants";

// Mapping from URL slugs to filter category IDs
const SLUG_TO_CATEGORY_MAPPING = {
  neqliyyat: "vehicles",
  emlak: "realestate",
  elektronika: "electronics",
  "is-elanlari": "jobs",
  xidmetler: "services",
  // Add more mappings as needed
};

/**
 * Maps URL slug to internal category ID for filter components
 * @param {string} slug - URL slug (e.g., "neqliyyat")
 * @returns {string} - Internal category ID (e.g., "vehicles")
 */
export const getFilterCategoryId = (slug) => {
  return SLUG_TO_CATEGORY_MAPPING[slug] || slug;
};

/**
 * Get category configuration by slug
 * @param {string} slug - URL slug
 * @returns {object} - Category configuration
 */
export const getCategoryConfig = (slug) => {
  const category = getCategoryBySlug(slug);
  if (!category) return null;

  return {
    ...category,
    filterCategoryId: getFilterCategoryId(slug),
  };
};

/**
 * Find category by slug
 * @param {string} slug - URL slug
 * @returns {object|null} - Category object or null
 */
export const getCategoryBySlug = (slug) => {
  return CATEGORIES.find((category) => category.slug === slug) || null;
};

/**
 * Get typing keywords for search section based on category
 * @param {string} category - Category slug or ID
 * @returns {array} - Array of typing keywords
 */
export const getCategoryTypingKeywords = (category) => {
  const keywords = {
    vehicles: [
      "Mercedes E220",
      "BMW X5",
      "Toyota Camry",
      "Hyundai Elantra",
      "Kia Sportage",
      "VAZ 2107",
    ],
    electronics: [
      "iPhone 15 Pro",
      "Samsung Galaxy S24",
      "MacBook Pro",
      "PlayStation 5",
      "AirPods Pro",
      "Dell XPS",
    ],
    realestate: [
      "3 otaqlı mənzil",
      "Villa satılır",
      "Ofis icarəsi",
      "Yasamal rayonu",
      "Binəqədi villa",
      "Sabunçu torpaq",
    ],
    jobs: [
      "Frontend developer",
      "Satış meneceri",
      "Mühasib vakansiya",
      "İnsan resursları",
      "Marketinq mütəxəssisi",
      "İT mühəndis",
    ],
    services: [
      "Təmizlik xidməti",
      "Avtomobil təmiri",
      "İngiliscə dərsi",
      "Fotoqraf xidməti",
      "Məsləhət xidməti",
      "Texniki dəstək",
    ],
  };

  const categoryId = getFilterCategoryId(category);
  return keywords[categoryId] || keywords.vehicles;
};

/**
 * Get metadata for category pages
 * @param {string} category - Category slug or ID
 * @returns {object} - Metadata object
 */
export const getCategoryMetadata = (category) => {
  const metadata = {
    vehicles: {
      title: "Nəqliyyat - Avtomobil alqı-satqısı",
      description:
        "Azərbaycanda avtomobil, motosiklet və digər nəqliyyat vasitələrinin alqı-satqısı elanları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Nəqliyyat", href: "/neqliyyat" },
      ],
    },
    electronics: {
      title: "Elektronika - Telefon, kompüter, texnika",
      description:
        "Telefon, kompüter, texnika və elektronika elanları Azərbaycanda",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Elektronika", href: "/elektronika" },
      ],
    },
    realestate: {
      title: "Daşınmaz əmlak - Mənzil, ev, villa, torpaq",
      description: "Mənzil, ev, villa, torpaq və digər daşınmaz əmlak elanları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Daşınmaz əmlak", href: "/emlak" },
      ],
    },
    jobs: {
      title: "İş elanları - Vakansiyalar Azərbaycanda",
      description:
        "Azərbaycanda iş axtarışı və vakansiya elanları. Hər sahədə iş imkanları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "İş elanları", href: "/is-elanlari" },
      ],
    },
    services: {
      title: "Xidmətlər - Müxtəlif xidmət növləri",
      description:
        "Təmir, təmizlik, təhsil və digər xidmət elanları Azərbaycanda",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Xidmətlər", href: "/xidmetler" },
      ],
    },
  };

  const categoryId = getFilterCategoryId(category);
  return metadata[categoryId] || metadata.vehicles;
};

/**
 * Check if a category supports advanced filters
 * @param {string} category - Category slug or ID
 * @returns {boolean} - Whether category has advanced filters
 */
export const hasAdvancedFilters = (category) => {
  const categoryId = getFilterCategoryId(category);

  // Categories with advanced/complex filtering
  const advancedCategories = ["vehicles", "realestate", "electronics"];

  return advancedCategories.includes(categoryId);
};

/**
 * Get filter validation rules for a category
 * @param {string} category - Category slug or ID
 * @returns {object} - Validation rules
 */
export const getFilterValidationRules = (category) => {
  const categoryId = getFilterCategoryId(category);

  const rules = {
    vehicles: {
      priceMin: { min: 0, max: 1000000 },
      priceMax: { min: 0, max: 1000000 },
      yearMin: { min: 1990, max: new Date().getFullYear() },
      yearMax: { min: 1990, max: new Date().getFullYear() },
      mileageMax: { min: 0, max: 1000000 },
    },
    electronics: {
      priceMin: { min: 0, max: 50000 },
      priceMax: { min: 0, max: 50000 },
      yearMin: { min: 2010, max: new Date().getFullYear() },
      yearMax: { min: 2010, max: new Date().getFullYear() },
    },
    realestate: {
      priceMin: { min: 0, max: 10000000 },
      priceMax: { min: 0, max: 10000000 },
      areaMin: { min: 1, max: 10000 },
      areaMax: { min: 1, max: 10000 },
      floor: { min: 1, max: 100 },
      totalFloors: { min: 1, max: 100 },
    },
    jobs: {
      salaryMin: { min: 0, max: 50000 },
      salaryMax: { min: 0, max: 50000 },
    },
    services: {
      priceMin: { min: 0, max: 10000 },
      priceMax: { min: 0, max: 10000 },
    },
  };

  return rules[categoryId] || {};
};

/**
 * Generate URL parameters from filter state
 * @param {object} filters - Filter state object
 * @returns {string} - URL query string
 */
export const generateFilterURL = (filters) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value && value !== "" && value !== "all") {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (typeof value === "string" || typeof value === "number") {
        params.set(key, value.toString());
      }
    }
  });

  return params.toString();
};

/**
 * Parse URL parameters to filter state
 * @param {string} searchParams - URL search parameters
 * @returns {object} - Filter state object
 */
export const parseFilterURL = (searchParams) => {
  const filters = {};
  const params = new URLSearchParams(searchParams);

  params.forEach((value, key) => {
    // Handle array values (comma-separated)
    if (value.includes(",")) {
      filters[key] = value.split(",");
    } else {
      filters[key] = value;
    }
  });

  return filters;
};

/**
 * Get default filters for a category
 * @param {string} category - Category slug or ID
 * @returns {object} - Default filter state
 */
export const getDefaultFilters = (category) => {
  const categoryId = getFilterCategoryId(category);

  const defaults = {
    vehicles: {
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      yearMin: "",
      yearMax: "",
      condition: "all",
      city: "",
      showMoreFilters: false,
    },
    electronics: {
      category: "all",
      brand: "",
      priceMin: "",
      priceMax: "",
      condition: "all",
      city: "",
      storage: [],
      ram: [],
      os: "",
      showMoreFilters: false,
    },
    realestate: {
      propertyType: "all",
      transactionType: "",
      priceMin: "",
      priceMax: "",
      city: "",
      roomCount: "all",
      areaMin: "",
      areaMax: "",
      showMoreFilters: false,
    },
    jobs: {
      category: "all",
      employmentType: [],
      salaryMin: "",
      salaryMax: "",
      city: "",
      experienceLevel: "all",
      education: [],
      showMoreFilters: false,
    },
    services: {
      category: "all",
      serviceType: "",
      priceMin: "",
      priceMax: "",
      city: "",
      providerType: "",
      availability: [],
      showMoreFilters: false,
    },
  };

  return defaults[categoryId] || defaults.vehicles;
};
