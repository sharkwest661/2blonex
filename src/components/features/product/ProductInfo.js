// src/components/features/product/ProductInfo.js
"use client";
import { useState } from "react";
import { useFavoritesStore } from "@/store/useFavoritesStore";

const ProductInfo = ({ product }) => {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const [isFavorite, setIsFavorite] = useState(favorites.includes(product.id));

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(product.id);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product__info">
      {/* Product Attributes */}
      <div className="product__attributes">
        <div className="product__id">{product.productId}</div>
        <div className="d-flex">
          <span className="product__view">{product.views}</span>
          <a
            href="#"
            className={`product__favorite${isFavorite ? " active" : ""}`}
            data-title={isFavorite ? "Seçilmişdir" : "Seçilmiş et"}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Seçilmişdir" : "Seçilmiş et"}
          </a>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">{product.category.main}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.category.sub}
          </li>
        </ol>
      </nav>

      {/* Super Chance Badge */}
      {product.isSuper && (
        <div className="product__chance product__chance--secondary">
          <span>SUPER FÜRSƏT</span>
        </div>
      )}

      {/* Product Title */}
      <h1 className="mb-10">{product.title}</h1>

      {/* Last Update */}
      <p className="product__date">Son yenilənmə: {product.lastUpdate}</p>

      {/* Price */}
      <div className="d-flex align-items-center">
        <span className="product__price">{product.price}</span>
      </div>

      {/* Features */}
      <div className="d-md-flex flex-wrap mb-15">
        <span className="product__feature">
          <img src="/img/location-icon.svg" alt="location-icon" />
          {product.location}
        </span>
        {product.features.delivery && (
          <span className="product__feature">
            <img src="/img/delivery-icon.svg" alt="delivery-icon" />
            Çatdırılma
          </span>
        )}
        {product.features.barter && (
          <span className="product__feature">
            <img src="/img/barter-icon.svg" alt="barter-icon" />
            Barter
          </span>
        )}
        {product.features.credit && (
          <span className="product__feature">
            <img src="/img/percent-icon.svg" alt="percent-icon" />
            Kredit mümkündür
          </span>
        )}
      </div>

      {/* Specifications Table */}
      <div>
        <table>
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Description */}
      <div>
        {product.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
