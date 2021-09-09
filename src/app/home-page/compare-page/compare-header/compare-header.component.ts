import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-header',
  templateUrl: './compare-header.component.html',
  styleUrls: ['./compare-header.component.scss']
})
export class CompareHeaderComponent implements OnInit {

  @Input() periodName1 = '';
  @Input() periodName2 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
