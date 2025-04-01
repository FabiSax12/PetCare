import clients from "../db/clients.json";
import { Client, ClientWithPets, Pet } from "../types";
import { PetService } from "./pet.service";

export class ClientService {
  private clients: Client[];
  private petService: PetService | null;

  constructor() {
    this.clients = clients as Client[];
    this.petService = null
  }

  setPetService(petService: PetService) {
    this.petService = petService;
  }

  // Obtener todos los clientes
  getAll(): Client[] {
    return this.clients;
  }

  // Obtener un cliente por su ID
  getById(id: number): Client | undefined {
    return this.clients.find((client) => client.id === id);
  }

  // Obtener clientes por su nombre
  getAllByName(name: string): Client[] {
    return this.clients.filter((client) => client.name.toLowerCase().includes(name.toLowerCase()));
  }

  getByUsername(username: string): Client | undefined {
    return this.clients.find((client) => client.user === username);
  }

  // Modificar la información de un cliente
  update(id: number, updatedClient: Partial<Client>): Client | undefined {
    const clientIndex = this.clients.findIndex((client) => client.id === id);
    if (clientIndex !== -1) {
      this.clients[clientIndex] = { ...this.clients[clientIndex], ...updatedClient };
      return this.clients[clientIndex];
    }
    return undefined;
  }

  // Añadir un nuevo cliente
  add(newClient: Client): Client {
    const newId = Math.max(...this.clients.map(client => client.id)) + 1;
    newClient.id = newId;
    this.clients.push(newClient);
    return newClient;
  }

  // Eliminar un cliente por ID
  delete(id: number): boolean {
    const clientIndex = this.clients.findIndex((client) => client.id === id);
    if (clientIndex !== -1) {
      this.clients.splice(clientIndex, 1);
      return true;
    }
    return false;
  }

  getPetsOfClient(clientUsername: string): Pet[] {
    if (!this.petService) {
      throw new Error("PetService is not initialized. Please set it before using this method.");
    }

    const client = this.clients.find((c) => c.user === clientUsername);
    if (client) {
      return this.petService.getPetsByOwner(client.user);
    }
    return [];
  }

  getAllWithPets(): ClientWithPets[] {
    return this.clients.map((client) => {
      const pets = this.getPetsOfClient(client.user);
      return { ...client, pets };
    });
  }

}
