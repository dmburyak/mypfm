import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-header',
  templateUrl: './statistic-header.component.html',
  styleUrls: ['./statistic-header.component.scss']
})
export class StatisticHeaderComponent {

  @Input() year = 0;
  @Input() monthName = '';
  @Input() monthTotal: number = 0;

}
