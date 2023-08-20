import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
	noBooks: boolean = false;
	booksList: Book[] = [];
	constructor(private apiService:ApiService) {}

	ngOnInit(): void {
		
		this.apiService.getBooks().subscribe({next:(booksList) => {
		this.booksList = Object.values(booksList)}})
		
				
	}
};
		
		
	

