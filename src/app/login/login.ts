import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-login',
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  //Dependency inject router
  constructor(private router: Router,
      private hardcodedAuthenticationServce: HardcodedAuthentication
  ){ }
  
    handleLogin(){
      if(this.hardcodedAuthenticationServce.authenticate(this.username, this.password)){
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
       } else
        this.invalidLogin = true;
  }

}
