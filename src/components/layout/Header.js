"use client";
// src/components/layout/Header.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get auth state and actions from Zustand store
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const openLoginModal = useAuthStore((state) => state.openLoginModal);
  const logout = useAuthStore((state) => state.logout);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // Body scroll lock effect for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    openLoginModal();
    closeMenu(); // Close menu after login modal opens
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    closeMenu(); // Close menu after logout
  };

  return (
    <>
      <header className="header">
        {/* Top Bar - Desktop Only */}
        <div className="main_container">
          <div className="header__topbar" id="standardTopBar">
            <div className="contact">
              <a href="" className="contact__network facebook"></a>
              <a href="" className="contact__network instagram"></a>
              <span className="contact__tel">
                Dəstək:{" "}
                <a href="tel:012555650">012 555 65 00 | 055 262 65 00</a>
              </span>
              <a href="" className="contact__network whatsapp"></a>
              <a href="" className="contact__network telegram"></a>
            </div>
            {isAuthenticated && (
              <div className="d-md-flex align-items-center">
                <Image
                  src="/img/logout-icon.svg"
                  alt="Logout"
                  width={16}
                  height={16}
                />
                <a href="#" onClick={handleLogout}>
                  Çıxış
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="navbar_bg">
          <div className="main_container">
            <nav className="navbar navbar-expand-md" id="standardNavbar">
              {/* Hamburger Menu Button with Lucide React Icon */}
              <button
                className={clsx("navbar-toggler", { active: isMenuOpen })}
                type="button"
                onClick={toggleMenu}
                aria-controls="navbarToggler"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? (
                  <X size={24} className="hamburger-icon" color="#ffe600" />
                ) : (
                  <Menu size={24} className="hamburger-icon" color="#ffe600" />
                )}
              </button>

              <Link
                href="/"
                className={clsx("navbar-brand", { "d-none": isMenuOpen })}
              >
                <Image
                  src="/img/logo.svg"
                  alt="Bolbol.az"
                  width={120}
                  height={40}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Link>

              {/* Desktop Navigation Links - Hidden on Mobile */}
              <div className="collapse navbar-collapse d-none d-md-block">
                <div className="header__links">
                  <Link
                    href="/secilmislerim"
                    className="header__link header__link--favorites"
                  >
                    Seçdiklərim
                  </Link>

                  {isAuthenticated ? (
                    <Link
                      href="/profile"
                      className="header__link header__link--login"
                    >
                      Şəxsi kabinet
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="header__link header__link--login"
                      onClick={handleLoginClick}
                    >
                      Şəxsi kabinet
                    </a>
                  )}
                </div>
              </div>

              <Link
                href="/post/create"
                className={clsx("btn header__btn", { show: isMenuOpen })}
              >
                <span>Yeni elan</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Modern Mobile Menu Component */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        isAuthenticated={isAuthenticated}
        handleLoginClick={handleLoginClick}
        onClose={closeMenu}
      />
    </>
  );
};

export default Header;
