import { Component, Input } from '@angular/core';
import { Money } from '../../models/money';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
   @Input() public valor: Money = {
    dolar: 0,
    eur: 0,
    peso: 0
  };
}