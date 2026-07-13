import ConversationSidebar from "./components/ConversationSidebar";
import ModelSelector from "./components/ModelSelector";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

export default function PlaygroundPage() {

  return (

    <div className="flex h-[calc(100vh-120px)] gap-6">

      {/* Left Sidebar */}

      <ConversationSidebar />

      {/* Right Chat Area */}

      <div className="flex flex-1 flex-col">

        <div className="mb-5 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <div>

            <h1 className="text-3xl font-bold">

              AI Playground

            </h1>

            <p className="mt-1 text-zinc-400">

              Chat with Gemini

            </p>

          </div>

          <ModelSelector />

        </div>

        <div className="flex-1">

          <ChatWindow />

        </div>

        <ChatInput />

      </div>

    </div>

  );

}