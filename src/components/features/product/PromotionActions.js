// src/components/features/product/PromotionActions.js
"use client";
import { useState } from "react";

const PromotionActions = () => {
  const [showTooltips, setShowTooltips] = useState({});

  const promotionItems = [
    {
      type: "vip",
      title: "VIP et",
      price: "10₼",
      tooltipTitle: "VIP elan (10₼)",
      tooltipText:
        "Elan saytın ana səhifəsində xüsusi ayrılmış blokda görünür və aktiv olduqca orada qalır",
    },
    {
      type: "premium",
      title: "Premium et",
      price: "5₼",
      tooltipTitle: "Premium elan (5₼)",
      tooltipText:
        "Elan saytın ana səhifəsində xüsusi ayrılmış blokda görünür və aktiv olduqca orada qalır",
    },
    {
      type: "up",
      title: "İrəli çək",
      price: "1₼",
      tooltipTitle: "İrəli çək (1₼)",
      tooltipText:
        "Elan saytın ana səhifəsində xüsusi ayrılmış blokda görünür və aktiv olduqca orada qalır",
    },
    {
      type: "chance",
      title: "SUPER fürsət",
      price: "2AZN",
      tooltipTitle: "İrəli çək (1₼)",
      tooltipText:
        "Elan saytın ana səhifəsində xüsusi ayrılmış blokda görünür və aktiv olduqca orada qalır",
    },
  ];

  const handleMouseEnter = (index) => {
    setShowTooltips((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setShowTooltips((prev) => ({ ...prev, [index]: false }));
  };

  const handlePromotionClick = (type) => {
    // Handle promotion action
    console.log(`Promoting product with ${type}`);
  };

  const handleEditClick = () => {
    // Handle edit action
    console.log("Edit product");
  };

  const handleDeactivateClick = () => {
    // Handle deactivate action
    console.log("Deactivate product");
  };

  return (
    <div className="promotion">
      {/* Promotion Items */}
      <div className="promotion__actions">
        {promotionItems.map((item, index) => (
          <a
            href=""
            key={index}
            className={`promotion__item promotion__item--${item.type}`}
            data-placement="top"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={(e) => {
              e.preventDefault();
              handlePromotionClick(item.type);
            }}
            style={{ position: "relative" }}
          >
            {item.title}
            <span className="promotion__price promotion__price--top">
              {item.price}
            </span>
            <div
              className={`tooltip tooltip--secondary bs-tooltip-top ${showTooltips[index] ? "show" : ""}`}
              style={{
                position: "absolute",
                top: "auto",
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                marginBottom: "5px",
                opacity: showTooltips[index] ? 1 : 0,
                visibility: showTooltips[index] ? "visible" : "hidden",
                transition:
                  "opacity 0.15s ease-in-out, visibility 0.15s ease-in-out",
                minWidth: "200px",
                maxWidth: "300px",
              }}
            >
              <div className="tooltip-inner" style={{ whiteSpace: "normal" }}>
                <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>
                  {item.tooltipTitle}
                </p>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.4" }}>
                  {item.tooltipText}
                </p>
              </div>
              <div
                className="arrow"
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "24px",
                  display: "block",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      'url("/img/tooltip-arrow.svg") no-repeat center/cover',
                  }}
                ></div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Settings Actions */}
      <div className="promotion__settings">
        <a
          href=""
          className="btn btn--action btn--edit mr-md-10"
          onClick={(e) => {
            e.preventDefault();
            handleEditClick();
          }}
        >
          Redaktə et
        </a>
        <a
          href=""
          className="btn btn--action btn--deactive mr-md-10"
          onClick={(e) => {
            e.preventDefault();
            handleDeactivateClick();
          }}
        >
          Deaktiv et
        </a>
      </div>
    </div>
  );
};

export default PromotionActions;
