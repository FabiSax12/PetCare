import { Stethoscope, User } from "lucide-react"
import { useNavigate } from "react-router"
import { Button } from "../components/ui/Button"

export const HomePage = () => {
  const navigate = useNavigate()

  return <div className='h-full flex flex-col items-center justify-center gap-10 p-6'>
    <h1 className='text-3xl font-bold text-center'>Bienvenido a <span className="petcare-title">PetCare</span></h1>
    <p className='text-center'>¿Quien eres?</p>
    <div className='flex gap-4 items-center justify-center mt-10'>
      <Button onClick={() => navigate('/veterinaria/login')}>
        <Stethoscope />
        Veterinario
      </Button>
      <Button onClick={() => navigate('/cliente/login')}>
        <User />
        Cliente
      </Button>
    </div>
  </div >
}