import { ExternalLink } from "lucide-react";
import { TableGrid } from "../components/TableGrid";
import { TableRowCard } from "../components/ui/TableRowCard";
import { PetsService } from "../services/pets.service";
import { useParams, useNavigate } from "react-router";

export const HotelPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const petService = new PetsService();
  const petsInHotel = petService.getAllWithOwner().filter((pet) => pet.hotelRoom);

  return (
    <TableGrid hasAddButton={false} title="Mascotas en el Hotel" columns={2}>
      {petsInHotel.map((pet, i) => (
        <TableRowCard key={i} className="col-start-1 col-end-3">
          <div className="flex items-center gap-3">
            <img src={pet.img} alt={pet.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="text-[--color-fg-primary] font-semibold">{pet.name}</p>
              {/* <p className="text-sm text-gray-500">Dueño: {pet.owner?.name}</p> */}
            </div>
          </div>
          <span className="text-[--color-fg-primary] font-medium">Habitación {pet.hotelRoom.id}</span>
          <div className="flex items-center gap-4">
            Día/s restantes:{" "}
            <span className="text-[--color-fg-primary] font-medium">{pet.hotelRoom.daysLeft}</span>
          </div>
          <button className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => navigate(`/veterinaria/${params.branch}/dashboard/tablas/mascotas/${pet.id}`)}>
            <ExternalLink />
          </button>
        </TableRowCard>
      ))}
    </TableGrid>
  )
};
