import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedServicesService } from '../shared/shared-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router , private shared : SharedServicesService){};

  
ngOnInit(){
  sessionStorage.getItem('Username');
  const User = sessionStorage.getItem('Username');
  console.log('Username :', this.Username);
  
         
}
  

  Username : string = "";
  Password : string = "";
  

Login(Username : string){
    console.log(Username);
  
    this._http.get<any>("https://localhost:7098/Weatherinformation/Getbyusername/" + Username).subscribe(
      res=>{
        console.log(res);
       if ( res.username == this.Username && res.password == this.Password){
        this.shared.SetUsername( this.Username);
         alert ("Login Successful");
         sessionStorage.setItem('Username' , this.Username);
         
         //this.router.navigateByUrl('/favorites');
       }
       else{
       alert("Invalid Credentials");
      }
    })
  }
}

function key(key: any, arg1: string) {
  throw new Error('Function not implemented.');
}
