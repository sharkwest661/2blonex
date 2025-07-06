"use client";
// src/components/features/home/CategoriesGrid.js
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const CategoriesGrid = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Complete categories data from the original homepage (all 16 categories)
  const categories = [
    {
      href: "neqliyyat",
      icon: "img/category-icons/bolbol_icons_nəqliyyat.svg",
      name: "Nəqliyyat",
    },
    {
      href: "dashinmaz_emlak_checks.html",
      icon: "img/category-icons/bolbol_icons_daşınmaz_əmlak.svg",
      name: "Daşınmaz Əmlak",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_geyim.svg",
      name: "Geyim",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_uşaq aləmi.svg",
      name: "Uşaq aləmi",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_kosmetika.svg",
      name: "Kosmetika və sağlamlıq",
    },
    {
      href: "ish_elanlari.html",
      icon: "img/category-icons/bolbol_icons_iş elanları.svg",
      name: "İş Elanları",
    },
    {
      href: "kategoriya.html",
      icon: "img/category-icons/bolbol_icons_elektronika.svg",
      name: "Elektronika",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_ev_bağ.svg",
      name: "Ev və bağ üçün",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_ərzaq.svg",
      name: "Ərzaq",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_heyvan_bitki.svg",
      name: "Heyvan, Bitki",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_idman_musiqi_hobbi.svg",
      name: "İdman, musiqi, hobbi",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_digər.svg",
      name: "Digər",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_xidmətlər.svg",
      name: "Xidmətlər",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_pulsuz.svg",
      name: "Pulsuz",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_super fürsət.svg",
      name: "Super Fürsət",
    },
    {
      href: "",
      icon: "img/category-icons/bolbol_icons_mağaza və şirkətlər.svg",
      name: "Mağaza və şirkətlər",
    },
  ];

  // Handle window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      // On desktop, always show all categories
      if (!isMobileView) {
        setShowAllCategories(true);
      } else {
        // On mobile, reset to show only 4 categories
        setShowAllCategories(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle "Show All Categories" button click
  const handleShowAllCategories = (e) => {
    e.preventDefault();
    setShowAllCategories(true);
  };

  // Determine which categories to show
  const categoriesToShow =
    isMobile && !showAllCategories ? categories.slice(0, 4) : categories;

  // Determine button visibility
  const shouldShowButton =
    isMobile && !showAllCategories && categories.length > 4;

  return (
    <div className="category">
      <div className="category__list">
        {categoriesToShow.map((category, index) => (
          <Link key={index} href={category.href} className="category__item">
            <Image
              src={category.icon}
              alt="category-icon"
              width={32}
              height={32}
            />
            {category.name}
          </Link>
        ))}
      </div>
      {shouldShowButton && (
        <Link
          href="#"
          className="btn category__btn"
          onClick={handleShowAllCategories}
        >
          Bütün kateqoriyalar
        </Link>
      )}
    </div>
  );
};

export default CategoriesGrid;
