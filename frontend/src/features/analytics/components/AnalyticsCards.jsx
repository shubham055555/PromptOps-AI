import {
  MessageSquare,
  Bot,
  Library,
  MessagesSquare,
} from "lucide-react";

import useAnalytics from "../hooks/useAnalytics";

export default function AnalyticsCards() {

  const {

    analytics,

    loading,

  } = useAnalytics();

  if (loading) {

    return (
      <div className="text-zinc-400">
        Loading Analytics...
      </div>
    );

  }

  const stats = analytics.stats;

  const cards = [

    {
      title: "Conversations",
      value: stats.total_conversations,
      icon: <MessageSquare size={24} />,
    },

    {
      title: "Messages",
      value: stats.total_messages,
      icon: <MessagesSquare size={24} />,
    },

    {
      title: "AI Responses",
      value: stats.total_ai_messages,
      icon: <Bot size={24} />,
    },

    {
      title: "Prompt Library",
      value: stats.total_prompt_library,
      icon: <Library size={24} />,
    },

  ];

  return (

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        >

          <div className="flex items-center justify-between">

            {card.icon}

            <span className="text-3xl font-bold">

              {card.value}

            </span>

          </div>

          <h3 className="mt-6 text-zinc-400">

            {card.title}

          </h3>

        </div>

      ))}

    </div>

  );

}