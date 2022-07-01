import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedeModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { CrudModule } from './crud/crud.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedeModule,
    CrudModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
