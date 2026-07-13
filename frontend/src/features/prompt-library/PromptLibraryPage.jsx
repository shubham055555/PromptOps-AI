import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import PromptGrid from "./components/PromptGrid";
import AddPromptDialog from "./components/AddPromptDialog";

export default function PromptLibraryPage() {

  return (

    <>

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">

            Prompt Library

          </h1>

          <p className="mt-2 text-zinc-400">

            Save, organize and reuse your AI prompts.

          </p>

        </div>

        <AddPromptDialog />

      </div>

      <SearchBar />

      <CategoryFilter />

      <PromptGrid />

    </>

  );

}