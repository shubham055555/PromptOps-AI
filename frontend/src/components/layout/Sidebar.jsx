import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  WandSparkles,
  Library,
  BrainCircuit,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Prompt Builder", icon: WandSparkles, path: "/builder" },
  { name: "Prompt Library", icon: Library, path: "/library" },
  { name: "Optimizer", icon: BrainCircuit, path: "/optimizer" },
  { name: "AI Playground", icon: Bot, path: "/playground" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800">

      <div className="p-6 border-b border-zinc-800">

        <h1 className="text-2xl font-bold text-white">
          PromptOps AI
        </h1>

        <p className="text-zinc-400 text-sm mt-1">
          Prompt Engineering Workspace
        </p>

      </div>

      <nav className="p-4 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.name}</span>

            </NavLink>

          );

        })}

      </nav>

    </aside>
  );
}