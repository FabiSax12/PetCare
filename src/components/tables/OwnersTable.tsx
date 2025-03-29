import { MessageCircleMore } from "lucide-react"
import { ClientsService } from "../../services/clients.service"
import { TableGrid } from "../TableGrid"
import { TableRowCard } from "../ui/TableRowCard"

export const OwnersTable = () => {

  const clientService = new ClientsService()

  return (
    <>
      <TableGrid title="Dueños de mascotas">
        {
          clientService.getAllWithPets().map(client => (
            <TableRowCard key={client.user}>
              <div className="flex items-center gap-3">
                {/* <img src={pet.img} alt={pet.name} className="w-16 h-16 rounded-full object-cover" /> */}
                <div>
                  <p className="text-[--color-fg-primary] font-semibold">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.user}</p>
                </div>
              </div>
              <span className="text-[--color-fg-primary] font-medium"> {client.pets.map(pet => pet?.name + ", ")}</span>
              <div className="flex items-center gap-4">
                <button className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => alert('Chat')}>
                  <MessageCircleMore />
                </button>
              </div>
            </TableRowCard>
          ))
        }
      </TableGrid>
    </>
  )
}