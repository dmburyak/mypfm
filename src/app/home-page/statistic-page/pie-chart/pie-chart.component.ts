import { Component, OnInit } from '@angular/core';
import { Cost } from '../../../models/Cost';
import { CostsService } from '../../../services/costs.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  costs: Cost[] = [];

  constructor(private costsService: CostsService) {
  }

  ngOnInit(): void {
    this.costsService.cost$
      .subscribe(result => this.costs = result);
  }

}
