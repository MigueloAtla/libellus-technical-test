import { create } from "zustand"

const store = (set) => ({
  // state
  theme: "light",

  // setters
  setTheme: (data) => set({ theme: data }),
})

export const useStore = create(store)
