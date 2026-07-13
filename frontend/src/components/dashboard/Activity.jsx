const activity = [
  "Optimized Resume Prompt",
  "Generated Interview Prompt",
  "Saved Prompt Template",
  "Compared GPT-4 vs Gemini",
  "Created HR Prompt",
];

export default function Activity() {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

      <h2 className="text-xl font-semibold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item, index) => (

          <div
            key={index}
            className="border-b border-zinc-800 pb-3 text-zinc-300"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}