import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // constructor(private apiService:ApiService) {}

  // ngOnInit(): void {
  //   this.apiService.getBooks().subscribe(books => {console.log(books)})
  // }
}
