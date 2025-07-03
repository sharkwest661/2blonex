// src/components/features/home/HomePage.js
import SearchSection from "./SearchSection";
import CategoriesGrid from "./CategoriesGrid";
import VipListings from "@/components/shared/listings/VipListings";
import NewListings from "@/components/shared/listings/NewListings";
import PremiumListings from "@/components/shared/listings/PremiumListings";
import { FullWidthBanner } from "@/components/shared/advertisement";

const HomePage = () => {
  return (
    <>
      {/* Main container with Home Filters Section ONLY */}
      <div className="main_container">
        <section id="home_filters_sec">
          <div className="container-fluid">
            {/* Search Section */}
            <SearchSection />

            {/* Categories Grid */}
            <CategoriesGrid />
          </div>
        </section>
      </div>

      {/* VIP Listings Section - Outside main_container */}
      <VipListings />

      {/* Full-Width Banner Advertisement - banner2.png */}
      <FullWidthBanner href="" image="/img/example/banner2.png" altText="" />

      {/* New Listings Section - Outside main_container */}
      <NewListings />

      {/* Full-Width Banner Advertisement - banner2.png */}
      <FullWidthBanner href="" image="/img/example/banner2.png" altText="" />

      {/* Premium Listings Section - Outside main_container */}
      <PremiumListings />
    </>
  );
};

export default HomePage;
