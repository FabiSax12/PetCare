import { NavLink, NavLinkProps } from "react-router";
import { twMerge } from "tailwind-merge";
import React from "react";

type BaseProps = {
  type: "button" | "link";
  className?: string | ((args: { isActive: boolean }) => string);
  children: React.ReactNode;
};

type LinkProps = BaseProps &
  Omit<NavLinkProps, "className" | "to"> & {
    type: "link";
    href: string;
  };

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type: "button";
    href?: never;
  };

type ButtonWrapperProps = LinkProps | ButtonProps;

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  type,
  className,
  children,
  href,
  onClick
}) => {
  const baseClasses = "rounded-full aspect-square flex justify-center items-center text-fg-primary hover:text-highlight cursor-pointer";

  if (type === "link") {
    return (
      <NavLink
        to={href}
        className={({ isActive }) =>
          twMerge(
            baseClasses,
            typeof className === "function" ? className({ isActive }) : className
          )
        }
      // {...rest}
      >
        {children}
      </NavLink>
    );
  }

  // Botón estándar
  return (
    <button
      className={twMerge(
        baseClasses,
        "w-full h-full",
        className
      )}
      onClick={onClick}
    // {...rest}
    >
      {children}
    </button>
  );
};
