import { useContext, useState } from 'react';
import { ClientsService } from '../services/clients.service';
import { AuthContext } from '../context/auth';
import { Button } from '../components/ui/Button';
import { PetsService } from '../services/pets.service';

export const ClientProfilePage = () => {
  const clientService = new ClientsService();
  const petService = new PetsService();
  const { user } = useContext(AuthContext);

  const client = clientService.getByUsername(user?.username || "");

  // Estados para manejar los datos
  const [name, setName] = useState(client?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(client?.phoneNumber || '');
  const [pets, setPets] = useState(client?.pets || []);
  const [password, setPassword] = useState(client?.password || '');
  // Estado para controlar si estamos en modo edición
  const [isEditing, setIsEditing] = useState(false);

  if (!client) {
    return <div>No se encontró el cliente.</div>;
  }

  // Función para guardar los cambios
  const handleSave = () => {
    console.log('Datos guardados:', { name, phoneNumber, pets, password });
    alert('¡Datos guardados con éxito!');
    setIsEditing(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Perfil de Cliente</h1>

      {/* Mostrar información estática cuando no estamos editando */}
      {!isEditing ? (
        <div className="flex items-start gap-20">
          {/* <img src={client} alt="" className="w-60 aspect-square rounded-full" /> */}
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
              <label className="block text-sm font-medium text-gray-700">Mascotas:</label>
              {
                pets.length > 0
                  ? petService.getByOwner(client.user).map(pet => (
                    <p key={pet.id} className="mt-1 text-sm text-gray-600">{pet.name}</p>
                  ))
                  : (
                    <p className="mt-1 text-sm text-gray-600">No tiene mascotas registradas.</p>
                  )
              }
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
              <p className="mt-1 text-sm text-gray-600">********</p>
            </div>

            {/* Botón para cambiar a modo edición */}
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-bg-secondary text-highlight"
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
            <label htmlFor="pets" className="block text-sm font-medium text-gray-700">
              Mascotas:
            </label>
            <input
              id="pets"
              type="text"
              value={pets.join(', ')} // Muestra las mascotas separadas por coma
              onChange={(e) => setPets(e.target.value.split(',').map(pet => pet.trim()))}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-xs text-gray-500">Separe las mascotas por coma.</p>
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
              className="bg-bg-secondary text-highlight"
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
