import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  constructor(private apiService:ApiService, private router:Router) {}

  addBook(form:NgForm) {
    const { bookData } = form.value;
    this.apiService.addBook(bookData)
    .subscribe(()=> {
      this.router.navigateByUrl('/catalog')
    })
  }
}
