import { Component, Input } from '@angular/core';
import { Money } from '../../models/money';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public valor!: Money;
}
