// src/components/features/home/PremiumListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";

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
        </div>
      </div>
    </section>
  );
};

export default PremiumListings;
