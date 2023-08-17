import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";





@Injectable({
  providedIn: 'root'
})

export class UserService {
	get isLogged():boolean {
		return null
	}

	constructor(private afs: AngularFireAuth, private router:Router) {}
	
	registerWithEmailAndPassword (user: {email:string, password:string}) {
		return this.afs.createUserWithEmailAndPassword(user.email, user.password)
	}

	signWithEmailAndPassword (user: {email:string, password:string}) {
		return this.afs.signInWithEmailAndPassword(user.email, user.password)
	}

	logout() {
		const auth = getAuth();
		signOut(auth).then(() => {
  		// Sign-out successful.
		localStorage.removeItem('user');
  		this.router.navigateByUrl("login")
		console.log("loggedout")
		
		}).catch((error) => {
  		// An error happened.
	});

	
	}
}
