import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = 1;
  monthNames: string[] = [];
  monthTotal = 0;
  showChart = false;

  // Table
  categoriesTotal: number[] = [];
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
        this.year = newDate.getFullYear();
        this.month = newDate.getMonth();
        this.day = newDate.getDate();
        this.costsService.getMonthCosts(this.year, this.month + 1);
      })

    this.costsService.monthCosts$
      .subscribe(monthCosts => {
        if (!!monthCosts[this.year]) {
          let total = monthCosts[this.year][this.month + 1].total;
          this.costs = monthCosts[this.year][this.month + 1].costs;

          this.pieChartData = [
            total[this.costCategoriesKeys[0]],
            total[this.costCategoriesKeys[1]],
            total[this.costCategoriesKeys[2]],
            total[this.costCategoriesKeys[3]],
            total[this.costCategoriesKeys[4]],
            total[this.costCategoriesKeys[5]],
            total[this.costCategoriesKeys[6]],
          ]
          this.categoriesTotal = <number[]>this.pieChartData;
          this.monthTotal = <number>this.pieChartData.reduce(function (sum, current) {
            return <number>sum + <number>current;
          });
          this.showChart = !!this.monthTotal;
        }
      });
  }

  onRowClick(date: Date) {
    this.editCost.openDialog();
    this.datesService.onNewDateSelected(date);
  }
}
