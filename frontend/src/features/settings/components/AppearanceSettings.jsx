import useSettings from "../hooks/useSettings";

export default function AppearanceSettings() {

  const {
    settings,
    saveSetting,
  } = useSettings();

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Appearance

      </h2>

      <div className="space-y-5">

        <div>

          <label className="mb-2 block">

            Theme

          </label>

          <select

            value={settings.theme || "dark"}

            onChange={(e)=>
              saveSetting(
                "theme",
                e.target.value
              )
            }

            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
          >

            <option value="dark">

              Dark

            </option>

            <option value="light">

              Light

            </option>

          </select>

        </div>

        <div>

          <label className="mb-2 block">

            Accent Color

          </label>

          <select

            value={settings.accent_color || "blue"}

            onChange={(e)=>
              saveSetting(
                "accent_color",
                e.target.value
              )
            }

            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
          >

            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>

          </select>

        </div>

      </div>

    </div>

  );

}