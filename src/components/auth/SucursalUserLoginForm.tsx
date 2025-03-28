import React, { useState } from 'react';

interface Props {
  type: 'veterinario' | 'cliente';
  onSubmit: (data: any) => void;
}

const sucursales = ['Sucursal Norte', 'Sucursal Centro', 'Sucursal Sur'];

const SucursalUserForm: React.FC<Props> = ({ type, onSubmit }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [sucursal, setSucursal] = useState(sucursales[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'veterinario') {
      onSubmit({ usuario, password, sucursal });
    } else {
      onSubmit({ usuario, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Login {type === 'veterinario' ? 'Veterinario' : 'Cliente'}
      </h2>

      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      {type === 'veterinario' && (
        <select
          value={sucursal}
          onChange={(e) => setSucursal(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          {sucursales.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default SucursalUserForm;
