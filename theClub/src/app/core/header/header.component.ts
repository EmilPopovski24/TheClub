import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private userService: UserService, private router: Router)  {}

isLoggedIn():boolean{
    if(this.userService.isLogged) {
      return true
    } else {
      return false;
    }
    // return this.userService.isLogged
};



logout() {
  const auth = getAuth();
  signOut(auth).then(() => {
    !this.isLoggedIn
  }).catch((error) => {
// An error happened.
  });
}
}
