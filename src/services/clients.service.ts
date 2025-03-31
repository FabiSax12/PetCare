import { clients } from "../mock/clients";
import { pets } from "../mock/pets";
import type { Client, ClientWithPets, Pet } from "../types";

export class ClientsService {
  getAll(): Client[] {
    return clients
  }

  getAllWithPets(): ClientWithPets[] {
    return this.getAll().map(client => {
      const clientPets = client.pets.map(petId => pets.find(pet => pet.id === petId)).filter(pet => pet !== undefined) as Pet[];
      return { ...client, pets: clientPets };
    });
  }

  getByUsername(username: string): Client | undefined {
    return clients.find(client => client.user === username);
  }
}