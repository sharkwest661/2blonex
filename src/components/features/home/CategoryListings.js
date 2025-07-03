"use client";
// src/components/features/home/CategoryListings.js
import { useState } from "react";
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { getCategoryProducts, CATEGORIES } from "@/utils/constants";

const CategoryListings = () => {
  const [selectedCategory, setSelectedCategory] = useState("vehicles");
  const [displayCount, setDisplayCount] = useState(8);

  const currentProducts = getCategoryProducts(selectedCategory, displayCount);
  const currentCategory = CATEGORIES.find((cat) => cat.id === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setDisplayCount(8); // Reset display count when switching categories
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 8);
  };

  const popularCategories = CATEGORIES.slice(0, 6); // Show first 6 categories

  return (
    <section>
      <SectionTitle
        title="Kateqoriyalar üzrə elanlar"
        alignment="left"
        showSortSelect={false}
      />

      <div className="main_container">
        <div className="wrapper">
          {/* Category Tabs */}
          <div
            className="category-tabs"
            style={{
              marginBottom: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {popularCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`btn ${selectedCategory === category.id ? "btn-primary" : "btn-outline-primary"}`}
                style={{
                  padding: "8px 16px",
                  border:
                    selectedCategory === category.id
                      ? "2px solid #013f44"
                      : "2px solid #ccc",
                  backgroundColor:
                    selectedCategory === category.id
                      ? "#013f44"
                      : "transparent",
                  color: selectedCategory === category.id ? "#fff" : "#013f44",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <PostList posts={currentProducts} />

          {/* Show More Button */}
          {currentCategory &&
            displayCount < currentCategory.products.length && (
              <div className="text-center" style={{ marginTop: "20px" }}>
                <button
                  onClick={handleShowMore}
                  className="btn btn-outline-primary"
                  style={{
                    padding: "10px 30px",
                    border: "2px solid #013f44",
                    color: "#013f44",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Daha çox göstər (
                  {currentCategory.products.length - displayCount} qalır)
                </button>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default CategoryListings;
