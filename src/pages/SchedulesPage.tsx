import { Scissors, Stethoscope } from "lucide-react"
import { HorizontalNav } from "../components/ui/HorizontalNav"
import { Outlet } from "react-router"
import { WeeklyCalendar } from "../components/WeeklyCalendar"

const schedules = [
  {
    href: "consulta-medica",
    icon: Stethoscope,
    label: "Consultas Médicas",
  },
  {
    href: "estetica",
    icon: Scissors,
    label: "Servicios de Estética",
  }
]

export const SchedulesPage = () => {
  return (
    <div className="width-full height-full flex flex-col gap-4 ">
      <HorizontalNav links={schedules} />
      <Outlet />
    </div>
  )
}