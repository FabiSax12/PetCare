import { useNavigate } from 'react-router';
import { LoginForm } from '../components/auth/LoginForm';
import { UserLogin, VetLogin } from '../types';
import { AuthContext } from '../context/auth';
import { useContext, useState } from 'react';
import { clientService, vetService } from '../services';

interface Props {
  type: "vet" | "client";
}

const LoginPage = ({ type }: Props) => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)

  const [vets] = useState(vetService.getAllWithBranches())
  const [allClients] = useState(clientService.getAll())

  const handleVetLogin = (data: VetLogin) => {
    const vet = vets.find(vet => vet.user === data.user);

    if (vet && vet.password === data.password && vet.branches.some(b => b.name === data.branch)) {
      authContext.login(vet.user, "vet")
      return navigate(`/veterinaria/${data.branch}/dashboard/emergencias`);
    }

    console.log('Error de autenticación del veterinario');
  };

  const handleClienteLogin = (data: UserLogin) => {
    const client = allClients.find(client => client.user === data.user);

    if (client && client.password === data.password) {
      authContext.login(client.user, "client")
      return navigate(`/cliente/${client.user}/dashboard/notificaciones`);
    }

    console.log('Error de autenticación del cliente');
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-10 p-6">
      {
        type === "vet"
          ? <LoginForm type='vet' onSubmit={handleVetLogin} />
          : type === "client"
            ? <LoginForm type='client' onSubmit={handleClienteLogin} />
            : null
      }

    </div>
  );
};

export default LoginPage;
