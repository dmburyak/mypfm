import { Component, Input, OnInit } from '@angular/core';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CostsService } from '../../../services/costs.service';
import { Cost } from '../../../models/cost';
import { DatesService } from '../../../services/dates.service';

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

  constructor(public dialog: MatDialog,
              private costsService: CostsService,
              private datesService: DatesService) {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '525px',
      data: [
        this.costs,
        this.year,
        this.month],
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
                    this.costsService.getAllCosts(this.year, this.month + 1);
                  });
              } else if (this.newCostsIsEmpty(result)) {
                return;
              } else {
                this.costsService.addCost(result)
                  .subscribe(() => {
                    this.costsService.getAllCosts(this.year, this.month + 1);
                  });
              }
              break;

            case 'number':
              this.costsService.deleteCost(result)
                .subscribe(() => {
                  this.costsService.getAllCosts(this.year, this.month + 1);
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
