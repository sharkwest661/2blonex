"use client";
// src/components/shared/postitem/PostItem.js
import Link from "next/link";
import Image from "next/image";
import { useFavoritesStore } from "@/store/useFavoritesStore";

const PostItem = ({
  id,
  title,
  secondaryTitle = "", // e.g., "2020, 4.0 L, 23 000 km"
  price,
  location,
  date,
  image,
  href = "#",
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
    toggleFavorite(id);
  };

  return (
    <div className={`post__item ${className}`}>
      <div className="post__img">
        <Image
          src={image}
          alt=""
          width={280}
          height={200}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
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
          <button
            onClick={handleFavoriteClick}
            className={`post__favorites ${isFavorited ? "active" : ""}`}
            type="button"
            aria-label={
              isFavorited ? "Seçilmişlərdən sil" : "Seçilmişlərə əlavə et"
            }
            title={isFavorited ? "Seçilmişlərdən sil" : "Seçilmişlərə əlavə et"}
          />
        </div>
      </div>
      <div className="post__info">
        <div className="px-5">
          <Link href={href} className="post__title">
            {title}
          </Link>
          <Link href={href} className="post__title2">
            {secondaryTitle}
          </Link>
          <p>
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
                <img src="/img/barter.svg" alt="" />
              </span>
            )}
            {hasCredit && (
              <span
                className="post__feature"
                data-toggle="tooltip"
                data-placement="top"
                title="Kredit mümkündür"
              >
                <img src="/img/percent.svg" alt="" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
