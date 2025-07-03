// src/components/features/home/PremiumListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";
import { Banner } from "../advertisement";

const PremiumListings = () => {
  return (
    <section>
      <SectionTitle
        title="Premium elanlar"
        buttonText="Bütün premium elanlar"
        buttonHref="/premium-elanlar"
        alignment="left"
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={MOCK_PRODUCTS.premiumListings} />
          {/* Sticky Advertisement Banner */}
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
