import { Plus } from "lucide-react"

interface Props {
  title?: string;
  children: React.ReactNode;
  onAddButtonClick?: () => void;
  hasAddButton?: boolean;
  columns?: number;
}

export const TableGrid = ({ title, children, onAddButtonClick, columns, hasAddButton = true }: Props) => {
  return (
    <div className="p-6 rounded-xl w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        {title && <h2 className="text-xl font-semibold text-[--color-fg-primary]">{title}</h2>}
        {hasAddButton && <button className="flex items-center gap-1 text-[--color-fg-primary] hover:text-[--color-highlight]">
          Añadir
          <button
            className="bg-bg-secondary cursor-pointer p-1 rounded-full flex items-center justify-center text-highlight"
            onClick={onAddButtonClick}
          >
            <Plus />
          </button>
        </button>}
      </div>

      <div className={`grid ${columns ? `grid-cols-${columns}` : "grid-cols-1"} gap-4`}>
        {children}
      </div>
    </div>
  )
}