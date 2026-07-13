const categories = [
  "All",
  "Coding",
  "Marketing",
  "Resume",
  "Research",
];

export default function CategoryFilter() {
  return (
    <div className="flex gap-3 mb-8">

      {categories.map((item) => (

        <button
          key={item}
          className="rounded-full bg-zinc-900 border border-zinc-800 px-5 py-2 hover:bg-blue-600"
        >
          {item}
        </button>

      ))}

    </div>
  );
}