import { AppointmentsService } from "../services/appointments.service"
import { WeeklyCalendar } from "../components/WeeklyCalendar"
import type { Appointment } from "../types"

export const MedicalConsultation = () => {
  const appointments = AppointmentsService.getMedicalAppointments()

  const getAppointmentSubtitle = (appointment: Appointment) => {
    if (appointment.type === "medical") {
      return appointment.reason
    }
    return ""
  }

  return (
    <div >
      <WeeklyCalendar
        appointments={appointments}
        title="Consultas Médicas"
        medicalAppointmentColor="bg-blue-500"
        getAppointmentSubtitle={getAppointmentSubtitle}
      />
    </div>
   
  )
}
