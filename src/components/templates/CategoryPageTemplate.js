// src/components/templates/CategoryPageTemplate.js
"use client";
import { Suspense, useState, useCallback, useMemo, useRef } from "react";
import SearchSection from "@/components/features/home/SearchSection";
import PageHeader from "@/components/shared/PageHeader";
import FilterSection from "@/components/shared/FilterSection";
import FilterManager from "@/components/shared/filters/FilterManager";
import VipListings from "@/components/shared/listings/VipListings";
import NewListings from "@/components/shared/listings/NewListings";
import { FullWidthBanner } from "@/components/shared/advertisement";
import {
  getCategoryTypingKeywords,
  getCategoryMetadata,
} from "@/utils/filterRegistry";

const CategoryPageTemplate = ({
  category,
  pageTitle,
  customTypingKeywords = null,
  customBreadcrumbs = null,
  showVipListings = true,
  showNewListings = true,
  customContent = null,
  resultCount = null,
  showResultCount = false,
  showFilters = true,
}) => {
  // State for current filters
  const [currentFilters, setCurrentFilters] = useState({});
  const [filteredResultCount, setFilteredResultCount] = useState(resultCount);

  // Use ref to prevent unnecessary re-renders
  const resultCountRef = useRef(resultCount);
  resultCountRef.current = resultCount;

  // Memoize category-specific data to prevent recalculation
  const categoryData = useMemo(() => {
    const typingKeywords =
      customTypingKeywords || getCategoryTypingKeywords(category);
    const metadata = getCategoryMetadata(category);
    const breadcrumbs = customBreadcrumbs || metadata.breadcrumbs;

    return { typingKeywords, metadata, breadcrumbs };
  }, [category, customTypingKeywords, customBreadcrumbs]);

  // Optimized filter change handler with proper dependencies
  const handleFiltersChange = useCallback((filters) => {
    console.log("Filters changed:", filters); // Remove this log when done testing

    // Update current filters state
    setCurrentFilters(filters);

    // Count active filters efficiently
    const activeFilterCount = Object.entries(filters).filter(([key, value]) => {
      // Skip meta fields
      if (key === "showMoreFilters") return false;

      if (Array.isArray(value)) return value.length > 0;
      return value && value !== "" && value !== "all";
    }).length;

    // Calculate filtered result count
    const currentResultCount = resultCountRef.current || 1000;
    const newFilteredCount =
      activeFilterCount > 0
        ? Math.floor(currentResultCount * 0.7)
        : currentResultCount;

    setFilteredResultCount(newFilteredCount);

    // Here you would typically:
    // 1. Update URL parameters
    // 2. Call API with new filters
    // 3. Update listings
    // updateURLWithFilters(filters);
    // fetchFilteredResults(category, filters);
  }, []); // Empty dependency array since we use refs for dynamic values

  // Memoize initial filters to prevent constant re-initialization
  const initialFilters = useMemo(() => ({}), []);

  return (
    <>
      {/* Search Section with category-specific typing keywords */}
      <div className="main_container">
        <section id="home_filters_sec">
          <div className="container-fluid">
            <SearchSection
              typingKeywords={categoryData.typingKeywords}
              category={category}
            />
          </div>
        </section>
      </div>

      {/* Page Header with breadcrumbs and title */}
      <PageHeader
        title={pageTitle}
        breadcrumbs={categoryData.breadcrumbs}
        resultCount={filteredResultCount}
        showResultCount={showResultCount}
      />

      {/* Category-specific Filters using FilterManager */}
      {showFilters && (
        <FilterSection>
          <Suspense fallback={<div>Loading filters...</div>}>
            <FilterManager
              category={category}
              onFiltersChange={handleFiltersChange}
              initialFilters={initialFilters}
            />
          </Suspense>
        </FilterSection>
      )}

      {/* Custom Content Slot (if needed) */}
      {customContent && (
        <div className="custom-content-section">
          <div className="main_container">{customContent}</div>
        </div>
      )}

      {/* VIP Listings Section */}
      {showVipListings && (
        <>
          <VipListings
            category={category}
            filters={currentFilters}
            resultCount={filteredResultCount}
          />
          <FullWidthBanner
            href=""
            image="/img/example/banner2.png"
            altText={`${pageTitle} reklamı`}
          />
        </>
      )}

      {/* New Listings Section */}
      {showNewListings && (
        <>
          <NewListings
            category={category}
            filters={currentFilters}
            resultCount={filteredResultCount}
          />
        </>
      )}
    </>
  );
};

export default CategoryPageTemplate;
