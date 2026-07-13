import StatCard from "../components/dashboard/StatCard";
import Chart from "../components/dashboard/Chart";
import Activity from "../components/dashboard/Activity";

import {
  FileText,
  Bot,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-zinc-400">
          Build, optimize and evaluate AI prompts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Prompt Runs"
          value="1,248"
          icon={FileText}
          color="bg-blue-600"
        />

        <StatCard
          title="AI Calls"
          value="5,982"
          icon={Bot}
          color="bg-violet-600"
        />

        <StatCard
          title="Success Rate"
          value="98%"
          icon={CheckCircle}
          color="bg-green-600"
        />

        <StatCard
          title="AI Models"
          value="4"
          icon={Sparkles}
          color="bg-orange-600"
        />

      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <Chart />
        </div>

        <Activity />

      </div>
    </>
  );
}