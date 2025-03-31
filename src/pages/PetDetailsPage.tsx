import { useParams } from "react-router";
import { PetsService } from "../services/pets.service";
import { ClientsService } from "../services/clients.service";
import { diets } from "../mock/diets";
import { PetDetailsCard } from "../components/PetDetailsCard";

export const PetDetailsPage = () => {
  const { petId } = useParams();

  const petService = new PetsService();
  const clientService = new ClientsService();

  const pet = petService.getById(parseInt(petId!));

  if (!pet) return <div>Mascota con el id {petId} no encontrado</div>;

  const petOwner = clientService.getByUsername(pet.owner);
  const petDieta = diets.find((dieta) => dieta.name === pet.diet.name);

  return (
    <PetDetailsCard pet={pet} petOwner={petOwner} petDieta={petDieta} />
  );
};
