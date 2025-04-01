import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { Button } from '../components/ui/Button';
import { vetService } from '../services';

export const UserProfilePage = () => {
  const { user } = useContext(AuthContext)
  const vet = vetService.getByUsername(user?.username || "")

  // Estados para manejar los datos
  const [name, setName] = useState(vet?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(vet?.phoneNumber || '');
  const [turn, setTurn] = useState(vet?.turn || 'Diurno');
  const [branches] = useState(vet?.branches || []);
  const [password, setPassword] = useState(vet?.password || '');
  // Estado para controlar si estamos en modo edición
  const [isEditing, setIsEditing] = useState(false);

  if (!vet) {
    return <div>No se encontró el veterinario.</div>;
  }

  // Función para guardar los cambios
  const handleSave = () => {
    console.log('Datos guardados:', { name, phoneNumber, turn, branches, password });
    alert('¡Datos guardados con éxito!');
    setIsEditing(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Perfil de Veterinario</h1>

      {/* Mostrar información estática cuando no estamos editando */}
      {!isEditing ? (
        <div className='flex items-start gap-20'>
          <img src={vet.img} alt="" className='w-60 aspect-square rounded-full' />
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nombre:</label>
              <p className="mt-1 text-sm text-gray-600">{name}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
              <p className="mt-1 text-sm text-gray-600">{phoneNumber}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Turno:</label>
              <p className="mt-1 text-sm text-gray-600">{turn}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Sucursales:</label>
              <p className="mt-1 text-sm text-gray-600">{branches.join(', ')}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
              <p className="mt-1 text-sm text-gray-600">********</p>
            </div>

            {/* Botón para cambiar a modo edición */}
            <Button
              onClick={() => setIsEditing(true)}
              // className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              className='bg-bg-secondary text-highlight'
            >
              Editar Perfil
            </Button>
          </div>
        </div>
      ) : (
        // Formulario de edición (cuando isEditing es true)
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono:
            </label>
            <input
              id="phone"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="turn" className="block text-sm font-medium text-gray-700">
              Turno:
            </label>
            <select
              id="turn"
              value={turn}
              onChange={(e) => setTurn(e.target.value as "Nocturno" | "Diurno")}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Diurno">Diurno</option>
              <option value="Nocturno">Nocturno</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="branches" className="block text-sm font-medium text-gray-700">
              Sucursales:
            </label>
            <input
              id="branches"
              type="text"
              value={branches.join(', ')} // Muestra las sucursales separadas por coma
              // onChange={(e) => setBranches(e.target.value.split(',').map(branch => branch.trim()))}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-xs text-gray-500">Separe las sucursales por coma.</p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              onClick={handleSave}
              // className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              className='bg-bg-secondary text-highlight'
            >
              Guardar Cambios
            </Button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  );
};
