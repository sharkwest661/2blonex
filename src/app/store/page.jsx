"use client";
import { Layout } from "@/components/layout";
import React from "react";
import "./style.css";
import StoreTab from "./components/store-tab";
import CheckStore from "./components/check-store";
import { useStoreStore } from "@/store/useStoreStore";
import Link from "next/link";

const page = () => {
  const store = useStoreStore((state) => state.store);
  return (
    <Layout>
      <CheckStore />
      <main className="store-page">
        <section class="pb-0 d-md-none">
          <div class="container-fluid">
            <div class="search">
              <form action="">
                <div class="input-group search__group">
                  <input
                    type="text"
                    class="form-control search__input"
                    placeholder="Android TV"
                  />
                  <div class="input-group-append search__append">
                    <button class="search__btn" type="button"></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div class="profile profile--secondary">
            <div
              class="profile__cover"
              style={{ backgroundImage: "url('/img/store-bg.png')" }}
            >
              <div class="profile__menu">
                <div class="dropdown settings">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div
                    class="dropdown-menu dropdown-menu-lg-right"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Şəkli dəyiş
                    </a>
                    <a class="dropdown-item" href="#">
                      Sil
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="profile__inner">
              <Link href={"/store/edit"} class="btn profile__edit">
                <img src="/img/edit-icon.svg" alt="" />
                Məlumatları dəyiş
              </Link>
              <div class="profile__info">
                <div class="store">
                  <div class="store__logo">
                    <img src="/img/example/store-logo.png" alt="" />
                  </div>
                  <div>
                    <p class="store__name store__name--large">{store?.name}</p>
                    <div class="store__categories">
                      {store &&
                        store.branch?.map((brancName) => (
                          <span>{brancName}</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p class="mb-15">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                </p>
                <p class="profile__contact">
                  <img src="/img/place-icon.svg" alt="place-icon" />
                  Nizami ray., Aşıq Mollacümə küç. 19/21
                </p>
                <p class="profile__contact">
                  <img src="/img/time-icon.svg" alt="time-icon" />
                  Hər gün, 10:00–22:00
                </p>
                <div class="d-md-flex align-items-end justify-content-between">
                  <p class="profile__contact">
                    <img src="/img/tel-icon.svg" alt="tel-icon" />
                    <a href="tel:">051 123 45 67</a> &semi;&nbsp;
                    <a href="tel:">012 345 67 89</a>
                  </p>
                  <a href="" class="profile__video">
                    Təlimat videosu
                    <img src="/img/video-icon.svg" alt="video-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StoreTab />
      </main>
    </Layout>
  );
};

export default page;
