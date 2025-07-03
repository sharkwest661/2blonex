"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (updated from cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Loading Screen Component
function LoadingScreen({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? "fade-out" : ""}`}>
      <div className="loading-content">
        <img src="/img/logo.svg" alt="Bolbol" className="loading-logo" />
        <div className="loading-spinner"></div>
        <h2 className="loading-text">
          Bolbol yüklənir<span className="loading-dots"></span>
        </h2>
        <p className="loading-subtitle">Xoş gəlmisiniz</p>
        <div className="loading-progress">
          <div className="loading-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

// Client-side Providers Component
export default function Providers({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Font preloading function
    const preloadFonts = async () => {
      try {
        const fontPromises = [
          new FontFace("Arimo-Regular", "url(/fonts/Arimo-Regular.woff2)"),
          new FontFace("Arimo-Bold", "url(/fonts/Arimo-Bold.woff2)"),
        ];

        const fonts = await Promise.allSettled(fontPromises);

        fonts.forEach((font) => {
          if (font.status === "fulfilled") {
            document.fonts.add(font.value);
          }
        });

        setFontsLoaded(true);
      } catch (error) {
        console.warn("Font preloading failed:", error);
        setFontsLoaded(true); // Continue anyway
      }
    };

    // App initialization sequence
    const initializeApp = async () => {
      // Start font preloading
      preloadFonts();

      // Simulate app initialization (minimum loading time for UX)
      const initPromise = new Promise((resolve) => setTimeout(resolve, 1500));

      // Wait for both fonts and initialization
      await Promise.all([initPromise]);

      // Add small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    initializeApp();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Loading Screen */}
      <LoadingScreen isVisible={isLoading} />

      {/* Main Application */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in",
        }}
      >
        {children}
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#013f44",
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            fontSize: "14px",
            fontFamily: "Arimo-Regular, sans-serif",
            maxWidth: "400px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            duration: 6000,
          },
          loading: {
            iconTheme: {
              primary: "#013f44",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* Development helpers */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "4px",
            fontSize: "12px",
            zIndex: 9999,
            fontFamily: "monospace",
          }}
        >
          {isLoading ? "Loading..." : `Fonts: ${fontsLoaded ? "✓" : "..."}`}
        </div>
      )}
    </QueryClientProvider>
  );
}
