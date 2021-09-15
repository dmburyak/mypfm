import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-compare-periods-dialog',
  templateUrl: './compare-periods-dialog.component.html',
  styleUrls: ['./compare-periods-dialog.component.scss']
})


export class ComparePeriodsDialogComponent {

  label1 = 'Выберите первый месяц';
  label2 = 'Выберите второй месяц dsfd fdf';

  constructor(
    public dialogRef: MatDialogRef<ComparePeriodsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  openDatePicker(picker: any) {
    picker.open();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {

  }

  closeDatePicker($event: any, picker: any) {
    picker.close();
  }

}
