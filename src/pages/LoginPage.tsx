import { SucursalLoginForm } from '../components/auth/SucursalLoginForm';
import SucursalUserForm from '../components/auth/SucursalUserLoginForm';

interface Props {
  type: "sucursal" | "sucursalUser" | "client";
}

const LoginPage = ({ type }: Props) => {
  const handleVeterinarioLogin = (data: any) => {
    console.log('Veterinario logueado:', data);
    // Aquí haces tu lógica de autenticación
  };

  const handleClienteLogin = (data: any) => {
    console.log('Cliente logueado:', data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-6 bg-gray-100">

      {
        type === "sucursal"
          ? <SucursalLoginForm />
          : type === "sucursalUser"
            ? <SucursalUserForm type='veterinario' onSubmit={handleVeterinarioLogin} />
            : type === "client"
              ? <SucursalUserForm type='cliente' onSubmit={handleClienteLogin} />
              : null
      }

    </div>
  );
};

export default LoginPage;
