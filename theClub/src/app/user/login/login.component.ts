import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { EMAIL_DOMAINS } from "src/app/shared/constants"
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/shared/shared.module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent{
        emailDomains = EMAIL_DOMAINS;
  

constructor(private userService:UserService, private router:Router) {}

 

      login(form:NgForm) {
        if(form.invalid) {
          return;
        }
        const { username, password } = form.value     
        this.userService.login(username, password).subscribe(()=>{
          this.router.navigate(['/home'])
        })
  }  
}

