import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { MyBooksComponent } from './my-books/my-books.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, 
  }, 
  {
    path: 'register',
    component: RegisterComponent,
  }, 
  {
    path: 'profile',
    children:[
      {
      path:'',
      pathMatch: 'full',
      component: ProfileComponent,
      canActivate: [AuthActivate]
      },
      {
      path:'my-books',
      component: MyBooksComponent,
      canActivate: [AuthActivate]
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }