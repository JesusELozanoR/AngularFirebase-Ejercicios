import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren:()=> import('./usuario/usuario.module').then(m=>m.UsuarioModule) 
  },{
    path: 'ejercicio',
    loadChildren: () => import('./ejercicio/ejercicio.module').then( m => m.EjercicioModule ) ,
  },{
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudModule ) ,
  },{
    path: '**',
    redirectTo: 'usuario'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
