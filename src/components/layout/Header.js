import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// import { useStore } from "../../store/useStore"; // Uncomment when store is ready

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { isAuthenticated, user } = useStore((state) => ({
  //   isAuthenticated: state.isAuthenticated,
  //   user: state.user
  // })); // Use this when Zustand store is implemented
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Temporary - replace with Zustand

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add/remove body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      {/* Top Bar - Desktop Only */}
      <div className="main_container">
        <div className="header__topbar" id="standardTopBar">
          <div className="contact">
            <Link href="#" className="contact__network facebook"></Link>
            <Link href="#" className="contact__network instagram"></Link>
            <span className="contact__tel">
              Dəstək:
              <Link href="tel:012555650055262650">
                012 555 65 00 | 055 262 65 00
              </Link>
            </span>
            <Link href="#" className="contact__network whatsapp"></Link>
            <Link href="#" className="contact__network telegram"></Link>
          </div>
          {isAuthenticated && (
            <div className="d-md-flex align-items-center">
              <Image
                src="/img/logout-icon.svg"
                alt="Logout"
                width={24}
                height={24}
              />
              <Link href="/auth/logout/">Çıxış</Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar_bg">
        <div className="main_container">
          <nav className="navbar navbar-expand-md" id="standardNavbar">
            {/* Mobile Menu Toggle */}
            <button
              className={clsx("navbar-toggler", { active: isMobileMenuOpen })}
              type="button"
              onClick={toggleMobileMenu}
              aria-controls="navbarToggler"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo */}
            <Link href="/" className="navbar-brand">
              <Image
                src="/img/logo.svg"
                alt="Bolbol"
                width={120}
                height={40}
                priority
              />
            </Link>

            {/* Navigation Links */}
            <div
              className={clsx("collapse navbar-collapse", {
                show: isMobileMenuOpen,
              })}
              id="navbarToggler"
            >
              <div className="header__links">
                <Link
                  href="/favorites"
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
                  <button
                    className="header__link header__link--login"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    Şəxsi kabinet
                  </button>
                )}
              </div>

              {/* Mobile Top Bar - Mobile Only */}
              {isMobileMenuOpen && (
                <div className="header__topbar header__topbar--mob">
                  <div className="contact">
                    <Link href="#" className="contact__network facebook"></Link>
                    <Link
                      href="#"
                      className="contact__network instagram"
                    ></Link>
                    <span className="contact__tel">
                      Dəstək:
                      <Link href="tel:012555650055262650">
                        012 555 65 00 | 055 262 65 00
                      </Link>
                    </span>
                    <Link href="#" className="contact__network whatsapp"></Link>
                    <Link href="#" className="contact__network telegram"></Link>
                  </div>
                  {isAuthenticated && (
                    <div className="d-md-flex align-items-center">
                      <Image
                        src="/img/logout-icon.svg"
                        alt="Logout"
                        width={24}
                        height={24}
                      />
                      <Link href="/auth/logout/">Çıxış</Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* New Ad Button */}
            <Link
              href="/post/create"
              className={clsx("btn header__btn", { show: isMobileMenuOpen })}
            >
              <span>Yeni elan</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
