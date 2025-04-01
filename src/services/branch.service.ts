import branches from "../db/branches.json";
import { Branch } from "../types";

export class BranchService {
  private branches: Branch[];

  constructor(
  ) {
    this.branches = branches;
  }

  // Obtener todas las sucursales
  getAll(): Branch[] {
    return this.branches;
  }

  // Obtener una sucursal por su ID
  getById(id: number): Branch | undefined {
    return this.branches.find((branch) => branch.id === id);
  }

  // Obtener sucursales por nombre
  getByName(name: string): Branch[] {
    return this.branches.filter((branch) => branch.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Modificar la información de una sucursal
  update(id: number, updatedBranch: Partial<Branch>): Branch | undefined {
    const branchIndex = this.branches.findIndex((branch) => branch.id === id);
    if (branchIndex !== -1) {
      this.branches[branchIndex] = { ...this.branches[branchIndex], ...updatedBranch };
      return this.branches[branchIndex];
    }
    return undefined;
  }

  // Añadir una nueva sucursal
  add(newBranch: Branch): Branch {
    const newId = Math.max(...this.branches.map(branch => branch.id)) + 1;
    newBranch.id = newId;
    this.branches.push(newBranch);
    return newBranch;
  }

  // Eliminar una sucursal por ID
  delete(id: number): boolean {
    const branchIndex = this.branches.findIndex((branch) => branch.id === id);
    if (branchIndex !== -1) {
      this.branches.splice(branchIndex, 1);
      return true;
    }
    return false;
  }

}
