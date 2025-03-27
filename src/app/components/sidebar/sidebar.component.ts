import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar item/sidebar item.component';
import { LucideAngularModule, BriefcaseMedical, LogOut, User, Calendar, Bone, Hotel, Table } from "lucide-angular"
import { SidebarButtonComponent } from '../sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItemComponent, LucideAngularModule, SidebarButtonComponent],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  LogOutIcon = LogOut;
  UserIcon = User;

  navItems = [
    { icon: BriefcaseMedical, href: '/dashboard/emergencias' },
    // { icon: PawPrint, href: '/dashboard/pets' },
    { icon: Calendar, href: '/dashboard/citas' },
    { icon: Bone, href: '/dashboard/nutricion' },
    { icon: Hotel, href: '/dashboard/hospedaje' },
    { icon: Table, href: '/dashboard/tablas' }
  ];

  logout() {
    alert('Logout');
  }
}
