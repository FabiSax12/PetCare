import { DashboardLayout } from '../layouts/DashboardLayout'
import { TablesPage } from '../pages/TablesPage'
import { SchedulesPage } from '../pages/SchedulesPage'
import { EmergenciesPage } from '../pages/EmergenciesPage'
import { NutritionPage } from '../pages/NutritionPage'
import { HotelPage } from '../pages/HotelPage'
import { MedicalConsultation } from '../pages/MedicalConsultation'
import { AestheticsPage } from '../pages/AestheticsPage'
import { FinancePage } from '../pages/FinancePage'
import { UserProfilePage } from '../pages/UserProfilePage'
import { OwnersTable } from '../components/tables/OwnersTable'
import { VetsTable } from '../components/tables/VetsTable'
import { PetsTable } from '../components/tables/PetsTable'
import { ChatContent } from '../components/ChatContent'
import { PetDetailsPage } from '../pages/PetDetailsPage'
import { ProtectedPage } from '../pages/ProtectedPage'
import LoginPage from '../pages/LoginPage'
import { Navigate, RouteObject } from 'react-router'
import { ChatPage } from '../pages/ChatPage'

export const vetDashboardRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage type="vet" />,
  },
  {
    path: ":branch",
    Component: ProtectedPage,
    children: [
      {
        path: 'dashboard',
        Component: DashboardLayout,
        children: [
          {
            index: true,
            element: <Navigate to="emergencias" />
          },
          {
            path: 'emergencias',
            Component: EmergenciesPage,
          },
          {
            path: 'citas',
            Component: SchedulesPage,
            children: [
              {
                index: true,
                element: <Navigate to="consulta-medica" />
              },
              {
                path: "consulta-medica",
                Component: MedicalConsultation
              },
              {
                path: "estetica",
                Component: AestheticsPage
              }
            ]
          },
          {
            path: 'nutricion',
            Component: NutritionPage
          },
          {
            path: 'hospedaje',
            Component: HotelPage
          },
          {
            path: 'tablas',
            Component: TablesPage,
            children: [
              {
                index: true,
                element: <Navigate to="mascotas" />
              },
              {
                path: 'duenos',
                Component: OwnersTable
              },
              {
                path: 'veterinarios',
                Component: VetsTable
              },
              {
                path: 'mascotas',
                Component: PetsTable,
              },
              {
                path: "mascotas/:petId",
                Component: PetDetailsPage
              }
            ]
          }
          ,
          {
            path: "finanzas",
            Component: FinancePage
          },
          {
            path: "chats",
            element: <ChatPage side='vetSide' />,
            children: [
              {
                path: ":chatUser",
                Component: ChatContent
              }
            ]
          },
          {
            path: 'user/profile',
            Component: UserProfilePage
          }
        ]
      }
    ]
  },
]