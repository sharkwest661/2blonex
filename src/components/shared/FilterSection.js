// src/components/shared/FilterSection.js
"use client";
import { Suspense } from "react";

const FilterSection = ({ children, isLoading = false }) => {
  return (
    <section className="filter-section">
      <div className="main_container">
        <Suspense
          fallback={
            <div className="filter-loading">
              <div className="filter-skeleton">
                <div className="skeleton-row">
                  <div className="skeleton-item"></div>
                  <div className="skeleton-item"></div>
                  <div className="skeleton-item"></div>
                  <div className="skeleton-item"></div>
                </div>
                <div className="skeleton-row">
                  <div className="skeleton-item wide"></div>
                  <div className="skeleton-item"></div>
                  <div className="skeleton-item"></div>
                </div>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
    </section>
  );
};

export default FilterSection;
