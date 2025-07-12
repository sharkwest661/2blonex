// src/utils/filterRegistry.js - COMPLETE UPDATE

/**
 * Complete filter registry with all 14 categories
 */

// Category slug to internal ID mapping
const CATEGORY_MAPPING = {
  // ✅ Completed Categories
  neqliyyat: "vehicles",
  emlak: "realestate",
  "is-elanlari": "jobs",
  elektronika: "electronics",
  geyim: "clothing",

  // 🚀 NEW Categories to implement today
  xidmetler: "services",
  "usaq-alemi": "kids",
  kosmetika: "cosmetics",
  "ev-ve-bag": "home-garden",
  erzaq: "food",
  heyvanlar: "animals",
  "idman-hobbi": "sports",
  diger: "other",
  pulsuz: "free",

  vehicles: "vehicles", // For direct access
  realestate: "realestate",
  jobs: "jobs",
  electronics: "electronics",
  clothing: "clothing",
  services: "services",
  kids: "kids",
  cosmetics: "cosmetics",
  "home-garden": "home-garden",
  food: "food",
  animals: "animals",
  sports: "sports",
  other: "other",
  free: "free",
};

/**
 * Convert category slug to internal category ID
 * @param {string} slug - URL slug (e.g., "neqliyyat", "xidmetler")
 * @returns {string} - Internal category ID (e.g., "vehicles", "services")
 */
export const getFilterCategoryId = (slug) => {
  return CATEGORY_MAPPING[slug]; // Default fallback
};

/**
 * Get all valid category slugs
 * @returns {string[]} - Array of valid slugs for routing
 */
export const getValidCategorySlugs = () => {
  return Object.keys(CATEGORY_MAPPING);
};

/**
 * Check if a category slug is valid
 * @param {string} slug - Category slug to validate
 * @returns {boolean} - Whether slug is valid
 */
export const isValidCategorySlug = (slug) => {
  return CATEGORY_MAPPING.hasOwnProperty(slug);
};

/**
 * Get category metadata for SEO and breadcrumbs
 * @param {string} category - Category slug or ID
 * @returns {object} - Metadata object
 */
export const getCategoryMetadata = (category) => {
  const metadata = {
    // ✅ Existing Categories
    vehicles: {
      title: "Nəqliyyat - Avtomobil alqı-satqısı",
      description:
        "Azərbaycanda avtomobil, motosiklet və digər nəqliyyat vasitələrinin alqı-satqısı elanları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Nəqliyyat", href: "/neqliyyat" },
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
    electronics: {
      title: "Elektronika - Telefon, kompüter, texnika",
      description:
        "Telefon, kompüter, texnika və elektronika elanları Azərbaycanda",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Elektronika", href: "/elektronika" },
      ],
    },
    clothing: {
      title: "Geyim - Kişi, qadın və uşaq geyimləri",
      description: "Kişi, qadın və uşaq geyimləri, ayaqqabı və aksesuarlar",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Geyim", href: "/geyim" },
      ],
    },

    // 🚀 NEW Categories
    services: {
      title: "Xidmətlər - Müxtəlif xidmət növləri",
      description:
        "Təmir, təmizlik, təhsil və digər xidmət elanları Azərbaycanda",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Xidmətlər", href: "/xidmetler" },
      ],
    },
    kids: {
      title: "Uşaq aləmi - Oyuncaq, geyim, mebel",
      description:
        "Uşaq oyuncaqları, geyimləri, mebelləri və digər uşaq məhsulları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Uşaq aləmi", href: "/usaq-alemi" },
      ],
    },
    cosmetics: {
      title: "Kosmetika - Gözəllik və baxım məhsulları",
      description: "Kosmetika, parfümeriya və şəxsi baxım məhsulları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Kosmetika", href: "/kosmetika" },
      ],
    },
    "home-garden": {
      title: "Ev və bağ - Mebel, texnika, bağ ləvazimatı",
      description:
        "Ev mebelləri, texnikası, bağ ləvazimatları və ev üçün hər şey",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Ev və bağ", href: "/ev-ve-bag" },
      ],
    },
    food: {
      title: "Ərzaq - Qida məhsulları",
      description: "Təzə məhsullar, konservlər və digər qida məhsulları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Ərzaq", href: "/erzaq" },
      ],
    },
    animals: {
      title: "Heyvanlar - Ev heyvanları və ləvazimatlar",
      description: "Ev heyvanları, heyvan ləvazimatları və baxım məhsulları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Heyvanlar", href: "/heyvanlar" },
      ],
    },
    sports: {
      title: "İdman və hobbi - İdman ləvazimatı və hobbi",
      description:
        "İdman ləvazimatları, fitness avadanlıqları və hobbi məhsulları",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "İdman və hobbi", href: "/idman-hobbi" },
      ],
    },
    other: {
      title: "Digər - Müxtəlif məhsullar",
      description: "Digər kateqoriyalara aid olmayan müxtəlif məhsullar",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Digər", href: "/diger" },
      ],
    },
    free: {
      title: "Pulsuz - Pulsuz elanlar",
      description: "Pulsuz verilən məhsullar və xidmətlər",
      breadcrumbs: [
        { label: "Ana səhifə", href: "/" },
        { label: "Pulsuz", href: "/pulsuz" },
      ],
    },
  };

  const categoryId = getFilterCategoryId(category);
  return metadata[categoryId] || metadata.vehicles;
};

// Update your getDefaultFilters function in FilterManager.js:
// const getDefaultFilters = (category) => {
//   const categoryId = getFilterCategoryId(category);

//   // Import from registry
//   return getDefaultFilters(categoryId);
// };

// OR if you prefer to keep it simple, replace with this static version:
export const getDefaultFilters = (category) => {
  const categoryId = getFilterCategoryId(category);

  const defaults = {
    vehicles: {
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      city: "",
      color: "",
      fuel: "",
      bodyType: "",
      yearMin: "",
      yearMax: "",
      transmission: "",
      condition: "",
      mileageMax: "",
      engineVolumeMin: "",
      engineVolumeMax: "",
      equipment: [],
      showMoreFilters: false,
    },
    electronics: {
      itemType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
      category: "",
      specifications: "",
      warranty: "",
      showMoreFilters: false,
    },
    jobs: {
      activityField: "",
      workSchedule: "",
      salaryMin: "",
      salaryMax: "",
      city: "",
      experience: "",
      education: "",
      jobType: "",
      benefits: "",
      showMoreFilters: false,
    },
    clothing: {
      clothingType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      size: "",
      color: "",
      condition: "",
      gender: "",
      material: "",
      season: "",
      delivery: "",
      showMoreFilters: false,
    },
    realestate: {
      propertyType: "",
      transactionType: "",
      priceMin: "",
      priceMax: "",
      city: "",
      rooms: "",
      area: "",
      condition: "",
      floor: "",
      totalFloors: "",
      features: [],
      showMoreFilters: false,
    },
    services: {
      serviceType: "",
      serviceCategory: "",
      priceMin: "",
      priceMax: "",
      city: "",
      experience: "",
      availability: "",
      schedule: "",
      serviceArea: "",
      showMoreFilters: false,
    },
    kids: {
      productType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      ageGroup: "",
      condition: "",
      gender: "",
      category: "",
      size: "",
      showMoreFilters: false,
    },
    cosmetics: {
      productType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
      category: "",
      skinType: "",
      size: "",
      showMoreFilters: false,
    },
    "home-garden": {
      productType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
      category: "",
      room: "",
      material: "",
      showMoreFilters: false,
    },
    food: {
      category: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
      showMoreFilters: false,
    },
    animals: {
      animalType: "",
      breed: "",
      priceMin: "",
      priceMax: "",
      city: "",
      age: "",
      gender: "",
      condition: "",
      purpose: "",
      category: "",
      showMoreFilters: false,
    },
    sports: {
      sportCategory: "",
      productType: "",
      brand: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
      size: "",
      sportType: "",
      showMoreFilters: false,
    },
    other: {
      category: "",
      priceMin: "",
      priceMax: "",
      city: "",
      condition: "",
      showMoreFilters: false,
    },
    free: {
      category: "",
      city: "",
      condition: "",
      showMoreFilters: false,
    },
  };

  return defaults[categoryId] || defaults.vehicles;
};

/**
 * Check if a category supports advanced filters
 * @param {string} category - Category slug or ID
 * @returns {boolean} - Whether category has advanced filters
 */
export const hasAdvancedFilters = (category) => {
  const categoryId = getFilterCategoryId(category);

  // Categories with complex filtering (Template A + Vehicles/Real Estate)
  const advancedCategories = [
    "vehicles",
    "realestate",
    "electronics",
    "clothing",
    "services",
    "kids",
    "cosmetics",
    "home-garden",
    "animals",
    "sports",
  ];

  return advancedCategories.includes(categoryId);
};

/**
 * Get filter complexity level for development purposes
 * @param {string} category - Category slug or ID
 * @returns {string} - Complexity level: "complex", "medium", "simple"
 */
export const getFilterComplexity = (category) => {
  const categoryId = getFilterCategoryId(category);

  const complexity = {
    // Complex (Original patterns)
    vehicles: "complex",
    realestate: "complex",

    // Medium (Template A - Product categories)
    electronics: "medium",
    clothing: "medium",
    kids: "medium",
    cosmetics: "medium",
    "home-garden": "medium",
    animals: "medium",
    sports: "medium",

    // Medium (Template B - Service categories)
    jobs: "medium",
    services: "medium",

    // Simple (Template C - Minimal categories)
    food: "simple",
    other: "simple",
    free: "simple",
  };

  return complexity[categoryId] || "medium";
};

/**
 * Get implementation pattern for development
 * @param {string} category - Category slug or ID
 * @returns {string} - Pattern: "original", "copy-electronics", "copy-jobs", "minimal"
 */
export const getImplementationPattern = (category) => {
  const categoryId = getFilterCategoryId(category);

  const patterns = {
    vehicles: "original",
    realestate: "original",

    // Template A: Copy electronics pattern
    electronics: "original",
    clothing: "copy-electronics",
    kids: "copy-electronics",
    cosmetics: "copy-electronics",
    "home-garden": "copy-electronics",
    animals: "copy-electronics",
    sports: "copy-electronics",

    // Template B: Copy jobs pattern
    jobs: "original",
    services: "copy-jobs",

    // Template C: Minimal implementation
    food: "minimal",
    other: "minimal",
    free: "minimal",
  };

  return patterns[categoryId] || "copy-electronics";
};
