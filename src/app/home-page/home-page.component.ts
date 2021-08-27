import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';
import { CostsService } from '../services/costs.service';
import { Cost } from '../models/cost';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  categories: Category[] = [];
  costs: Cost[] = [];

  ngOnInit(): void {
    this.categoriesService.categories$
      .subscribe(result => {
        this.categories = result;
      })
    this.costsService.cost$
      .subscribe(result => {
        this.costs = result;
      })

    this.categoriesService.getAll();
    this.costsService.getAllCosts();
  }

  constructor(
    private categoriesService: CategoriesService,
    private costsService: CostsService) {
  }

}
