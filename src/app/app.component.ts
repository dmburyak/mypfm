import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { Category } from './models/Category';
import { Cost } from './models/Cost';
import { CostsService } from './services/costs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mypfm';
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
    setTimeout(() => console.log(this.costs), 3000);
  }

  constructor(
    private categoriesService: CategoriesService,
    private costsService: CostsService) {
  }
}
