// src/store/useFavoritesStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { showToast } from "../utils/toastHelper";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      // Favorites state
      favorites: [], // Array of product IDs

      // Actions
      addToFavorites: (productId) => {
        const currentFavorites = get().favorites;

        // Check if already in favorites
        if (currentFavorites.includes(productId)) {
          return; // Already favorited
        }

        set((state) => ({
          favorites: [...state.favorites, productId],
        }));

        // Show success notification
        showToast("Seçilmişlərə əlavə edildi", "success", { icon: "❤️" });
      },

      removeFromFavorites: (productId) => {
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== productId),
        }));

        // Show removal notification
        showToast("Seçilmişlərdən silindi", "success", { icon: "🗑️" });
      },

      toggleFavorite: (productId) => {
        const currentFavorites = get().favorites;

        if (currentFavorites.includes(productId)) {
          get().removeFromFavorites(productId);
        } else {
          get().addToFavorites(productId);
        }
      },

      isFavorited: (productId) => {
        return get().favorites.includes(productId);
      },

      getFavoritesCount: () => {
        return get().favorites.length;
      },

      getFavoritesList: () => {
        return get().favorites;
      },

      clearAllFavorites: () => {
        set({ favorites: [] });
        showToast("Seçilmişlərdən silindi", "success", { icon: "🗑️" });
      },

      // Batch operations for future use
      addMultipleFavorites: (productIds) => {
        const currentFavorites = get().favorites;
        const newFavorites = productIds.filter(
          (id) => !currentFavorites.includes(id)
        );

        if (newFavorites.length > 0) {
          set((state) => ({
            favorites: [...state.favorites, ...newFavorites],
          }));

          showToast(`${newFavorites.length} məhsul seçilmişlərə əlavə edildi`, "success");
        }
      },

      removeMultipleFavorites: (productIds) => {
        set((state) => ({
          favorites: state.favorites.filter((id) => !productIds.includes(id)),
        }));

        showToast(`${productIds.length} məhsul seçilmişlərdən silindi`, "success");
      },

      // Utility methods
      hasFavorites: () => {
        return get().favorites.length > 0;
      },

      // Export/Import for backup (future feature)
      exportFavorites: () => {
        return JSON.stringify(get().favorites);
      },

      importFavorites: (favoritesJson) => {
        try {
          const favorites = JSON.parse(favoritesJson);
          if (Array.isArray(favorites)) {
            set({ favorites });
           showToast("Seçilmişlər uğurla yükləndi", "success");
          }
        } catch (error) {
          showToast("Seçilmişlər yüklənərkən xəta baş verdi", "error");
        }
      },
    }),
    {
      name: "bolbol-favorites", // localStorage key
      partialize: (state) => ({
        favorites: state.favorites,
      }), // Only persist favorites array
    }
  )
);
