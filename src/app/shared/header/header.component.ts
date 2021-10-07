import { Component, OnInit } from '@angular/core';
import { DatesService } from '../../services/dates.service';
import { ComparePeriodsDialogComponent } from '../../home-page/compare-page/compare-periods-dialog/compare-periods-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CostsService } from '../../services/costs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedDate: Date = new Date();

  constructor(
    private datesService: DatesService,
    private dialog: MatDialog,
    private router: Router
    ) {
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
    this.router.navigate(['']);
    picker.close();
  }

  openComparePeriodsDialog(): void {
    const dialogRef = this.dialog.open(ComparePeriodsDialogComponent, {
      panelClass: 'compare-modalbox'
    });

    dialogRef.afterClosed()
      .subscribe(compareDates => {

        // console.log(compareDates);
      });
  }


}
