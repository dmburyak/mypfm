import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    categoriesSource = new Subject<Category[]>();
    categories$ = this.categoriesSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getAll() {
    this.http.get(`${environment.apiURL}/categories/`)
      .subscribe(categories => {
        this.categoriesSource.next(categories as Category[]);
      });
  }

}
