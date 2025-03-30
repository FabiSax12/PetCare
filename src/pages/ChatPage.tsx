import { SendHorizonal } from "lucide-react"
import { Navigate, NavLink, Outlet, useParams } from "react-router"
import { ClientsService } from "../services/clients.service"

export const ChatPage = () => {
  const params = useParams()

  const clientService = new ClientsService()

  if (!params.client) return <Navigate to={clientService.getAll()[0].user} />

  return (
    <div className="flex w-full h-full gap-5 p-5">
      <div className="flex flex-col w-56">
        {
          clientService.getAll().map(client => (
            <NavLink
              to={client.user}
              className={({ isActive }) => `h-10 text-center content-center border border-primary ${isActive && "bg-bg-secondary text-highlight"}`}>
              {client.name}
            </NavLink>
          ))
        }
      </div>
      <div className="bg-bg-primary w-full p-4 relative">
        <Outlet />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center gap-4">
          <textarea placeholder="Mensaje" className="bg-white w-full px-4 py-2 rounded-3xl" />
          <SendHorizonal className="hover:text-highlight cursor-pointer" />
        </div>
      </div>
    </div>
  )
}