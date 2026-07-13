import { create } from "zustand";
import api from "../services/api";
import useConversationStore from "./conversationStore";

const usePlaygroundStore = create((set, get) => ({

  messages: [],

  loading: false,

  loadMessages: async (conversationId) => {

    if (!conversationId) return;

    try {

      const response = await api.get(
        `/messages/${conversationId}`
      );

      set({
        messages: response.data,
      });

    } catch (err) {

      console.error(err);

    }

  },

  clearMessages: () => {

    set({
      messages: [],
    });

  },

  sendMessage: async (message) => {

    if (!message.trim()) return;

    const {
      selectedConversation,
    } = useConversationStore.getState();

    if (!selectedConversation) {

      alert("Please create or select a conversation.");

      return;

    }

    set({ loading: true });

    try {

      const response = await api.post(
        "/chat",
        {
          conversation_id: selectedConversation,
          message: message,
          model: "gemini-2.5-flash",
        }
      );

      await get().loadMessages(
        selectedConversation
      );

    } catch (err) {

      console.error(err);

      alert("Chat Failed");

    } finally {

      set({
        loading: false,
      });

    }

  },

}));

export default usePlaygroundStore;