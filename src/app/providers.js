// src/app/providers.js (Client-side providers for state management)
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Providers({ children }) {
  // Create a new QueryClient instance for each user session
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
            retry: (failureCount, error) => {
              // Don't retry on 4xx errors
              if (error?.status >= 400 && error?.status < 500) {
                return false;
              }
              return failureCount < 3;
            },
          },
          mutations: {
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* Global toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#013f44",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            fontSize: "1.4rem",
          },
          success: {
            iconTheme: {
              primary: "#20b038",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#e84c53",
              secondary: "#fff",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}
