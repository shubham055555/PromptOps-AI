import {
  IconLayoutDashboard,
  IconPrompt,
  IconBooks,
  IconBolt,
  IconChartBar,
  IconSettings,
  IconRobot,
} from "@tabler/icons-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: IconLayoutDashboard,
    path: "/",
  },
  {
    title: "Prompt Builder",
    icon: IconPrompt,
    path: "/builder",
  },
  {
    title: "Prompt Library",
    icon: IconBooks,
    path: "/library",
  },
  {
    title: "Optimizer",
    icon: IconBolt,
    path: "/optimizer",
  },
  {
    title: "AI Playground",
    icon: IconRobot,
    path: "/playground",
  },
  {
    title: "Analytics",
    icon: IconChartBar,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: IconSettings,
    path: "/settings",
  },
];