import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { MenuComponent } from './menu/menu.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'edit/:id',
        component: EditarComponent
      },
      {
        path: '**',
        redirectTo: 'menu'
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
