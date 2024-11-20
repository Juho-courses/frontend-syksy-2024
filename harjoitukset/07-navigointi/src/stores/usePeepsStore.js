import { create } from "zustand";

const usePeepsStore = create((set) => ({
  peeps: [
    // { name: "Batman", superpower: "rich" },
    // { name: "Wonder Woman", superpower: "speed" },
    // { name: "Spiderman", superpower: "spidey sense" },
  ],
  addPeople: (ps) => set((state) => ({ peeps: ps })),
  addPerson: (p) => set((state) => ({ peeps: [...state.peeps, p] })),
  fetchPeople: async () => {
    if (!usePeepsStore.getState().hasFetched) {
      try {
        const response = await fetch(
          "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople"
        );
        const result = await response.json();
        set({ peeps: result, hasFetched: true });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
  deletePerson: (p) =>
    set((state) => ({
      peeps: state.peeps.filter((sp) => sp.name != p.name),
    })),
}));

export default usePeepsStore;
