import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Branch, UserLogin, VetLogin } from '../../types';
import { branchService } from '../../services';

interface VetLoginFormProps {
  type: "vet";
  onSubmit: (data: VetLogin) => void;
}

interface UserLoginFormProps {
  type: "client";
  onSubmit: (data: UserLogin) => void;
}

type Props = VetLoginFormProps | UserLoginFormProps;

export const LoginForm: React.FC<Props> = ({ type, onSubmit }) => {
  const [user, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState<Branch>(branchService.getAll()[0]);
  const [allBranches] = useState<Branch[]>(branchService.getAll());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === 'vet') {
      onSubmit({ user, password, branch: branch!.name });
    } else {
      onSubmit({ user, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Login {type === 'vet' ? 'Veterinario' : 'Cliente'}
      </h2>

      <input
        type="text"
        placeholder="Usuario"
        value={user}
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

      {type === 'vet' && (
        <select
          value={branch?.name}
          onChange={(e) => setBranch(branchService.getById(parseInt(e.target.value))!)}
          className="w-full border px-3 py-2 rounded"
        >
          {allBranches.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      )}
      <Button className="bg-bg-secondary text-highlight w-full text-center">Iniciar Sesión</Button>
    </form>
  );
};
