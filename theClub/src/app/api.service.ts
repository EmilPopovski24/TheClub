import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from './interfaces/book';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor( private http: HttpClient) { }

    getBooks() {
        const { booksUrl } = environment;
        return this.http.get<Book[]>(`${booksUrl}/books/.json`);
  }
}
