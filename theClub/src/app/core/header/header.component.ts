import { Component, OnInit } from '@angular/core';
import { getAuth, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// LoginStatus$ = new BehaviorSubject<boolean>(null);
// Email$ : Observable<string>;
constructor(private userService:UserService, private router:Router) {
  console.log(`r - ${this.userService.isLogged}`)
}

get isLoggedIn():boolean {
  return this.userService.isLogged
 
}



get firstName(): string {
  
  return this.userService.user?.firstName || "";
}

get lastName(): string {
  return this.userService.user?.lastName || "";
}


logout():void {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  
  this.router.navigateByUrl("login")
  console.log("loggedout")
  this.userService.logout(); 
  
  console.log(`1- ${this.userService.isLogged}`)
  }).catch((error) => {
    console.log(error)
});
}


}

