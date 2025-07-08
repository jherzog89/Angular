import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { ListToDos } from './list-to-dos/list-to-dos';


export const routes: Routes = [
    {path:'login', component: Login},
    {path:'welcome/:name', component: Welcome},
    {path:'', component: Login},
    {path:'todos', component: ListToDos},
    {path:'**', component: Error}
];
