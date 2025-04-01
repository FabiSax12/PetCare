import diets from "../db/diets.json";
import { Diet } from "../types";

export class DietService {
  private diets: Diet[];

  constructor() {
    this.diets = diets as Diet[];
  }

  // Obtener todas las dietas
  getAllDiets(): Diet[] {
    return this.diets;
  }

  getById(id: number): Diet | undefined {
    return this.diets.find((diet) => diet.id === id);
  }

  // Obtener una dieta por su nombre
  getDietByName(name: string): Diet | undefined {
    return this.diets.find((diet) => diet.name.toLowerCase() === name.toLowerCase());
  }

  // Modificar la información de una dieta
  updateDiet(name: string, updatedDiet: Partial<Diet>): Diet | undefined {
    const dietIndex = this.diets.findIndex((diet) => diet.name.toLowerCase() === name.toLowerCase());
    if (dietIndex !== -1) {
      this.diets[dietIndex] = { ...this.diets[dietIndex], ...updatedDiet };
      return this.diets[dietIndex];
    }
    return undefined;
  }

  // Añadir una nueva dieta
  addDiet(newDiet: Diet): Diet {
    const newName = newDiet.name;
    const existingDiet = this.diets.find(diet => diet.name.toLowerCase() === newName.toLowerCase());

    if (existingDiet) {
      throw new Error("Dieta con ese nombre ya existe.");
    }

    this.diets.push(newDiet);
    return newDiet;
  }

  // Eliminar una dieta por nombre
  deleteDiet(name: string): boolean {
    const dietIndex = this.diets.findIndex((diet) => diet.name.toLowerCase() === name.toLowerCase());
    if (dietIndex !== -1) {
      this.diets.splice(dietIndex, 1);
      return true;
    }
    return false;
  }
}
