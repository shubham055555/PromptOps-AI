import useOptimizerStore from "../../../store/optimizerStore";

export default function OptimizerScore() {

  const {

    score,

    suggestions,

  } = useOptimizerStore();

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold mb-5">

        Prompt Score

      </h2>

      <div className="text-6xl font-bold text-green-500">

        {score}

      </div>

      <div className="mt-8 space-y-3">

        {suggestions.length === 0 ? (

          <p className="text-zinc-400">

            Optimize a prompt to see suggestions.

          </p>

        ) : (

          suggestions.map((item, index) => (

            <p key={index}>

              ✔ {item}

            </p>

          ))

        )}

      </div>

    </div>

  );

}