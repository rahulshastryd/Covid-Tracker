import { LoaderService } from './../../loader/loader.service';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  public worlddata;

  dangerClass:boolean = false; 

  constructor(private service:DataService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.totalWorldCases();
  }

  totalWorldCases()
  {
    return this.service.getWorldData().subscribe(data=>{
      this.worlddata = data;
      console.warn(this.worlddata);
    });
  }
}
