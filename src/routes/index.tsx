import { createBrowserRouter } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { vetDashboardRoutes } from './vetDashboardRoutes'
import { clientDashboardRoutes } from './clientDashboardRoutes'

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: HomePage
  },
  {
    path: "veterinaria",
    children: vetDashboardRoutes
  },
  {
    path: "cliente",
    children: clientDashboardRoutes
  }
], {

})