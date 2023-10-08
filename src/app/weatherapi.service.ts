import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  

  constructor(private _http: HttpClient) { }
  latitude : number = 44.34;
  longitude : number = 10.99;
  Weatherapilink : string = "";

  getthedatabyPincode(pincode:number) : Observable<any>  {
    return this._http.get("https://api.openweathermap.org/data/2.5/forecast?zip="+pincode+",IN&APPID=a6276be613072578dbaaf1399f68dbfe");
  
    }

    getthedatabyCoordinates(latitude:number , longitude:number) : Observable<any>{
     return this._http.get("https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=a6276be613072578dbaaf1399f68dbfe");
    }
}

