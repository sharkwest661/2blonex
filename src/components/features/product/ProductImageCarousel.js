// src/components/features/product/ProductImageCarousel.js
"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "swiper/css/free-mode";

const ProductImageCarousel = ({ images = [], isSuper = false }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="product__carousel">
      {/* Main Image Swiper */}
      <Swiper
        modules={[Navigation, Thumbs, Zoom]}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
        }}
        zoom={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="main-carousel"
        style={{ marginBottom: "10px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="zoomImg img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <Swiper
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="thumbnail-carousel"
          style={{ marginTop: "10px" }}
          breakpoints={{
            576: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            992: { slidesPerView: 6 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "100%",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  border:
                    activeIndex === index
                      ? "2px solid #007bff"
                      : "1px solid #ddd",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Super Chance Badge */}
      {isSuper && (
        <div className="product__chance">
          <span>SUPER FÜRSƏT!</span>
        </div>
      )}

      <style jsx>{`
        .main-carousel {
          --swiper-navigation-color: #007bff;
          --swiper-navigation-size: 25px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .thumbnail-carousel .swiper-slide {
          border-radius: 4px;
          overflow: hidden;
        }

        .thumbnail-carousel .swiper-slide img:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default ProductImageCarousel;
