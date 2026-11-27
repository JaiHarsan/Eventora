import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/component/Navbar";
import { Sidebar } from "@/component/Sidebar";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 bg-white p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
