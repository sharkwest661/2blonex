// src/components/ui/Modal.js
import { useEffect } from "react";
import clsx from "clsx";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "sm", // 'sm' | 'md' | 'lg' | 'xl'
  className = "",
  showCloseButton = true,
  closeOnBackdropClick = true,
  ...props
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={clsx("modal fade show", className)}
      tabIndex="-1"
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      {...props}
    >
      <div
        className={clsx("modal-dialog", {
          "modal-sm": size === "sm",
          "modal-lg": size === "lg",
          "modal-xl": size === "xl",
        })}
      >
        <div className="modal-content">
          {(title || showCloseButton) && (
            <div className="modal-header">
              {title && <span className="modal-title">{title}</span>}
              {showCloseButton && (
                <button
                  type="button"
                  className="close"
                  onClick={onClose}
                  aria-label="Close"
                />
              )}
            </div>
          )}

          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
