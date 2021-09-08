import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Cost } from '../models/cost';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  costsSource = new BehaviorSubject<Cost[]>([]);
  costs$ = this.costsSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllCosts(year: number, month: number): void {
    this.http.get(`${environment.apiURL}/costs/${year}/${month}`)
      .subscribe(result => {
        this.costsSource.next(result as Cost[]);
      })
  }

  addCost(cost: Cost) {
    return this.http.post(`${environment.apiURL}/costs/add`, cost);
  }

  updateCost(id: number, cost: Cost) {
    return this.http.put(`${environment.apiURL}/costs/${id}/update`, cost);
  }

  deleteCost(id: number) {
    return this.http.delete(`${environment.apiURL}/costs/${id}/delete`);
  }
}
