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
  

  newBookSubmitHandler(form: NgForm):void {
    if(form.invalid) {
      return;
    }
    const { name, author, genre, year, imageUrl, description} = form.value;
    
    this.apiService.addBook(name, author, genre, year, imageUrl, description ).subscribe(() => {
      
      this.router.navigate(['/catalog'])
      
    });
  }
  
}
