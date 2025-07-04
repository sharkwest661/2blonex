// src/components/shared/postitem/PostItem.js
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div
      className={`post__item ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
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
          <a href="" className="post__favorites"></a>
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
