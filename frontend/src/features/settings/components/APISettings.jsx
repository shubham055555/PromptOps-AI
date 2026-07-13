import useSettings from "../hooks/useSettings";

export default function APISettings() {

  const {
    settings,
    saveSetting,
  } = useSettings();

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        API Settings

      </h2>

      <div>

        <label className="mb-2 block">

          Gemini API Key

        </label>

        <input

          type="password"

          value={settings.gemini_key || ""}

          placeholder="Enter Gemini API Key"

          onChange={(e)=>

            saveSetting(

              "gemini_key",

              e.target.value

            )

          }

          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"

        />

      </div>

    </div>

  );

}