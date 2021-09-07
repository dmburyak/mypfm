import { Component, Input, OnInit } from '@angular/core';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CostsService } from '../../../services/costs.service';
import { Cost } from '../../../models/cost';
import { DatesService } from '../../../services/dates.service';
import { SnackBarService } from '../../../services/snack-bar.service';

@Component({
  selector: 'app-edit-cost',
  templateUrl: './edit-cost.component.html',
  styleUrls: ['./edit-cost.component.scss']
})
export class EditCostComponent implements OnInit {

  @Input() costs: Cost[] = [];
  @Input() year = 0;
  @Input() month = 0;

  selectedDate!: Date;
  successUpdateText = 'Данные успешно обновлены!';
  successAddText = 'Данные успешно добавлены!';
  successDeleteText = 'Данные успешно удалены!';

  failedText = 'Что-то пошло не так. Повторите операцию позже!';

  constructor(public dialog: MatDialog,
              private costsService: CostsService,
              private datesService: DatesService,
              private snackBarService: SnackBarService) {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '525px',
      data: this.costs,
    });

    dialogRef.afterClosed()
      .subscribe((result: any) => {

          this.resetSelectedDate();

          switch (typeof result) {
            case 'undefined':
              break;

            case 'object':
              if (!!result.id) {
                this.costsService.updateCost(result.id, result)
                  .subscribe(() => {
                      this.snackBarService.openSuccessSnackBar(this.successUpdateText);
                      this.costsService.getAllCosts(this.year, this.month + 1);
                    },
                    (message) => {
                      this.snackBarService.openFailedSnackBar(this.failedText);
                      console.log(message);
                    });
              } else if (this.newCostsIsEmpty(result)) {
                return;
              } else {
                this.costsService.addCost(result)
                  .subscribe(() => {
                      this.snackBarService.openSuccessSnackBar(this.successAddText);
                      this.costsService.getAllCosts(this.year, this.month + 1);
                    },
                    (message) => {
                      this.snackBarService.openFailedSnackBar(this.failedText);
                      console.log(message);
                    });
              }
              break;

            case 'number':
              this.costsService.deleteCost(result)
                .subscribe(() => {
                    this.snackBarService.openSuccessSnackBar(this.successDeleteText);
                    this.costsService.getAllCosts(this.year, this.month + 1);
                  },
                  (message) => {
                    this.snackBarService.openFailedSnackBar(this.failedText);
                    console.log(message);
                  });
          }
        }
      )
  }

  newCostsIsEmpty(data: Cost) {
    let noValues = true;
    if (!data.id) {
      for (let key in data) {
        if (key != 'date' && data[key as keyof Cost] != null) noValues = false;
      }
    }
    return noValues;
  }

  resetSelectedDate() {
    if (new Date().getMonth() === this.selectedDate.getMonth()) {
      this.datesService.onNewDateSelected(new Date());
    }
  }

  ngOnInit(): void {
    this.datesService.selectedDate$
      .subscribe(newDate => {
        this.selectedDate = newDate;
      })
  }

}
