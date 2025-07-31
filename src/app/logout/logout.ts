import { Component } from '@angular/core';
import { BasicAuthentication } from '../service/basic-authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(private auth:BasicAuthentication){

  }

  ngOnInit(){
    this.auth.logout();
  }

}
