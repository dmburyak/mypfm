import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Cost } from '../../../../models/cost';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  dateToStart: Date = new Date();
  selectedDay!: number;
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
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (new Date().getMonth() === this.data[2]) {
      this.selectedDate = new Date();
      this.selectedDay = this.selectedDate.getDate();
    } else {
      this.selectedDate = new Date(this.data[1], this.data[2], 1);
      this.selectedDay = 1;
    }
    this.setSelectedDayCost(this.selectedDay);
    this.dateToStart = this.selectedDate;
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
    this.setSelectedDayCost(this.selectedDay);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    const dayCost: Cost = {
      // ...this.data,
      ...this.costForm.value,
      date: this.selectedDate
    }
    console.log(dayCost);
    this.dialogRef.close(dayCost);
  }

  deleteCost() {
    console.log(this.costForm.value.id);
  }
}
