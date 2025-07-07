// src/components/shared/postitem/PostItem.js
"use client";
import Link from "next/link";
import { useFavoritesStore } from "@/store/useFavoritesStore";

const PostItem = ({
  // Original props
  id,
  title,
  secondaryTitle,
  price,
  location,
  date,
  image,
  href = "#",
  isVip,
  isPremium,
  hasBarter,
  hasCredit,
  category = "other",

  // Store-related props
  storeName,
  storeImage,
  storeHref,

  // NEW: Variant prop for different layouts (favorites page)
  variant = "default", // "default" | "standalone"
}) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoritesStore();
  const isFavorited = favorites.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  // Choose CSS class based on variant
  const itemClass =
    variant === "standalone" ? "post__item--standalone" : "post__item";

  return (
    <div className={itemClass}>
      <div className="post__img">
        <img src={image} alt="" />
        <div className="post__attributes">
          {isVip && (
            <span
              className="post__vip"
              data-toggle="tooltip"
              data-placement="top"
              title="VIP elan"
            ></span>
          )}
          <button
            onClick={handleFavoriteClick}
            className={`post__favorites${isFavorited ? " active" : ""}`}
            type="button"
            aria-label={
              isFavorited ? "Seçilmişlərdən sil" : "Seçilmişlərə əlavə et"
            }
            title={isFavorited ? "Seçilmişlərdən sil" : "Seçilmişlərə əlavə et"}
          />
        </div>
      </div>
      <div className="post__info">
        {storeName && (
          <Link href={storeHref || "#"} className="post__store">
            <img src={storeImage || "/img/example/seller.svg"} alt="" />
            <span>{storeName}</span>
          </Link>
        )}
        <div className="px-5">
          <Link href={href} className="post__title" title={title}>
            {title}
          </Link>
          <Link href={href} className="post__title2" title={secondaryTitle}>
            {secondaryTitle}
          </Link>
          <p title={(location, date)}>
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
