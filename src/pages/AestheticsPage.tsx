import { AppointmentsService } from "../services/appointments.service"
import { WeeklyCalendar } from "../components/WeeklyCalendar"
import type { Appointment } from "../types"

export const AestheticsPage = () => {
  const appointments = AppointmentsService.getAestheticAppointments()

  const getAppointmentSubtitle = (appointment: Appointment) => {
    if (appointment.type === "aesthetic") {
      return appointment.service
    }
    return ""
  }

  return (
    <WeeklyCalendar
      appointments={appointments}
      title="Consultas Estéticas"
      aestheticAppointmentColor="#FBBF24" // Color amarillo para estética
      getAppointmentSubtitle={getAppointmentSubtitle}
    />
  )
}



// import { Calendar,dayjsLocalizer} from "react-big-calendar"
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import { AppointmentsService } from "../services/appointments.service"
// import dayjs from "dayjs"

// export const AestheticsPage = () => {

//   const appointments = AppointmentsService.getAestheticAppointments()
//   const events = appointments.map((appointment) => ({
//     id: appointment.id,
//     title: appointment.service,
//     start: new Date(appointment.start),
//     end: new Date(appointment.end),
//     allDay: true,
//   }))
//   const localizer = dayjsLocalizer(dayjs)
//   const formats = {
//     dayFormat: "DD/MM/YYYY",
//     monthHeaderFormat: "MMMM YYYY",
//     weekdayFormat: "dddd",
//   }

//   return (
//     <div className="flex flex-col gap-4" style={{ paddingLeft: "50px" }}>
//       <h1 className="text-2xl font-bold">Aesthetics</h1>
//       <div>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500, width: 500 }}
//           formats={formats}
//         />
//       </div>
//     </div>
//   )
// }