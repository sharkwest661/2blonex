// src/components/features/product/SimilarListings.js
"use client";
import { useState, useEffect } from "react";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";

const SimilarListings = () => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Generate similar products - in real app, this would come from API
    const getSimilarProducts = () => {
      // Get some random products from electronics category
      const electronicsProducts = MOCK_PRODUCTS.electronics || [];
      const shuffled = [...electronicsProducts].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 11); // 11 items to account for banner placement
    };

    setSimilarProducts(getSimilarProducts());
  }, []);

  // Insert banner at position 8 (after 7 products)
  const productsWithBanner = [...similarProducts];
  if (productsWithBanner.length >= 8) {
    productsWithBanner.splice(7, 0, {
      id: "banner",
      type: "banner",
      image: "/img/example/banner.png",
      title: "Advertisement Banner",
    });
  }

  return (
    <section>
      <div className="container">
        <h2>Bənzər elanlar</h2>
        <div className="wrapper wrapper--secondary">
          <div className="post">
            <div className="post__list">
              {productsWithBanner.map((item, index) => {
                // Handle banner item
                if (item.type === "banner") {
                  return (
                    <div key={item.id} className="post__item">
                      <a href="">
                        <img src={item.image} alt="" className="img-fluid" />
                      </a>
                    </div>
                  );
                }

                // Handle regular product item
                return (
                  <div key={item.id} className="post__item">
                    <div className="post__img">
                      <img src={item.image} alt="" />
                      <div className="post__attributes">
                        {item.isVip && (
                          <span
                            className="post__vip"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="VIP elan"
                          ></span>
                        )}
                        {item.isSuper && (
                          <div className="post__chance">SUPER FÜRSƏT!</div>
                        )}
                        <a href="" className="post__favorites"></a>
                      </div>
                    </div>
                    <div className="post__info">
                      {item.store && (
                        <a href="" className="post__store">
                          <img src="/img/example/seller.svg" alt="" />
                          <span>{item.store}</span>
                        </a>
                      )}
                      <div className="px-5">
                        <a href="" className="post__title">
                          {item.title}
                        </a>
                        <p>
                          {item.location}, {item.date}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div
                          className={`post__price ${item.isSuper ? "post__price--secondary" : ""}`}
                        >
                          {item.price}
                        </div>
                        {(item.features?.barter || item.features?.credit) && (
                          <div className="d-flex align-items-center">
                            {item.features.barter && (
                              <span
                                className="post__feature"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Barter mümkündür"
                              >
                                <img src="/img/barter.svg" alt="" />
                              </span>
                            )}
                            {item.features.credit && (
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
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Banner */}
          <div>
            <div className="sticky-top">
              <a href="" className="d-md-block d-none">
                <img src="/img/example/banner1.png" alt="" className="w-100" />
              </a>
              <a href="" className="d-md-none">
                <img
                  src="/img/example/banner-mob.png"
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarListings;
