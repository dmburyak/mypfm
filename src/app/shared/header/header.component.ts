import { Component, OnInit } from '@angular/core';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedDate: Date = new Date();

  constructor(private datesService: DatesService) {
  }

  ngOnInit(): void {
    this.datesService.selectedDate$
      .subscribe(newDate => {
        this.selectedDate = newDate;
      })
  }

  openDatePicker(picker: any) {
    picker.open();
  }

  closeDatePicker(selectedDate: any, picker: any) {
    this.datesService.onNewDateSelected(selectedDate);
    picker.close();
  }

}
