import { ExternalLink } from "lucide-react";
import { TableRowCard } from "../ui/TableRowCard";
import { useState } from "react";
import Modal from "../ui/Modal";
import { PetsService } from "../../services/pets.service";
import { PetWithOwner } from "../../types";
import { TableGrid } from "../TableGrid";

export const PetsTable = () => {

  const petsService = new PetsService()

  const [selectedItem, setSelectedItem] = useState<null | PetWithOwner>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModalWithItem = (item: PetWithOwner) => {
    setSelectedItem(item);
    setModalOpen(true);
  };


  return (
    <>
      <TableGrid title="Mascotas">
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
              <button className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => openModalWithItem(pet)}>
                <ExternalLink size={15} />
              </button>
            </div>
          </TableRowCard>
        ))}
      </TableGrid>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {selectedItem && (
          <div>
            <h2 className="text-xl font-bold mb-2">Detalles de mascota</h2>
            <img src={selectedItem.img} alt="" />
            <p>{selectedItem.name}</p>
          </div>
        )}
      </Modal>
    </>
  );
}