import { create } from "zustand";
import api from "../services/api";
import usePlaygroundStore from "./playgroundStore";

const useConversationStore = create((set, get) => ({

  conversations: [],

  filteredConversations: [],

  selectedConversation: null,

  loading: false,

  // -----------------------------
  // Load Conversations
  // -----------------------------

  loadConversations: async () => {

    set({ loading: true });

    try {

      const response = await api.get("/conversations");

      set({
        conversations: response.data,
        filteredConversations: response.data,
        loading: false,
      });

      if (
        response.data.length > 0 &&
        !get().selectedConversation
      ) {

        const first = response.data[0];

        set({
          selectedConversation: first.id,
        });

        await usePlaygroundStore
          .getState()
          .loadMessages(first.id);

      }

    } catch (err) {

      console.error(err);

      set({
        loading: false,
      });

    }

  },

  // -----------------------------
  // Create
  // -----------------------------

  createConversation: async () => {

    try {

      const response = await api.post(
        "/conversations",
        {
          title: "New Chat",
        }
      );

      await get().loadConversations();

      set({
        selectedConversation: response.data.id,
      });

      usePlaygroundStore
        .getState()
        .clearMessages();

    } catch (err) {

      console.error(err);

    }

  },

  // -----------------------------
  // Select
  // -----------------------------

  selectConversation: async (id) => {

    set({
      selectedConversation: id,
    });

    await usePlaygroundStore
      .getState()
      .loadMessages(id);

  },

  // -----------------------------
  // Rename
  // -----------------------------

  renameConversation: async (
    id,
    title,
  ) => {

    try {

      await api.put(
        `/conversations/${id}`,
        {
          title,
        }
      );

      await get().loadConversations();

    } catch (err) {

      console.error(err);

    }

  },

  // -----------------------------
  // Delete
  // -----------------------------

  deleteConversation: async (id) => {

    try {

      await api.delete(
        `/conversations/${id}`
      );

      await get().loadConversations();

      usePlaygroundStore
        .getState()
        .clearMessages();

    } catch (err) {

      console.error(err);

    }

  },

  // -----------------------------
  // Search
  // -----------------------------

  searchConversation: (keyword) => {

    if (!keyword.trim()) {

      set({
        filteredConversations:
          get().conversations,
      });

      return;

    }

    const filtered =
      get().conversations.filter((item) =>
        item.title
          .toLowerCase()
          .includes(
            keyword.toLowerCase()
          )
      );

    set({
      filteredConversations: filtered,
    });

  },

}));

export default useConversationStore;