import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-compare-periods-dialog',
  templateUrl: './compare-periods-dialog.component.html',
  styleUrls: ['./compare-periods-dialog.component.scss']
})


export class ComparePeriodsDialogComponent implements OnInit {

  label1 = 'Выберите первый месяц';
  label2 = 'Выберите второй месяц';

  compareDates = [
    {year: 2021, month: 1},
    {year: 2021, month: 2}
  ]

  constructor(
    public dialogRef: MatDialogRef<ComparePeriodsDialogComponent>
  ) {
  }

  openDatePicker(picker: any) {
    picker.open();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.compareDates = [
      {year: 2021, month: 8},
      {year: 2021, month: 9}
    ]
    this.dialogRef.close(this.compareDates);
  }

  closeDatePicker($event: any, picker: any) {
    picker.close();
  }

  ngOnInit(): void {
  }

}
