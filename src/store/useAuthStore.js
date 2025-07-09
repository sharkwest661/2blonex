// src/store/useAuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authAPI, formatPhoneNumber } from "../utils/authAPI";
import { showToast } from "../utils/toastHelper";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      // Auth state
      user: null,
      isAuthenticated: false,

      // Modal state
      isLoginModalOpen: false,
      isConfirmModalOpen: false,

      // Auth flow state
      phoneNumber: "",
      tempUserId: null,

      // Loading states
      isLoading: false,
      isSubmittingPhone: false,
      isSubmittingOTP: false,

      // Actions - Modal Management
      openLoginModal: () => set({ isLoginModalOpen: true }),
      closeLoginModal: () =>
        set({
          isLoginModalOpen: false,
          phoneNumber: "",
          isSubmittingPhone: false,
        }),

      openConfirmModal: () =>
        set({
          isConfirmModalOpen: true,
          isLoginModalOpen: false,
        }),
      closeConfirmModal: () =>
        set({
          isConfirmModalOpen: false,
          phoneNumber: "",
          tempUserId: null,
          isSubmittingOTP: false,
        }),

      closeAllModals: () =>
        set({
          isLoginModalOpen: false,
          isConfirmModalOpen: false,
          phoneNumber: "",
          tempUserId: null,
          isSubmittingPhone: false,
          isSubmittingOTP: false,
        }),

      // Actions - Phone Submission
      submitPhoneNumber: async (phone) => {
        const formattedPhone = formatPhoneNumber(phone);
        set({ isSubmittingPhone: true, phoneNumber: formattedPhone });

        try {
          const response = await authAPI.sendOTP(formattedPhone);

          if (response.success) {
            set({
              tempUserId: response.tempUserId,
              isSubmittingPhone: false,
            });

            get().openConfirmModal();

            showToast("Telefon nömrənizə SMS göndərildi", "success", {
              icon: "📱",
            });
          }
        } catch (error) {
          set({ isSubmittingPhone: false });
          const errorMessage =
            error.message || "Xəta baş verdi. Yenidən cəhd edin";
          showToast(errorMessage, "error");
        }
      },

      // Actions - OTP Verification
      verifyOTP: async (otpCode) => {
        const { tempUserId } = get();
        set({ isSubmittingOTP: true });

        try {
          const response = await authAPI.verifyOTP(tempUserId, otpCode);

          if (response.success) {
            // Store auth token
            localStorage.setItem("authToken", response.token);

            set({
              user: response.user,
              isAuthenticated: true,
              isSubmittingOTP: false,
            });

            get().closeAllModals();

            // Show different message for new vs returning users
            const welcomeMessage = response.user.isNewUser
              ? "Xoş gəldiniz! Hesabınız yaradıldı"
              : "Uğurla daxil oldunuz";

            showToast(welcomeMessage, "success", {
              icon: "🎉"
            });
          }
        } catch (error) {
          set({ isSubmittingOTP: false });
          const errorMessage =
            error.message || "Şifrə yanlışdır. Yenidən cəhd edin";
          showToast(errorMessage, "error");
        }
      },

      // Actions - Resend OTP
      resendOTP: async () => {
        const { phoneNumber } = get();

        if (!phoneNumber) {
          showToast("Telefon nömrəsi tapılmadı", "error");
          return;
        }

        try {
          const response = await authAPI.resendOTP(phoneNumber);

          if (response.success) {
            showToast("SMS yenidən göndərildi", "success", {
              icon: "📱",
            });
          }
        } catch (error) {
          const errorMessage =
            error.message || "SMS göndərilmədi. Yenidən cəhd edin";
          showToast(errorMessage, "error");
        }
      },

      // Actions - Auth Management
      logout: () => {
        // Remove auth token
        localStorage.removeItem("authToken");

        set({
          user: null,
          isAuthenticated: false,
          phoneNumber: "",
          tempUserId: null,
        });

        get().closeAllModals();

        showToast("Uğurla çıxış etdiniz", "success", {
          icon: "👋",
        });
      },

      // Actions - Auto Login (on app start)
      checkAuthStatus: async () => {
        const token = localStorage.getItem("authToken");

        if (!token) {
          return;
        }

        set({ isLoading: true });

        try {
          const response = await authAPI.validateToken(token);

          if (response.success) {
            set({
              user: response.user,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        } catch (error) {
          // Token is invalid, remove it
          localStorage.removeItem("authToken");
          set({
            isLoading: false,
            user: null,
            isAuthenticated: false,
          });

          // Only show error if it's not just an expired token
          if (!error.message?.includes("expired")) {
            console.log("Auth validation failed:", error.message);
          }
        }
      },

      // Utility functions
      isLoggedIn: () => get().isAuthenticated,
      getCurrentUser: () => get().user,
      getPhoneNumber: () => get().phoneNumber,

      // Modal state getters
      getModalState: () => ({
        isLoginModalOpen: get().isLoginModalOpen,
        isConfirmModalOpen: get().isConfirmModalOpen,
      }),
    }),
    {
      name: "bolbol-auth", // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }), // Only persist user data, not modal states
    }
  )
);
