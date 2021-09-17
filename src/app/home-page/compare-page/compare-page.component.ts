import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CostsService } from '../../services/costs.service';
import { DatesService } from '../../services/dates.service';
import { DictionariesService } from '../../services/dictionaries.service';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {

  year1 = 2021;
  year2 = 2021;
  month1 = 2;
  month2 = 3;
  monthName1 = 'январь';
  monthName2 = 'февраль';
  periodName1 = '';
  periodName2 = '';

  months: string[] = [];

  monthCosts1: number[] = [];
  monthCosts2: number[] = [];

  period = 1;

  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];
  showChart = true;

  constructor(
    private costsService: CostsService,
    private datesService: DatesService,
    private dictionaries: DictionariesService) {
  }

  ngOnInit(): void {

    this.monthName1 = this.dictionaries.monthsDic[this.month1 - 1];
    this.monthName2 = this.dictionaries.monthsDic[this.month2 - 1];

    this.periodName1 = `${this.monthName1} ${this.year1}`;
    this.periodName2 = `${this.monthName2} ${this.year2}`;

    this.costsService.monthCosts$
      .subscribe(monthCosts => {

        if (!!monthCosts[this.year1] && !!monthCosts[this.year1][this.month1]) {
          this.monthCosts1 = Object.values(monthCosts[this.year1][this.month1].total);
        }
        if (!!monthCosts[this.year2] && !!monthCosts[this.year2][this.month2]) {
          this.monthCosts2 = Object.values(monthCosts[this.year2][this.month2].total);
        }

        this.barChartData = [
          {data: this.monthCosts1, label: this.periodName1},
          {data: this.monthCosts2, label: this.periodName2}
        ];

        this.showChart = this.existDataForChart();

      })

    let categoriesNames = this.dictionaries.getCategoriesNames();
    this.barChartLabels = <Label[]>[
      categoriesNames[0],
      categoriesNames[1],
      categoriesNames[2],
      categoriesNames[3],
      categoriesNames[4],
      categoriesNames[5],
      categoriesNames[6],
    ];

    this.costsService.getMonthCosts(this.year1, this.month1);
    this.costsService.getMonthCosts(this.year2, this.month2);


  }

  existDataForChart() {
   let firstPeriodCosts = <number[]>this.barChartData[0].data;
   let secondPeriodCosts = <number[]>this.barChartData[1].data;
   if (firstPeriodCosts.reduce((sum, value) => sum + value,0) > 0
   && firstPeriodCosts.reduce((sum, value) => sum + value,0) > 0) {
     return true;
   }
   return false;
  }



}
