// src/app/page.js (Homepage using Layout component - EXACT ORIGINAL HTML STRUCTURE)
import { Layout } from "../components/layout";
import Link from "next/link";
import Image from "next/image";

// Original Homepage Content - Exact conversion from homepage.html
const HomepageContent = () => {
  return (
    <div className="main_container">
      {/* Home Filters Section */}
      <section id="home_filters_sec">
        <div className="container-fluid">
          {/* Search Section */}
          <section className="d-md-block" id="neql_search">
            <div className="main_container">
              <div className="container-fluid forpadding0">
                <div className="row" id="dekstop_search_bar_row">
                  <div className="" id="dekstop_search_bar">
                    <div className="search">
                      <form action="">
                        <div className="input-group search__group">
                          <input
                            type="text"
                            className="form-control search__input"
                            placeholder="Elan axtarın"
                            id=""
                          />
                          <div className="input-group-append search__append">
                            <button
                              className="search__btn"
                              type="button"
                            ></button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Grid */}
          <div className="category">
            <div className="category__list">
              <Link href="neqliyyat.html" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Nəqliyyat
              </Link>
              <Link
                href="dashinmaz_emlak_checks.html"
                className="category__item"
              >
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9640.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Daşınmaz Əmlak
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9639.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Geyim
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_1.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Uşaq aləmi
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_2.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Kosmetika və sağlamlıq
              </Link>
              <Link href="ish_elanlari.html" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_3.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                İş Elanları
              </Link>
              <Link href="kategoriya.html" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_4.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Elektronika
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9639_1.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Ev və bağ üçün
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9640_2.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Ərzaq
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_5.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Heyvan, Bitki
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_8.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                İdman, musiqi, hobbi
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_7.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Digər
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_6.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Xidmətlər
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_9.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Pulsuz
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_10.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Super Fürsət
              </Link>
              <Link href="" className="category__item">
                <Image
                  src="https://bolbol.az/media/2021/08/04/categories/Group_9638_11.svg"
                  alt="category-icon"
                  width={32}
                  height={32}
                />
                Mağaza və şirkətlər
              </Link>
            </div>
            <Link href="#" className="btn category__btn">
              Bütün kateqoriyalar
            </Link>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section>
        <div className="title_bg">
          <div className="main_container">
            <div
              className="title title--left"
              style={{ padding: "0 !important" }}
            >
              <span className="center-vertical">
                <Image
                  src="/img/vip-large.svg"
                  alt=""
                  className="mr-10"
                  width={24}
                  height={24}
                />
                VIP Elanlar
              </span>
              <Link className="btn btn--icon btn--transparent" href="#">
                <Image
                  src="/img/chevron_lmain.svg"
                  alt=""
                  width={16}
                  height={16}
                />{" "}
                Bütün VIP elanlar
              </Link>
            </div>
          </div>
        </div>
        <div className="main_container">
          <div className="wrapper">
            <div className="post">
              <div className="post__list">
                {/* VIP Post Item */}
                <div className="post__item">
                  <div className="post__img">
                    <Image
                      src="/img/example/post2.png"
                      alt=""
                      width={280}
                      height={200}
                    />
                    <div className="post__attributes">
                      <span
                        className="post__vip"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="VIP elan"
                      ></span>
                      <Link href="" className="post__favorites"></Link>
                    </div>
                  </div>
                  <div className="post__info">
                    <div className="px-5">
                      <Link href="" className="post__title other_post_title">
                        Samsung Galaxy S12 phone sell
                      </Link>
                      <p>Bakı, 28.01.2021, 16:34</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="post__price">2180 ₼</div>
                      <div className="d-flex align-items-center">
                        <span
                          className="post__feature"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Barter mümkündür"
                        >
                          <Image
                            src="/img/barter.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                        <span
                          className="post__feature"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Kredit mümkündür"
                        >
                          <Image
                            src="/img/percent.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sticky Banner */}
                <div>
                  <div className="sticky-top reklam">
                    <Link href="" className="d-md-block d-none">
                      <Image
                        src="/img/example/banner3.png"
                        alt=""
                        className="w-100"
                        width={300}
                        height={250}
                      />
                    </Link>
                    <Link href="" className="d-md-none">
                      <Image
                        src="/img/example/banner-mob.png"
                        alt=""
                        className="w-100"
                        width={300}
                        height={150}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section>
        <Link href="">
          <Image
            src="/img/example/banner2.png"
            alt=""
            className="w-100"
            width={1200}
            height={150}
          />
        </Link>
      </section>

      {/* Premium Section */}
      <section>
        <div className="title_bg">
          <div className="main_container">
            <div
              className="title title--center"
              style={{ padding: "0 !important" }}
            >
              <span className="center-vertical">
                <Image
                  src="/img/premium-icon.svg"
                  width={24}
                  height={24}
                  alt="Premium"
                />
                Premium elanlar
              </span>
            </div>
          </div>
        </div>
        <div className="main_container">
          <div className="wrapper">
            <div className="post">
              <div className="post__list">
                {/* Premium Post Item */}
                <div className="post__item">
                  <div className="post__img">
                    <Image
                      src="/img/example/post2.png"
                      alt=""
                      width={280}
                      height={200}
                    />
                    <div className="post__attributes">
                      <span
                        className="post__vip"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="VIP elan"
                      ></span>
                      <Link href="" className="post__favorites"></Link>
                    </div>
                  </div>
                  <div className="post__info">
                    <div className="px-5">
                      <Link href="" className="post__title other_post_title">
                        Samsung Galaxy S12 phone sell
                      </Link>
                      <p>Bakı, 28.01.2021, 16:34</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="post__price">2180 ₼</div>
                      <div className="d-flex align-items-center">
                        <span
                          className="post__feature"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Barter mümkündür"
                        >
                          <Image
                            src="/img/barter.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                        <span
                          className="post__feature"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Kredit mümkündür"
                        >
                          <Image
                            src="/img/percent.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section>
        <Link href="">
          <Image
            src="/img/example/banner2.png"
            alt=""
            className="w-100"
            width={1200}
            height={150}
          />
        </Link>
      </section>

      {/* Yeni Elanlar (New Posts) Section */}
      <section>
        <div className="title_bg">
          <div className="main_container">
            <div
              className="title yeniElanlar title--left"
              style={{ padding: "0 !important" }}
            >
              <span className="center-vertical"> Yeni elanlar </span>
              <form>
                <div className="form-group sort__select">
                  <select id="sort_input" className="selectpicker">
                    <option value="-created_at" selected>
                      Əvvəlcə yeni
                    </option>
                    <option value="created_at">Əvvəlcə köhnə</option>
                    <option value="-price">Əvvəlcə baha</option>
                    <option value="price">Əvvəlcə ucuz</option>
                  </select>
                </div>
              </form>
              <Link className="btn btn--icon btn--transparent" href="#">
                <Image
                  src="/img/chevron_lmain.svg"
                  alt=""
                  width={16}
                  height={16}
                />{" "}
                Bütün yeni elanlar
              </Link>
            </div>
          </div>
        </div>
        <div className="main_container">
          <div className="wrapper">
            <div className="post">
              <div className="post__list">
                {/* New Post Item */}
                <div className="post__item">
                  <div className="post__img">
                    <Image
                      src="/img/example/post2.png"
                      alt=""
                      width={280}
                      height={200}
                    />
                    <div className="post__attributes">
                      <span
                        className="post__vip"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="VIP elan"
                      ></span>
                      <Link href="" className="post__favorites"></Link>
                    </div>
                  </div>
                  <div className="post__info">
                    <div className="px-5">
                      <Link href="" className="post__title other_post_title">
                        Samsung Galaxy S12 phone sell
                      </Link>
                      <p>Bakı, 28.01.2021, 16:34</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="post__price">2180 ₼</div>
                      <div className="d-flex align-items-center">
                        <span
                          className="post__feature"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Barter mümkündür"
                        >
                          <Image
                            src="/img/barter.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                        <span
                          className="post__feature"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Kredit mümkündür"
                        >
                          <Image
                            src="/img/percent.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function HomePage() {
  return (
    <Layout
      title="Bolbol.az - Azərbaycanda ən böyük elan platforması"
      description="Bolbol.az - Azərbaycanda maşın, mənzil, iş və digər elanların ən böyük bazarı"
    >
      <HomepageContent />
    </Layout>
  );
}
