import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthentication } from '../service/basic-authentication';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = 'jason';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = signal(false);


  //Dependency inject router
  constructor(private router: Router,
       private basicAuth: BasicAuthentication
  ){ }


  handleBasicAuthLogin(){
    this.basicAuth.executeAuthenticationService(this.username, this.password).subscribe({
      next: (data) => {
      this.invalidLogin.set(false);
      this.router.navigate(['welcome', this.username]);
    },
      error: (error) => {
        console.log(error);
        this.invalidLogin.set(true);
      }
    });

  }

    handleJwtAuthLogin(){
    this.basicAuth.executeJwtAuthenticationService(this.username, this.password).subscribe({
      next: (data) => {
      this.invalidLogin.set(false);
      this.router.navigate(['welcome', this.username]);
    },
      error: (error) => {
        console.log(error);
        this.invalidLogin.set(true);
      }
    });

  }

}
