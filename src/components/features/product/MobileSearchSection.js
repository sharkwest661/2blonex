// src/components/features/product/MobileSearchSection.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MobileSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="pb-0 d-md-none">
      <div className="container-fluid">
        <div className="search">
          <form onSubmit={handleSearch}>
            <div className="input-group search__group">
              <input
                type="text"
                className="form-control search__input"
                placeholder="Android TV"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="input-group-append search__append">
                <button className="search__btn" type="submit"></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MobileSearchSection;
