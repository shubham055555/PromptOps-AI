import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative mb-6">

      <Search
        size={18}
        className="absolute left-4 top-4 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search Prompt..."
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-12 pr-4 text-white outline-none"
      />

    </div>
  );
}