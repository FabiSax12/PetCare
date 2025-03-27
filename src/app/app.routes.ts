import { Routes } from '@angular/router';
import { DashboardComponent } from './layouts/Dashboard/Dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { TablesComponent } from './pages/tables/tables.component';
import { OwnersTableComponent } from './components/data-tables/owners-table/owners-table.component';
import { EmergenciesComponent } from './pages/emergencies/emergencies.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { VetsTableComponent } from './components/data-tables/vets-table/vets-table.component';
import { PetsTableComponent } from './components/data-tables/pets-table/pets-table.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'emergencias',
        component: EmergenciesComponent
      },
      {
        component: ScheduleComponent,
        path: 'citas'
      },
      {
        component: NutritionComponent,
        path: 'nutricion'
      },
      {
        component: HotelComponent,
        path: 'hospedaje'
      },
      {
        component: TablesComponent,
        path: 'tablas',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'mascotas'
          },
          {
            component: OwnersTableComponent,
            path: 'dueños'
          },
          {
            component: VetsTableComponent,
            path: 'veterinarios'
          },
          {
            path: 'mascotas',
            component: PetsTableComponent
          }
        ]
      },
      {
        path: 'user/profile',
        component: UserProfileComponent
      },
      {
        path: 'user/logout',
        component: HomeComponent
      }
    ]
  }
];


