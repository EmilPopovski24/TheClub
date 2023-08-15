import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { matchPassValidator } from 'src/app/shared/validators/pass-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Database, set, ref, update} from "@angular/fire/database";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    // form = this.fb.group({
    //     email: ['',[Validators.required, appEmailValidator(EMAIL_DOMAINS), Validators.minLength(4)]],
    //     firstName:['',[Validators.required]],
    //     lastName:['',[Validators.required]],
    //     passGroup: this.fb.group({
    //         password: ['',[Validators.required, Validators.minLength(4)]],
    //         repeatPassword: ['',[Validators.required]],
    //     },
    //     {
    //         validators: [matchPassValidator("password", "repeatPasswrod")],
    //     })
    // });

    // constructor(private fb:FormBuilder, private userService:UserService, private router: Router) {}


    constructor(public database: Database, private router:Router) {}

    register(value:any) {
      set(ref(this.database, 'users/' + value.username), {
        username: value.username,
        email: value.email,
        firstName: value.firstName,
        lastName: value.lastName,
        password: value.password,
        repeatPassword: value.repeatPassword

      });

      alert("user created")
    

  //   register(form: NgForm) {
       
  //     if(form.invalid) {
  //       return;
  //     };
  //     const { email, firstName, lastName, password, repeatPassword } = form.value
  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
        
  //   const user = userCredential.user;
  //       this.router.navigate(["/login"])
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // }); 

      // const { email, firstName, lastName, password, repeatPassword } = form.value;
      //   this.userService.register(email!, firstName!, lastName!, password!, repeatPassword!)
      //   .subscribe(()=> this.router.navigate(['/login']));
        
      // };
      
    }

    // register() : void {
    //     // if(this.form.invalid) {
    //     //     return
    //     // }
        
        // const { email, firstName, lastName, passGroup: { password, repeatPassword}={}, } = this.form.value;
        // this.userService.register(email!, firstName!, lastName!, password!, repeatPassword!)
        // .subscribe(()=> this.router.navigate(['/login']));
        
}
    

