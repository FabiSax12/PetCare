import { MessageCircleMore } from "lucide-react"
import { TableGrid } from "../TableGrid"
import { TableRowCard } from "../ui/TableRowCard"
import { Link, useNavigate, useParams } from "react-router"
import Modal from "../ui/Modal"
import { useState } from "react"
import { clientService } from "../../services"

export const OwnersTable = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <TableGrid title="Dueños de mascotas" onAddButtonClick={() => setModalOpen(true)}>
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
              <span className="text-[--color-fg-primary] font-medium">
                {
                  client.pets.map(pet => <Link
                    to={`/veterinaria/${params.branch}/dashboard/tablas/mascotas/${pet.id}`}
                    className="hover:text-highlight"
                  >
                    {pet?.name + ", "}
                  </Link>
                  )
                }
              </span>
              <div className="flex items-center gap-4">
                <button
                  className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={() => navigate(`/veterinaria/${params.branch}/dashboard/chats/${client.user}`)}
                >
                  <MessageCircleMore />
                </button>
              </div>
            </TableRowCard>
          ))
        }
      </TableGrid>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Registrar cliente</h2>
        </div>
      </Modal>
    </>
  )
}