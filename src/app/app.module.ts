import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';

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
import { StatisticHeaderComponent } from './home-page/statistic-page/statistic-header/statistic-header.component';

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
    StatisticHeaderComponent
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
