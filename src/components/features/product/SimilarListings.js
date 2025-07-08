// src/components/features/product/SimilarListings.js
"use client";
import { useState, useEffect } from "react";
import PostItem from "@/components/shared/postitem/PostItem";
import { MOCK_PRODUCTS } from "@/utils/constants";

const STORE_NAMES = [
  "Kontakt Home",
  "World Telecom",
  "Apple Store Baku",
  "Samsung Plaza",
  "Techno Store",
  "Media Markt",
  "Bravo Electronics",
  "Digital Store",
  "Mobile Center",
  "Tech Point",
];

const SimilarListings = () => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Generate similar products - in real app, this would come from API
    const getSimilarProducts = () => {
      // Get some random products from electronics category
      const electronicsProducts = MOCK_PRODUCTS.electronics || [];
      const shuffled = [...electronicsProducts].sort(() => 0.5 - Math.random());
      const products = shuffled.slice(0, 10); // 10 products + 1 banner = 11 total

      // Add store information to products
      return products.map((product, index) => ({
        ...product,
        storeName: STORE_NAMES[index % STORE_NAMES.length],
        storeImage: "/img/example/seller.svg",
        storeHref: `/magaza/${STORE_NAMES[index % STORE_NAMES.length].toLowerCase().replace(/\s+/g, "-")}`,
      }));
    };

    setSimilarProducts(getSimilarProducts());
  }, []);

  return (
    <section>
      <div className="container">
        <h2>Bənzər elanlar</h2>
        <div className="wrapper wrapper--secondary">
          <div className="post">
            <div className="post__list">
              {/* Render first 7 products */}
              {similarProducts.slice(0, 7).map((product) => (
                <PostItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  secondaryTitle={product.secondaryTitle}
                  price={product.price}
                  location={product.location}
                  date={product.date}
                  image={product.image}
                  href={`/product/${product.id}`}
                  isVip={product.isVip}
                  isPremium={product.isPremium}
                  hasBarter={product.features?.barter}
                  hasCredit={product.features?.credit}
                  storeName={product.storeName}
                  storeImage={product.storeImage}
                  storeHref={product.storeHref}
                  category="other"
                />
              ))}

              {/* Banner at position 8 - using same image structure */}
              <div className="post__item">
                <div className="post__img">
                  <img
                    src="/img/example/banner.png"
                    alt="Advertisement"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* Render remaining products (from index 7 onwards) */}
              {similarProducts.slice(7).map((product) => (
                <PostItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  secondaryTitle={product.secondaryTitle}
                  price={product.price}
                  location={product.location}
                  date={product.date}
                  image={product.image}
                  href={`/product/${product.id}`}
                  isVip={product.isVip}
                  isPremium={product.isPremium}
                  hasBarter={product.features?.barter}
                  hasCredit={product.features?.credit}
                  storeName={product.storeName}
                  storeImage={product.storeImage}
                  storeHref={product.storeHref}
                  category="other"
                />
              ))}
            </div>
          </div>

          {/* Sidebar Banner */}
          <div>
            <div className="sticky-top">
              <a href="" className="d-md-block d-none">
                <img src="/img/example/banner1.png" alt="" className="w-100" />
              </a>
              <a href="" className="d-md-none">
                <img
                  src="/img/example/banner-mob.png"
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarListings;
