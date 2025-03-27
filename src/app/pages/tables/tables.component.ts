import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarItemComponent } from '../../components/sidebar item/sidebar item.component';
import { Users, Stethoscope, PawPrint } from 'lucide-angular';

@Component({
  selector: 'app-tables',
  imports: [RouterOutlet, SidebarItemComponent],
  templateUrl: './tables.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    sidebar_main-nav ul {
      display: flex;
      flex-direction: row;
  }
  `
})
export class TablesComponent {
  tabs = [
    { path: 'mascotas', icon: PawPrint },
    { path: 'dueños', icon: Users },
    { path: 'veterinarios', icon: Stethoscope },
  ]
}
