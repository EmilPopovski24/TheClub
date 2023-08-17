import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class UserService {
	constructor(private afs: AngularFireAuth) {}

	registerWithEmailAndPassword (user: {email:string, password:string}) {
		return this.afs.createUserWithEmailAndPassword(user.email, user.password)
	}

	signWithEmailAndPassword (user: {email:string, password:string}) {
		return this.afs.signInWithEmailAndPassword(user.email, user.password)
	}
}
