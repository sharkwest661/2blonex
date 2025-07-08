// src/components/templates/CategoryPageTemplate.js
"use client";
import { Suspense } from "react";
import SearchSection from "@/components/features/home/SearchSection";
import PageHeader from "@/components/shared/PageHeader";
import FilterSection from "@/components/shared/FilterSection";
import VipListings from "@/components/shared/listings/VipListings";
import NewListings from "@/components/shared/listings/NewListings";
import { FullWidthBanner } from "@/components/shared/advertisement";
import {
  getFilterComponent,
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
}) => {
  // Get category-specific data
  const FilterComponent = getFilterComponent(category);
  const typingKeywords =
    customTypingKeywords || getCategoryTypingKeywords(category);
  const metadata = getCategoryMetadata(category);
  const breadcrumbs = customBreadcrumbs || metadata.breadcrumbs;

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
        resultCount={resultCount}
        showResultCount={showResultCount}
      />

      {/* Category-specific Filters */}
      {FilterComponent && (
        <FilterSection>
          <FilterComponent />
        </FilterSection>
      )}

      {/* Custom Content Slot (if needed) */}
      {customContent && (
        <div className="custom-content-section">{customContent}</div>
      )}

      {/* VIP Listings Section */}
      {showVipListings && (
        <>
          <VipListings category={category} />
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
          <NewListings category={category} />
        </>
      )}
    </>
  );
};

export default CategoryPageTemplate;
