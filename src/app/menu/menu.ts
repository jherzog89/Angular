import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  isUserLoggedIn: boolean = false;

  constructor(public auth:HardcodedAuthentication){

  }

  ngOnInit(){
   //this.isUserLoggedIn =  this.auth.isUserLoggedIn();
  }

}
