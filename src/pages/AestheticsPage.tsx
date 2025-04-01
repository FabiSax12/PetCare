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
    <div>
      <WeeklyCalendar
        appointments={appointments}
        aestheticAppointmentColor="#FBBF24" 
        getAppointmentSubtitle={getAppointmentSubtitle}
      />
    </div>
    
  )
}