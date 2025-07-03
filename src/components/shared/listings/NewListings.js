// src/components/features/home/NewListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";
import { Banner } from "../advertisement";

const NewListings = () => {
  return (
    <section>
      <SectionTitle
        title="Yeni elanlar"
        buttonText="Bütün yeni elanlar"
        buttonHref="/yeni-elanlar"
        alignment="left"
        showSortSelect={true}
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={MOCK_PRODUCTS.newListings} />
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

export default NewListings;
