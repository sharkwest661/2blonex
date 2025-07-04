// src/utils/authAPI.js
/**
 * Authentication API utilities
 * Currently using mock implementations - replace with real API calls when backend is ready
 */

// Mock API delay for realistic UX
const mockDelay = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const authAPI = {
  /**
   * Send OTP to phone number
   * @param {string} phoneNumber - Phone number in format +994501234567
   * @returns {Promise<{success: boolean, tempUserId: string, message: string}>}
   */
  sendOTP: async (phoneNumber) => {
    await mockDelay(1000);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/send-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phoneNumber })
    // });
    // return response.json();

    // Mock implementation
    if (!phoneNumber || phoneNumber.length < 10) {
      throw new Error("Telefon nömrəsi düzgün deyil");
    }

    // Simulate random failure (5% chance)
    if (Math.random() < 0.05) {
      throw new Error("SMS göndərilmədi. Yenidən cəhd edin");
    }

    return {
      success: true,
      tempUserId:
        "temp_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
      message: "SMS göndərildi",
    };
  },

  /**
   * Verify OTP code
   * @param {string} tempUserId - Temporary user ID from sendOTP
   * @param {string} otpCode - 4-digit OTP code
   * @returns {Promise<{success: boolean, user: object, token: string}>}
   */
  verifyOTP: async (tempUserId, otpCode) => {
    await mockDelay(800);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/verify-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ tempUserId, otpCode })
    // });
    // return response.json();

    // Mock implementation
    if (!otpCode || otpCode.length !== 4) {
      throw new Error("4 rəqəmli şifrə daxil edin");
    }

    // Mock: accept "1234" or "0000" as valid codes
    if (otpCode !== "1234" && otpCode !== "0000") {
      throw new Error("Şifrə yanlışdır. Yenidən cəhd edin");
    }

    // Mock successful verification
    const mockUser = {
      id: "user_" + Date.now(),
      phone: "+994501234567", // In real app, this comes from backend
      name: "İstifadəçi",
      avatar: null,
      createdAt: new Date().toISOString(),
      isNewUser: otpCode === "0000", // Mock: 0000 means new user registration
    };

    const mockToken =
      "mock_jwt_token_" +
      Date.now() +
      "_" +
      Math.random().toString(36).substr(2, 9);

    return {
      success: true,
      user: mockUser,
      token: mockToken,
    };
  },

  /**
   * Validate existing auth token
   * @param {string} token - JWT token from localStorage
   * @returns {Promise<{success: boolean, user: object}>}
   */
  validateToken: async (token) => {
    await mockDelay(500);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/validate-token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   }
    // });
    // return response.json();

    // Mock implementation
    if (!token || !token.includes("mock_jwt_token")) {
      throw new Error("Token is invalid");
    }

    // Mock: randomly fail 10% of the time to simulate expired tokens
    if (Math.random() < 0.1) {
      throw new Error("Token has expired");
    }

    return {
      success: true,
      user: {
        id: "user_123",
        phone: "+994501234567",
        name: "İstifadəçi",
        avatar: null,
        createdAt: "2024-01-01T00:00:00.000Z",
      },
    };
  },

  /**
   * Resend OTP code
   * @param {string} phoneNumber - Phone number
   * @returns {Promise<{success: boolean, message: string}>}
   */
  resendOTP: async (phoneNumber) => {
    await mockDelay(1000);

    // TODO: Replace with actual API call
    // Same as sendOTP but with different endpoint

    // Mock implementation - reuse sendOTP logic
    const result = await authAPI.sendOTP(phoneNumber);
    return {
      success: result.success,
      message: "SMS yenidən göndərildi",
    };
  },
};

// Helper function to format phone numbers
export const formatPhoneNumber = (phone) => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, "");

  // If starts with 994, add +
  if (digits.startsWith("994")) {
    return "+" + digits;
  }

  // If starts with 0, replace with +994
  if (digits.startsWith("0")) {
    return "+994" + digits.slice(1);
  }

  // If no country code, assume Azerbaijan
  if (digits.length === 9) {
    return "+994" + digits;
  }

  return phone;
};

// Helper function to validate Azerbaijan phone numbers
export const isValidAzerbaijanPhone = (phone) => {
  const phoneRegex = /^\+994[0-9]{9}$/;
  return phoneRegex.test(phone);
};
