import { LoaderService } from 'src/app/loader/loader.service';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worldinsights',
  templateUrl: './worldinsights.component.html',
  styleUrls: ['./worldinsights.component.css']
})
export class WorldinsightsComponent implements OnInit {
  public worlddata;

  constructor(private service:DataService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.totalWorldCases();
  }
  insights=[];
  // saleData = [
  //   { name: "Asia", value: 1270359 },
  //   { name: "North America", value: 1275097 },
  //   { name: "South America", value: 1198059 },
  //   { name: "Europe", value: 1570906 },
  //   { name: "Africa", value: 234132 },
  //   { name: "Australia-Oceania", value: 4936 }
  // ];

  totalWorldCases()
  {
    return this.service.getWorldData().subscribe(data=>{
      this.worlddata = data;
      this.insights = [
        { name: "Active Cases", value: (this.worlddata.activeCases + this.worlddata.activeCasesNew )},
        { name: "Recovered", value: this.worlddata.recovered + this.worlddata.recoveredNew},
        { name: "Deaths", value: this.worlddata.deaths + this.worlddata.deathsNew },
        { name: "TotalCases", value: this.worlddata.totalCases }
      ];
      console.warn(this.worlddata);
    });
  }

}
