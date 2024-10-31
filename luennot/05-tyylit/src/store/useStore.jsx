import { create } from "zustand";

const useStore = create((set) => ({
  courses: ["java", "git", "tilastotiede", "frontti", "ohjelmointi2", "git"],
  addCourse: (newCourse) =>
    set((state) => ({ courses: [...state.courses, newCourse] })),
}));

export default useStore;
