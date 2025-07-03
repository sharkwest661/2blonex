// src/components/features/home/NewListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";

const NewListings = () => {
  // Sample new listings data (replace with API call later)
  const newPosts = [
    {
      id: 2,
      title: "Samsung Galaxy S12 phone sell",
      price: "2180 ₼",
      location: "Bakı",
      date: "28.01.2021, 16:34",
      image: "/img/example/post2.png",
      href: "#",
      isVip: true,
      hasBarter: true,
      hasCredit: true,
    },
    {
      id: 3,
      title: "iPhone 13 Pro Max",
      price: "1500 ₼",
      location: "Gəncə",
      date: "29.01.2021, 12:20",
      image: "/img/example/post2.png",
      href: "#",
      isVip: false,
      hasPercent: true,
    },
    // Add more sample posts as needed
  ];

  return (
    <section>
      <SectionTitle
        title="Yeni elanlar"
        buttonText="Bütün yeni elanlar"
        buttonHref="#"
        alignment="left"
        showSortSelect={true}
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={newPosts} />
        </div>
      </div>
    </section>
  );
};

export default NewListings;
