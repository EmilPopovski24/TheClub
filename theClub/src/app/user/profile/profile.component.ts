import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';

interface Profile {
    username: string,
    email: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
isEditMode: boolean = false;

profileDetails: Profile = {
    email: '',
    username: '',
}

form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, appEmailValidator(EMAIL_DOMAINS)]]
})

    constructor(private fb: FormBuilder,private userService:UserService) {}
    
    ngOnInit(): void {
        const { username, email} = this.userService.user!
        this.profileDetails = {
            username,
            email,
            
        }
        this.form.setValue({
            username,
            email
        })
    }
toggleEditMode():void {
    this.isEditMode = !this.isEditMode

}

saveProfileHandler(form: NgForm) :void {
    if(this.form.invalid) {
        return;
    }
    this.profileDetails = { ...this.form.value } as Profile;
    const { username, email} = this.profileDetails
    this.userService.updateProfile(username!, email!).subscribe(()=> {
    this.toggleEditMode();
});



}


// logout() {
//     console.log(this.userService.user);
// }

// get firstName():string {
//     return this.userService.user?.firstName
// }    

}