import { Search } from "lucide-react";
import useConversationStore from "../../../store/conversationStore";

export default function SearchConversation() {

  const { searchConversation } = useConversationStore();

  return (

    <div className="relative mb-4">

      <Search
        size={18}
        className="absolute left-3 top-3 text-zinc-400"
      />

      <input
        type="text"
        placeholder="Search conversations..."
        onChange={(e) =>
          searchConversation(e.target.value)
        }
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-10 pr-4 outline-none focus:border-blue-500"
      />

    </div>

  );

}