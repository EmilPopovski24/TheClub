import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksComponent } from '../books/books.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { CurrentBookComponent } from './current-book/current-book.component';


const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BooksComponent
      },
      {
        path: ':bookId',
        component: CurrentBookComponent,
        canActivate: [AuthActivate],
      }
    ]
  }, 
  {
    path: 'add-book',
    component: NewBookComponent,
    canActivate: [AuthActivate],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }