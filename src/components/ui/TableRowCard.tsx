interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
}

export const TableRowCard = ({ children }: Props) => {
  return (
    <div
      className={`flex items-center justify-between bg-bg-primary rounded-2xl p-3 shadow-sm hover:shadow-md transition hover:ring-2`}>
      {children}
    </div >
  )
}