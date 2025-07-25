import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';
import { ReverseStringService } from '../service/data/reverse-string-service';
import { FormsModule } from '@angular/forms';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){
  }
}

export class ManipulatedString{
  constructor(
    public id:number | null,
    public apiUsed: string,
    public microserviceId: string,
    public originalString: string,
    public manipulatedString: string,
    public timeCompleted: Date
  ){}
}

/*    Long id;
    String apiUsed;
    String microserviceId;
    String originalString;
    String manipulatedString;
    Date timeCompleted;*/

@Component({
  selector: 'app-list-to-dos',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-to-dos.html',
  styleUrl: './list-to-dos.css'
})
export class ListToDos {
  constructor(private router:Router, private todoService:TodoData, private cdr: ChangeDetectorRef, private revStrSvc:ReverseStringService){
    this.maniString = new ManipulatedString(null,'','','','',new Date());
  }

  todos: Todo[] = [];
  message:string = '';

  maniString:ManipulatedString;
  maniStringList:ManipulatedString[]=[];

  ngOnInit(){
    //this.refreshTodos();
    this.refreshManipulatedStrings();
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
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
      this.router.navigate(['apis', id]);
  }
  addTodo(){
    this.router.navigate(['apis', -1]);
  }
  reverseOneString(){
    this.revStrSvc.sendStringReversal(this.maniString).subscribe(
         data =>{
          //this.refreshManipulatedStrings()
          this.maniStringList=data;
          this.cdr.detectChanges();
        })   
  }

  refreshManipulatedStrings(){
    this.revStrSvc.refreshManipulatedStrings().subscribe(
      response => {
        this.maniStringList=response;
        this.cdr.detectChanges();
      }
    )
  }

    deleteManipulatedStrings(){
    this.revStrSvc.deleteManipulatedStrings().subscribe(
      response => {
        this.maniStringList=response;
        this.cdr.detectChanges();

      }
    )
  }

}
