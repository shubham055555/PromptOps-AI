import OptimizerForm from "./components/OptimizerForm";
import OptimizerScore from "./components/OptimizerScore";
import OptimizerOutput from "./components/OptimizerOutput";

export default function OptimizerPage() {

  return (

    <>

      <h1 className="mb-8 text-4xl font-bold">

        Prompt Optimizer

      </h1>

      <div className="grid gap-8 xl:grid-cols-3">

        <OptimizerForm />

        <OptimizerScore />

        <OptimizerOutput />

      </div>

    </>

  );

}