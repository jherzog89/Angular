import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-to-dos',
  imports: [],
  templateUrl: './list-to-dos.html',
  styleUrl: './list-to-dos.css'
})
export class ListToDos {
  todos=[
    {id:1,description: 'Learn to Dance'},
    {id:2,description: 'Another list item'},
    {id:3,description: 'a third list item'},
  ]
}
