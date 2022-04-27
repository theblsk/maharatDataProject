import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HashDataComponent } from './hash-data/hash-data.component';
import { HoriBarComponent } from './hori-bar/hori-bar.component';
import { FeelingsChartComponent } from './feelings-chart/feelings-chart.component';

const routes: Routes = [
  {path:'',component:DonutChartComponent},
  {path:'bar',component:BarChartComponent},
  {path:'hash', component:HashDataComponent},
  {path:'horiBar', component:HoriBarComponent},
  {path:'feelings', component:FeelingsChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
