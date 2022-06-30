import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenComponent } from './imagen/imagen.component';
import { FuncionComponent } from './funcion/funcion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'imagen',
        component: ImagenComponent,
      },
      {
        path: 'funcion',
        component: FuncionComponent,
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjercicioRoutingModule { }
