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
    return this.userService.isLogged

};

logout() {
  const auth = getAuth();
  signOut(auth)
  .then(() => {
    return !!this.userService.isLogged
  }).catch((error) => {
// An error happened.
  });
}
}
