// src/components/features/home/HomePage.js
import SearchSection from "./SearchSection";
import CategoriesGrid from "./CategoriesGrid";
import VipListings from "@/components/shared/listings/VipListings";
import NewListings from "@/components/shared/listings/NewListings";
import PremiumListings from "@/components/shared/listings/PremiumListings";
import { Banner } from "@/components/shared/advertisement";

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

      {/* Banner Advertisement - Outside main_container */}
      <Banner
        href=""
        image="/img/example/banner2.png"
        altText="Advertisement Banner"
      />

      {/* New Listings Section - Outside main_container */}
      <NewListings />

      {/* Premium Listings Section - Outside main_container */}
      <PremiumListings />
    </>
  );
};

export default HomePage;
