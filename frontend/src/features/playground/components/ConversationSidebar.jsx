import { useEffect } from "react";

import useConversationStore from "../../../store/conversationStore";

import SearchConversation from "./SearchConversation";
import ConversationItem from "./ConversationItem";
import NewChatButton from "./NewChatButton";

export default function ConversationSidebar() {

  const {

    filteredConversations,

    loading,

    loadConversations,

  } = useConversationStore();

  useEffect(() => {

    loadConversations();

  }, []);

  return (

    <aside className="flex w-80 flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <SearchConversation />

      <NewChatButton />

      <div className="mt-5 flex-1 space-y-3 overflow-y-auto">

        {loading && (

          <p className="text-center text-zinc-400">

            Loading...

          </p>

        )}

        {!loading &&
          filteredConversations.map((chat) => (

            <ConversationItem
              key={chat.id}
              conversation={chat}
            />

          ))}

      </div>

    </aside>

  );

}