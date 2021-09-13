import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Cost } from '../../models/cost';
import { CostsService } from '../../services/costs.service';
import { DatesService } from '../../services/dates.service';
import { EditCostComponent } from './edit-cost/edit-cost.component';
import { DictionariesService } from '../../services/dictionaries.service';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  @Input() categories = [];
  @ViewChild(EditCostComponent) editCost!: EditCostComponent;

  year = 0;
  month = 0;
  day = 1;
  monthNames: string[] = [];

  // Table
  costsMap: Map<string, number> = new Map();
  costs: Cost[] = [];
  costCategoriesKeys: string[] = [];

  // Pie chart
  public pieChartData: SingleDataSet = [];
  public pieChartLabels: Label[] = [];

  constructor(
    private costsService: CostsService,
    private datesService: DatesService,
    private dictionaries: DictionariesService) {
  }

  ngOnInit(): void {
    this.pieChartLabels = this.dictionaries.getCategoriesNames();
    this.monthNames = this.dictionaries.monthsDic;

    this.costCategoriesKeys = this.dictionaries.getCategoriesKeys();

    this.datesService.selectedDate$
      .subscribe(newDate => {
        this.month = newDate.getMonth();
        this.year = newDate.getFullYear();
        this.day = newDate.getDate();
        this.costsService.getMonthCosts(this.year, this.month + 1);
      })

    this.costsService.costs$
      .subscribe(result => {
        this.costs = result;
        this.getAllCostTotal();
      });

    // this.costsService.addCostsToAllMonthCosts(2021,1);
  }

  getAllCostTotal() {

    this.costCategoriesKeys.forEach(name => {
      let sum = 0;
      this.costs.forEach(cost => {
          sum += <number>cost[name as keyof Cost];
        }
      )
      this.costsMap.set(name, sum);
    });

    this.costsMap.set('total', 0);
    let totalSum = 0;
    this.costsMap.forEach((value) => {
      totalSum += value;
    })
    this.costsMap.set('total', totalSum);

    this.pieChartData = [
      this.costsMap.get(this.costCategoriesKeys[0]),
      this.costsMap.get(this.costCategoriesKeys[1]),
      this.costsMap.get(this.costCategoriesKeys[2]),
      this.costsMap.get(this.costCategoriesKeys[3]),
      this.costsMap.get(this.costCategoriesKeys[4]),
      this.costsMap.get(this.costCategoriesKeys[5]),
      this.costsMap.get(this.costCategoriesKeys[6]),
    ]

  }

  onRowClick(date: Date) {
    this.editCost.openDialog();
    this.datesService.onNewDateSelected(date);
  }
}
