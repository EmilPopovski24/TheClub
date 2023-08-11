import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { matchPassValidator } from 'src/app/shared/validators/pass-validator';

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

    constructor(private fb:FormBuilder) {}


    register() : void {
        console.log(this.form.value)
    }
    
}
