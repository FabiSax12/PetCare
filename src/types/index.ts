export interface Vaccination {
  name: string;
  date: Date;
  nextDueDate: Date;
  isCompleted: boolean;
  notes: string;
}

export interface Allergy {
  name: string;
  symptoms: string[];
  severity: "Mild" | "Moderate" | "Severe";
}

export interface Disease {
  name: string;
  symptoms: string[];
  severity: "Mild" | "Moderate" | "Severe";
  treatment: string;
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
  diet: Diet;
  isInEmergency: boolean;
  hotelRoom: HotelRoom;
  vaccinations: Vaccination[];
  allergies: Allergy[];
  diseases: Disease[];
  medicalHistory: MedicalHistory[];
}

export interface PetWithOwner extends Omit<Pet, "owner"> {
  owner: Client;
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
  branches: Branch["name"][];
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
  name: string;
  proteins: string; // % de proteínas
  fats: string;     // % de grasas
  minerals: string; // % de minerales
}

export interface HotelRoom {
  id: string;
  daysLeft: number;
}