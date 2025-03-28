import { createBrowserRouter, Navigate } from 'react-router'
import { DashboardLayout } from './layouts/DashboardLayout'
import { TablesPage } from './pages/TablesPage'
import { SchedulesPage } from './pages/SchedulesPage'
import { EmergenciesPage } from './pages/EmergenciesPage'
import { NutritionPage } from './pages/NutritionPage'
import { HotelPage } from './pages/HotelPage'
import { MedicalConsultation } from './pages/MedicalConsultation'
import { AestheticsPage } from './pages/AestheticsPage'
import { FinancePage } from './pages/FinancePage'
import { UserProfilePage } from './pages/UserProfilePage'
import { OwnersTable } from './components/tables/OwnersTable'
import { VetsTable } from './components/tables/VetsTable'
import { PetsTable } from './components/tables/PetsTable'
import LoginPage from './pages/LoginPage'
import { HomePage } from './pages/HomePage'

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: HomePage
  },
  {
    path: "veterinaria",
    children: [
      {
        path: "login",
        element: <LoginPage type="sucursalUser" />,
      },
      {
        path: ":sucursal",
        children: [
          {
            path: 'dashboard',
            Component: DashboardLayout,
            children: [
              {
                index: true,
                Component: () => <Navigate to="emergencias" />,
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
                    Component: () => <Navigate to="consulta-medica" />
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
                    Component: () => <Navigate to="mascotas" replace />
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
                    Component: PetsTable
                  }
                ]
              }
              ,
              {
                path: "finanzas",
                Component: FinancePage
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
  },
  {
    path: "cliente",
    children: [
      {
        path: "login",
        element: <LoginPage type="client" />,
      },
      {
        path: ":username",
        Component: DashboardLayout,
      }
    ]
  }
], {

})