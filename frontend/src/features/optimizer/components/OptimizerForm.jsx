import { useState } from "react";

import useOptimizerStore from "../../../store/optimizerStore";

export default function OptimizerForm() {

  const [prompt, setPrompt] = useState("");

  const {
    optimize,
    loading,
  } = useOptimizerStore();

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold mb-5">

        Enter Prompt

      </h2>

      <textarea
        rows={18}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Paste your prompt here..."
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4"
      />

      <button
        onClick={() => optimize(prompt)}
        disabled={loading}
        className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700"
      >
        {loading ? "Optimizing..." : "Optimize Prompt"}
      </button>

    </div>

  );

}