import { Component, OnInit } from '@angular/core';
import { CostsService } from '../../services/costs.service';
import { Label, SingleDataSet } from 'ng2-charts';
import { Cost } from '../../models/Cost';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

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

    this.costsMap.set('total', 0);
    this.costsMap.forEach((value) => {
      // @ts-ignore
      this.costsMap.set('total', this.costsMap.get('total') + value);
    })

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
    this.costsService.cost$
      .subscribe(result => {
        this.costs = result;
        this.getAllCostTotal();
      });
  }

}
