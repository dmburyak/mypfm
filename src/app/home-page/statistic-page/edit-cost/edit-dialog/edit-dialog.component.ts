import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Cost } from '../../../../models/cost';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatesService } from '../../../../services/dates.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  dateToStart: Date = new Date();
  selectedDay!: number;
  selectedMonth!: number;
  selectedYear!: number;
  selectedDate!: Date;
  selectedDayCost: Cost | undefined;

  events: string[] = [];

  costForm = this.fb.group({
    id: null,
    date: null,
    flat: null,
    kindergarten: null,
    food: null,
    dress: null,
    medicine: null,
    toys: null,
    other: null,
    comment: null
  });

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Cost[], number, number],
    private fb: FormBuilder,
    private datesService: DatesService) {
  }

  ngOnInit(): void {
    this.datesService.selectedDate$
      .subscribe(newDate => {
        this.selectedDate = newDate;
        this.selectedDay = newDate.getDate();
        this.setSelectedDayCost(this.selectedDay);
        this.dateToStart = this.selectedDate;
      })
  }

  setSelectedDayCost(selectedDay: number) {
    this.selectedDayCost = this.data[0].find(cost => new Date(cost.date).getDate() === selectedDay);
    if (!!this.selectedDayCost) {
      this.costForm.patchValue(this.selectedDayCost);
    } else {
      this.costForm.reset();
    }
  }

  newDateSelected(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value!;
    this.selectedDay = this.selectedDate.getDate();
    this.selectedYear = this.selectedDate.getFullYear();
    // this.setSelectedDayCost(this.selectedDay);

    this.datesService.onNewDateSelected(this.selectedDate);
  }

  onNoClick(): void {
    // this.resetSelectedlDate();
    this.dialogRef.close();
  }

  onSaveClick() {
    const dayCost: Cost = {
      ...this.costForm.value,
      date: this.selectedDate
    }
    // this.resetSelectedlDate();
    this.dialogRef.close(dayCost);
  }

  onDeleteClick() {
    // this.resetSelectedlDate();
    if (this.costForm.value.id) {
      this.dialogRef.close(this.costForm.value.id);
    }
  }

  resetSelectedlDate() {
    if (new Date().getMonth() === this.selectedDate.getMonth()) {
      this.datesService.onNewDateSelected(new Date());
    }
  }

}
