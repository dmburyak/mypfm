import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-header',
  templateUrl: './statistic-header.component.html',
  styleUrls: ['./statistic-header.component.scss']
})
export class StatisticHeaderComponent {

  @Input() costsMap!: Map<string, number>;
  @Input() month = '';
  @Input() year = 0;

}
