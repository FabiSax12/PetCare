import { useState } from 'react';
import { diets } from '../mock/diets';
import { Diet } from '../types';
import { TableGrid } from '../components/TableGrid';
import { TableRowCard } from '../components/ui/TableRowCard';

export const NutritionPage = () => {
  return (
    <div className="flex flex-col">
      <div className='flex'>
        <h1>Dietas: </h1>
        <div className='ml-6 flex gap-6'>
          <span className='text-fg-red flex justify-center items-center gap-2'>
            <span className='rounded-full bg-bg-red w-4 aspect-square inline-block' />
            Proteinas
          </span>
          <span className='text-fg-green flex justify-center items-center gap-2'>
            <span className='rounded-full bg-bg-green w-4 aspect-square inline-block' />
            Grasas
          </span>
          <span className='text-fg-yellow flex justify-center items-center gap-2'>
            <span className='rounded-full bg-bg-yellow w-4 aspect-square inline-block' />
            Minerales
          </span>
        </div>
      </div>

      <TableGrid hasAddButton={false}>
        {diets.map((dieta, index) => (
          <TableRowCard
            key={index}
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold">{dieta.name}</h3>
            <div className="flex justify-evenly w-full">
              <span className="font-bold text-sm px-3 py-1 rounded-xl bg-bg-red/50 text-fg-red">{dieta.proteins}</span>
              <span className="font-bold text-sm px-3 py-1 rounded-xl bg-bg-green/50 text-fg-green">{dieta.fats}</span>
              <span className="font-bold text-sm px-3 py-1 rounded-xl bg-bg-yellow/50 text-fg-yellow">{dieta.minerals}</span>
            </div>
          </TableRowCard>
        ))}
      </TableGrid>
    </div>
  )

  // return (
  //   <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
  //     <h1 className="text-2xl font-bold">Dietas disponibles:</h1>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //       {dietasData.map((dieta, index) => (
  //         <div
  //           key={index}
  //           className="bg-white p-4 rounded-lg shadow-lg space-y-4"
  //         >
  //           <h3 className="text-lg font-semibold">{dieta.name}</h3>
  //           <div className="space-y-2">
  //             <div className="flex justify-between">
  //               <span className="font-medium text-red-600">Proteínas</span>
  //               <span>{dieta.proteins}</span>
  //             </div>
  //             <div className="flex justify-between">
  //               <span className="font-medium text-green-600">Grasas</span>
  //               <span>{dieta.fats}</span>
  //             </div>
  //             <div className="flex justify-between">
  //               <span className="font-medium text-yellow-400">Minerales</span>
  //               <span>{dieta.minerals}</span>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //     {/* Botón para añadir nueva dieta */}
  //     <div className="flex justify-center">
  //       <button
  //         onClick={handleAddNew}
  //         className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200"
  //       >
  //         Añadir nuevo
  //       </button>
  //     </div>
  //   </div>
  // );
};
