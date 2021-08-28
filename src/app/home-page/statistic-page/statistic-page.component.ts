import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Cost } from '../../models/cost';
import { CostsService } from '../../services/costs.service';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ]

  month = '';
  year = 0;

  // Table
  costsMap: Map<string, number> = new Map();
  costs: Cost[] = [];
  costColumns: string[] = [
    'flat',
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
  public pieChartLabels: Label[] = [
    'Квартира',
    'Еда',
    'Одежда',
    'Медицина',
    ['Игрушки и', 'развлечения'],
    'Другое'
  ];

  constructor(private costsService: CostsService) {
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

    let totalSum = 0;
    this.costsMap.forEach((value) => {
      totalSum += value;
    })
    this.costsMap.set('total', totalSum);

    this.pieChartData = [
      this.costsMap.get('flat'),
      this.costsMap.get('food'),
      this.costsMap.get('dress'),
      this.costsMap.get('medicine'),
      this.costsMap.get('toys'),
      this.costsMap.get('other'),
    ]

  }

  ngOnInit(): void {
    let currentDate = new Date();
    this.month = this.months[currentDate.getMonth()];
    this.year = currentDate.getFullYear();

    this.costsService.cost$
      .subscribe(result => {
        this.costs = result;
        this.getAllCostTotal();
      });
  }

}
