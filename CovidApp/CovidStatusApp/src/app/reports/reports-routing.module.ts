import { WorldinsightsComponent } from './worldinsights/worldinsights.component';
import { WorldComponent } from './world/world.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { ContinentsComponent } from './continents/continents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'reports',children:[
    {path:'home',component:HomeComponent},
    {path:'world',component:WorldComponent},
    {path:'continents',component:ContinentsComponent},
    {path:'countries',component:CountriesComponent},
    {path:'worldinsights',component:WorldinsightsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
