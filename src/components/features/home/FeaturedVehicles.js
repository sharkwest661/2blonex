// src/components/features/home/FeaturedVehicles.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";

const FeaturedVehicles = () => {
  return (
    <section>
      <SectionTitle
        title="Seçilmiş nəqliyyat vasitələri"
        buttonText="Bütün avtomobillər"
        buttonHref="/neqliyyat"
        alignment="left"
        showSortSelect={false}
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={MOCK_PRODUCTS.featuredVehicles} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
