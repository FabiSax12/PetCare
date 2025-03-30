import { ExternalLink } from "lucide-react";
import { TableRowCard } from "../ui/TableRowCard";
import { useState } from "react";
import Modal from "../ui/Modal";
import { PetsService } from "../../services/pets.service";
import { TableGrid } from "../TableGrid";
import { useNavigate, useParams } from "react-router";

export const PetsTable = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const petsService = new PetsService()


  return (
    <>
      <TableGrid title="Mascotas" onAddButtonClick={() => setAddModalOpen(true)}>
        {petsService.getAllWithOwner().map((pet, i) => (
          <TableRowCard key={i}>
            <div className="flex items-center gap-3">
              <img src={pet.img} alt={pet.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-[--color-fg-primary] font-semibold">{pet.name}</p>
                <p className="text-sm text-gray-500">Dueño: {pet.owner?.name}</p>
              </div>
            </div>
            <span className="text-[--color-fg-primary] font-medium">{pet.race}</span>
            <div className="flex items-center gap-4">
              <button className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => navigate(`/veterinaria/${params.branch}/dashboard/tablas/mascotas/${pet.id}`)}>
                <ExternalLink />
              </button>
            </div>
          </TableRowCard>
        ))}
      </TableGrid>

      <Modal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}>
        <div>
          <h2 className="text-xl font-bold mb-2">Registrar mascota</h2>
        </div>
      </Modal>
    </>
  );
}