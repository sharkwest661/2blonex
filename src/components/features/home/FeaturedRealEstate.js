// src/components/features/home/FeaturedRealEstate.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";

const FeaturedRealEstate = () => {
  return (
    <section>
      <SectionTitle
        title="Seçilmiş əmlak elanları"
        buttonText="Bütün əmlak"
        buttonHref="/emlak"
        alignment="left"
        showSortSelect={false}
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={MOCK_PRODUCTS.featuredRealEstate} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedRealEstate;
