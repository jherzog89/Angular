import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';
import { Login } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate{

  constructor(private auth:HardcodedAuthentication,
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
