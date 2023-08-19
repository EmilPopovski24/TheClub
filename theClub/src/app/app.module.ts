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
import * as firebase from "firebase/compat";
import { AuthActivate } from './core/guards/auth.activate';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AboutComponent,
    AuthenticateComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule, 
    UserModule,
    SharedModule,
    BookModule,
  ],
  providers: [AuthActivate, appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

