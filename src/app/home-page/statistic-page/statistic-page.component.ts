import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Cost } from '../../models/cost';
import { CostsService } from '../../services/costs.service';
import { DatesService } from '../../services/dates.service';
import { TableComponent } from './table/table.component';
import { EditCostComponent } from './edit-cost/edit-cost.component';
import { DataService } from '../../services/data.service';

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
  months: string[] = [];
  day = 1;

  // Table
  costsMap: Map<string, number> = new Map();
  costs: Cost[] = [];
  costColumns: string[] = [
    'flat',
    'kindergarten',
    'food',
    'dress',
    'medicine',
    'toys',
    'other'
  ];

  // Pie chart
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      align: 'start'
    }
  };
  public pieChartLabels: Label[] = [];

  constructor(
    private costsService: CostsService,
    private datesService: DatesService,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.pieChartLabels = this.dataService.categories;
    this.months = this.dataService.months;

    this.datesService.selectedDate$
      .subscribe(newDate => {
        this.month = newDate.getMonth();
        this.year = newDate.getFullYear();
        this.day = newDate.getDate();
        this.costsService.getAllCosts(this.year, this.month + 1);
      })

    this.costsService.costs$
      .subscribe(result => {
        this.costs = result;
        this.getAllCostTotal();
      });

  }

  getAllCostTotal() {

    this.costColumns.forEach(name => {
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
      this.costsMap.get('flat'),
      this.costsMap.get('kindergarten'),
      this.costsMap.get('food'),
      this.costsMap.get('dress'),
      this.costsMap.get('medicine'),
      this.costsMap.get('toys'),
      this.costsMap.get('other'),
    ]

  }

  onRowClick(date: Date) {
    this.editCost.openDialog();
    this.datesService.onNewDateSelected(date);
  }
}
