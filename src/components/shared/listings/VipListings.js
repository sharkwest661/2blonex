// src/components/shared/listings/VipListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";
import { Banner } from "../advertisement";

const VipListings = () => {
  return (
    <section>
      <SectionTitle
        title="VIP Elanlar"
        icon="/img/vip-large.svg"
        iconSize={40}
        buttonText="Bütün VIP elanlar"
        buttonHref="/vip-elanlar"
        alignment="left"
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList
            posts={MOCK_PRODUCTS.vipListings}
            category="other" // 🔑 Mixed products use flexible layout
          />
          <div>
            <Banner
              href=""
              image="/img/example/banner1.png"
              mobileImage="/img/example/banner-mob.png"
              altText="Advertisement"
              isSticky={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipListings;
