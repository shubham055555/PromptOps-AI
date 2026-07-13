import AnalyticsCards from "./components/AnalyticsCards";
import UsageChart from "./components/UsageChart";
import CategoryChart from "./components/CategoryChart";

export default function AnalyticsPage() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Analytics

        </h1>

        <p className="mt-2 text-zinc-400">

          Monitor PromptOps AI usage in real time.

        </p>

      </div>

      <AnalyticsCards />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

        <UsageChart />

        <CategoryChart />

      </div>

    </div>

  );

}