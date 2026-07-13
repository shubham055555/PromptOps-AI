import { Bell, Search, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">

      <div className="relative w-96">

        <Search
          className="absolute left-4 top-3.5 text-zinc-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search prompts..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"
        />

      </div>

      <div className="flex items-center gap-4">

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800">
          <Moon size={20} />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800">
          <Bell size={20} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          TS
        </div>

      </div>

    </header>
  );
}