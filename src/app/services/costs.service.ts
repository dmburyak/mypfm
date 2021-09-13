import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Cost } from '../models/cost';
import { environment } from '../../environments/environment';
import { monthCosts } from '../models/monthCosts';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  categoryKeysDic = [
    'flat',
    'kindergarten',
    'food',
    'dress',
    'medicine',
    'toys',
    'other'
  ];

  allMonthCosts: monthCosts = {};

  monthCostsSource = new BehaviorSubject<monthCosts>(this.allMonthCosts);
  monthCosts$ = this.monthCostsSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getMonthCosts(year: number, month: number): void {
    this.http.get(`${environment.apiURL}/costs/${year}/${month}`)
      .subscribe(costs => {
        this.monthCostsSource.next(
          this.addCostsToAllMonthCosts(year, month, costs as Cost[])
        )
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

  getMonthTotal(costs: Cost[]) {

    let categoryTotalCosts: { [x: string]: number } = {};

    this.categoryKeysDic.forEach(name => {
      let sum = 0;
      costs.forEach(costs => {
        for (let key in costs) {
          if (key === name) {
            sum += <number>costs[key as keyof Cost];
          }
        }
      });
      categoryTotalCosts = {
        ...categoryTotalCosts,
        [name]: sum
      }
    })
    return categoryTotalCosts;
  }

  addCostsToAllMonthCosts(year: number, month: number, result: Cost[]) {

    let total = this.getMonthTotal(result);

    this.allMonthCosts[year] = {
      ...this.allMonthCosts[year],
      [month]: {costs: result, total: total}
    }
    return this.allMonthCosts;
  }

}
