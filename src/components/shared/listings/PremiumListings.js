// src/components/shared/listings/PremiumListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";
import { Banner } from "../advertisement";

const PremiumListings = () => {
  return (
    <section>
      <SectionTitle
        title="Premium elanlar"
        icon="/img/premium-icon.svg"
        iconMarginClass=""
        buttonHref="/premium-elanlar"
        alignment="center"
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList
            posts={MOCK_PRODUCTS.premiumListings}
            category="other" // 🔑 Mixed products use flexible layout
          />
          <div>
            <Banner
              href=""
              image="/img/example/banner3.png"
              mobileImage="/img/example/banner-mob.png"
              altText="Advertisement"
              isSticky={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumListings;
