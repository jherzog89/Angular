import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Login } from '../login/login';
import { BasicAuthentication } from './basic-authentication';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate{

  constructor(private auth:BasicAuthentication,
    private router:Router
  ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.auth.isUserLoggedIn()){
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }


}
