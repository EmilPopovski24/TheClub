import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/interfaces/book';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css']
})

export class CurrentBookComponent implements OnInit {
  book: Book | undefined;
  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute, private userService:UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchBook()
  }

  fetchBook() :void {
    const id = this.activatedRoute.snapshot.params['bookId'];
    this.apiService.getBook(id).subscribe((book) => {
      this.book = book;
    })
  }

}
