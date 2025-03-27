import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-row-card',
  imports: [],
  templateUrl: './table-row-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .table-row_card {
      height: 100px;
      padding: 16px;
      border-radius: 8px;
      background-color: var(--bg-primary);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `
})
export class TableRowCardComponent { }
