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
      href: "neqliyyat.html",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638.svg",
      name: "Nəqliyyat",
    },
    {
      href: "dashinmaz_emlak_checks.html",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9640.svg",
      name: "Daşınmaz Əmlak",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9639.svg",
      name: "Geyim",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_1.svg",
      name: "Uşaq aləmi",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_2.svg",
      name: "Kosmetika və sağlamlıq",
    },
    {
      href: "ish_elanlari.html",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_3.svg",
      name: "İş Elanları",
    },
    {
      href: "kategoriya.html",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_4.svg",
      name: "Elektronika",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9639_1.svg",
      name: "Ev və bağ üçün",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9640_2.svg",
      name: "Ərzaq",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_5.svg",
      name: "Heyvan, Bitki",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_8.svg",
      name: "İdman, musiqi, hobbi",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_7.svg",
      name: "Digər",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_6.svg",
      name: "Xidmətlər",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_9.svg",
      name: "Pulsuz",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_10.svg",
      name: "Super Fürsət",
    },
    {
      href: "",
      icon: "https://bolbol.az/media/2021/08/04/categories/Group_9638_11.svg",
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
