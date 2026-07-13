import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import useAnalytics from "../hooks/useAnalytics";

const COLORS = [
  "#3b82f6",
  "#22c55e",
];

export default function CategoryChart() {

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

  const data =
    analytics.charts.message_distribution;

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        AI vs User Messages

      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}