import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  lastDate = new Date();
  dateSource = new BehaviorSubject<Date>(new Date());
  selectedDate$ = this.dateSource.asObservable();

  defaultDatesToCompare = [
      {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
      },
      {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
      },
  ]
  datesToCompareSource = new BehaviorSubject(this.defaultDatesToCompare);
  datesToCompare$ = this.datesToCompareSource.asObservable();

  constructor() {
  }

  onNewDateSelected(date: Date): void {
    if (this.lastDate !== date) {
      this.dateSource.next(date);
    }
  }

onNewDatesToCompareSelected(datesToCompare: { year: number; month: number; }[]) {
    this.datesToCompareSource.next(datesToCompare)
}

}
