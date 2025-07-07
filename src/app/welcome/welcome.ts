import { Component, OnInit } from '@angular/core';
import {App} from '../app';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome implements OnInit{
  message : string = 'Some welcome message'

  constructor(){

  }

  ngOnInit(){
    this.message = 'test';
  }

}
