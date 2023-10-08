import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NEVER, Observable, observable } from 'rxjs';
import {  Weatherinformation } from 'src/assets/Weatherdata';
import { WeatherapiService } from '../weatherapi.service';
import { ConverttoCelciusPipe } from '../convertto-celcius.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedServicesService } from '../shared/shared-services.service';



@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  details : Weatherinformation = new Weatherinformation;
  detail : Weatherinformation[] = new Array(50);
  constructor( private weatherapiService : WeatherapiService , private _http:HttpClient , private shared : SharedServicesService){ }


   


  latitude : number = 0;
  longitude : number = 0;
  allData : any = [];
  pincode : number = 0;
  city :string ="";
  date : string = "";
  icon : string = "";
  lat : number = 0;
  User : string = "";
 

 
  
  
  weather : string = '';
  day : string ="";


  values:any[]=[];







  

  findTheWeatherByPincode() {
    const user = sessionStorage.getItem('user');
    this.weatherapiService.getthedatabyPincode(this.pincode).subscribe( res =>{
     
        this.values=res.list;
        this.city = res.city.name;
        this.latitude = res.city.coord.lat;
        this.longitude = res.city.coord.lon;
        this.User = this.shared.GetUsername();
       

      }
    );
      
    }

    findTheWeatherByCoordinate() {
      const user = sessionStorage.getItem('user');
      this.User = this.shared.GetUsername();
      console.log("Hii");
      console.log("User:",  this.User);
    
      this.weatherapiService.getthedatabyCoordinates(this.latitude , this.longitude).subscribe(res => {
        this.values=res.list;
        this.city = res.city.name;
        this.lat = res.city.coord.lat;
       
       
       
      //   this.city = res.city.name;
      //   this.date = res.list[0].dt_txt;
      //  this.weather = res.list[0].weather[0].description;
      //   var list1:any;
      //    list1=JSON.stringify(res.list); 
      //  list1 = res.list;
      //   this.values=res;
      //   const date1 = new Date(this.values[0].dt_text);
      //   console.log("date1" , date1);
        console.log("User:",  this.User);
      
      
      });
 }

 addtoFavorites1( latitude : number , longitude : number , city : string , User : string) {
  const user = sessionStorage.getItem('user');
  this.findTheWeatherByPincode();
   latitude = this.latitude;
   longitude = this.longitude;
   city = this.city;
   
   const data = {'latitude' : latitude , 'longitude' : longitude , 'cityname' : city , 'username' : user};
   console.log('username:', User);
   console.log('latitude', latitude);
   console.log('longitude', longitude);
   console.log('cityname', city);

  return this._http.post<any>("https://localhost:7095/Coordinate/Create" , data).subscribe(res=>{
    console.log('Latitude',latitude);
  })

   
  }

  addtoFavorites2( latitude : number , longitude : number , city : string , User : string) {
    const user = sessionStorage.getItem('user');
    this.findTheWeatherByCoordinate();
     latitude = this.latitude;
     longitude = this.longitude;
     city = this.city;
     
     const data = {'latitude' : latitude , 'longitude' : longitude , 'cityname' : city , 'username' : user};
     console.log('username:', User);
     console.log('latitude', latitude);
     console.log('longitude', longitude);
     console.log('cityname', city);
  
    return this._http.post<any>("https://localhost:7095/Coordinate/Create" , data).subscribe(res=>{
      console.log('Latitude',latitude);
    })
  
     
    }
}


    


  








































        

function findTheWeatherByPincode() {
  throw new Error('Function not implemented.');
}
      // for(let i=0 ; i<list1.length; i++){
      // //  debugger
      // // detail.date = "";
      // // console.log("list1(i).dt_txt", list1[i].dt_txt);
      // // console.log("detail.date", detail.date);
      // // detail.temp =  res.city.name;
      // // console.log("res.city.name", res.city.name);
      // // console.log("detail.temp", detail.temp);
      // // detail.temp_max =  1; 
      // // detail.temp_min =  2;
      // // detail.weather =  "test";
      // // detail.weathericon =  "test2";
      // // detail.windspeed =  5;
      // // }
      // // console.log("details",detail);
      // // console.log("res.city.name", res.city.name);
      // // console.log("detail.temp", detail.temp);

      // this.details.date = list1[i].dt_txt;
      // console.log("details.date" ,this.details.date)
      // this.details.city = res.city.name;
      // this.details.temp_min = list1[i].main.temp_min;
      // this.details.temp_max = list1[i].main.temp_max;
      // this.details.weather = list1[i].weather.description;

      // this.details.weathericon = list1[i].weather.icon;
      // this.details.windspeed = list1[i].wind.speed;
      // console.log("details.windspeed" ,this.details.windspeed)
    //   }
    // }
      //)
    

    //    }
    
    // }
    
  


