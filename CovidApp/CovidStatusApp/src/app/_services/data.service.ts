import { IContinentalData } from './../_interfaces/icontinental-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountriesData } from '../_interfaces/icountries-data';
import { IWorldData } from '../_interfaces/iworld-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrlWorld:string="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
  baseUrlContinents:string="https://corona.lmao.ninja/v2/continents?yesterday=true&sort";
  baseUrlCountry:string="https://corona.lmao.ninja/v2/countries?yesterday&sort"
  constructor(private http:HttpClient) { }

  getWorldData():Observable<IWorldData[]>
  {
    return this.http.get<IWorldData[]>(this.baseUrlWorld);
  }
  getContinentalData(){
    return this.http.get<IContinentalData>(this.baseUrlContinents);
  }

  getCountrysData():Observable<ICountriesData[]>
  {
    return this.http.get<ICountriesData[]>(this.baseUrlCountry);
  }

}
