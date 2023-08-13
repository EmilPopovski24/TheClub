import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from "src/app/shared/constants"
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/interfaces/user';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
   emailDomains = EMAIL_DOMAINS;


constructor(private userService:UserService, private router:Router) {}

    login(form: NgForm) {
      
      if(form.invalid) {

        return;
      };
      const { email, password} = form.value;
      const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    this.router.navigate(["/"])
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

      //const { email, password} = form.value;
      // this.userService.login(email, password).subscribe(() => {
      //   this.router.navigate(["/"]);
      // });

      // this.userService.login();
      // this.router.navigate(["/"])
      
    }
}
