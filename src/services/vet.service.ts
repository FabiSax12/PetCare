import { Branch, Vet } from "../types";
import vets from "../db/vets.json";
import { BranchService } from "./branch.service";

export class VetService {
  private veterinarians: Vet[];
  private branchService?: BranchService

  constructor(
  ) {
    this.veterinarians = vets as Vet[];
  }

  setBranchService(branchService: BranchService) {
    this.branchService = branchService
  }

  // Obtener todos los veterinarios
  getAll(): Vet[] {
    return this.veterinarians;
  }

  // Obtener un veterinario por su ID
  getById(id: number): Vet | undefined {
    return this.veterinarians.find((vet) => vet.id === id);
  }

  // Obtener veterinarios por sucursal (filtrando por branch ID)
  getByBranch(branchId: number): Vet[] {
    return this.veterinarians.filter((vet) => vet.branches.includes(branchId));
  }

  // Obtener veterinarios por su turno
  getByTurn(turn: "Diurno" | "Nocturno"): Vet[] {
    return this.veterinarians.filter((vet) => vet.turn === turn);
  }

  // Modificar la información de un veterinario
  update(id: number, updatedVet: Partial<Vet>): Vet | undefined {
    const vetIndex = this.veterinarians.findIndex((vet) => vet.id === id);
    if (vetIndex !== -1) {
      this.veterinarians[vetIndex] = { ...this.veterinarians[vetIndex], ...updatedVet };
      return this.veterinarians[vetIndex];
    }
    return undefined;
  }

  // Añadir un nuevo veterinario
  add(newVet: Vet): Vet {
    const newId = Math.max(...this.veterinarians.map(vet => vet.id)) + 1;
    newVet.id = newId;
    this.veterinarians.push(newVet);
    return newVet;
  }

  // Eliminar un veterinario por ID
  delete(id: number): boolean {
    const vetIndex = this.veterinarians.findIndex((vet) => vet.id === id);
    if (vetIndex !== -1) {
      this.veterinarians.splice(vetIndex, 1);
      return true;
    }
    return false;
  }

  getAllWithBranches(): (Omit<Vet, "branches"> & { branches: Branch[] })[] {
    if (!this.branchService) {
      throw new Error("BranchService is not set. Please set it using setBranchService method.");
    }

    return this.veterinarians.map(vet => {
      const branches = vet.branches.map(branchId => this.branchService!.getById(branchId)).filter(Boolean) as Branch[];
      return { ...vet, branches };
    });
  }

  getByUsername(username: string): Vet | undefined {
    return this.veterinarians.find(vet => vet.user === username);
  }
}