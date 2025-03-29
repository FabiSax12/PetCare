import { pets } from "../mock/pets";
import { Pet, PetWithOwner } from "../types";
import { ClientsService } from "./clients.service";

export class PetsService {
  getAll(): Pet[] {
    return pets;
  }

  getById(id: number): Pet | undefined {
    return pets.find((pet) => pet.id === id);
  }

  getByOwner(owner: string): Pet[] {
    return pets.filter((pet) => pet.owner === owner);
  }

  getAllWithOwner(): PetWithOwner[] {

    const clientsService = new ClientsService();

    return pets.map((pet) => ({
      ...pet,
      owner: clientsService.getByUsername(pet.owner)!,
    }));
  }
}