import { Pencil, Trash2 } from "lucide-react";
import useConversationStore from "../../../store/conversationStore";

export default function ConversationActions({

  conversation,

}) {

  const {

    renameConversation,

    deleteConversation,

  } = useConversationStore();

  const handleRename = async () => {

    const title = prompt(
      "Rename Conversation",
      conversation.title
    );

    if (!title) return;

    await renameConversation(
      conversation.id,
      title
    );

  };

  const handleDelete = async () => {

    const ok = window.confirm(
      "Delete this conversation?"
    );

    if (!ok) return;

    await deleteConversation(
      conversation.id
    );

  };

  return (

    <div className="flex gap-2">

      <button
        onClick={handleRename}
        className="rounded-lg p-2 hover:bg-zinc-800"
      >

        <Pencil size={16} />

      </button>

      <button
        onClick={handleDelete}
        className="rounded-lg p-2 hover:bg-red-600"
      >

        <Trash2 size={16} />

      </button>

    </div>

  );

}