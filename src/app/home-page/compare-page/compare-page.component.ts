import { Component, OnInit } from '@angular/core';
import { Cost } from '../../models/cost';
import { CostsService } from '../../services/costs.service';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {

  monthName1 = 'январь';
  monthName2 = 'февраль';
  year1 = 2021;
  year2 = 2021;

  periodName1 = `${this.monthName1} ${this.year1}`;
  periodName2 = `${this.monthName2} ${this.year2}`;

  months: string[] = [];

  twoMonthsCosts: { one: Cost[], two: Cost[] } = {one: [], two: []};
  period = 1;

  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];

  constructor(
    private costsService: CostsService) {
  }

  ngOnInit(): void {
    // this.months = this.dicService.monthsDic;

    this.barChartData = [
      { data: [65, 59, 20, 81, 56, 55, 40], label: this.periodName1 },
      { data: [28, 35, 40, 19, 86, 27, 90], label: this.periodName2 }
    ];

  // this.barChartLabels = this.dicService.categoryNamesDic;

    this.costsService.costs$
      .subscribe(costs => {
        if (this.period === 1) {
          this.twoMonthsCosts.one = costs;
          this.period = 2;
        } else {
          this.twoMonthsCosts.two = costs;
          this.period = 1;
        }
      })
    this.costsService.getMonthCosts(2021, 8);
    this.costsService.getMonthCosts(2021, 9);

    // setTimeout(() => console.log(this.twoMonthsCosts), 3000)
  }


}
