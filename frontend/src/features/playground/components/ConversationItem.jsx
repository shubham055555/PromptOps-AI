import useConversationStore from "../../../store/conversationStore";
import ConversationActions from "./ConversationActions";

export default function ConversationItem({

  conversation,

}) {

  const {

    selectedConversation,

    selectConversation,

  } = useConversationStore();

  const active =
    selectedConversation === conversation.id;

  return (

    <div
      className={`group flex items-center justify-between rounded-xl transition ${
        active
          ? "bg-blue-600"
          : "bg-zinc-900 hover:bg-zinc-800"
      }`}
    >

      <button
        onClick={() =>
          selectConversation(conversation.id)
        }
        className="flex-1 px-4 py-3 text-left"
      >

        <p className="truncate">

          {conversation.title}

        </p>

      </button>

      <div className="mr-2 hidden group-hover:flex">

        <ConversationActions
          conversation={conversation}
        />

      </div>

    </div>

  );

}