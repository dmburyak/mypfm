import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComparePageComponent } from './home-page/compare-page/compare-page.component';
import { StatisticPageComponent } from './home-page/statistic-page/statistic-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {
    path: '', component: HomePageComponent,
    children: [
      {path: 'compare', component: ComparePageComponent},
      {path: '', component: StatisticPageComponent},
    ]
  },
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
