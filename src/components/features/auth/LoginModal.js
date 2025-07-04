// src/components/features/auth/LoginModal.js
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import { useAuthStore } from "../../../store/useAuthStore";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const isLoginModalOpen = useAuthStore((state) => state.isLoginModalOpen);
  const isSubmittingPhone = useAuthStore((state) => state.isSubmittingPhone);
  const closeLoginModal = useAuthStore((state) => state.closeLoginModal);
  const submitPhoneNumber = useAuthStore((state) => state.submitPhoneNumber);

  // Auto-focus on phone input when modal opens
  useEffect(() => {
    if (isLoginModalOpen) {
      const timer = setTimeout(() => {
        setFocus("phoneNumber");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoginModalOpen, setFocus]);

  // Reset form when modal closes
  const handleClose = () => {
    reset();
    closeLoginModal();
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const cleanPhone = data.phoneNumber.trim();
    await submitPhoneNumber(cleanPhone);
  };

  // Phone number validation
  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\+994[0-9]{9}$/;

    if (!value) {
      return "Telefon nömrəsi tələb olunur";
    }

    if (!phoneRegex.test(value)) {
      return "Düzgün telefon nömrəsi daxil edin (+994501234567)";
    }

    return true;
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefon nömrəsi</label>
          <input
            type="text"
            id="phoneNumber"
            className="form-control"
            placeholder="+994501234567"
            disabled={isSubmittingPhone}
            {...register("phoneNumber", {
              validate: validatePhoneNumber,
            })}
          />
          {errors.phoneNumber && (
            <div className="text-danger mt-2" style={{ fontSize: "1.4rem" }}>
              {errors.phoneNumber.message}
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
