import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import api from "../../../services/api";
import usePromptStore from "../../../store/promptStore";


export default function BuilderForm() {
  const { register, handleSubmit, reset } = useForm();

  const { setGeneratedPrompt } = usePromptStore();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("/generate", {
        role: data.role,
        task: data.task,
        context: data.context,
        tone: data.tone,
      });

      setGeneratedPrompt(response.data.prompt);

    } catch (err) {
      console.error(err);
      alert("Backend Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-5"
    >
      <h2 className="text-2xl font-bold">
        Prompt Builder
      </h2>

      <div>
        <label className="block mb-2">AI Role</label>

        <input
          {...register("role")}
          placeholder="Senior Prompt Engineer"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
        />
      </div>

      <div>
        <label className="block mb-2">Task</label>

        <textarea
          {...register("task")}
          rows={4}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
        />
      </div>

      <div>
        <label className="block mb-2">Context</label>

        <textarea
          {...register("context")}
          rows={5}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
        />
      </div>

      <div>
        <label className="block mb-2">Tone</label>

        <select
          {...register("tone")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Technical</option>
          <option>Creative</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700"
      >
        {loading ? "Generating..." : "✨ Generate Prompt"}
      </button>

    </motion.form>
  );
}