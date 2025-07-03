// src/components/features/home/VipListings.js
import SectionTitle from "@/components/shared/sectiontitle/SectionTitle";
import PostList from "@/components/shared/postitem/PostList";
import Banner from "@/components/shared/advertisement/Banner";

const VipListings = () => {
  // Sample VIP listings data (replace with API call later)
  const vipPosts = [
    {
      id: 1,
      title: "Samsung Galaxy S12 phone sell",
      price: "2180 ₼",
      location: "Bakı",
      date: "28.01.2021, 16:34",
      image: "/img/example/post2.png",
      href: "#",
      isVip: true,
      hasBarter: true,
      hasPercent: true,
    },
    // Add more sample posts as needed
  ];

  return (
    <section>
      <SectionTitle
        title="VIP Elanlar"
        icon="/img/vip-large.svg"
        buttonText="Bütün VIP elanlar"
        buttonHref="#"
        alignment="left"
      />

      <div className="main_container">
        <div className="wrapper">
          <PostList posts={vipPosts} />

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

export default VipListings;
