import BuilderForm from "./components/BuilderForm";
import PromptOutput from "./components/PromptOutput";
import HistoryPanel from "./components/HistoryPanel";

export default function PromptBuilderPage() {

  return (

    <>

      <h1 className="mb-8 text-4xl font-bold">

        Prompt Builder

      </h1>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        <BuilderForm />

        <PromptOutput />

        <HistoryPanel />

      </div>

    </>

  );

}