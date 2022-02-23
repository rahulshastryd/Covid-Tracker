import { IContinentalData } from './../../_interfaces/icontinental-data';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  public continentaldata: any;
  insights=[];
  // Pagination parameters.
  p: number = 1;
  count: number = 5;

  constructor(private service: DataService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.totalContinentalCases()
  }

  totalContinentalCases() {
    return this.service.getContinentalData().subscribe(data => {
      this.continentaldata = data;
      console.warn(this.continentaldata);
    });
  }


}
