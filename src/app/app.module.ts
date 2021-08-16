import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { EditDialogComponent } from './home-page/dialogs/edit-dialog/edit-dialog.component';
import { SelectPeriodDialogComponent } from './home-page/dialogs/select-period-dialog/select-period-dialog.component';
import { ComparePeriodsDialogComponent } from './home-page/dialogs/compare-periods-dialog/compare-periods-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ComparePeriodsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
