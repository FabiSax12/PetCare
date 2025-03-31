import { Outlet } from "react-router"
import { ClientSidebar } from "../components/ClientSidebar"

export const ClientDashboardLayout = () => {
  return (
    <div className="flex h-full gap-x-5">
      <ClientSidebar />
      <main className="bg-white w-full h-full rounded-3xl p-5 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  )
}