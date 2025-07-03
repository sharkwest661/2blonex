"use client";
// src/components/layout/Header.js
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // This will come from Zustand store later

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar - Desktop Only */}
      <div className="main_container">
        <div className="header__topbar" id="standardTopBar">
          <div className="contact">
            <a href="" className="contact__network facebook"></a>
            <a href="" className="contact__network instagram"></a>
            <span className="contact__tel">
              Dəstək:
              <a href="tel:012555650055262650">012 555 65 00 | 055 262 65 00</a>
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
              <Link href="/auth/logout/">Çıxış</Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar_bg">
        <div className="main_container">
          <nav className="navbar navbar-expand-md" id="standardNavbar">
            <button
              className={clsx("navbar-toggler", { active: isMenuOpen })}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarToggler"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            ></button>

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

            <div
              className={clsx("collapse navbar-collapse", { show: isMenuOpen })}
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
                  <a
                    href="#"
                    className="header__link header__link--login"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    Şəxsi kabinet
                  </a>
                )}
              </div>

              {/* Mobile Top Bar */}
              {isMenuOpen && (
                <div className="header__topbar header__topbar--mob">
                  <div className="contact">
                    <a href="" className="contact__network facebook"></a>
                    <a href="" className="contact__network instagram"></a>
                    <span className="contact__tel">
                      Dəstək:
                      <a href="tel:012555650055262650">
                        012 555 65 00 | 055 262 65 00
                      </a>
                    </span>
                    <a href="" className="contact__network whatsapp"></a>
                    <a href="" className="contact__network telegram"></a>
                  </div>
                </div>
              )}
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
  );
};

export default Header;
