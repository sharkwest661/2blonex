// src/components/shared/advertisement/FullWidthBanner.js
import Link from "next/link";
import Image from "next/image";

const FullWidthBanner = ({
  href = "",
  image,
  altText = "",
  width = 1200,
  height = 150,
}) => {
  return (
    <section>
      <Link href={href}>
        <Image
          src={image}
          alt={altText}
          className="w-100"
          width={width}
          height={height}
        />
      </Link>
    </section>
  );
};

export default FullWidthBanner;
