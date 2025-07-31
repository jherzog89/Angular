import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicAuthentication } from '../service/basic-authentication';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  isUserLoggedIn: boolean = false;

  constructor(public auth:BasicAuthentication){

  }

  ngOnInit(){
   //this.isUserLoggedIn =  this.auth.isUserLoggedIn();
  }

}
