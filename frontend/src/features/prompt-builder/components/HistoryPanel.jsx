import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function HistoryPanel() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get("/history");
      setHistory(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold mb-5">
        Prompt History
      </h2>

      <div className="space-y-3 max-h-[650px] overflow-y-auto">

        {history.length === 0 && (
          <p className="text-zinc-500">
            No Prompt History
          </p>
        )}

        {history.map((item) => (

          <div
            key={item.id}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
          >

            <h3 className="font-semibold">
              {item.role}
            </h3>

            <p className="text-sm text-zinc-400 mt-2">
              {item.task}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}