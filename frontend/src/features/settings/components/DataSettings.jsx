const API_BASE = "http://127.0.0.1:8000/api";

export default function DataSettings() {

  const exportConversations = () => {

    window.open(
      `${API_BASE}/data/export/conversations`,
      "_blank"
    );

  };

  const exportLibrary = () => {

    window.open(
      `${API_BASE}/data/export/library`,
      "_blank"
    );

  };

  const clearConversations = async () => {

    const confirmDelete = window.confirm(
      "Delete all conversations?"
    );

    if (!confirmDelete) return;

    const response = await fetch(
      `${API_BASE}/data/conversations`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {

      alert("All conversations deleted.");

    }

  };

  const clearLibrary = async () => {

    const confirmDelete = window.confirm(
      "Delete entire Prompt Library?"
    );

    if (!confirmDelete) return;

    const response = await fetch(
      `${API_BASE}/data/library`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {

      alert("Prompt Library cleared.");

    }

  };

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Data Management

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={exportConversations}
          className="rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700"
        >
          Export Conversations
        </button>

        <button
          onClick={exportLibrary}
          className="rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700"
        >
          Export Prompt Library
        </button>

        <button
          onClick={clearConversations}
          className="rounded-xl bg-red-600 px-5 py-3 hover:bg-red-700"
        >
          Clear Conversations
        </button>

        <button
          onClick={clearLibrary}
          className="rounded-xl bg-red-600 px-5 py-3 hover:bg-red-700"
        >
          Clear Prompt Library
        </button>

      </div>

    </div>

  );

}