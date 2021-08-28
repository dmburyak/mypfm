import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditFormData } from '../../../../models/editFormData';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  costForm = this.fb.group({
    flat: [''],
    kindergarten: [''],
    food: [''],
    dress: [''],
    medicine: [''],
    toys: [''],
    other: [''],
    comment: [''],
    });

  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditFormData,
    private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
