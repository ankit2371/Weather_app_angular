import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SharedServicesService } from '../shared/shared-services.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  User = localStorage.getItem('Username');


 

  constructor(private shared : SharedServicesService , private _http : HttpClient ){}


  ngOnInit(){
    this.User = localStorage.getItem('Username');
    this.User = this.shared.GetUsername();
    console.log("User:" , this.User);
    this.Getfav();

    
    
  }

  Latitude : number = 0;
  Longitude : number = 0;
  Cityname : string = "";

  

  Getfav(){
  
    this._http.get<any>("https://localhost:7095/Coordinate/Getbyusername/" + this.User).subscribe(res=>{
      console.log(this.User);
      this.Latitude = res.latitude;
      this.Longitude = res.longitude;
      this.Cityname = res.cityname;
    })
  }


  }


