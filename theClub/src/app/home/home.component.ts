import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { getAuth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) {}
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
