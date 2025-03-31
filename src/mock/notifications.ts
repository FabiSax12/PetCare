import { Notification } from "../types";

export const notifications: Notification[] = [
  {
    id: "1",
    type: "cita",
    message: "Recordatorio: Tienes una cita con el veterinario en 24 horas.",
    date: "2025-03-30T10:00:00",
    read: false,
    client: "j.salas",
    preferredContact: "email",
  },
  {
    id: "2",
    type: "vacunacion",
    message: "Recordatorio: Tu mascota 'Oliver' tiene una vacuna pendiente.",
    date: "2025-03-29T12:00:00",
    read: false,
    client: "j.salas",
    preferredContact: "sms",
  },
  {
    id: "3",
    type: "examen",
    message: "Resultados de examen disponibles para tu mascota 'Aarón'.",
    date: "2025-03-28T08:00:00",
    read: false,
    client: "l.rios",
    preferredContact: "email",
  },
  {
    id: "4",
    type: "reprogramacion",
    message: "Aviso: Tu cita fue reprogramada para el 2025-04-01.",
    date: "2025-03-27T15:00:00",
    read: false,
    client: "d.molina",
    preferredContact: "sms",
  },
];