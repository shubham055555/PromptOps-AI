import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout() {

  return (

    <div className="flex min-h-screen bg-zinc-950">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-8 text-white">

          <Outlet />

        </main>

      </div>

    </div>

  );

}