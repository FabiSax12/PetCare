import { Client, Diet, Pet } from "../types";

interface Props {
  pet: Pet;
  petDieta?: Diet;
  petOwner?: Client;
}

export const PetDetailsCard = ({ pet, petDieta, petOwner }: Props) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Detalles de la mascota</h2>

      <div className="flex gap-6">
        <img
          src={pet.img}
          alt={pet.name}
          className="w-36 h-36 rounded-full object-cover shadow-md"
        />
        <div className="flex flex-col justify-between">
          <p className="text-2xl font-bold text-[#6D6F72]">{pet.name}</p>
          <p className="text-lg text-[#FF9D00]">Raza: {pet.race}</p>
          <p className="text-sm text-gray-500">Edad: {pet.age} años</p>
          <p className="text-sm text-gray-500">Dueño: {petOwner?.name ?? "Sin dueño"}</p>
        </div>
      </div>

      {/* Dieta */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#FF9D00] mb-4">Dieta</h3>
        {petDieta ? (
          <div className="space-y-2 p-4 bg-[#F4F1EB] rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-[#FF9D00]">{petDieta.name}</h4>
            <div className="flex justify-between">
              <span className="font-medium text-red-600">Proteínas</span>
              <span>{petDieta.proteins}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-green-600">Grasas</span>
              <span>{petDieta.fats}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-yellow-400">Minerales</span>
              <span>{petDieta.minerals}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No se ha asignado una dieta para esta mascota.</p>
        )}
      </div>

      {/* Vacunas */}
      <div>
        <h3 className="text-xl font-semibold text-[#FF9D00] mb-4">Vacunas</h3>
        {pet.vaccinations.length === 0 ? (
          <p className="text-gray-500">No se han registrado vacunas.</p>
        ) : (
          <ul className="space-y-4">
            {pet.vaccinations.map((vacuna, index) => (
              <li key={index} className="p-4 bg-[#F4F1EB] rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-[#FF9D00]">{vacuna.name}</h4>
                <p className="text-sm text-gray-600">
                  Fecha: {new Date(vacuna.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Próxima dosis: {new Date(vacuna.nextDueDate).toLocaleDateString()}
                </p>
                <p
                  className={`text-sm ${vacuna.isCompleted ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {vacuna.isCompleted ? "Completada" : "Pendiente"}
                </p>
                <p className="text-sm text-gray-500">Notas: {vacuna.notes}</p>
              </li>
            ))}
          </ul>
        )}
      </div>


    </div>
  )
}