import { Pet, Vaccination } from "../types";

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Oliver',
    owner: 'j.salas',
    race: 'Perro',
    img: '/images/pets/dog.png',
    age: 3,
    vaccinations: [
      {
        name: 'Rabia',
        date: new Date('2023-01-15'),
        nextDueDate: new Date('2024-01-15'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
      {
        name: 'Parvovirus',
        date: new Date('2023-03-01'),
        nextDueDate: new Date('2024-03-01'),
        isCompleted: false,
        notes: 'Pendiente de refuerzo',
      },
    ],
  },
  {
    id: 2,
    name: 'Lucifer',
    owner: 'f.vargas',
    race: 'Perro',
    img: '/images/pets/dog.png',
    age: 2,
    vaccinations: [
      {
        name: 'Rabia',
        date: new Date('2023-02-20'),
        nextDueDate: new Date('2024-02-20'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
      {
        name: 'Leptospirosis',
        date: new Date('2023-04-15'),
        nextDueDate: new Date('2024-04-15'),
        isCompleted: false,
        notes: 'Pendiente de refuerzo',
      },
    ],
  },
  {
    id: 3,
    name: 'Aarón',
    owner: 'l.rios',
    race: 'Gato',
    img: '/images/pets/cat.jpg',
    age: 1,
    vaccinations: [
      {
        name: 'Trivalente Felina',
        date: new Date('2023-06-10'),
        nextDueDate: new Date('2024-06-10'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
      {
        name: 'Leucemia Felina',
        date: new Date('2023-07-01'),
        nextDueDate: new Date('2024-07-01'),
        isCompleted: false,
        notes: 'Pendiente de refuerzo',
      },
    ],
  },
  {
    id: 4,
    name: 'Teriyaki',
    owner: 'd.molina',
    race: 'Conejo',
    img: '/images/pets/rabbit.jpg',
    age: 4,
    vaccinations: [
      {
        name: 'Mixomatosis',
        date: new Date('2023-01-20'),
        nextDueDate: new Date('2024-01-20'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
      {
        name: 'RHDV2',
        date: new Date('2023-03-05'),
        nextDueDate: new Date('2024-03-05'),
        isCompleted: false,
        notes: 'Pendiente de refuerzo',
      },
    ],
  },
  {
    id: 5,
    name: 'Lukas',
    owner: 'a.lios',
    race: 'Hurón',
    img: '/images/pets/huron.jpg',
    age: 2,
    vaccinations: [
      {
        name: 'Rabia',
        date: new Date('2023-03-10'),
        nextDueDate: new Date('2024-03-10'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
    ],
  },
  {
    id: 6,
    name: 'Alón',
    owner: 'p.castillo',
    race: 'Hámster',
    img: '/images/pets/hamster.jpg',
    age: 1,
    vaccinations: [
      {
        name: 'Antiparasitario',
        date: new Date('2023-05-12'),
        nextDueDate: new Date('2024-05-12'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
    ],
  },
  {
    id: 7,
    name: 'Jos',
    owner: 'v.sandi',
    race: 'Perro',
    img: '/images/pets/dog.png',
    age: 3,
    vaccinations: [
      {
        name: 'Rabia',
        date: new Date('2022-12-01'),
        nextDueDate: new Date('2023-12-01'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
      {
        name: 'Parvovirus',
        date: new Date('2023-02-15'),
        nextDueDate: new Date('2024-02-15'),
        isCompleted: false,
        notes: 'Pendiente de refuerzo',
      },
    ],
  },
  {
    id: 8,
    name: 'Coba-Yaisel',
    owner: 'j.arrieta',
    race: 'Cobaya',
    img: '/images/pets/cobaya.jpg',
    age: 2,
    vaccinations: [
      {
        name: 'Antiparasitario',
        date: new Date('2023-04-20'),
        nextDueDate: new Date('2024-04-20'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
    ],
  },
  {
    id: 9,
    name: 'Nibbird',
    owner: 'j.arrieta',
    race: 'Lora',
    img: '/images/pets/lora.jpg',
    age: 1,
    vaccinations: [
      {
        name: 'Antiparasitario',
        date: new Date('2023-03-25'),
        nextDueDate: new Date('2024-03-25'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
    ],
  },
  {
    id: 10,
    name: 'Eduardou',
    owner: 'j.salas',
    race: 'Iguana',
    img: '/images/pets/camaleon.jpg',
    age: 4,
    vaccinations: [
      {
        name: 'Rabia',
        date: new Date('2023-01-01'),
        nextDueDate: new Date('2024-01-01'),
        isCompleted: true,
        notes: 'Vacuna completa',
      },
    ],
  },
];
