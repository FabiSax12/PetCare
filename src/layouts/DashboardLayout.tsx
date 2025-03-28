import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"

export const DashboardLayout = () => {
  return (
    <div className="flex h-full gap-x-5">
      <Sidebar />
      <main className="bg-white w-full h-full rounded-3xl p-5 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  )
}