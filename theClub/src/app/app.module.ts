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
import { AngularFireModule } from "@angular/fire/compat";;

// import { appInterceptorProvider } from './app.interceptor';
import { AboutComponent } from './about/about.component';
import { FirebaseApp, } from 'firebase/app';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkuzVvukLcBO6iCmo79r22LROzcgSf5i4",
  authDomain: "books-9e87c.firebaseapp.com",
  databaseURL: "https://books-9e87c-default-rtdb.firebaseio.com",
  projectId: "books-9e87c",
  storageBucket: "books-9e87c.appspot.com",
  messagingSenderId: "1035705800937",
  appId: "1:1035705800937:web:85727a717d2d89b388b878",
  measurementId: "G-89R9WRKSSZ"
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);





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
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function getFirestore(app: FirebaseApp) {
  throw new Error('Function not implemented.');
}

