import { InterceptorService } from './../loader/interceptor.service';
import { DataService } from './../_services/data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import{ MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReportsRoutingModule } from './reports-routing.module';
import { ContinentsComponent } from './continents/continents.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WorldinsightsComponent } from './worldinsights/worldinsights.component';


@NgModule({
  declarations: [
    ContinentsComponent,
    CountriesComponent,
    HomeComponent,
    WorldComponent,
    WorldinsightsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [DataService,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ]

})
export class ReportsModule { }
