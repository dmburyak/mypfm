import { Component, Input, OnInit } from '@angular/core';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CostsService } from '../../../services/costs.service';
import { Cost } from '../../../models/cost';

@Component({
  selector: 'app-edit-cost',
  templateUrl: './edit-cost.component.html',
  styleUrls: ['./edit-cost.component.scss']
})
export class EditCostComponent implements OnInit {

  @Input() costs: Cost[] = [];
  @Input() year = 0;
  @Input() month = 0;

  constructor(public dialog: MatDialog,
              private costsService: CostsService) {
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
      .subscribe((result: Cost | undefined) => {

          if (!result) return;

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
        }
      )
  }

  newCostsIsEmpty(data: Cost) {
    let checkValue = true;
    if (!data.id) {
      for (let key in data) {
        console.log(key);
        if ( key != 'date' && data[key as keyof Cost] != null) checkValue = false;
      }
    }
    return checkValue;
  }

  ngOnInit(): void {
  }

}
