import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from "src/app/shared/constants"
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { user } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit{
  emailDomains = EMAIL_DOMAINS;


constructor(private userService:UserService, private router:Router) {
}

  ngOnInit() : void {
    
  }

      login(form:NgForm) {
        
        this.userService.signWithEmailAndPassword(form.value)
        .then((res:any) => {
          this.router.navigateByUrl('home')
          // console.log("Logged In")
          // console.log(form.value)
        }).catch((error:any) => {
          console.log(error)
        })
  }
      

   
}

