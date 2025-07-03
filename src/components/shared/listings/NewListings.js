// src/components/features/home/NewListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import { MOCK_PRODUCTS } from "@/utils/constants";

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
        </div>
      </div>
    </section>
  );
};

export default NewListings;
