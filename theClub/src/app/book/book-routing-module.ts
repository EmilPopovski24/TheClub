import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksComponent } from '../books/books.component';
import { AuthActivate } from '../core/guards/auth.activate';
const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  }, 
  {
    path: 'add-book',
    component: NewBookComponent,
    canActivate: [AuthActivate],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }