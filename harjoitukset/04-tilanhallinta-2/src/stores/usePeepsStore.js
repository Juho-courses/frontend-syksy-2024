import { create } from "zustand";

const usePeepsStore = create((set) => ({
  peeps: [
    { name: "Batman", superpower: "rich" },
    { name: "Wonder Woman", superpower: "speed" },
    { name: "Spiderman", superpower: "spidey sense" },
  ],
  addPerson: (p) => set((state) => ({ peeps: [...state.peeps, p] })),
}));

export default usePeepsStore;
