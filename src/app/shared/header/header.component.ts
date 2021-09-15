import { Component, OnInit } from '@angular/core';
import { DatesService } from '../../services/dates.service';
import { ComparePeriodsDialogComponent } from '../../home-page/compare-page/compare-periods-dialog/compare-periods-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedDate: Date = new Date();

  constructor(
    private datesService: DatesService,
    private dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ComparePeriodsDialogComponent, {
      data: {name: 'aaa', animal: 'bbb'},
      panelClass: 'compare-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
