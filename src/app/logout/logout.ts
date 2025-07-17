import { Component } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(private auth:HardcodedAuthentication){

  }

  ngOnInit(){
    this.auth.logout();
  }

}
