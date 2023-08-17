import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from "@angular/fire/compat/auth"
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule, 
    UserModule,
    BookModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

