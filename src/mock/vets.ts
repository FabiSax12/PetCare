import { Vet } from "../types";

export const vets: Vet[] = [
  {
    user: "f.vargas",
    password: "123456",
    branches: ["Alajuela"],
    name: "Fabian Vargas",
    img: "/images/vets/default.jpg",
    turn: "Diurno",
    isBusy: true,
    phoneNumber: 12345678
  },
  {
    user: "j.salas",
    password: "123456",
    branches: ["Heredia"],
    name: "Joseph Salas",
    img: "/images/vets/default.jpg",
    turn: "Diurno",
    isBusy: false,
    phoneNumber: 12345678
  },
  {
    user: "k.araya",
    password: "123456",
    branches: ["Cartago"],
    name: "Kenneth Araya",
    img: "/images/vets/default.jpg",
    turn: "Nocturno",
    isBusy: false,
    phoneNumber: 12345678
  }
]