import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HellowWorldBean, WelcomeData } from '../service/data/welcome-data';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Welcome implements OnInit{
  message : string = 'Some welcome message'
  welcomeMessageFromService = signal('');
  name : string = '';
  //inject dependency: ActivatedRouted
  constructor(private route:ActivatedRoute, private service:WelcomeData){

  }

  getWelcomeMessage(){
  this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  );
  }

  getWelcomeMessageWithParameter(){
  this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  );
  }

  handleSuccessfulResponse(response: HellowWorldBean){
    this.welcomeMessageFromService.set(response.message);
    //this.cdRef.detectChanges();
  }

  handleErrorResponse(error:any){
    this.welcomeMessageFromService = error.message;
  }

  ngOnInit(){
    this.name = this.route.snapshot.params['name'];
  }

}
