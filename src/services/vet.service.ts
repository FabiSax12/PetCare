import { vets } from "../mock/vets";
import { Vet } from "../types";

export class VetService {
  getAll(): Vet[] {
    return vets;
  }

  getByUser(user: string): Vet | undefined {
    return vets.find((vet) => vet.user === user);
  }

  getByBranch(branch: string): Vet[] {
    return vets.filter((vet) => vet.branches.some(b => b === branch));
  }
}