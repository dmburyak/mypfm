import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit{

  @Input() pieChartData!: SingleDataSet;
  @Input() pieChartType!: ChartType;
  @Input() pieChartLegend!: boolean;
  @Input() pieChartPlugins = [];
  @Input() pieChartOptions!: ChartOptions;
  @Input() pieChartLabels!: Label[];
  @Input() showChart = false;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}

}
