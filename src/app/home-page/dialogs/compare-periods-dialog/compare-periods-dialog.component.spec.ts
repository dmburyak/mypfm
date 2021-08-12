import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePeriodsDialogComponent } from './compare-periods-dialog.component';

describe('ComparePeriodsDialogComponent', () => {
  let component: ComparePeriodsDialogComponent;
  let fixture: ComponentFixture<ComparePeriodsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparePeriodsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePeriodsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
