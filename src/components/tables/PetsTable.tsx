import { ExternalLink, Plus } from "lucide-react";
import { TableRowCard } from "../ui/TableRowCard";
import { useState } from "react";
import Modal from "../ui/Modal";

const pets = [
  { name: 'Oliver', owner: 'Joseph Salas', type: 'Perro', img: '/images/pets/dog.png' },
  { name: 'Lucifer', owner: 'Fabián Vargas', type: 'Perro', img: '/images/pets/dog.png' },
  { name: 'Aarón', owner: 'Lorena', type: 'Gato', img: '/images/pets/cat.jpg', selected: true },
  { name: 'Teriyaki', owner: 'David Molina', type: 'Conejo', img: '/images/pets/rabbit.jpg' },
  { name: 'Lukas', owner: 'Aarón Líos', type: 'Hurón', img: '/images/pets/huron.jpg' },
  { name: 'Alón', owner: 'Paula Castillo', type: 'Hámster', img: '/images/pets/hamster.jpg' },
  { name: 'Jos', owner: 'Víctor Sandi', type: 'Perro', img: '/images/pets/dog.png' },
  { name: 'Coba-Yaisel', owner: 'Jairo Arrieta', type: 'Cobaya', img: '/images/pets/cobaya.jpg' },
  { name: 'Nibbird', owner: 'Jose González', type: 'Lora', img: '/images/pets/lora.jpg' },
  { name: 'Eduardou', owner: 'Joseph Salas', type: 'Iguana', img: '/images/pets/camaleon.jpg' },
];

export const PetsTable = () => {

  const [selectedItem, setSelectedItem] = useState<null | typeof pets[0]>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModalWithItem = (item: typeof pets[0]) => {
    setSelectedItem(item);
    setModalOpen(true);
  };


  return (
    <div className="p-6 rounded-xl w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[--color-fg-primary]">Mascotas</h2>
        <button className="flex items-center gap-1 text-[--color-fg-primary] hover:text-[--color-highlight]">
          Añadir
          <button
            className="bg-bg-secondary cursor-pointer p-1 rounded-full flex items-center justify-center text-highlight"
            onClick={() => alert('Modal añadir mascota')}
          >
            <Plus />
          </button>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pets.map((pet, i) => (
          <TableRowCard key={i} isSelected={pet.selected}>
            <div className="flex items-center gap-3">
              <img src={pet.img} alt={pet.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-[--color-fg-primary] font-semibold">{pet.name}</p>
                <p className="text-sm text-gray-500">Dueño: {pet.owner}</p>
              </div>
            </div>
            <span className="text-[--color-fg-primary] font-medium">{pet.type}</span>
            <div className="flex items-center gap-4">
              <button className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => openModalWithItem(pet)}>
                <ExternalLink size={15} />
              </button>
            </div>
          </TableRowCard>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {selectedItem && (
          <div>
            <h2 className="text-xl font-bold mb-2">Detalles de mascota</h2>
            <img src={selectedItem.img} alt="" />
            <p>{selectedItem.name}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}