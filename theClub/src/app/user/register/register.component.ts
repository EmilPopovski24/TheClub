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
    if(form.invalid) {
      return;
    }
      const { email, username, firstName, lastName, password, repeatPassword} = form.value;
    this.userService.register(email!, username!, firstName!, lastName!, password!, repeatPassword!).subscribe(()=>{
      this.router.navigate(['/'])
    })

  }
}
