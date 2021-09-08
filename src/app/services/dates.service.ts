import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  lastDate = new Date();
  dateSource = new BehaviorSubject<Date>(new Date());
  selectedDate$ = this.dateSource.asObservable();

  constructor() {
  }

  onNewDateSelected(date: Date): void {
    if (this.lastDate !== date) {
      this.dateSource.next(date);
    }
  }
}
