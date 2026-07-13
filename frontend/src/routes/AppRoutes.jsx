import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";

import PromptBuilderPage from "../features/prompt-builder/PromptBuilderPage";
import PromptLibraryPage from "../features/prompt-library/PromptLibraryPage";
import OptimizerPage from "../features/optimizer/OptimizerPage";
import PlaygroundPage from "../features/playground/PlaygroundPage";
import AnalyticsPage from "../features/analytics/AnalyticsPage";
import SettingsPage from "../features/settings/SettingsPage";

export default function AppRoutes() {

  return (

    <Routes>

      <Route element={<DashboardLayout />}>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/builder"
          element={<PromptBuilderPage />}
        />

        <Route
          path="/library"
          element={<PromptLibraryPage />}
        />

        <Route
          path="/optimizer"
          element={<OptimizerPage />}
        />

        <Route
          path="/playground"
          element={<PlaygroundPage />}
        />

        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

      </Route>

    </Routes>

  );

}