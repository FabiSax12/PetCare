import { useState } from "react";
import { PetsService } from "../services/pets.service";

export const EmergenciesPage = () => {
  const petService = new PetsService()

  const [emergencyPets] = useState(petService.getInEmergency())

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-6">Mascotas en Emergencia</h1>

      {emergencyPets.length === 0 ? (
        <p className="text-center text-gray-500">No hay mascotas en emergencia.</p>
      ) : (
        <div className="space-y-4">
          {emergencyPets.map((pet) => (
            <div
              key={pet.id}
              className="flex items-center gap-4 p-4 bg-red-100 rounded-lg shadow-md border-2 border-red-500"
            >
              <img
                src={pet.img}
                alt={pet.name}
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="text-xl font-semibold text-red-600">{pet.name}</p>
                <p className="text-sm text-gray-600">Raza: {pet.race}</p>
                <p className="text-sm text-gray-500">Edad: {pet.age} años</p>
                <p className="text-sm text-gray-500">Dueño: {pet.owner}</p>
                <p className="text-sm text-red-600 font-semibold">¡Emergencia!</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
