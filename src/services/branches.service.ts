import { branches } from "../mock/sucursales";
import { Branch } from "../types";

export class BranchService {
  getAll(): Branch[] {
    return branches;
  }

  getByName(name: string): Branch | undefined {
    const branches = this.getAll();

    return branches.find((branch) => branch.name === name);
  }
}