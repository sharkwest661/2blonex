// src/components/shared/postitem/PostItem.js
import Link from "next/link";
import Image from "next/image";

const PostItem = ({
  id,
  title,
  price,
  location,
  date,
  image,
  href,
  isVip = false,
  isPremium = false,
  hasBarter = false,
  hasCredit = false,
  hasPercent = false,
  className = "",
}) => {
  return (
    <div className={`post__item ${className}`}>
      <div className="post__img">
        <Image src={image} alt={title} width={280} height={200} />
        <div className="post__attributes">
          {isVip && (
            <span
              className="post__vip"
              data-toggle="tooltip"
              data-placement="top"
              title="VIP elan"
            ></span>
          )}
          <Link href="" className="post__favorites"></Link>
        </div>
      </div>
      <div className="post__info">
        <div className="px-5">
          <Link href={href} className="post__title other_post_title">
            {title}
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
                <Image src="/img/barter.svg" alt="" width={16} height={16} />
              </span>
            )}
            {hasCredit && (
              <span
                className="post__feature"
                data-toggle="tooltip"
                data-placement="top"
                title="Kredit mümkündür"
              >
                <Image src="/img/credit.svg" alt="" width={16} height={16} />
              </span>
            )}
            {hasPercent && (
              <span
                className="post__feature"
                data-toggle="tooltip"
                data-placement="top"
                title="Endirim mövcuddur"
              >
                <Image src="/img/percent.svg" alt="" width={16} height={16} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
