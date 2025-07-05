// src/app/secilmislerim/page.js
"use client";
import Layout from "@/components/layout/Layout";
import PostItem from "@/components/shared/postitem/PostItem";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { MOCK_PRODUCTS } from "@/utils/constants";

const STORE_NAMES = [
  "Kontakt Home",
  "World Telecom",
  "Apple Store Baku",
  "Samsung Plaza",
  "Techno Store",
  "Media Markt",
  "Bravo Electronics",
  "Digital Store",
  "Mobile Center",
  "Tech Point",
];

const addStoreInfoToProducts = (products) => {
  return products.map((product, index) => ({
    ...product,
    storeName: STORE_NAMES[index % STORE_NAMES.length],
    storeImage: "/img/example/seller.svg",
    storeHref: `/magaza/${STORE_NAMES[index % STORE_NAMES.length].toLowerCase().replace(/\s+/g, "-")}`,
  }));
};

const getAllProductsWithStores = () => {
  const allProducts = [
    ...MOCK_PRODUCTS.vipListings,
    ...MOCK_PRODUCTS.newListings,
    ...MOCK_PRODUCTS.premiumListings,
    ...MOCK_PRODUCTS.vehicles.slice(0, 10),
    ...MOCK_PRODUCTS.realEstate.slice(0, 10),
    ...MOCK_PRODUCTS.electronics.slice(0, 10),
  ];

  return addStoreInfoToProducts(allProducts);
};

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  const allProductsWithStores = getAllProductsWithStores();
  const favoritedItems = allProductsWithStores.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <Layout>
      <section className="pb-0 d-md-none">
        <div className="main_container">
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
        <div className="main_container">
          <h1
            style={{
              fontSize: "2.4rem",
              color: "#013f44",
              fontFamily: "Arimo-Bold, Helvetica, Arial, sans-serif",
              marginBottom: "0",
              padding: "20px 0 10px 0",
            }}
          >
            Seçdiklərim
          </h1>

          {favoritedItems.length > 0 ? (
            <div className="favorites__container">
              <div className="favorites__grid">
                {favoritedItems.map((item) => (
                  <PostItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    secondaryTitle={item.secondaryTitle}
                    price={item.price}
                    location={item.location}
                    date={item.date}
                    image={item.image}
                    href={item.href || `#`}
                    isVip={item.isVip}
                    isPremium={item.isPremium}
                    hasBarter={item.hasBarter}
                    hasCredit={item.hasCredit}
                    category="favorites"
                    storeName={item.storeName}
                    storeImage={item.storeImage}
                    storeHref={item.storeHref}
                    variant="standalone"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="favorites__empty">
              <div className="favorites__empty-title">
                Seçilmiş elanınız yoxdur
              </div>
              <div className="favorites__empty-subtitle">
                Bəyəndiyiniz elanları ♡ düyməsinə basaraq seçilmişlərə əlavə
                edin
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
