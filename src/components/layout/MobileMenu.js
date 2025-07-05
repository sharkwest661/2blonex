// src/components/layout/MobileMenu.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Home, Search, Heart, MessageCircle, User } from "lucide-react";

const MobileMenu = ({
  isMenuOpen,
  isAuthenticated,
  handleLoginClick,
  onClose,
}) => {
  const [activeSection, setActiveSection] = useState("main");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const menuItems = [
    {
      icon: <Home size={24} />,
      label: "Ana səhifə",
      href: "/",
      badge: null,
    },
    {
      icon: <Search size={24} />,
      label: "Axtarış",
      href: "/search",
      badge: null,
    },
    {
      icon: <Heart size={24} />,
      label: "Seçdiklərim",
      href: "/secilmislerim",
      badge: "5",
    },
    {
      icon: <MessageCircle size={24} />,
      label: "Mesajlarım",
      href: "/messages",
      badge: "2",
    },
    {
      icon: <User size={24} />,
      label: isAuthenticated ? "Şəxsi kabinet" : "Daxil ol",
      href: isAuthenticated ? "/profile" : "#",
      onClick: !isAuthenticated ? handleLoginClick : null,
    },
  ];

  const categories = [
    { name: "Nəqliyyat", icon: "🚗", count: "15,420" },
    { name: "Daşınmaz əmlak", icon: "🏠", count: "8,920" },
    { name: "Elektronika", icon: "📱", count: "12,340" },
    { name: "Moda və gözəllik", icon: "👗", count: "6,780" },
    { name: "Ev və bağ", icon: "🏡", count: "4,560" },
    { name: "İş elanları", icon: "💼", count: "2,890" },
    { name: "Xidmətlər", icon: "🔧", count: "3,450" },
    { name: "Hobi və asudə", icon: "🎮", count: "1,980" },
  ];

  return (
    <div className={clsx("mobile-menu-overlay", { show: isMenuOpen })}>
      <div className={clsx("mobile-menu-container", { active: isMenuOpen })}>
        {/* Header */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <Image
              src="/img/logo.svg"
              alt="Bolbol.az"
              width={100}
              height={32}
            />
          </div>
          <button
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Menyunu bağla"
          >
            <span className="close-icon">×</span>
          </button>
        </div>

        {/* User Section */}
        {isAuthenticated && (
          <div className="mobile-menu-user">
            <div className="user-avatar">
              <Image
                src="/img/default-avatar.svg"
                alt="User"
                width={48}
                height={48}
              />
            </div>
            <div className="user-info">
              <h3>Salam, İstifadəçi!</h3>
              <p>Premium üzv</p>
            </div>
            <div className="user-badge">
              <span className="badge-premium">VIP</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="mobile-menu-content">
          {activeSection === "main" && (
            <div className="menu-section">
              {/* Quick Actions */}
              <div className="quick-actions">
                <Link href="/post/create" className="quick-action-primary">
                  <span className="action-icon">+</span>
                  <span>Yeni elan</span>
                </Link>
                <button
                  className="quick-action-secondary"
                  onClick={() => handleSectionChange("categories")}
                >
                  <span className="action-icon">📋</span>
                  <span>Kateqoriyalar</span>
                </button>
              </div>

              {/* Navigation Menu */}
              <nav className="mobile-menu-nav">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="nav-item"
                    onClick={item.onClick}
                  >
                    <div className="nav-icon">{item.icon}</div>
                    <span className="nav-label">{item.label}</span>
                    {item.badge && (
                      <span className="nav-badge">{item.badge}</span>
                    )}
                    <span className="nav-arrow">›</span>
                  </Link>
                ))}
              </nav>

              {/* Quick Stats */}
              <div className="menu-stats">
                <div className="stat-item">
                  <span className="stat-number">250K+</span>
                  <span className="stat-label">Aktiv elan</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">İstifadəçi</span>
                </div>
              </div>
            </div>
          )}

          {activeSection === "categories" && (
            <div className="menu-section">
              <div className="section-header">
                <button
                  className="back-button"
                  onClick={() => handleSectionChange("main")}
                >
                  ‹ Geri
                </button>
                <h3>Bütün kateqoriyalar</h3>
              </div>

              <div className="categories-grid">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/category/${category.name.toLowerCase()}`}
                    className="category-item"
                  >
                    <div className="category-icon">{category.icon}</div>
                    <div className="category-info">
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">
                        {category.count} elan
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mobile-menu-footer">
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">Dəstək xətti:</span>
              <a href="tel:012555650055262650" className="contact-link">
                012 555 65 00
              </a>
            </div>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link facebook">
              <Image
                src="/img/facebook-icon.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="social-link instagram">
              <Image
                src="/img/instagram-icon.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="social-link whatsapp">
              <Image
                src="/img/whatsapp-icon.svg"
                alt="WhatsApp"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="social-link telegram">
              <Image
                src="/img/telegram-icon.svg"
                alt="Telegram"
                width={20}
                height={20}
              />
            </a>
          </div>

          {isAuthenticated && (
            <button className="logout-button">
              <Image src="/img/logout-icon.svg" alt="" width={16} height={16} />
              Çıxış
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
