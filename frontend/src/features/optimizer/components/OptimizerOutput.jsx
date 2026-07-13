import { Copy } from "lucide-react";

import useOptimizerStore from "../../../store/optimizerStore";

export default function OptimizerOutput() {

  const {

    optimizedPrompt,

  } = useOptimizerStore();

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold">

          Optimized Prompt

        </h2>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              optimizedPrompt
            )
          }
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2"
        >

          <Copy size={16} />

          Copy

        </button>

      </div>

      <div className="min-h-[500px] rounded-xl border border-zinc-800 bg-zinc-950 p-5 whitespace-pre-wrap">

        {optimizedPrompt ||
          "Optimized prompt will appear here..."}

      </div>

    </div>

  );

}