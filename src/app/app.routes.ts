import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';


export const routes: Routes = [
    {path:'login', component: Login},
    {path:'welcome', component: Welcome},
    {path:'', component: Login},
    {path:'**', component: Error}
];
