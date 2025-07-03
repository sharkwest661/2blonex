// src/components/features/home/PremiumListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";

const PremiumListings = () => {
  // Sample premium listings data (replace with API call later)
  const premiumPosts = [
    {
      id: 4,
      title: "Samsung Galaxy S12 phone sell",
      price: "2180 ₼",
      location: "Bakı",
      date: "28.01.2021, 16:34",
      image: "/img/example/post2.png",
      href: "#",
      isVip: true,
      isPremium: true,
      hasBarter: true,
    },
    // Add more sample posts as needed
  ];

  return (
    <section>
      <SectionTitle
        title="Premium elanlar"
        icon="/img/premium-icon.svg"
        alignment="center"
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={premiumPosts} />
        </div>
      </div>
    </section>
  );
};

export default PremiumListings;
