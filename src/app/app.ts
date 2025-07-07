import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Login,FormsModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
} 
