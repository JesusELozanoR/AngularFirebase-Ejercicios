import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { environment } from '../../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    ListadoComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ]
})
export class UsuarioModule { }
