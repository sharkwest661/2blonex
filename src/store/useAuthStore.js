// src/store/useAuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

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
        set({ isSubmittingPhone: true, phoneNumber: phone });

        try {
          // TODO: Replace with actual API call
          // const response = await authAPI.sendOTP(phone);

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock success response
          const mockResponse = {
            success: true,
            tempUserId: "temp_" + Date.now(),
            message: "SMS göndərildi",
          };

          if (mockResponse.success) {
            set({
              tempUserId: mockResponse.tempUserId,
              isSubmittingPhone: false,
            });

            get().openConfirmModal();

            toast.success("Telefon nömrənizə SMS göndərildi", {
              duration: 4000,
              icon: "📱",
            });
          }
        } catch (error) {
          set({ isSubmittingPhone: false });
          toast.error("Xəta baş verdi. Yenidən cəhd edin", {
            duration: 4000,
          });
        }
      },

      // Actions - OTP Verification
      verifyOTP: async (otpCode) => {
        const { phoneNumber, tempUserId } = get();

        if (!phoneNumber || !tempUserId) {
          toast.error("Zəhmət olmasa yenidən cəhd edin");
          return;
        }

        set({ isSubmittingOTP: true });

        try {
          // TODO: Replace with actual API call
          // const response = await authAPI.verifyOTP(tempUserId, otpCode);

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock success response
          const mockResponse = {
            success: true,
            user: {
              id: "user_" + Date.now(),
              phone: phoneNumber,
              name: "İstifadəçi",
              avatar: null,
              createdAt: new Date().toISOString(),
            },
            token: "mock_jwt_token_" + Date.now(),
          };

          if (mockResponse.success) {
            // Store auth token in localStorage
            localStorage.setItem("authToken", mockResponse.token);

            set({
              user: mockResponse.user,
              isAuthenticated: true,
              isSubmittingOTP: false,
              phoneNumber: "",
              tempUserId: null,
            });

            get().closeAllModals();

            toast.success("Uğurla daxil oldunuz!", {
              duration: 4000,
              icon: "🎉",
            });
          }
        } catch (error) {
          set({ isSubmittingOTP: false });
          toast.error("Şifrə yanlışdır. Yenidən cəhd edin", {
            duration: 4000,
          });
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

        toast.success("Uğurla çıxış etdiniz", {
          duration: 3000,
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
          // TODO: Replace with actual API call to validate token
          // const response = await authAPI.validateToken(token);

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 500));

          // Mock validation - in real app, this would verify the token
          const mockUser = {
            id: "user_123",
            phone: "+994501234567",
            name: "İstifadəçi",
            avatar: null,
            createdAt: "2024-01-01T00:00:00.000Z",
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          // Token is invalid, remove it
          localStorage.removeItem("authToken");
          set({ isLoading: false });
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
