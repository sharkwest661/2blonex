"use client";
// src/components/layout/Layout.js
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "../features/auth/LoginModal";
import ConfirmModal from "../features/auth/ConfirmModal";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Auth Modals */}
      <LoginModal />
      <ConfirmModal />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#013f44",
            fontSize: "1.4rem",
            borderRadius: "10px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          },
          success: {
            iconTheme: {
              primary: "#28a745",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc3545",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
};

export default Layout;
