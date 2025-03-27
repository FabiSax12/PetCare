import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, RouterOutlet],
  template: `
  <div class="dashboard">
    <app-sidebar></app-sidebar>
    <main class="content-page">
      <router-outlet></router-outlet>
    </main>
  </div>
  `,
  styleUrl: './Dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent { }
