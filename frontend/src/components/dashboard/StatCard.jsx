import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-zinc-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon size={28} />
        </div>

      </div>
    </motion.div>
  );
}