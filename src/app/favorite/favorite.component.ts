import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { favorite_template } from 'src/assets/favorite_template';
import { SharedServicesService } from '../shared/shared-services.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  

  

  constructor(private shared : SharedServicesService , private _http : HttpClient){}


  ngOnInit(){
    //const User = sessionStorage.getItem('user');
    // console.log('user' , this.User);
    // this.User = this.shared.GetUsername();
    this.Getfav();
    
    
  }

  Latitude : number = 0;
  Longitude : number = 0;
  Cityname : string = "";
  fav_temp : favorite_template[] = [];
  
  

  

  Getfav(){
    
   const user = sessionStorage.getItem('user');
   console.log('user' , user);
       this._http.get<any>("https://localhost:7095/Coordinate/Getbyusername/" + user).subscribe(res=>{
      
        console.log('res' ,res);
      
      this.fav_temp = res;
      console.log('fav_temp' ,this.fav_temp);
       })


  }
}

