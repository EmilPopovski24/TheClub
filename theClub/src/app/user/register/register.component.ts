import { Component } from '@angular/core';
import {  NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private userService:UserService, private router:Router){
  }

  register(form:NgForm) {  
      
    this.userService.registerWithEmailAndPassword(form.value)
    .then((res:any) => {
      this.router.navigateByUrl('login')
      console.log("Registered")
      // console.log(form.value)
    }).catch((error:any) => {
      console.log(error)
    })
}

    // register(form:NgForm) {
    //   const { email, firstName, lastName, password, repeatPassword} = form.value;
    //   // console.log(email)
    // }
}
