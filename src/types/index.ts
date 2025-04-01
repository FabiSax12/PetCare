export interface Vaccination {
  name: string;
  date: Date;
  nextDueDate: Date;
  isCompleted: boolean;
  notes: string;
}

export interface MedicalHistory {
  date: Date;
  description: string;
  treatment?: string;
  notes?: string;
}

export interface Pet {
  id: number;
  name: string;
  race: string;
  age: number;
  gender: "M" | "F";
  color: string;
  weight: number;
  img: string;
  owner: Client["user"];
  diet: Diet["id"];
  isInEmergency: boolean;
  hotelRoom: HotelRoom;
  vaccinations: Vaccination[];
  allergies: string[];
  diseases: string[];
  medicalHistory: MedicalHistory[];
}

export interface PetWithOwner extends Omit<Pet, "owner"> {
  owner?: Client;
}

interface Person {
  name: string;
  id: number;
  phoneNumber: number;
  email: string;
  address: string;
  user: string;
  password: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phoneNumber: number;
}

export interface Client extends Person {
  pets: Pet["id"][];
}

export interface ClientWithPets extends Person {
  pets: Pet[];
}

export interface Vet extends Person {
  img: string;
  turn: "Nocturno" | "Diurno";
  isBusy: boolean;
  branches: Branch["id"][];
}

export interface VetWithBranches extends Person {
  branches: Branch[];
}

export interface UserLogin {
  user: string;
  password: string;
}

export interface VetLogin extends UserLogin {
  branch: Branch["name"];
}

export interface Message {
  id: number;
  sender: Person["user"];
  receiver: Person["user"];
  date: Date;
  content: string;
}

export interface Diet {
  id: number;
  name: string;
  proteins: string; // % de proteínas
  fats: string;     // % de grasas
  minerals: string; // % de minerales
}

export interface HotelRoom {
  id: string;
  daysLeft: number;
}

export interface Notification {
  id: string;
  type: "cita" | "vacunacion" | "examen" | "reprogramacion" | "tratamiento";
  message: string;
  date: string;
  read: boolean;
  client: string;
  preferredContact: "email" | "sms";
}


interface BaseAppointment {
  id: string | number;
  title: string; 
  start: Date;
  end: Date;
  petId: number;
  ownerId: number
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
}


export interface MedicalAppointment extends BaseAppointment {
  type: 'medical'; 
  doctorId: number;
  specialty?: string;
  reason: string;
  isFollowUp?: boolean;
  // El 'title' podría ser generado: `Consulta ${specialty || 'General'} con Dr. X`
}


export interface AestheticAppointment extends BaseAppointment {
  type: 'aesthetic'; 
  technicianId: number;
  service: string; // El 'title' podría ser simplemente el nombre del servicio
  room?: string;
}


export type Appointment = MedicalAppointment | AestheticAppointment;

