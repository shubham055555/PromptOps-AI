import { create } from "zustand";
import api from "../services/api";

const useLibraryStore = create((set) => ({

  prompts: [],

  loading: false,

  loadPrompts: async () => {

    set({ loading: true });

    try {

      const response = await api.get("/library");

      set({
        prompts: response.data,
        loading: false,
      });

    } catch (err) {

      console.error(err);

      set({ loading: false });

    }

  },

}));

export default useLibraryStore;