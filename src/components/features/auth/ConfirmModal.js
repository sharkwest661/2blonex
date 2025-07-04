// src/components/features/auth/ConfirmModal.js
import { useState, useEffect } from "react";
import Modal from "../../ui/Modal";
import { useAuthStore } from "../../../store/useAuthStore";

const ConfirmModal = () => {
  const [otpCode, setOtpCode] = useState("");
  const [errors, setErrors] = useState({});
  const [resendCooldown, setResendCooldown] = useState(0);

  const isConfirmModalOpen = useAuthStore((state) => state.isConfirmModalOpen);
  const isSubmittingOTP = useAuthStore((state) => state.isSubmittingOTP);
  const phoneNumber = useAuthStore((state) => state.phoneNumber);
  const closeConfirmModal = useAuthStore((state) => state.closeConfirmModal);
  const verifyOTP = useAuthStore((state) => state.verifyOTP);
  const resendOTP = useAuthStore((state) => state.resendOTP);

  // Resend cooldown timer
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  // Mask phone number for display (e.g., +994** *** 60 48)
  const getMaskedPhone = (phone) => {
    if (!phone || phone.length < 10) return phone;

    // For +994501234567 -> +994** *** 60 67
    const country = phone.slice(0, 4); // +994
    const ending = phone.slice(-4); // last 4 digits
    const masked =
      country + "** *** " + ending.slice(0, 2) + " " + ending.slice(2);

    return masked;
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits

    if (value.length <= 4) {
      setOtpCode(value);

      // Clear errors when user starts typing
      if (errors.otp) {
        setErrors((prev) => ({ ...prev, otp: null }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate OTP code
    if (!otpCode.trim()) {
      setErrors({ otp: "Birdəfəlik şifrə tələb olunur" });
      return;
    }

    if (otpCode.length !== 4) {
      setErrors({ otp: "4 rəqəmli şifrə daxil edin" });
      return;
    }

    // Verify OTP
    await verifyOTP(otpCode);
  };

  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;

    await resendOTP();
    setResendCooldown(60); // 60 second cooldown
  };

  const handleClose = () => {
    setOtpCode("");
    setErrors({});
    setResendCooldown(0);
    closeConfirmModal();
  };

  // Auto-focus on input when modal opens
  useEffect(() => {
    if (isConfirmModalOpen) {
      const timer = setTimeout(() => {
        const input = document.getElementById("otpCode");
        if (input) {
          input.focus();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isConfirmModalOpen]);

  return (
    <Modal
      isOpen={isConfirmModalOpen}
      onClose={handleClose}
      title="Birdəfəlik şifrə"
      size="sm"
    >
      <p className="mb-30">
        <b>{getMaskedPhone(phoneNumber)}</b> nömrəsinə SMS vasitəsilə göndərilən
        4 rəqəmli şifrəni daxil edin.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group mt-20">
          <label htmlFor="otpCode">Birdəfəlik şifrə</label>
          <input
            type="text"
            id="otpCode"
            name="otpCode"
            className="form-control"
            value={otpCode}
            onChange={handleOtpChange}
            disabled={isSubmittingOTP}
            maxLength={4}
            placeholder="0000"
            style={{
              textAlign: "center",
              fontSize: "2rem",
              letterSpacing: "0.5rem",
              fontWeight: "bold",
            }}
          />
          {errors.otp && (
            <div className="text-danger mt-2" style={{ fontSize: "1.4rem" }}>
              {errors.otp}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn--yellow"
          disabled={isSubmittingOTP}
        >
          {isSubmittingOTP ? "Yoxlanılır..." : "Daxil ol"}
        </button>
      </form>

      {/* Resend SMS Button */}
      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-link"
          style={{
            fontSize: "1.4rem",
            color: resendCooldown > 0 ? "#999" : "#013f44",
            textDecoration: resendCooldown > 0 ? "none" : "underline",
            padding: 0,
            border: "none",
            background: "none",
            cursor: resendCooldown > 0 ? "not-allowed" : "pointer",
          }}
          onClick={handleResendOTP}
          disabled={resendCooldown > 0}
        >
          {resendCooldown > 0
            ? `SMS-i yenidən göndər (${resendCooldown}s)`
            : "SMS-i yenidən göndər"}
        </button>
      </div>

      {/* Helpful hint for testing */}
      {process.env.NODE_ENV === "development" && (
        <div className="text-center mt-3">
          <small style={{ fontSize: "1.2rem", color: "#999" }}>
            Test üçün: 1234 və ya 0000 istifadə edin
          </small>
        </div>
      )}
    </Modal>
  );
};

export default ConfirmModal;
