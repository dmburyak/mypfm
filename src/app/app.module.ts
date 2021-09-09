import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticPageComponent } from './home-page/statistic-page/statistic-page.component';
import { ComparePageComponent } from './home-page/compare-page/compare-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { BarChartComponent } from './home-page/compare-page/bar-chart/bar-chart.component';
import { PieChartComponent } from './home-page/statistic-page/pie-chart/pie-chart.component';
import { TableComponent } from './home-page/statistic-page/table/table.component';
import { EditDialogComponent } from './home-page/statistic-page/edit-cost/edit-dialog/edit-dialog.component';
import { SelectPeriodDialogComponent } from './home-page/dialogs/select-period-dialog/select-period-dialog.component';
import { ComparePeriodsDialogComponent } from './home-page/dialogs/compare-periods-dialog/compare-periods-dialog.component';
import { StatisticHeaderComponent } from './home-page/statistic-page/statistic-header/statistic-header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCostComponent } from './home-page/statistic-page/edit-cost/edit-cost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { ConfirmDialogComponent } from './home-page/statistic-page/edit-cost/edit-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChartsModule } from 'ng2-charts';
import { CompareHeaderComponent } from './home-page/compare-page/compare-header/compare-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    StatisticPageComponent,
    ComparePageComponent,
    HeaderComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    EditDialogComponent,
    SelectPeriodDialogComponent,
    ComparePeriodsDialogComponent,
    StatisticHeaderComponent,
    EditCostComponent,
    ConfirmDialogComponent,
    CompareHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
