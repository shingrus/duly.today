import {RouterModule} from '@angular/router';

import {RegisterComponent} from '../register/register.component';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';


export const routing = RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]);
