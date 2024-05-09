import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './new-book/new-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { BookRoutingModule } from './book-routing-module';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    NewBookComponent,
    CurrentBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule, 
    FormsModule
  ]
})
export class BookModule { }
