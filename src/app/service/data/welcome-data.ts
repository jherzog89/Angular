import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class WelcomeData {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HellowWorldBean>(`${API_URL}/hello-world-bean`);
  }

executeHelloWorldServiceWithPathVariable(pathName:string){ 

    return this.http.get<HellowWorldBean>(`${API_URL}/hello-world-bean/path-variable/${pathName}`);

}

// createBasicAuthHttpHeader() : HttpHeaders{
//   let username = 'user';
//   let password = 'password';
//   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
//   console.log(username);
//   console.log(password);
//   console.log (basicAuthHeaderString);
//   return new HttpHeaders({
//       Authorization: basicAuthHeaderString
//     });
// }


}
export class HellowWorldBean{
    constructor(public message:string){
  }
}
