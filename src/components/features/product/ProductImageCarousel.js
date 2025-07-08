// src/components/features/product/ProductImageCarousel.js
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Magnifier from "react-magnifier";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const ProductImageCarousel = ({ images = [], isSuper = false }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="product__carousel">
      {/* Main Image Swiper */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
        }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="main-carousel"
        style={{ marginBottom: "10px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="magnifier-container"
              style={{
                position: "relative",
                overflow: "hidden", // Prevent badge from overflowing to adjacent slides
              }}
            >
              <Magnifier
                src={image}
                alt={`Product image ${index + 1}`}
                className="zoomImg img-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                // Magnifier configuration
                mgShowOverflow={false}
                mgWidth={150}
                mgHeight={150}
                zoomFactor={2.5}
                mgBorderWidth={2}
                mgShape="square"
                mgTouchToZoom={true}
                mgMouseOffsetX={20}
                mgMouseOffsetY={20}
              />

              {/* Super Chance Badge - positioned over the image with original styling */}
              {isSuper && (
                <div className="product__chance">
                  <span>SUPER FÜRSƏT!</span>
                </div>
              )}
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
          z-index: 10;
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

        .magnifier-container {
          position: relative;
          width: 100%;
          cursor: crosshair;
        }

        /* Custom styling for react-magnifier */
        .magnifier-container :global(.magnifier) {
          width: 100% !important;
          position: relative !important;
        }

        .magnifier-container :global(.magnifier img) {
          width: 100% !important;
          height: auto !important;
          display: block !important;
        }

        /* Ensure Super Chance badge works correctly in Swiper context */
        .magnifier-container .product__chance {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          z-index: 20 !important;
          font-family: Arimo-Bold, Helvetica, Arial, sans-serif !important;
          color: #ffffff !important;
          font-size: 1rem !important;
          line-height: 1.1 !important;
          text-align: center !important;
        }

        .magnifier-container .product__chance span {
          display: inline-block !important;
          padding: 6px 30px !important; /* Increased padding for bigger height */
          background-color: #ff3030 !important;
          transform: rotate(-45deg) translateY(-50%) translateX(-27%) !important;
          width: 100% !important;
          max-width: 120px !important;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05) !important;
          border-radius: 6px !important;
        }

        /* Style the magnifier glass */
        .magnifier-container :global(.magnifier-glass) {
          border: 2px solid #000 !important;
          border-radius: 8px !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3) !important;
          background: white !important;
        }

        /* Hide magnifier on smaller screens for better mobile UX */
        @media screen and (max-width: 991px) {
          .magnifier-container {
            cursor: default;
          }

          .magnifier-container :global(.magnifier-glass) {
            display: none !important;
          }
        }

        @media screen and (max-width: 767px) {
          .magnifier-container :global(.magnifier) {
            cursor: default !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductImageCarousel;
