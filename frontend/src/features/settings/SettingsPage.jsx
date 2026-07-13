import AISettings from "./components/AISettings";
import AppearanceSettings from "./components/AppearanceSettings";
import APISettings from "./components/APISettings";
import DataSettings from "./components/DataSettings";
import AboutSettings from "./components/AboutSettings";

export default function SettingsPage() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Settings

        </h1>

        <p className="mt-2 text-zinc-400">

          Configure PromptOps AI

        </p>

      </div>

      <AISettings />

      <AppearanceSettings />

      <APISettings />

      <DataSettings />

      <AboutSettings />

    </div>

  );

}