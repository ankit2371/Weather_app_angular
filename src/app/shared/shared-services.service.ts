import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor() { }
  Username:string ="";
  SetUsername(data : string){
    this.Username = data;
    sessionStorage.setItem('Username' , this.Username);
  }
  GetUsername(){
    localStorage.setItem('User' , JSON.stringify(this.Username));
    return this.Username;
  }
}
