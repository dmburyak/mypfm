import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPeriodDialogComponent } from './select-period-dialog.component';

describe('SelectPeriodDialogComponent', () => {
  let component: SelectPeriodDialogComponent;
  let fixture: ComponentFixture<SelectPeriodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPeriodDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPeriodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
