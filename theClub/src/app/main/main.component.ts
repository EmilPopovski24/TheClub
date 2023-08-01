import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe(books => {console.log(books)})
  }
}