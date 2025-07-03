// src/app/[category]/page.js - Dynamic Category Pages (App Router)
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import PostList from "@/components/shared/postitem/PostList";
import { getCategoryBySlug, searchProducts } from "@/utils/constants";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category;

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  const category = getCategoryBySlug(categorySlug);

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
    return (
      <Layout>
        <div className="main_container">
          <div className="wrapper">
            <h1>Kateqoriya tapılmadı</h1>
            <p>Axtardığınız kateqoriya mövcud deyil.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
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
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder={`${category.name} içində axtarın...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
                minWidth: "250px",
              }}
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              <option value="newest">Ən yenilər</option>
              <option value="price-low">Qiymət: Aşağıdan yuxarıya</option>
              <option value="price-high">Qiymət: Yuxarıdan aşağıya</option>
            </select>
          </div>

          {/* Products */}
          {loading ? <div>Yüklənir...</div> : <PostList posts={products} />}

          {/* Subcategories */}
          {category.subcategories && (
            <div className="subcategories" style={{ marginTop: "40px" }}>
              <h3>Alt kateqoriyalar</h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {category.subcategories.map((subcat, index) => (
                  <a
                    key={index}
                    href={`${category.href}/${subcat.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{
                      padding: "8px 16px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      textDecoration: "none",
                      color: "#013f44",
                      backgroundColor: "#f8f9fa",
                    }}
                  >
                    {subcat}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
