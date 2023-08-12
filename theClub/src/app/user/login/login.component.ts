import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from "src/app/shared/constants"
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
   emailDomains = EMAIL_DOMAINS;


constructor(private userService:UserService, private router:Router) {}

    login(form: NgForm) :void {
      
      if(form.invalid) {
        return;
      };

      const { email, password} = form.value;
      this.userService.login(email, password).subscribe(() => {
        this.router.navigate(["/"]);
      });
      
    }
}
