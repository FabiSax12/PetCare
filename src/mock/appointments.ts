import { Appointment } from "../types";
import dayjs from "dayjs"

export const appointments: Appointment[] = [
  {
    id: 1,
    title: "Checkup - Max",
    start: dayjs().hour(9).minute(0).toDate(),
    end: dayjs().hour(9).minute(30).toDate(),
    petId: 1,
    ownerId: 1,
    type: 'medical',
    doctorId: 1,
    reason: 'Se rompió la pata',
    status: 'scheduled'
  },
  {
    id: 2,
    title: "Emergency - Luna",
    start: dayjs().hour(10).minute(0).toDate(),
    end: dayjs().hour(11).minute(0).toDate(),
    petId: 2,
    ownerId: 2,
    type: 'medical',
    doctorId: 1,
    reason: 'Asfixia',
    status: 'scheduled'
  },
  {
    id: 3,
    title: "Grooming - Rocky",
    start: dayjs().add(1, "day").hour(14).minute(0).toDate(),
    end: dayjs().add(1, "day").hour(15).minute(30).toDate(),
    petId: 3,
    ownerId: 3,
    type: 'medical',
    doctorId: 1,
    reason: 'Virus',
    status: 'scheduled'
  },
  {
    id: 4,
    title: "Nutrition - Bella",
    start: dayjs().add(2, "day").hour(11).minute(0).toDate(),
    end: dayjs().add(2, "day").hour(11).minute(45).toDate(),
    petId: 4,
    ownerId: 4,
    type: 'medical',
    doctorId: 1,
    reason: 'Columna fracturada',
    status: 'scheduled'
  },
  {
    id: 5,
    title: "Hotel Check-in - Coco",
    start: dayjs().add(3, "day").hour(9).minute(0).toDate(),
    end: dayjs().add(3, "day").hour(9).minute(30).toDate(),
    petId: 5,
    ownerId: 5,
    type: 'medical',
    doctorId: 1,
    reason: 'Asma',
    status: 'scheduled'
  },
  {
    id: 4,
    title: "Corte de pelo - Bella",
    start: dayjs().add(2, "day").hour(11).minute(0).toDate(),
    end: dayjs().add(2, "day").hour(11).minute(45).toDate(),
    petId: 4,
    ownerId: 4,
    type: 'aesthetic',
    technicianId: 1,
    service: 'haircut',
    status: 'scheduled'
  },
  {
    id: 4,
    title: " Baño - Bella",
    start: dayjs().add(2, "day").hour(11).minute(0).toDate(),
    end: dayjs().add(2, "day").hour(11).minute(45).toDate(),
    petId: 4,
    ownerId: 4,
    type: 'aesthetic',
    technicianId: 1,
    service: 'haircut',
    status: 'scheduled'
  }
]
