// src/components/ui/BottomDrawer.js
import { useEffect } from "react";

export default function BottomDrawer({
  isOpen,
  onClose,
  title,
  children,
  actionButton,
  className = "",
}) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="bottom-drawer-backdrop" onClick={onClose} />

      {/* Drawer */}
      <div className={`bottom-drawer ${className}`}>
        {/* Header */}
        <div className="bottom-drawer-header">
          <h3 className="bottom-drawer-title">{title}</h3>
          <button
            className="bottom-drawer-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div className="bottom-drawer-content">{children}</div>

        {/* Action Button */}
        {actionButton && (
          <div className="bottom-drawer-footer">{actionButton}</div>
        )}
      </div>
    </>
  );
}
