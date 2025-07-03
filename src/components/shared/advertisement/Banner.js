// src/components/shared/advertisement/Banner.js
import Link from "next/link";
import Image from "next/image";
import styles from "./Advertisement.module.css";

const Banner = ({
  href = "#",
  image,
  mobileImage = null,
  altText = "Advertisement",
  className = "",
  width = 1200,
  height = 150,
  isSticky = false,
}) => {
  return (
    <div
      className={`sticky-top reklam ${className} ${styles.banner}`}
      style={{ top: isSticky ? "0" : "auto" }}
    >
      <Link href={href} className="d-md-block d-none">
        <Image
          src={image}
          alt={altText}
          className="w-100"
          width={width}
          height={height}
        />
      </Link>
      {mobileImage && (
        <Link href={href} className="d-md-none">
          <Image
            src={mobileImage}
            alt={altText}
            className="w-100"
            width={width}
            height={height}
          />
        </Link>
      )}
    </div>
  );
};

export default Banner;
