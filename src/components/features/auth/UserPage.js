import Image from "next/image";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";

const UserPage = () => {
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
                  {[
                    { label: "Bütün elanlar", count: 83, active: true },
                    { label: "Elektronika", count: 36 },
                    { label: "Uşaq aləmi", count: 3 },
                    { label: "Kosmetika", count: 1 },
                    { label: "Ev və bağ üçün", count: 36 },
                    { label: "İş elanları", count: 3 },
                  ].map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`btn group__btn ${item.active ? "group__btn--active" : ""}`}
                    >
                      {item.label}
                      <span className="badge">{item.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <PostList
            posts={MOCK_PRODUCTS.vipListings?.slice(0, 2) || []} 
            category="other" 
            className="user-post__list"
          />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
