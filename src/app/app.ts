import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,Footer,Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
} 
