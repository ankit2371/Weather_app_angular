import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  signupForm!: FormGroup

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Username: [''],
      Password: [''],
      Name: [''],
      EmailId: ['']

    })
  }

  signUp() {
    this._http.post<any>("https://localhost:7098/Weatherinformation/Create", this.signupForm.value).subscribe(res => {
      alert("Registration successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Something is Wrong")
    })
  }

  
}
