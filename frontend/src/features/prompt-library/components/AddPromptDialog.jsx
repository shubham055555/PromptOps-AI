import { useState } from "react";
import { useForm } from "react-hook-form";

import api from "../../../services/api";
import useLibraryStore from "../../../store/libraryStore";

export default function AddPromptDialog() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { loadPrompts } = useLibraryStore();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      await api.post("/library", {
        title: data.title,
        category: data.category,
        description: data.description,
        prompt: data.prompt,
      });

      // Refresh Library Automatically
      await loadPrompts();

      alert("Prompt Saved Successfully!");

      reset();

      setOpen(false);

    } catch (err) {

      console.error(err);

      alert("Failed to save prompt.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
      >
        + New Prompt
      </button>

      {open && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Create Prompt
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              <div>

                <label className="mb-2 block">
                  Title
                </label>

                <input
                  {...register("title", { required: true })}
                  placeholder="Python Interview Prompt"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                />

              </div>

              <div>

                <label className="mb-2 block">
                  Category
                </label>

                <select
                  {...register("category")}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                >
                  <option>General</option>
                  <option>Coding</option>
                  <option>Marketing</option>
                  <option>Resume</option>
                  <option>Research</option>
                </select>

              </div>

              <div>

                <label className="mb-2 block">
                  Description
                </label>

                <textarea
                  rows={3}
                  {...register("description")}
                  placeholder="Short description..."
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                />

              </div>

              <div>

                <label className="mb-2 block">
                  Prompt
                </label>

                <textarea
                  rows={8}
                  {...register("prompt")}
                  placeholder="Write your prompt here..."
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                />

              </div>

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => {
                    reset();
                    setOpen(false);
                  }}
                  className="rounded-xl bg-zinc-800 px-5 py-3 hover:bg-zinc-700"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 disabled:opacity-60"
                >
                  {loading ? "Saving..." : "Save Prompt"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </>
  );
}