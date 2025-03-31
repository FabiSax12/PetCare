import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  className?: string;
}

export const TableRowCard = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between bg-bg-primary rounded-2xl p-3 shadow-sm hover:shadow-md transition hover:ring-2",
        className
      )}>
      {children}
    </div >
  )
}