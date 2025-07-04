// src/store/useFavoritesStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

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
        toast.success("Seçilmişlərə əlavə edildi", {
          duration: 3000,
          icon: "❤️",
        });
      },

      removeFromFavorites: (productId) => {
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== productId),
        }));

        // Show removal notification
        toast.success("Seçilmişlərdən silindi", {
          duration: 3000,
          icon: "🗑️",
        });
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
        toast.success("Bütün seçilmişlər silindi", {
          duration: 3000,
          icon: "🧹",
        });
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

          toast.success(
            `${newFavorites.length} məhsul seçilmişlərə əlavə edildi`,
            {
              duration: 3000,
            }
          );
        }
      },

      removeMultipleFavorites: (productIds) => {
        set((state) => ({
          favorites: state.favorites.filter((id) => !productIds.includes(id)),
        }));

        toast.success(`${productIds.length} məhsul seçilmişlərdən silindi`, {
          duration: 3000,
        });
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
            toast.success("Seçilmişlər uğurla yükləndi", {
              duration: 3000,
            });
          }
        } catch (error) {
          toast.error("Seçilmişlər yüklənərkən xəta baş verdi", {
            duration: 3000,
          });
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
