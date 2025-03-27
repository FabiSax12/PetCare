import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { LucideAngularModule, AArrowDown } from "lucide-angular";

@Component({
  selector: 'app-sidebar-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  template: `
    <button type="button" class="navbar_item" (click)="handleClick()">
      <lucide-angular [img]="icon"></lucide-angular>
    </button>
  `
})
export class SidebarButtonComponent {
  @Input() icon!: typeof AArrowDown;
  @Output() clicked = new EventEmitter<void>();

  constructor() {
    console.log(typeof this.icon);
  }

  handleClick(): void {
    this.clicked.emit();
  }
}
