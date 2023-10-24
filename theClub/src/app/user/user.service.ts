import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService implements OnDestroy {
	private user$$ = new BehaviorSubject<User | undefined>(undefined)
	public user$ = this.user$$.asObservable();
	user: User|undefined;
	get isLogged():boolean {
		// return true
		return !!this.user
	}
	subscription: Subscription
	USER_KEY = '[user]';

	constructor(private router:Router, private http:HttpClient) {
		
		this.subscription = this.user$.subscribe(user => {
			this.user = user
		})
	}
	
	register(email:string, username:string, firstName: string, lastName: string, password:string, repeatPassword:string) {
		return this.http.post<User>('/api/register', {email, username, firstName, lastName, password, repeatPassword})
		.pipe(tap((user) => this.user$$.next(user)))
	}

	login(username:string, password:string) {	
		return this.http.post<User>('/api/login', {username, password})
		.pipe(tap((user) => this.user$$.next(user))); 
	}

	
	getProfile() {
		return this.http.get<User>('/api/users/profile')
		.pipe(tap((user) => this.user$$.next(user)));
	}

	updateProfile(username:string, email:string) {
			return this.http.put<User>('/api/users/profile', {username, email})
			.pipe(tap((user) => this.user$$.next(user)));
	}

	logout() {
		return this.http.post<User>('/api/logout', {})
		.pipe(tap(()=> this.user$$.next(undefined)))
	}

	ngOnDestroy() :void {
		this.subscription.unsubscribe()
	}
}

