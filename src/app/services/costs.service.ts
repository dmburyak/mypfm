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
  cost$ = this.costsSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllCosts(): void {
    this.http.get(`${environment.apiURL}/costs.json.ts`)
      .subscribe(result => {
        this.costsSource.next(result as Cost[]);
      })
  }

}
