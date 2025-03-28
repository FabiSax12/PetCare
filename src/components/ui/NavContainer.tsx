import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  orientation?: "vertical" | "horizontal";
}


export const NavContainer = ({ children, className, orientation = "vertical" }: Props) => {
  return (
    <nav className={twMerge(
      `p-1.5 bg-white rounded-[176px]
      ${orientation === "vertical" ? "w-12" : "h-12 "}`,
      className
    )}
    >
      <ul className={`flex gap-2 ${orientation === "vertical" ? "flex-col" : "flex-row h-full"}`}>
        {children}
      </ul>
    </nav>
  )
}