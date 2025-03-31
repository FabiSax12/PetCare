import type { Appointment, MedicalAppointment, AestheticAppointment } from '../types'
import { appointments } from '../mock/appointments'

// Servicio para manejar las citas
export const AppointmentsService = {
    // Obtener todas las citas
    getAllAppointments: (): Appointment[] => {
      return appointments
    },
  
    // Obtener citas médicas
    getMedicalAppointments: (): MedicalAppointment[] => {
      return appointments.filter((appointment): appointment is MedicalAppointment => appointment.type === "medical")
    },
  
    // Obtener citas de estética
    getAestheticAppointments: (): AestheticAppointment[] => {
      return appointments.filter((appointment): appointment is AestheticAppointment => appointment.type === "aesthetic")
    },
  
    // Obtener una cita por ID
    getAppointmentById: (id: number | string): Appointment | null => {
      const appointment = appointments.find((a) => a.id === id)
      return appointment || null
    },
  
    // Agregar una nueva cita
    addAppointment: (appointment: Omit<Appointment, "id">): Appointment => {
      const newAppointment = {
        ...appointment,
        id: Math.max(...appointments.map((a) => Number(a.id))) + 1,
      }
      appointments.push(newAppointment as Appointment)
      return newAppointment as Appointment
    },
  
    // Actualizar una cita existente
    updateAppointment: (id: number | string, updatedData: Partial<Appointment>): Appointment | null => {
      const index = appointments.findIndex((a) => a.id === id)
      if (index === -1) return null

      const currentAppointment = appointments[index];

      const updatedAppointment = {
        ...currentAppointment,
        ...updatedData,
      };

  
      appointments[index] = updatedAppointment as Appointment;
      
      return appointments[index]
    },
  
    // Eliminar una cita
    deleteAppointment: (id: number | string): boolean => {
      const initialLength = appointments.length
      const filteredAppointments = appointments.filter((a) => a.id !== id)
  
      if (filteredAppointments.length === initialLength) {
        return false
      }
  
      // Actualizar el array de citas
      appointments.length = 0
      appointments.push(...filteredAppointments)
      return true
    },
  
    // Obtener citas por mascota
    getAppointmentsByPet: (petId: number): Appointment[] => {
      return appointments.filter((a) => a.petId === petId)
    },
  
    // Obtener citas por dueño
    getAppointmentsByOwner: (ownerId: number): Appointment[] => {
      return appointments.filter((a) => a.ownerId === ownerId)
    },
  
    // Obtener citas médicas por doctor
    getMedicalAppointmentsByDoctor: (doctorId: number): MedicalAppointment[] => {
      return appointments.filter(
        (a): a is MedicalAppointment =>
          a.type === 'medical' && a.doctorId === doctorId,
    );
    },
  
    // Obtener citas de estética por técnico
    getAestheticAppointmentsByTechnician: (technicianId: number): AestheticAppointment[] => {
      return appointments.filter(
        (a): a is AestheticAppointment => a.type === "aesthetic" && a.technicianId === technicianId,
      )
    },
  
    // Obtener citas por rango de fechas
    getAppointmentsByDateRange: (startDate: Date, endDate: Date): Appointment[] => {
      return appointments.filter((a) => a.start >= startDate && a.end <= endDate)
    },
  
    // Obtener citas por estado
    getAppointmentsByStatus: (status: Appointment["status"]): Appointment[] => {
      return appointments.filter((a) => a.status === status)
    },
  }