import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WelcomeData {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HellowWorldBean>('http://localhost:8080/hello-world-bean');
  }

executeHelloWorldServiceWithPathVariable(pathName:string){ //hello-world-bean/path-variable
      return this.http.get<HellowWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${pathName}`);

}
}
export class HellowWorldBean{
    constructor(public message:string){
  }
}
