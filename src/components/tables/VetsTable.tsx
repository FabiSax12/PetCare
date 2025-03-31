import { useState } from "react"
import { VetService } from "../../services/vet.service"
import { TableGrid } from "../TableGrid"
import Modal from "../ui/Modal"
import { TableRowCard } from "../ui/TableRowCard"

export const VetsTable = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const vetService = new VetService()

  return (
    <>
      <TableGrid title="Veterinarios" onAddButtonClick={() => setModalOpen(true)}>
        {vetService.getAll().map((vet, i) => (
          <TableRowCard key={i}>
            <div className="flex items-center gap-3">
              <img src={vet.img} alt={vet.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-[--color-fg-primary] font-semibold">{vet.name}</p>
                <p className="text-sm text-gray-500">Turno: {vet.turn}</p>
              </div>
            </div>
            <span className="text-[--color-fg-primary] font-medium">{vet.isBusy ? "Ocupado" : "Disponible"}</span>
          </TableRowCard>
        ))}
      </TableGrid>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Registrar veterinario</h2>
        </div>
      </Modal>
    </>
  )
}