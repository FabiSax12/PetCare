import { VetService } from "../../services/vet.service"
import { TableGrid } from "../TableGrid"
import { TableRowCard } from "../ui/TableRowCard"

export const VetsTable = () => {
  const vetService = new VetService()

  return (
    <>
      <TableGrid title="Veterinarios">
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
            {/* <div className="flex items-center gap-4">
              <button className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => openModalWithItem(vet)}>
                <ExternalLink size={15} />
              </button>
            </div> */}
          </TableRowCard>
        ))}
      </TableGrid>
    </>
  )
}