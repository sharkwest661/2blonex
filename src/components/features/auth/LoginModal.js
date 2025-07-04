// src/components/features/auth/LoginModal.js
import { useState } from "react";
import Modal from "../../ui/Modal";
import { useAuthStore } from "../../../store/useAuthStore";

const LoginModal = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const isLoginModalOpen = useAuthStore((state) => state.isLoginModalOpen);
  const isSubmittingPhone = useAuthStore((state) => state.isSubmittingPhone);
  const closeLoginModal = useAuthStore((state) => state.closeLoginModal);
  const submitPhoneNumber = useAuthStore((state) => state.submitPhoneNumber);

  // Basic phone validation for Azerbaijan numbers
  const validatePhone = (phone) => {
    const phoneRegex = /^\+994[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Auto-format: if user starts typing without +994, add it
    if (value && !value.startsWith("+994")) {
      if (value.startsWith("994")) {
        value = "+" + value;
      } else if (value.startsWith("0") || value.match(/^[1-9]/)) {
        // Remove leading 0 and add +994
        value = "+994" + value.replace(/^0/, "");
      }
    }

    setPhoneNumber(value);

    // Clear errors when user starts typing
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate phone number
    if (!phoneNumber.trim()) {
      setErrors({ phone: "Telefon nömrəsi tələb olunur" });
      return;
    }

    if (!validatePhone(phoneNumber)) {
      setErrors({ phone: "Düzgün telefon nömrəsi daxil edin (+994501234567)" });
      return;
    }

    // Submit phone number
    await submitPhoneNumber(phoneNumber);
  };

  const handleClose = () => {
    setPhoneNumber("");
    setErrors({});
    closeLoginModal();
  };

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={handleClose}
      title="Daxil ol"
      size="sm"
    >
      <p className="mb-30">
        Profildən elanlarınızı izləyin, yeniləyin və redaktə edin
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefon nömrəsi</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            placeholder="+994501234567"
            value={phoneNumber}
            onChange={handlePhoneChange}
            disabled={isSubmittingPhone}
            maxLength={13}
          />
          {errors.phone && (
            <div className="text-danger mt-2" style={{ fontSize: "1.4rem" }}>
              {errors.phone}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn--yellow"
          disabled={isSubmittingPhone}
        >
          {isSubmittingPhone ? "Göndərilir..." : "Daxil ol"}
        </button>
      </form>
    </Modal>
  );
};

export default LoginModal;
