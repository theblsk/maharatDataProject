import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HashDataComponent } from './hash-data/hash-data.component';

const routes: Routes = [
  {path:'',component:DonutChartComponent},
  {path:'bar',component:BarChartComponent},
  {path:'hash', component:HashDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
