import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})

export class UserService {

	user: User|undefined;
	get isLogged():boolean {
		// return true
		return !!this.user
	}

	USER_KEY = '[user]';

	constructor(private afs: AngularFireAuth, private router:Router) {
		try {
			const lsUser = localStorage.getItem(this.USER_KEY) || "";
			this.user = JSON.parse(lsUser)
		} catch (error) {
			this.user = undefined;
		}
	}
	
	registerWithEmailAndPassword (user: {email:string, password:string}) {
		
		return this.afs.createUserWithEmailAndPassword(user.email, user.password)
	}

	signWithEmailAndPassword (user: {email:string, password:string}) {
		
		return this.afs.signInWithEmailAndPassword(user.email, user.password)
	}

	logout():void {
		const auth = getAuth();
		signOut(auth).then(() => {
  		// Sign-out successful.
		this.user = undefined;
		localStorage.removeItem(this.USER_KEY);
  		this.router.navigateByUrl("login")
		console.log("loggedout")
		
		}).catch((error) => {
  		// An error happened.
	});
}
}

