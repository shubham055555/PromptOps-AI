import { useEffect, useRef } from "react";

import usePlaygroundStore from "../../../store/playgroundStore";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow() {

  const {
    messages,
    loading,
  } = usePlaygroundStore();

  const bottomRef = useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  return (

    <div className="h-[650px] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

      {messages.length === 0 && (

        <div className="flex h-full items-center justify-center">

          <div className="text-center">

            <h2 className="mb-4 text-3xl font-bold">

              🤖 AI Playground

            </h2>

            <p className="text-zinc-400">

              Start chatting with Gemini...

            </p>

          </div>

        </div>

      )}

      {messages.map((message, index) => (

        <MessageBubble
          key={index}
          message={message}
        />

      ))}

      {loading && (

        <TypingIndicator />

      )}

      <div ref={bottomRef} />

    </div>

  );

}