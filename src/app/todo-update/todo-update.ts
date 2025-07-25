import { ChangeDetectorRef, Component } from '@angular/core';
import { Todo } from '../list-to-dos/list-to-dos';
import { TodoData } from '../service/data/todo-data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-update',
  imports: [FormsModule, DatePipe],
  templateUrl: './todo-update.html',
  styleUrl: './todo-update.css'
})
export class TodoUpdate {
id:number;
todo: Todo;

constructor(private router:Router, private route:ActivatedRoute, 
            private todoService:TodoData, private cdr: ChangeDetectorRef){
      this.id = this.route.snapshot.params['id'];
      this.todo = new Todo(this.id, '', false,new Date());

}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    if(this.id != -1){
      this.todoService.retrieveTodo('in28minutes', this.id).subscribe(
        data => {
            this.todo = data;
            this.cdr.detectChanges();
      })
    }
  }
  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('in28minutes', this.todo).subscribe(
         data =>{
          this.router.navigate(['apis']);
         // this.cdr.detectChanges();
        })    
    }else{
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
         data =>{
          this.router.navigate(['apis']);
         // this.cdr.detectChanges();
        })
  }
  }
}
