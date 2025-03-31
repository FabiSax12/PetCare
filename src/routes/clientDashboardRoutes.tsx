import LoginPage from '../pages/LoginPage'
import { ChatPage } from '../pages/ChatPage'
import { ChatContent } from '../components/ChatContent'
import { ProtectedPage } from '../pages/ProtectedPage'
import { ClientDashboardLayout } from '../layouts/ClientDashboardLayout'
import { ClientProfilePage } from '../pages/ClientProfilePage'
import { RouteObject } from 'react-router'
import { NotificationsPage } from '../pages/NotificationsPage'
import { ClientPetsPage } from '../pages/ClientPetsPage'

export const clientDashboardRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage type="client" />,
  },
  {
    path: ":username",
    Component: ProtectedPage,
    children: [
      {
        path: "dashboard",
        Component: ClientDashboardLayout,
        children: [
          {
            path: "notificaciones",
            Component: NotificationsPage
          },
          {
            path: "mascotas",
            Component: ClientPetsPage
          },
          {
            path: "chats",
            element: <ChatPage side='clientSide' />,
            children: [
              {
                path: ":chatUser",
                Component: ChatContent
              }
            ]
          },
          {
            path: "user/profile",
            Component: ClientProfilePage
          },
        ]
      }
    ]
  }
]