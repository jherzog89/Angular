import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){
  }
}

@Component({
  selector: 'app-list-to-dos',
  imports: [DatePipe],
  templateUrl: './list-to-dos.html',
  styleUrl: './list-to-dos.css'
})
export class ListToDos {
  todos=[
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Another list item', false, new Date()),
    new Todo(3, 'a third list item', true, new Date())
  ]
}
