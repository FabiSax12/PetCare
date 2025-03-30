import { Bone, BriefcaseMedical, Calendar, ChartSpline, Hotel, LogOutIcon, MessageSquareMore, Table, UserIcon } from "lucide-react"
import { Logo } from "./Logo"
import { ButtonWrapper } from "./ui/ButtonWrapper"
import { NavContainer } from "./ui/NavContainer"
import { useNavigate } from "react-router"

const navItems = [
  { icon: BriefcaseMedical, href: 'emergencias' },
  { icon: Calendar, href: 'citas' },
  { icon: Bone, href: 'nutricion' },
  { icon: Hotel, href: 'hospedaje' },
  { icon: Table, href: 'tablas' },
  { icon: ChartSpline, href: 'finanzas' },
  { icon: MessageSquareMore, href: 'chats' }
]

export const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    alert('Logged out')
    navigate("/")
  }

  return (
    <aside className="h-ful flex flex-col justify-between items-center gap-5 max-w-min">
      <Logo />
      <NavContainer className="grow">
        {
          navItems.map(item => (
            <li>
              <ButtonWrapper
                key={item.href}
                type="link"
                href={item.href}
                replace
                className={({ isActive }) => isActive ? 'text-highlight bg-bg-secondary' : 'text-fg-primary'}
              >
                <item.icon />
              </ButtonWrapper>
            </li>
          ))
        }
      </NavContainer>
      <div className="w-12 p-1.5 min-h-12 bg-white rounded-[176px]">
        <ul className="flex flex-col gap-2">
          <li>
            <ButtonWrapper
              type="link"
              href="user/profile"
              replace
              className={({ isActive }) => isActive ? 'text-highlight bg-bg-secondary' : 'text-fg-primary'}
            >
              <UserIcon />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper
              type="button"
              className="hover:text-red-600"
              onClick={handleLogOut}
            >
              <LogOutIcon />
            </ButtonWrapper>
          </li >
        </ul >
      </div >
    </aside >
  )
}