import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjercicioRoutingModule } from './ejercicio-routing.module';
import { ImagenComponent } from './imagen/imagen.component';
import { FuncionComponent } from './funcion/funcion.component';


@NgModule({
  declarations: [
    ImagenComponent,
    FuncionComponent
  ],
  imports: [
    CommonModule,
    EjercicioRoutingModule
  ]
})
export class EjercicioModule { }
