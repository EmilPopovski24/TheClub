import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
// LoginStatus$ = new BehaviorSubject<boolean>(null);
// Email$ : Observable<string>;

constructor(private userService: UserService, private router: Router)  {}
isLoggedIn = false;
ngOnInit():void {
  localStorage.getItem('user')
  if('user') {
    this.isLoggedIn = true;
  } else {
    this.isLoggedIn = false;
  }
}

}
