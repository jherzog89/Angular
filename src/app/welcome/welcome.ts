import { Component, OnInit } from '@angular/core';
import {App} from '../app';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome implements OnInit{
  message : string = 'Some welcome message'
  name : string = '';
  //inject dependency: ActivatedRouted
  constructor(private route:ActivatedRoute){

  }

      ngOnInit(){
      this.name = this.route.snapshot.params['name'];
  }

}
