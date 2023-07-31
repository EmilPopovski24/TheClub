import { Injectable } from '@angular/core';

interface User {
  email: string;
  firstname: string;
//   phoneNumber: string;
//   password: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User | undefined;
    userKey = '[user]'

  get isLogged():boolean {
    return !!this.user
  }

  constructor() {
    try {
        const lsUser = localStorage.getItem(this.userKey) || "";
        this.user = JSON.parse(lsUser)
    } catch(error) {
        this.user = undefined;
    }
  }

  login(): void {
    this.user = {
        email: "john@abv.bg",
        firstname: "John",
    };

    localStorage.setItem(this.userKey, JSON.stringify(this.user))
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.userKey)
  }
}
