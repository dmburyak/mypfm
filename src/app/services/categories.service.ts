import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    categoriesSource = new Subject<Category[]>();
    categories$ = this.categoriesSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getAll() {
    this.http.get(`${environment.apiURL}/categories.json.ts`)
      .subscribe(categories => {
        this.categoriesSource.next(categories as Category[]);
      });
  }

}
