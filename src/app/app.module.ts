import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IntroComponent } from './intro/intro.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { StatsComponentComponent } from './stats-component/stats-component.component';
import { NgChartsModule } from 'ng2-charts';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HashDataComponent } from './hash-data/hash-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    MainPageComponent,
    IntroComponent,
    TimelineComponent,
    TimelineItemComponent,
    StatsComponentComponent,
    DonutChartComponent,
    InterviewsComponent,
    BarChartComponent,
    HashDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
