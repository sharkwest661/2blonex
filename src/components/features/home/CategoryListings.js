// src/components/features/home/CategoryListings.js
import { useState } from "react";
import PostList from "@/components/shared/postitem/PostList";
import { CATEGORIES, MOCK_PRODUCTS } from "@/utils/constants";

const CategoryListings = () => {
  const [selectedCategory, setSelectedCategory] = useState("vehicles");
  const [displayCount, setDisplayCount] = useState(10);

  // 🔑 Helper function to determine category type
  const getCategoryType = (categoryId) => {
    const vehicleCategories = ["vehicles", "neqliyyat"];
    return vehicleCategories.includes(categoryId) ? "vehicles" : "other";
  };

  const currentCategory = CATEGORIES.find((cat) => cat.id === selectedCategory);
  const currentProducts = currentCategory
    ? currentCategory.products.slice(0, displayCount)
    : [];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setDisplayCount(10); // Reset display count
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  return (
    <section>
      <div className="main_container">
        <div className="wrapper">
          {/* Category Filter Buttons */}
          <div className="category-filter" style={{ marginBottom: "20px" }}>
            {CATEGORIES.slice(0, 5).map((category) => (
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
                  marginRight: "10px",
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Products Grid with Dynamic Category Type */}
          <PostList
            posts={currentProducts}
            category={getCategoryType(selectedCategory)} // 🔑 Auto-detect category type
          />

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
