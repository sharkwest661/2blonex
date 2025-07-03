// src/components/features/home/VipListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";
import { Banner } from "../advertisement";

const VipListings = () => {
  return (
    <section>
      <SectionTitle
        title="VIP elanlar"
        buttonText="Bütün VIP elanlar"
        buttonHref="/vip-elanlar"
        alignment="left"
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={MOCK_PRODUCTS.vipListings} />
          {/* Sticky Advertisement Banner */}
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
