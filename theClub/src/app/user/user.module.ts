import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MyBooksComponent } from './my-books/my-books.component';
// import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MyBooksComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UserModule { }
