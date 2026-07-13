import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import useAnalytics from "../hooks/useAnalytics";

export default function UsageChart() {

  const {

    analytics,

    loading,

  } = useAnalytics();

  if (loading) {

    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        Loading Chart...
      </div>
    );

  }

  const s = analytics.stats;

  const data = [

    {
      name: "Conversations",
      value: s.total_conversations,
    },

    {
      name: "Messages",
      value: s.total_messages,
    },

    {
      name: "Prompt Library",
      value: s.total_prompt_library,
    },

  ];

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Usage Overview

      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#3b82f6"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}