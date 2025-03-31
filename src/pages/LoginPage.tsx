import { useNavigate } from 'react-router';
import { LoginForm } from '../components/auth/LoginForm';
import { vets } from '../mock/vets';
import { ClientsService } from '../services/clients.service';
import { UserLogin, VetLogin } from '../types';
import { AuthContext } from '../context/auth';
import { useContext } from 'react';

interface Props {
  type: "vet" | "client";
}

const LoginPage = ({ type }: Props) => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const clientsService = new ClientsService()

  const handleVetLogin = (data: VetLogin) => {
    const vet = vets.find(vet => vet.user === data.user);

    if (vet && vet.password === data.password && vet.branches.some(b => b === data.branch)) {
      authContext.login(vet.user, "vet")
      return navigate(`/veterinaria/${data.branch}/dashboard/emergencias`);
    }

    console.log('Error de autenticación del veterinario');
  };

  const handleClienteLogin = (data: UserLogin) => {
    const client = clientsService.getAll().find(client => client.user === data.user);

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
