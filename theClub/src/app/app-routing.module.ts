import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './notfound/notfound.component';
// import { AuthActivate } from './core/guards/auth.activate';

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
    path: 'about',
    component: AboutComponent,
  },
  {
    path: "error",
    component: ErrorComponent,
  },
  {
    path: 'na',
    component: NotFoundComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
