// src/components/shared/PageHeader.js
"use client";
import Link from "next/link";

const PageHeader = ({
  title,
  breadcrumbs = [],
  resultCount = null,
  showResultCount = false,
}) => {
  return (
    <div className="page-header">
      <div className="main_container">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="breadcrumb-item">
                  {index === breadcrumbs.length - 1 ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="breadcrumb-link">
                      {crumb.label}
                    </Link>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="breadcrumb-separator" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Page Title */}
        <div className="page-title-section">
          <h1 className="title_category">{title}</h1>

          {/* Result Count */}
          {showResultCount && resultCount !== null && (
            <div className="result-count">
              <span className="result-count-text">
                {resultCount} elan tapıldı
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
