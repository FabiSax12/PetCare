import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vets-table',
  imports: [],
  templateUrl: './vets-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VetsTableComponent { }
