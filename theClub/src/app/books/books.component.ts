import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
	// noBooks: boolean = false;
	// booksList: Book[] = [];
	// constructor(private apiService:ApiService) {}

	// ngOnInit(): void {

	// 	this.apiService.getBooks().subscribe({next:(books) => {this.booksList = books;
	// 		console.log(books)
	// 		if(this.booksList.length === 0) {
	// 			this.noBooks = true;
	// 		}	
	// 	}
	// });
	// }
}
