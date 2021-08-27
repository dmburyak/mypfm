import { Component, Input } from '@angular/core';
import { Cost } from '../../../models/cost';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() costsMap!: Map<string, number>;
  @Input() costs: Cost[] = [];

  displayedColumns: string[] = [
    'date',
    'flat',
    'food',
    'dress',
    'medicine',
    'toys',
    'other',
    'comment',
  ];


}

