import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { matchPassValidator } from 'src/app/shared/validators/pass-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form = this.fb.group({
        email: ['',[Validators.required, appEmailValidator(EMAIL_DOMAINS), Validators.minLength(4)]],
        firstName:['',[Validators.required]],
        lastName:['',[Validators.required]],
        passGroup: this.fb.group({
            password: ['',[Validators.required, Validators.minLength(4)]],
            repeatPassword: ['',[Validators.required]],
        },
        {
            validators: [matchPassValidator("password", "repeatPasswrod")],
        })
    });

    constructor(private fb:FormBuilder, private userService:UserService, private router: Router) {}


    register() : void {
        // if(this.form.invalid) {
        //     return
        // }
        
        const { email, firstName, lastName, passGroup: { password, repeatPassword}={} } = this.form.value;
        this.userService.register(email!, firstName!, lastName!, password!, repeatPassword!).subscribe(()=> this.router.navigate(['/login']));
        
    }
    
}
