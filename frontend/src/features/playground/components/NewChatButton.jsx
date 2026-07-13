import { Plus } from "lucide-react";

import useConversationStore from "../../../store/conversationStore";

export default function NewChatButton() {

  const {
    createConversation,
  } = useConversationStore();

  return (

    <button
      onClick={createConversation}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700"
    >

      <Plus size={18} />

      New Chat

    </button>

  );

}