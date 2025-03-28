import { ButtonWrapper } from "./ButtonWrapper";
import { NavContainer } from "./NavContainer"

interface Props {
  links: { href: string; icon: React.ElementType }[];
}

export const HorizontalNav = ({ links }: Props) => {
  return (
    <NavContainer orientation="horizontal" className="bg-bg-primary w-min">
      {
        links.map((item) => (
          <li className="h-full aspect-square">
            <ButtonWrapper
              key={item.href}
              type="link"
              href={item.href}
              replace
              className={({ isActive }) => `
                  w-full
                  ${isActive ? 'text-highlight bg-bg-secondary' : 'text-fg-primary'}
                `}
            >
              <item.icon />
            </ButtonWrapper>
          </li>
        ))
      }
    </NavContainer>
  )
}