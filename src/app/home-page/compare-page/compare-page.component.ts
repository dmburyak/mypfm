import { Component, OnInit } from '@angular/core';
import { Cost } from '../../models/cost';
import { CostsService } from '../../services/costs.service';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {

  costs1: Cost[] = [];
  costs2: Cost[] = [];

  constructor(private costsService: CostsService) { }

  ngOnInit(): void {
     this.costsService.getAllCosts(2021, 8)
  }

}
