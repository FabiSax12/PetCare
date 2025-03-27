import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableRowCardComponent } from '../../table-row-card/table-row-card.component';

@Component({
  selector: 'app-pets-table',
  imports: [TableRowCardComponent],
  templateUrl: './pets-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
  .table_container {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
}
  `
})
export class PetsTableComponent { }
