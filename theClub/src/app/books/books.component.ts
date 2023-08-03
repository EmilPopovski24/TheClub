import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
	constructor(private apiService:ApiService) {}

	ngOnInit(): void {
		this.apiService.getBooks().subscribe((books) => {console.log(books)})
	}
}
