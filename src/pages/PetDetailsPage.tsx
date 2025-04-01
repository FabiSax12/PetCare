import { useParams } from "react-router";
import { PetDetailsCard } from "../components/PetDetailsCard";
import { clientService, dietService, petService } from "../services";

export const PetDetailsPage = () => {
  const { petId } = useParams();

  const pet = petService.getPetById(parseInt(petId!));

  if (!pet) return <div>Mascota con el id {petId} no encontrado</div>;

  const petOwner = clientService.getByUsername(pet.owner);
  const petDiet = dietService.getAllDiets().find((dieta) => dieta.id === pet.diet);

  return (
    <PetDetailsCard pet={pet} petOwner={petOwner} petDieta={petDiet} />
  );
};
