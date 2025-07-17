import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';

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
  imports: [DatePipe, CommonModule],
  templateUrl: './list-to-dos.html',
  styleUrl: './list-to-dos.css'
})
export class ListToDos {
  constructor(private router:Router, private todoService:TodoData, private cdr: ChangeDetectorRef){}

  todos: Todo[] = [];
  message:string = '';

  ngOnInit(){
    this.refreshTodos();
  }

  deleteTodo(id:number){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of ${id} todo Successful`
        this.refreshTodos();
        this.cdr.detectChanges();
      }
    )
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos=response;
        this.cdr.detectChanges();
      }
    )
  }
  updateTodo(id:number){
      console.log(`update ${id}`);
      this.router.navigate(['todos', id]);
  }
  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
