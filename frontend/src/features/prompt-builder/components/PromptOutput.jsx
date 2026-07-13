import {
  Copy,
  Save,
  Trash2,
} from "lucide-react";

import usePromptStore from "../../../store/promptStore";

export default function PromptOutput() {

  const {
    generatedPrompt,
    clearPrompt,
  } = usePromptStore();

  const copyPrompt = () => {

    if (!generatedPrompt) return;

    navigator.clipboard.writeText(generatedPrompt);

    alert("Prompt Copied!");

  };

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-xl font-bold">
          Generated Prompt
        </h2>

        <div className="flex gap-2">

          <button
            onClick={copyPrompt}
            className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 hover:bg-zinc-700"
          >
            <Copy size={16} />
            Copy
          </button>

          <button
            className="flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 hover:bg-green-700"
          >
            <Save size={16} />
            Save
          </button>

          <button
            onClick={clearPrompt}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 hover:bg-red-700"
          >
            <Trash2 size={16} />
            Clear
          </button>

        </div>

      </div>

      <div className="min-h-[420px] rounded-xl border border-zinc-800 bg-zinc-950 p-5 overflow-auto whitespace-pre-wrap leading-7 text-zinc-300">

        {generatedPrompt || "Your AI generated prompt will appear here..."}

      </div>

    </div>

  );
}