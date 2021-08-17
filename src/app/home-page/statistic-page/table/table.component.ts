import { Component, OnInit } from '@angular/core';
import { Cost } from '../../../models/Cost';
import { CostsService } from '../../../services/costs.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // displayedColumns: string[] = ['item', 'cost'];
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

  costColumns: string[] = [
    'flat',
    'food',
    'dress',
    'medicine',
    'toys',
    'other'
  ];

  costs: Cost[] = [];

  constructor(private costsService: CostsService) {
  }

  getAllCostTotal() {
    const total: number[] = [];
    this.costColumns.forEach(name => {
      let sum = 0;
      this.costs.forEach(cost => {
          sum = sum + <number>cost[name as keyof Cost];
        }
      )
      total.push(sum);

    })
    console.log(total);

  }

  getTotalFlat() {
    return this.costs.map(t => t.flat).reduce((acc, value) => acc + value);
  }

  getTotalFood() {
    return this.costs.map(t => t.food).reduce((acc, value) => acc + value);
  }

  getTotalDress() {
    return this.costs.map(t => t.dress).reduce((acc, value) => acc + value);
  }

  getTotalMedicine() {
    return this.costs.map(t => t.medicine).reduce((acc, value) => acc + value);
  }

  getTotalToys() {
    return this.costs.map(t => t.toys).reduce((acc, value) => acc + value);
  }

  getTotalOther() {
    return this.costs.map(t => t.other).reduce((acc, value) => acc + value);
  }


  ngOnInit(): void {
    this.costsService.cost$
      .subscribe(result => {
        this.costs = result;
        this.getAllCostTotal();
      });
  }
}

