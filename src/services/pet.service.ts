import pets from "../db/pets.json";
import { Client, Pet, PetWithOwner } from "../types";
import { ClientService } from "./client.service";

export class PetService {
  private pets: Pet[];
  private clientService?: ClientService;

  constructor() {
    this.pets = pets.map(pet => ({
      ...pet,
      medicalHistory: pet.medicalHistory.map(record => ({
        ...record,
        date: new Date(record.date)
      })),
      vaccinations: pet.vaccinations.map(vaccine => ({
        ...vaccine,
        date: new Date(vaccine.date),
        nextDueDate: new Date(vaccine.nextDueDate)
      }))
    } as Pet));
  }

  setClientService(clientService: ClientService) {
    this.clientService = clientService;
  }

  // Obtener todas las mascotas
  getAllPets(): Pet[] {
    return this.pets;
  }

  // Obtener una mascota por su ID
  getPetById(id: number): Pet | undefined {
    return this.pets.find((pet) => pet.id === id);
  }

  // Obtener todas las mascotas de un cliente
  getPetsByOwner(owner: string): Pet[] {
    return this.pets.filter((pet) => pet.owner === owner);
  }

  // Actualizar la información de una mascota
  updatePet(id: number, updatedPet: Partial<Pet>): Pet | undefined {
    const petIndex = this.pets.findIndex((pet) => pet.id === id);
    if (petIndex !== -1) {
      this.pets[petIndex] = { ...this.pets[petIndex], ...updatedPet };
      return this.pets[petIndex];
    }
    return undefined;
  }

  // Añadir una nueva mascota
  addPet(newPet: Pet): Pet {
    const newId = Math.max(...this.pets.map(pet => pet.id)) + 1;
    newPet.id = newId;
    this.pets.push(newPet);
    return newPet;
  }

  // Eliminar una mascota por ID
  deletePet(id: number): boolean {
    const petIndex = this.pets.findIndex((pet) => pet.id === id);
    if (petIndex !== -1) {
      this.pets.splice(petIndex, 1);
      return true;
    }
    return false;
  }

  getOwnerOfPet(petId: number): Client | undefined {
    if (!this.clientService) {
      throw new Error("ClientService is not set. Please set it before using this method.");
    }

    const pet = this.getPetById(petId);
    if (!pet) {
      throw new Error("Pet not found");
    }
    return pet.owner ? this.clientService.getByUsername(pet.owner) : undefined;
  }

  getAllWithOwner(): PetWithOwner[] {
    if (!this.clientService) {
      throw new Error("ClientService is not set. Please set it before using this method.");
    }

    return this.pets.map((pet) => {
      const owner = this.clientService!.getByUsername(pet.owner || "");
      return { ...pet, owner };
    });
  }

  getByOwner(owner: string): Pet[] {
    return this.pets.filter((pet) => pet.owner === owner);
  }

  getInEmergency(): Pet[] {
    return this.pets.filter((pet) => pet.isInEmergency);
  }
}
