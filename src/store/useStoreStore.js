import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useStoreStore = create(
    persist((set) => ({
        store: null,
        setStore: (store) => set({ store })
    }), {
        name: "store",
        partialize: (state) => ({
            store: state.store,
        }),
    })
)