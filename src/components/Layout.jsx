import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="dashboard flex bg-[#03030b] minh-full h-auto w-full pb-4 relative">
      <Sidebar />
      <main className="main text-gray-300 md:max-w-[80%] lg:min-w-[85%] h-auto md:ml-[20%] lg:ml-[15%] relative">
        <Outlet />
      </main>
    </div>
  );
}
