import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthentication } from '../basic-authentication';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuth implements HttpInterceptor{

  constructor(private basicAuth:BasicAuthentication) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.basicAuth.getAuthenticatedtoken()){
        req = req.clone({setHeaders:{Authorization : this.createBasicAuthHttpHeader()}})
    }
      return next.handle(req);
   }

  createBasicAuthHttpHeader(){
  let basicAuthString = this.basicAuth.getAuthenticatedtoken();
  if(basicAuthString === null)
      return '';
  else
    return basicAuthString;
 }
}
