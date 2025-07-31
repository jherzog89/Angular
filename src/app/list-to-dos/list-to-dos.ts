import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
  constructor(private router:Router, private cdr: ChangeDetectorRef, private revStrSvc:ReverseStringService){
    this.maniString = new ManipulatedString(null,'','','','',new Date());
  }

  message:string = '';

  maniString:ManipulatedString;
  maniStringList:ManipulatedString[]=[];

  ngOnInit(){
    //this.refreshTodos();
    this.refreshManipulatedStrings();
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
