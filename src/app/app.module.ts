import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import {AngularFireModule} from '@angular/fire/compat';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCASOH_rVvCtFhn-bzsDHoQj5cWmC0MGVY",
      authDomain: "database-emulator-1537c.firebaseapp.com",
      projectId: "database-emulator-1537c",
      storageBucket: "database-emulator-1537c.firebasestorage.app",
      messagingSenderId: "1014011209799",
      appId: "1:1014011209799:web:1b4c79b99eab7df1eee962",
      measurementId: "G-6FENQ8C5Y8"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent, RootComponent]
})
export class AppModule { }
