import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private userService:UserService, private router:Router) {}

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
  this.userService.logout().subscribe(() => {
    this.router.navigate(['/login'])
  })
}


}

