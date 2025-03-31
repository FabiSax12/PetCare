import React from "react"
import { twMerge } from "tailwind-merge"

export const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return <button
    {...props}
    className={twMerge(
      "flex justify-center gap-2 bg-white px-4 py-2 rounded-2xl cursor-pointer hover:bg-bg-secondary hover:text-highlight",
      props.className,
    )}
  >
    {props.children}
  </button>
}