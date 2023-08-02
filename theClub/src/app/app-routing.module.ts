import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/home',
  }, 
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'catalog',
    component: BooksComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
