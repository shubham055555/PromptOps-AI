import { create } from "zustand";

const usePromptStore = create((set) => ({
  generatedPrompt: "",

  setGeneratedPrompt: (prompt) =>
    set({
      generatedPrompt: prompt,
    }),

  clearPrompt: () =>
    set({
      generatedPrompt: "",
    }),
}));

export default usePromptStore;