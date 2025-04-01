import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { PetDetailsCard } from "../components/PetDetailsCard";
import { dietService, petService } from "../services";

export const ClientPetsPage = () => {
  const authContext = useContext(AuthContext);

  const clientPets = petService.getByOwner(authContext.user!.username);


  return (
    clientPets.length > 0
      ? clientPets.map(pet => (
        <PetDetailsCard key={pet.id} pet={pet} petDieta={dietService.getById(pet.diet)} />
      ))
      : (
        <div className="flex items-center justify-center h-full w-full text-text">
          No tienes mascotas registradas.
        </div>
      )
  )

  // return (
  //   <TableGrid title="Mascotas" hasAddButton={false} columns={1}>
  //     {clientPets.map((pet, i) => (
  //       <TableRowCard key={i}>
  //         <div className="flex items-center gap-3">
  //           <img src={pet.img} alt={pet.name} className="w-16 h-16 rounded-full object-cover" />
  //           <div>
  //             <p className="text-[--color-fg-primary] font-semibold">{pet.name}</p>
  //             <p className="text-sm text-gray-500">Edad: {pet.age} años</p>
  //           </div>
  //         </div>

  //         <span className="text-[--color-fg-primary] font-medium">{pet.race}</span>

  //         {/* Estado de emergencia */}
  //         <div className="mt-2">
  //           <p className={`text-sm ${pet.isInEmergency ? 'text-red-600' : 'text-green-600'}`}>
  //             {pet.isInEmergency ? "En emergencia" : "Estable"}
  //           </p>
  //         </div>

  //         {/* Vacunas */}
  //         <div className="mt-2">
  //           <h4 className="text-sm font-semibold text-gray-700">Vacunas:</h4>
  //           <ul className="text-sm text-gray-600">
  //             {pet.vaccinations.length === 0 ? (
  //               <li>No hay vacunas registradas.</li>
  //             ) : (
  //               pet.vaccinations.map((vacuna, idx) => (
  //                 <li key={idx}>
  //                   {vacuna.name} - {new Date(vacuna.date).toLocaleDateString()} (Próxima dosis: {new Date(vacuna.nextDueDate).toLocaleDateString()})
  //                   <span className={`text-xs ${vacuna.isCompleted ? 'text-green-500' : 'text-red-500'}`}>
  //                     {vacuna.isCompleted ? "Completada" : "Pendiente"}
  //                   </span>
  //                 </li>
  //               ))
  //             )}
  //           </ul>
  //         </div>

  //         {/* Dieta */}
  //         <div className="mt-2">
  //           <p className="text-sm text-gray-600">Dieta: {pet.diet.name}</p>
  //           <p className="text-xs text-gray-500">Proteínas: {pet.diet.proteins}</p>
  //           <p className="text-xs text-gray-500">Grasas: {pet.diet.fats}</p>
  //           <p className="text-xs text-gray-500">Minerales: {pet.diet.minerals}</p>
  //         </div>

  //         {/* Enlace a detalles */}
  //         <div className="mt-2">
  //           <a href={`/pets/${pet.id}`} className="text-blue-500 text-sm flex items-center gap-2">
  //             Ver detalles <ExternalLink className="w-4 h-4" />
  //           </a>
  //         </div>
  //       </TableRowCard>
  //     ))}
  //   </TableGrid>
  // );
};
