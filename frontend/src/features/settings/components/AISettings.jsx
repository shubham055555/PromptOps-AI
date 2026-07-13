import useSettings from "../hooks/useSettings";

export default function AISettings() {

  const {

    settings,

    saveSetting,

  } = useSettings();

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        AI Settings

      </h2>

      <div className="space-y-5">

        <div>

          <label className="mb-2 block">

            Default Model

          </label>

          <select

            value={settings.default_model || "gemini-2.0-flash"}

            onChange={(e)=>

              saveSetting(

                "default_model",

                e.target.value

              )

            }

            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"

          >

            <option>gemini-2.0-flash</option>

            <option>gemini-1.5-flash</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block">

            Temperature

          </label>

          <input

            type="number"

            min="0"

            max="2"

            step="0.1"

            value={settings.temperature || "0.7"}

            onChange={(e)=>

              saveSetting(

                "temperature",

                e.target.value

              )

            }

            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"

          />

        </div>

        <div>

          <label className="mb-2 block">

            Max Tokens

          </label>

          <input

            type="number"

            value={settings.max_tokens || "2048"}

            onChange={(e)=>

              saveSetting(

                "max_tokens",

                e.target.value

              )

            }

            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"

          />

        </div>

        <div>

          <label className="mb-2 block">

            System Prompt

          </label>

          <textarea

            rows={6}

            value={

              settings.system_prompt ||

              "You are PromptOps AI."

            }

            onChange={(e)=>

              saveSetting(

                "system_prompt",

                e.target.value

              )

            }

            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"

          />

        </div>

      </div>

    </div>

  );

}