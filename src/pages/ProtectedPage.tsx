import { use } from "react"
import { AuthContext } from "../context/auth"
import { Outlet, useLocation } from "react-router"

export const ProtectedPage = () => {
  const { user } = use(AuthContext)
  const location = useLocation()

  if (!user) {
    return <div>Sin autorización</div>
  }

  if (location.pathname.includes("/veterinaria") && user.role !== "vet") {
    return <div>No tiene los permisos para acceder a este recurso</div>
  }

  if (location.pathname.includes("/cliente") && user.role !== "client") {
    return <div>No tiene los permisos para acceder a este recurso</div>
  }

  return <Outlet />
}