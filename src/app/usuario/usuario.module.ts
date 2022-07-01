import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { environment } from '../../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { MenuComponent } from '../crud/menu/menu.component';
import { EditarComponent } from '../crud/editar/editar.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    EditarComponent,
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
