import { useEffect } from "react";

import PromptCard from "./PromptCard";

import useLibraryStore from "../../../store/libraryStore";

export default function PromptGrid() {

  const {
    prompts,
    loading,
    loadPrompts,
  } = useLibraryStore();

  useEffect(() => {

    loadPrompts();

  }, []);

  if (loading) {

    return <h2>Loading...</h2>;

  }

  if (prompts.length === 0) {

    return (

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="text-2xl font-bold">
          No Prompts Found
        </h2>

      </div>

    );

  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {prompts.map((prompt) => (

        <PromptCard
          key={prompt.id}
          prompt={prompt}
        />

      ))}

    </div>

  );

}