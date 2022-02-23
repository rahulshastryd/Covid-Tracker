import { LoaderService } from './../../loader/loader.service';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private service:DataService,public loaderService:LoaderService) { }
  public countrydata:any;

   // Pagination parameters.
   p: number = 1;
   count: number = 10;

  ngOnInit(): void {
    this.totalCountryCases();
  }

  totalCountryCases()
  {
    return this.service.getCountrysData().subscribe(data=>
      {
        this.countrydata = data;
        console.warn(this.countrydata);
      });
  }

}
