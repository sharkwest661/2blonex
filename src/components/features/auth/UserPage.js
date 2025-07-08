"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS, CATEGORIES } from "@/utils/constants";

const UserPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProducts = useMemo(() => {
    return Object.values(MOCK_PRODUCTS).flat();
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return allProducts;
    const selectedCategory = CATEGORIES.find(
      (cat) => cat.id === activeCategory
    );
    return selectedCategory?.products || [];
  }, [activeCategory, allProducts]);

  return (
    <div>
      <section className="d-md-none">
        <div className="container-fluid">
          <div className="search">
            <form action="">
              <div className="input-group search__group">
                <input
                  type="text"
                  className="form-control search__input"
                  placeholder="Android TV"
                />
                <div className="input-group-append search__append">
                  <button className="search__btn" type="button"></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="profile profile--secondary">
          <div
            className="profile__cover"
            style={{ backgroundImage: "url('/img/user-bg.png')" }}
          >
            <span className="advertisement">REKLAM</span>
          </div>
          <div className="profile__inner">
            <div className="profile__info">
              <p className="profile__name">Mehemmed</p>
              <a href="tel:" className="profile__contact">
                <Image
                  src="/img/tel-icon.svg"
                  alt="tel-icon"
                  width={16}
                  height={16}
                />
                051 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="post user-post">
            <div className="post__options">
              <div className="group">
                <div className="group__inner">
                  <button
                    type="button"
                    className={`btn group__btn ${
                      activeCategory === "all" ? "group__btn--active" : ""
                    }`}
                    onClick={() => setActiveCategory("all")}
                  >
                    Bütün elanlar
                    <span className="badge">{allProducts.length}</span>
                  </button>

                  {CATEGORIES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`btn group__btn ${
                        activeCategory === item.id ? "group__btn--active" : ""
                      }`}
                      onClick={() => setActiveCategory(item.id)}
                    >
                      {item.name}
                      <span className="badge">{item.products.length}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <PostList
              posts={filteredPosts.slice(0, 20)}
              category={activeCategory}
              className="user-post__list"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
