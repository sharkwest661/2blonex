// src/components/features/product/SellerProfile.js
"use client";

const SellerProfile = ({ seller }) => {
  if (!seller) return null;

  return (
    <div className="profile d-md-block d-none">
      <div className="profile__info">
        <span className="profile__name profile__name--secondary">
          <p className="profile__contact mb-0">
            <img src="/img/tel-icon.svg" alt="tel-icon" />
            <a href={`tel:${seller.phone}`}>{seller.phone}</a>
          </p>
          <span>{seller.name}</span>
        </span>
        <a href={seller.storeUrl} className="profile__posts">
          {seller.storeText}
        </a>
      </div>
    </div>
  );
};

export default SellerProfile;
