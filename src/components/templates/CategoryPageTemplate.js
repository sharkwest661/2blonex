// src/components/templates/CategoryPageTemplate.js
"use client";
import { Suspense, useState, useCallback } from "react";
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

  // Get category-specific data
  const typingKeywords =
    customTypingKeywords || getCategoryTypingKeywords(category);
  const metadata = getCategoryMetadata(category);
  const breadcrumbs = customBreadcrumbs || metadata.breadcrumbs;

  // Handle filter changes
  const handleFiltersChange = useCallback(
    (filters) => {
      setCurrentFilters(filters);

      console.log("Filters changed:", filters);

      // Count active filters
      const activeFilterCount = Object.values(filters).filter((value) => {
        if (Array.isArray(value)) return value.length > 0;
        return value && value !== "" && value !== "all";
      }).length;

      // Simulate filtered result count (replace with actual API call)
      if (activeFilterCount > 0) {
        setFilteredResultCount(Math.floor((resultCount || 1000) * 0.7));
      } else {
        setFilteredResultCount(resultCount || 1000);
      }

      // Here you would typically:
      // 1. Update URL parameters
      // 2. Call API with new filters
      // 3. Update listings
      // updateURLWithFilters(filters);
      // fetchFilteredResults(category, filters);
    },
    [resultCount]
  );

  return (
    <>
      {/* Search Section with category-specific typing keywords */}
      <div className="main_container">
        <section id="home_filters_sec">
          <div className="container-fluid">
            <SearchSection
              typingKeywords={typingKeywords}
              category={category}
            />
          </div>
        </section>
      </div>

      {/* Page Header with breadcrumbs and title */}
      <PageHeader
        title={pageTitle}
        breadcrumbs={breadcrumbs}
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
              initialFilters={{}}
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
