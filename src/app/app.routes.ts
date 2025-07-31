import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { ListToDos } from './list-to-dos/list-to-dos';
import { Logout } from './logout/logout';
import { RouteGuard } from './service/route-guard';


export const routes: Routes = [
    {path:'login', component: Login}, 
    {path:'welcome/:name', component: Welcome, canActivate:[RouteGuard]},
    {path:'', component: Login},
    {path:'apis', component: ListToDos, canActivate:[RouteGuard]},
    {path:'logout', component: Logout, canActivate:[RouteGuard]},
    {path:'**', component: Error}
];
