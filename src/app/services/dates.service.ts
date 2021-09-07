import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  dateSource = new BehaviorSubject<Date>(new Date());
  selectedDate$ = this.dateSource.asObservable();

  constructor() { }

  onNewDateSelected(date: Date): void {
    this.dateSource.next(date);
    console.log(date);
  }
}
