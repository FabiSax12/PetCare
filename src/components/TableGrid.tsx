import { Plus } from "lucide-react"

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const TableGrid = ({ title, children }: Props) => {
  return (
    <div className="p-6 rounded-xl w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        {title && <h2 className="text-xl font-semibold text-[--color-fg-primary]">{title}</h2>}
        <button className="flex items-center gap-1 text-[--color-fg-primary] hover:text-[--color-highlight]">
          Añadir
          <button
            className="bg-bg-secondary cursor-pointer p-1 rounded-full flex items-center justify-center text-highlight"
            onClick={() => alert('Añadir')}
          >
            <Plus />
          </button>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {children}
      </div>
    </div>
  )
}