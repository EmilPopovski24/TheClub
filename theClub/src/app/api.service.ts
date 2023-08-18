import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from './interfaces/book';
import { User } from './interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor( private http: HttpClient) { }

    getBooks() {
        const booksUrl = environment.booksUrl;
        return this.http.get<Book[]>(`${booksUrl}/.json`);
  }

  }

//   {
//     "rules": {
//       ".read": "now < 1694638800000",  // 2023-9-14
//       ".write": "now < 1694638800000",  // 2023-9-14
//     }
//   }