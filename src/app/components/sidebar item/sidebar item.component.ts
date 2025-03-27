import { ChangeDetectionStrategy, Component, Input, Type } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AArrowDown, LucideAngularModule, ArrowDownUp } from "lucide-angular";

@Component({
  selector: 'app-sidebar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <a [routerLink]="path" routerLinkActive="active" class="navbar_item">
      <lucide-angular [img]="icon"></lucide-angular>
    </a>
  `
})
export class SidebarItemComponent {
  @Input() icon!: typeof AArrowDown;
  @Input() path: string = '/';



  constructor() {
    console.log(typeof this.icon)
  }
}
