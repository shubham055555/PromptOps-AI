import { create } from "zustand";
import api from "../services/api";

const useOptimizerStore = create((set) => ({

  optimizedPrompt: "",

  score: 0,

  suggestions: [],

  loading: false,

  optimize: async (prompt) => {

    set({ loading: true });

    try {

      const response = await api.post("/optimizer", {
        prompt,
      });

      set({
        optimizedPrompt: response.data.optimized_prompt,
        score: response.data.score,
        suggestions: response.data.suggestions,
        loading: false,
      });

    } catch (err) {

      console.error(err);

      set({ loading: false });

      alert("Optimizer Failed");

    }

  },

}));

export default useOptimizerStore;