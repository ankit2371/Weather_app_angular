import { Component } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private weatherapiService : WeatherapiService ){ }

  
  details : number = 8;

 



 


  imgUrl : string = "https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg"
  ShowImage: boolean = false;

  ToggleImage() : void{
    this.ShowImage = !this.ShowImage;
  }

 
}


