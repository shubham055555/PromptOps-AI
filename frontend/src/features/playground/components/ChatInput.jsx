import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import usePlaygroundStore from "../../../store/playgroundStore";

export default function ChatInput() {

  const [message, setMessage] = useState("");

  const {
    sendMessage,
    loading,
  } = usePlaygroundStore();

  const handleSend = async () => {

    if (!message.trim()) return;

    await sendMessage(message);

    setMessage("");

  };

  return (

    <div className="mt-6 flex gap-4">

      <textarea
        rows={2}
        value={message}
        placeholder="Message Gemini..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {

          if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            handleSend();

          }

        }}
        className="flex-1 resize-none rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-blue-500"

      />

      <button
        disabled={loading}
        onClick={handleSend}
        className="flex items-center justify-center rounded-xl bg-blue-600 px-6 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >

        <SendHorizontal size={22} />

      </button>

    </div>

  );

}