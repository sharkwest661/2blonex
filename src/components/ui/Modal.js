// src/components/ui/Modal.js
import { useEffect, useState } from "react";
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
  animationDuration = 300, // Animation duration in ms
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle modal opening animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Start animation after render
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Start closing animation
      setIsAnimating(false);
      // Hide modal after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, animationDuration]);

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

  if (!isVisible) return null;

  return (
    <div
      className={clsx("modal fade", className, {
        show: isAnimating,
        "modal-enter": isAnimating,
        "modal-exit": !isAnimating,
      })}
      tabIndex="-1"
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
      style={{
        display: "block",
        backgroundColor: isAnimating
          ? "rgba(0, 0, 0, 0.5)"
          : "rgba(0, 0, 0, 0)",
        transition: `background-color ${animationDuration}ms ease-out`,
      }}
      {...props}
    >
      <div
        className={clsx("modal-dialog", {
          "modal-sm": size === "sm",
          "modal-lg": size === "lg",
          "modal-xl": size === "xl",
        })}
        style={{
          transform: isAnimating
            ? "translateY(0) scale(1)"
            : "translateY(-50px) scale(0.95)",
          opacity: isAnimating ? 1 : 0,
          transition: `all ${animationDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        }}
      >
        <div className="modal-content">
          {(title || showCloseButton) && (
            <div className="modal-header">
              {title && (
                <span
                  className="modal-title"
                  style={{
                    opacity: isAnimating ? 1 : 0,
                    transition: `opacity ${animationDuration + 100}ms ease-out`,
                  }}
                >
                  {title}
                </span>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  className="close"
                  onClick={onClose}
                  aria-label="Close"
                  style={{
                    opacity: isAnimating ? 1 : 0,
                    transition: `opacity ${animationDuration + 100}ms ease-out`,
                    transform: isAnimating ? "rotate(0deg)" : "rotate(90deg)",
                  }}
                />
              )}
            </div>
          )}

          <div
            className="modal-body"
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? "translateY(0)" : "translateY(20px)",
              transition: `all ${animationDuration + 150}ms ease-out`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
