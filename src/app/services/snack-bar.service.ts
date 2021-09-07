import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) {
  }

  openSuccessSnackBar(text: string) {
    this._snackBar.open(text,'',{
      duration: 3000,
      panelClass: 'green-snackbar',
    });
  }

  openFailedSnackBar(text: string) {
    this._snackBar.open(text,'',{
      duration: 3000,
      panelClass: 'red-snackbar',
    });
  }
}
