import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

// interface User {
//   email: string;
//   firstname: string;
// //   phoneNumber: string;
// //   password: string;
// }

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User | undefined;
  USER_KEY = '[user]'

  get isLogged():boolean {
    return !!this.user
  }

  constructor(private http: HttpClient) {
  //   try {
  //       const lsUser = localStorage.getItem(this.USER_KEY) || '';
  //       this.user = JSON.parse(lsUser)
  //   } catch(error) {
  //       this.user = undefined;
  //   }
    }

  login( email:string, password:string) {
    // this.user = {
    //     email: "emil@gmail.com",
    //     firstName: "Emil",
    //     lastName: "Popovski"
    // };

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))

    // return this.http.post('/api/login', {email, password})
    
    return this.http.post('/api/login', {email, password})
  }

  register(email:string, firstName:string, lastName:string, password:string, repeatPassword: string) {
    
    return this.http.post('/api/register', {email, firstName, lastName,password, repeatPassword})
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
