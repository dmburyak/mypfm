import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cost } from '../../../models/cost';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() categoriesTotal: number[] = [];
  @Input() costs: Cost[] = [];
  @Output() rowClick = new EventEmitter;

  displayedColumns: string[] = [
    'date',
    'flat',
    'kindergarten',
    'food',
    'dress',
    'medicine',
    'toys',
    'other',
    'comment',
  ];

  onRowClick(date: Date) {
    this.rowClick.emit(new Date(date));
  }
}

