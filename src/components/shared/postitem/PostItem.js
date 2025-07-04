"use client";
// src/components/shared/postitem/PostItem.js
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import styles from "./PostItem.module.css"; // Assuming you have a CSS module for styles

const PostItem = ({
  id,
  title,
  secondaryTitle = "", // Always present, can be empty
  price,
  location,
  date,
  image,
  href,
  isVip = false,
  isPremium = false,
  hasBarter = false,
  hasCredit = false,
  className = "",
}) => {
  // Favorites store hooks - using selective state picking
  const isFavorited = useFavoritesStore((state) => state.isFavorited(id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  // Handle favorite button click
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(
      "Heart clicked! Product ID:",
      id,
      "Currently favorited:",
      isFavorited
    );
    toggleFavorite(id);
  };

  return (
    <div className={`post__item ${className} ${styles.postItemReset}`}>
      <div className="post__img">
        <Image src={image} alt="" width={280} height={200} />
        <div className="post__attributes">
          {isVip && (
            <span
              className="post__vip"
              data-toggle="tooltip"
              data-placement="top"
              title="VIP elan"
            ></span>
          )}
          {isPremium && (
            <span
              className="post__premium"
              data-toggle="tooltip"
              data-placement="top"
              title="Premium elan"
            ></span>
          )}
          {/* New heart button using lucide-react */}
          <button
            onClick={handleFavoriteClick}
            className={styles.favoriteBtn}
            type="button"
            aria-label={
              isFavorited ? "Seçilmişlərdən sil" : "Seçilmişlərə əlavə et"
            }
            title={isFavorited ? "Seçilmişlərdən sil" : "Seçilmişlərə əlavə et"}
          >
            <Heart
              size={18}
              fill={isFavorited ? "#e84c53" : "none"}
              stroke={isFavorited ? "#e84c53" : "#666"}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
      <div
        className="post__info"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div className="px-5" style={{ flexGrow: 1 }}>
          <a
            href={href}
            className="post__title"
            style={{
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </a>
          <a
            href={href}
            className="post__title2"
            style={{
              display: "block",
              fontSize: "14px",
            }}
          >
            {secondaryTitle || "\u00A0"}
          </a>
          <p style={{ height: "25px" }}>
            {location}, {date}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="post__price">{price}</div>
          <div className="d-flex align-items-center">
            {hasBarter && (
              <span
                className="post__feature"
                data-toggle="tooltip"
                data-placement="top"
                title="Barter mümkündür"
              >
                <img src="img/barter.svg" alt="" />
              </span>
            )}
            {hasCredit && (
              <span
                className="post__feature"
                data-toggle="tooltip"
                data-placement="top"
                title="Kredit mümkündür"
              >
                <img src="img/percent.svg" alt="" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
