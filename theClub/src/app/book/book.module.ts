import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './new-book/new-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';



@NgModule({
  declarations: [
    NewBookComponent,
    CurrentBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
