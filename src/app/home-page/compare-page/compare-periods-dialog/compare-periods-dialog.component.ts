import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CostsService } from '../../../services/costs.service';
import { DatesService } from '../../../services/dates.service';
import { DictionariesService } from '../../../services/dictionaries.service';
import { Router } from '@angular/router';

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

  labels = [
    'Выберите первый месяц',
    'Выберите второй месяц'
  ];

  datesToCompare = [
    {year: 2021, month: 0},
    {year: 2021, month: 0}
  ]
  private monthNames: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<ComparePeriodsDialogComponent>,
    private costsService: CostsService,
    private datesService: DatesService,
    private dictionaries: DictionariesService,
    private router: Router
  ) {
  }

  openDatePicker(picker: any) {
    picker.open();
  }

  closeDatePicker(date: any, picker: any, period: number) {
    picker.close();
    this.datesToCompare[period].year = date.getFullYear();
    this.datesToCompare[period].month = date.getMonth() + 1;

    this.labels[period] = `${this.monthNames[date.getMonth()]} ${this.datesToCompare[period].year} г.`;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dialogRef.close(this.datesToCompare);
    if(this.datesToCompare[0].month > 0 && this.datesToCompare[1].month > 0) {
    this.datesService.onNewDatesToCompareSelected(this.datesToCompare);
    this.router.navigate(['compare']);
    }
  }

  ngOnInit(): void {
    this.monthNames = this.dictionaries.monthsDic;
  }

}
