import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", prompts: 12 },
  { day: "Tue", prompts: 18 },
  { day: "Wed", prompts: 22 },
  { day: "Thu", prompts: 30 },
  { day: "Fri", prompts: 27 },
  { day: "Sat", prompts: 40 },
  { day: "Sun", prompts: 35 },
];

export default function Chart() {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Weekly Prompt Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>

          <XAxis dataKey="day" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="prompts"
            stroke="#3b82f6"
            fill="#2563eb"
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}