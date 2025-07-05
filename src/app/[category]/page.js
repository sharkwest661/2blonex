"use client";
// src/app/[category]/page.js (or wherever your category page is)
import { useState, useEffect } from "react";
import PostList from "@/components/shared/postitem/PostList";
import { getCategoryBySlug, searchProducts } from "@/utils/constants";

const CategoryPage = ({ categorySlug }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  const category = getCategoryBySlug(categorySlug);

  // 🔑 Determine category type for layout
  const getCategoryType = (slug) => {
    const vehicleSlugs = ["neqliyyat", "vehicles", "avtomobil", "motosiklet"];
    return vehicleSlugs.includes(slug) ? "vehicles" : "other";
  };

  const categoryType = getCategoryType(categorySlug);

  useEffect(() => {
    if (category) {
      let filteredProducts = category.products;

      // Apply search filter
      if (searchQuery) {
        filteredProducts = searchProducts(searchQuery, category.id);
      }

      // Apply sorting
      filteredProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return (
              parseFloat(a.price.replace(/[^\d]/g, "")) -
              parseFloat(b.price.replace(/[^\d]/g, ""))
            );
          case "price-high":
            return (
              parseFloat(b.price.replace(/[^\d]/g, "")) -
              parseFloat(a.price.replace(/[^\d]/g, ""))
            );
          case "newest":
          default:
            return new Date(b.date) - new Date(a.date);
        }
      });

      setProducts(filteredProducts);
      setLoading(false);
    }
  }, [category, searchQuery, sortBy]);

  if (!category) {
    return <div>Kateqoriya tapılmadı</div>;
  }

  return (
    <div className="main_container">
      <div className="wrapper">
        {/* Category Header */}
        <div className="category-header" style={{ marginBottom: "20px" }}>
          <h1>{category.name}</h1>
          <p>{category.count} elan tapıldı</p>
        </div>

        {/* Search and Sort Controls */}
        <div
          className="controls"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Axtar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              flex: 1,
              marginRight: "10px",
            }}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="newest">Ən yeni</option>
            <option value="price-low">Qiymət: Aşağıdan yuxarıya</option>
            <option value="price-high">Qiymət: Yuxarıdan aşağıya</option>
          </select>
        </div>

        {/* Products List with Dynamic Category Type */}
        <PostList
          posts={products}
          category={categoryType} // 🔑 Use detected category type
        />
      </div>
    </div>
  );
};

export default CategoryPage;
