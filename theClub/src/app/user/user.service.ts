import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

	user: User|undefined;
	get isLogged():boolean {
		// return true
		return !this.user
	}

	USER_KEY = '[user]';
	constructor(private router:Router, private http:HttpClient) {
		try {
			const lsUser = localStorage.getItem(this.USER_KEY) || "";
			this.user = JSON.parse(lsUser)
		} catch (error) {
			this.user = undefined;
		}
	}
	// constructor(private afs: AngularFireAuth, private router:Router, private http:HttpClient) {
		
	// }
	
	register (email:string, username:string, firstName: string, lastName: string, password:string, repeatPassword:string) {
		return this.http.post('/api/register', {email,username, firstName, lastName, password, repeatPassword})
		// return  this..createUserWithEmailAndPassword( user.email, user.password)
		
	}

	login  (username:string, password:string) {
		
		return this.http.post('/api/login', {username, password})
		 
	}

	
logout() {
	localStorage.removeItem(this.USER_KEY);
	this.user = undefined;
	}
}

