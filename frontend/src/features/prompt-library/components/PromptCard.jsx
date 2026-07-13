import { Copy, Star } from "lucide-react";

export default function PromptCard({ prompt }) {

  const copyPrompt = () => {

    navigator.clipboard.writeText(prompt.prompt);

    alert("Prompt Copied!");

  };

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold">
          {prompt.title}
        </h2>

        <Star
          size={18}
          className={
            prompt.favorite
              ? "text-yellow-400"
              : "text-zinc-500"
          }
        />

      </div>

      <p className="mt-3 text-zinc-400">
        {prompt.description}
      </p>

      <span className="mt-4 inline-block rounded-full bg-blue-600 px-3 py-1 text-sm">
        {prompt.category}
      </span>

      <button
        onClick={copyPrompt}
        className="mt-6 flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700"
      >
        <Copy size={16} />
        Copy Prompt
      </button>

    </div>

  );

}