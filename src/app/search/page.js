// src/app/search/page.js - Search Results Page (App Router)
"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import PostList from "@/components/shared/postitem/PostList";
import { searchProducts, CATEGORIES } from "@/utils/constants";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState(category || "");

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query, selectedCategory, sortBy]);

  const performSearch = () => {
    setLoading(true);

    let results = searchProducts(query, selectedCategory || null);

    // Apply sorting
    results = [...results].sort((a, b) => {
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

    setProducts(results);
    setLoading(false);
  };

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("q", query);
    if (categoryId) {
      newUrl.searchParams.set("category", categoryId);
    } else {
      newUrl.searchParams.delete("category");
    }
    window.history.pushState({}, "", newUrl);
  };

  if (!query) {
    return (
      <div className="main_container">
        <div className="wrapper">
          <h1>Axtarış</h1>
          <p>Axtarış sorğusu daxil edilməyib.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main_container">
      <div className="wrapper">
        {/* Search Header */}
        <div className="search-header" style={{ marginBottom: "20px" }}>
          <h1>"{query}" üçün axtarış nəticələri</h1>
          <p>{products.length} elan tapıldı</p>
        </div>

        {/* Filters */}
        <div
          className="search-filters"
          style={{
            marginBottom: "20px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            <option value="">Bütün kateqoriyalar</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({cat.count})
              </option>
            ))}
          </select>

          {/* Sort Filter */}
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

        {/* Results */}
        {loading ? (
          <div>Axtarılır...</div>
        ) : products.length > 0 ? (
          <PostList posts={products} />
        ) : (
          <div
            className="no-results"
            style={{
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
            }}
          >
            <h3>Heç bir nəticə tapılmadı</h3>
            <p>
              "{query}" üçün heç bir elan tapılmadı. Başqa açar sözlərlə cəhd
              edin.
            </p>
            <p>
              <strong>Məsləhətlər:</strong>
            </p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>Yazım xətalarını yoxlayın</li>
              <li>Daha ümumi açar sözlər istifadə edin</li>
              <li>Sinonimləri və ya əlaqəli sözləri cəhd edin</li>
              <li>Kateqoriya filtrlərini silin</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="main_container">
            <div className="wrapper">Yüklənir...</div>
          </div>
        }
      >
        <SearchContent />
      </Suspense>
    </Layout>
  );
}
