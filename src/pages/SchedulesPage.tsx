import { Scissors, Stethoscope } from "lucide-react"
import { HorizontalNav } from "../components/ui/HorizontalNav"
import { Outlet } from "react-router"

const schedules = [
  {
    href: "consulta-medica",
    icon: Stethoscope,
  },
  {
    href: "estetica",
    icon: Scissors
  }
]

export const SchedulesPage = () => {
  return (
    <div className="flex flex-col">
      <HorizontalNav links={schedules} />
      <Outlet />
    </div>
  )
}