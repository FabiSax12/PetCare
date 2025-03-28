import { PawPrint, Stethoscope, Users } from "lucide-react"
import { HorizontalNav } from "../components/ui/HorizontalNav"
import { Outlet } from "react-router"

const tables = [
  {
    href: "mascotas",
    icon: PawPrint
  },
  {
    href: "duenos",
    icon: Users,
  },
  {
    href: "veterinarios",
    icon: Stethoscope
  }
]

export const TablesPage = () => {
  return (
    <div className="flex flex-col">
      <HorizontalNav links={tables} />
      <Outlet />
    </div>
  )
}