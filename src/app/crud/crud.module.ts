import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrudRoutingModule,
    RouterModule
  ]
})
export class CrudModule { }