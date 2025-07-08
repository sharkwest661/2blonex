// src/components/shared/listings/NewListings.js
"use client";
import { useState } from "react";
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";
import { Banner } from "../advertisement";
import Select from "@/components/ui/forms/Select";
import "./newListing.css";

const NewListings = () => {
  const [sortValue, setSortValue] = useState("-created_at");

  // Sort options for the dropdown
  const sortOptions = [
    { value: "-created_at", label: "Əvvəlcə yeni" },
    { value: "created_at", label: "Əvvəlcə köhnə" },
    { value: "-price", label: "Əvvəlcə baha" },
    { value: "price", label: "Əvvəlcə ucuz" },
  ];

  const handleSortChange = (value) => {
    setSortValue(value);
    // Add your sorting logic here
  };

  return (
    <section className="new-listings">
      <SectionTitle
        title="Yeni elanlar"
        buttonText="Bütün yeni elanlar"
        buttonHref="/yeni-elanlar"
        alignment="left"
        showSortSelect={true}
        sortValue={sortValue}
        onSortChange={handleSortChange}
      />

      {/* Mobile Sort Filter - Always rendered, hidden by CSS on desktop */}
      <div className="mobile-sort-filter">
        <div className="main_container">
          <div className="mobile-sort-wrapper">
            <form>
              <div className="form-group sort__select mobile-sort">
                <Select
                  options={sortOptions}
                  value={sortValue}
                  onChange={handleSortChange}
                  isSearchable={false}
                  size="small"
                  placeholder="Çeşidlə..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="main_container">
        <div className="wrapper">
          <PostList
            posts={MOCK_PRODUCTS.newListings}
            category="other" // 🔑 ONLY ADDITION: category prop
          />
          {/* Sticky Advertisement Banner */}
          <div>
            <Banner
              href=""
              image="/img/example/banner1.png"
              mobileImage="/img/example/banner-mob.png"
              altText="Advertisement"
              isSticky={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewListings;
