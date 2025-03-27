import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <button
      class="button"
      // [ngClass]="{
      //   'button--default': color === 'default',
      //   'button--danger': color === 'danger',
      //   'button--warning': color === 'warning',
      // }"
    >
      @if(icon) {
        <lucide-angular-icon [icon]="icon" class="button-icon"></lucide-angular-icon>
      }
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .button--default {
      background-color: #f0f0f0;
      color: #333;
    }

    .button--danger {
      background-color: #f44336;
      color: #fff;
    }

    .button--warning {
      color: var(--fg-red);
    }
  `
})
export class ButtonComponent {
  @Input() color?: 'default' | 'danger' | 'warning' = 'default';
  @Input() icon?: typeof import('lucide-angular').LucideIconNode;
}
